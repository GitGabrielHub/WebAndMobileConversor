import React, { useCallback, useState, useEffect } from "react";
import Card from "../../components/Card";
import DropDown from "../../components/DropDown";
import * as s from "./style";
import api from "../../services/FinanceAPI";
import { Text } from "react-native";
import BrasilBandeira from "../../assets/bandeira-brasil.jpg";

function HomePage() {
  const [allCurrencies, setAllCurrencies] = useState(null);
  const [convertedValue, setConvertedValue] = useState(null);
  const [valueSelected, setValueSelected] = useState(null);
  const [currentBRLValue, setCurrentBRLValue] = useState("0.00");

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
    <s.Body>
      <s.Text fontSize="16px">
        1 {(valueSelected && valueSelected.name) || "???"} Hoje
      </s.Text>
      <s.Text fontSize="30px">
        {(convertedValue && convertedValue.high) || "0.00"} Reais
      </s.Text>
      <s.Box>
        <Card>
          <s.Tile>
            <s.Icon source={BrasilBandeira} />
            <Text>BRL Real brasileiro</Text>
          </s.Tile>
          <s.Input
            value={currentBRLValue.toString()}
            onChangeText={(text) => setCurrentBRLValue(text)}
            keyboardType="numeric"
          />
        </Card>
        <Card>
          <DropDown
            data={allCurrencies || []}
            callback={(e) => setValueSelected(e)}
          />
          <s.ValueText>
            {(convertedValue && convertedValue.convertedValue) || "0.00"}
          </s.ValueText>
        </Card>
      </s.Box>
    </s.Body>
  );
}

export default HomePage;
