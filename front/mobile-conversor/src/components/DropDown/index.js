import React, { useEffect, useState } from "react";
import { View } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import Icon from "react-native-vector-icons/Feather";
import * as s from "./style";

function DropDown({ data, callback }) {
  const [defaultData, setDefaultData] = useState(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (data) {
      setDefaultData(data[0]);
    }
  }, [data]);
  useEffect(() => {
    if (defaultData) {
      callback(defaultData);
    }
  }, [defaultData, callback]);
  return (
    data && (
      <View>
        <s.IconButton open={open}>
          <Icon name="chevron-down" size={20} />
        </s.IconButton>
        <ModalDropdown
          options={
            (data &&
              defaultData &&
              data
                .filter((value) => value.name !== defaultData.name)
                .map((value) => value.code + " " + value.name)) ||
            []
          }
          // eslint-disable-next-line react-native/no-inline-styles
          dropdownStyle={{ width: "47%", height: 120, marginTop: -10 }}
          defaultValue={
            defaultData && defaultData.code + " " + defaultData.name
          }
          // eslint-disable-next-line react-native/no-inline-styles
          textStyle={{
            height: 40,
            paddingLeft: 8,
            paddingTop: 7,
            width: "100%",
          }}
          renderButtonText={(e) => {
            const v = e.split(" ");
            setDefaultData({
              code: v[0],
              name: v.slice(1, v.length).join(" "),
            });
          }}
          onDropdownWillShow={() => setOpen(true)}
          onDropdownWillHide={() => setOpen(false)}
        />
      </View>
    )
  );
}

export default DropDown;
