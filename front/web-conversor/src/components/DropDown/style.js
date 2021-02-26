import styled from "styled-components";

export const Tile = styled.div`
  position: absolute;
  height: calc(${(props) => props.height} * 45px);
  width: 292px;
  padding: 0 5px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 2;
  background-color: white;
  cursor: pointer;
  transition: 0.3s;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit: cover;
  margin-right: 10px;
`;

export const Line = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0px;
  z-index: 2;
`;

export const BoxItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: calc(${(props) => props.height} * 45px);
  overflow: auto;
  transition: 0.3s;
`;

export const FullScreen = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  cursor: auto;
`;

export const IconButton = styled.div`
  position: absolute;
  right: 10px;
  transform: rotate(${(props) => (props.open ? "-180deg" : "0deg")});
  transition: 0.3s;
  display: flex;
  flex-wrap: nowrap;
`;
