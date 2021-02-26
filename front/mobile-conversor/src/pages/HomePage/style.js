import styled from "styled-components/native";

export const Body = styled.View`
  background-color: #1586f0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: ${(props) => props.fontSize};
  letter-spacing: 1.5px;
`;

export const Box = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 20px 0px;
`;

export const Tile = styled.View`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  padding: 0 5px 19px 5px;
  overflow: hidden;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 25px;
  height: 25px;
  border-radius: 30px;
  margin-right: 5px;
`;

export const Input = styled.TextInput`
  position: absolute;
  bottom: 10px;
  width: 90%;
  padding: 10px 0 0 0px;
  align-self: center;
  border-bottom-width: 1px;
  border-bottom-color: gray;
`;

export const ValueText = styled.Text`
  font-size: 20px;
  margin-left: 5px;
  color: gray;
`;
