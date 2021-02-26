import React, { useEffect, useState, useCallback } from "react";
import Tile from "../../components/DropDown";
import { Body, Container, Title, Box, ValueText, Input } from "./style";
import Brasil from "../../assets/bandeira-brasil.jpg";
import api from "../../services/FinanceAPI";

function HomePage() {
  const [convertedValue, setConvertedValue] = useState(null);
  const [valueSelected, setValueSelected] = useState(null);
  const [currentBRLValue, setCurrentBRLValue] = useState("0.00");
  const [allCurrencies, setAllCurrencies] = useState(null);

  const loadData = useCallback(async function loadData() {
    try {
      const response = await api.get("/allCurrencies");

      if (response) {
        setAllCurrencies(response.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);
  const convert = useCallback(async function convert(value, currentBRL) {
    try {
      const response = await api.get(
        `/convertTo?value=${currentBRL}&&code=${value.code}`
      );

      if (response) {
        setConvertedValue(response.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);
  useEffect(() => {
    loadData();
  }, [loadData]);
  useEffect(() => {
    if (valueSelected) {
      const delayDebounceFn = setTimeout(() => {
        convert(valueSelected, currentBRLValue);
      }, 500);
      return () => clearTimeout(delayDebounceFn);
    }
  }, [valueSelected, currentBRLValue, convert]);
  return (
    <Body>
      <Container direction="column">
        <Title fontSize="16px">
          1 {(valueSelected && valueSelected.name) || "???"} hoje
        </Title>
        <Title fontSize="38px">
          {(convertedValue && convertedValue.high) || "0.00"} Reais
        </Title>
      </Container>
      <Container width="100%">
        <Box>
          <Tile src={Brasil} text={"BRL Real brasileiro"} />
          <Input
            value={currentBRLValue}
            onChange={(e) => setCurrentBRLValue(e.target.value)}
          />
        </Box>
        <Box>
          <Tile
            items={allCurrencies}
            callback={(e) => {
              setValueSelected(e);
            }}
          />
          <ValueText>
            {(convertedValue && convertedValue.convertedValue) || "0.00"}
          </ValueText>
        </Box>
      </Container>
    </Body>
  );
}

export default HomePage;
