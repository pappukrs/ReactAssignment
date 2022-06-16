import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 20%;
  margin-right: 30%;
  margin-top: 3%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Button = styled.div`
  margin: 3px;
  padding: 5px;
  text-align: center;
  cursor:pointer;
  border: ${(prop) => {
    return prop.bord === "1 px solid blue"
      ? "1 px solid blue"
      : prop.bord === "dashed"
      ? "dashed"
      : prop.bord === "inset"
      ? "inset"
      : "none";
  }};
  color: black;
  font-size: 20px;
  color: ${(prop) => {
    return prop.col === "white"
      ? "white"
      : prop.col === "green"
      ? "green"
      : "black";
  }};

  background-color: ${(prop) => {
    return prop.BGC === "blue" ? "blue" : "white";
  }};
`;

export default function ButtonsType() {
  return (
    <>
      <Wrapper>
        <Button BGC="blue" col="white" bord="1 px solid blue">
          Primary Button
        </Button>
        <Button bord="inset" >Default Button</Button>
        <Button bord="dashed">Dashed Button</Button>

        <Button>Text Button</Button>
        <Button col="green">Link Button</Button>
      </Wrapper>
    </>
  );
}
