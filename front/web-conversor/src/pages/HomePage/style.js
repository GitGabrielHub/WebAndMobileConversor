import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  min-height: 500px;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  margin: 10px 0;
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 20px;
  height: 100px;
  margin: 10px 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Title = styled.h3`
  color: #fff;
  font-size: ${(props) => props.fontSize};
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const ValueText = styled.span`
  color: #000;
  font-size: 40px;
  text-align: start;
  height: 100%;
  position: absolute;
  top: 60px;
  overflow: hidden;
  width: 95%;
  text-overflow: ellipsis;
`;

export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid gray;
  outline: none;
  font-size: 26px;
  width: 100%;
  margin-top: 55px;
`;
