import React, { useEffect, useState } from "react";
import { Tile, Icon, Line, BoxItems, FullScreen, IconButton } from "./style";
import { AiOutlineDown } from "react-icons/ai";

function DropDown({ src, text, items, callback }) {
  const [height, setHeight] = useState(
    items && items.length > 0 ? (items.length > 3 ? 6 : items.length) : 1
  );
  const [open, setIsOpen] = useState(false);
  const [isCurrentValue, setIsCurrentValue] = useState(items && items[0]);

  useEffect(() => {
    if (items) {
      setIsCurrentValue(items[0]);
      setHeight(
        items && items.length > 0 ? (items.length > 3 ? 6 : items.length) : 1
      );
    }
  }, [items]);

  function setNewValue(value) {
    setIsCurrentValue(value);
    setIsOpen(false);
  }

  useEffect(() => {
    if (isCurrentValue) {
      callback(isCurrentValue);
    }
  }, [isCurrentValue, callback]);

  return (
    <Tile height={open ? height : 1}>
      {open && <FullScreen onClick={() => setIsOpen(false)} />}
      <Line onClick={() => setIsOpen(!open)}>
        {src && <Icon src={src} />}{" "}
        {(isCurrentValue && isCurrentValue.code + " " + isCurrentValue.name) ||
          text}
        {items && (
          <IconButton open={open}>
            <AiOutlineDown />
          </IconButton>
        )}
      </Line>
      <BoxItems height={open ? height - 1 : 0}>
        {items &&
          isCurrentValue &&
          items.map((value, index) => {
            return (
              value.code !== isCurrentValue.code && (
                <Line
                  key={index}
                  onClick={() => setNewValue(value)}
                >{`${value.code} ${value.name}`}</Line>
              )
            );
          })}
      </BoxItems>
    </Tile>
  );
}

export default DropDown;
