import styled from "styled-components/native";

export const IconButton = styled.View`
  position: absolute;
  right: 10px;
  transform: rotate(${(props) => (props.open ? "-180deg" : "0deg")});
  display: flex;
  flex-wrap: nowrap;
  top: 7px;
`;
