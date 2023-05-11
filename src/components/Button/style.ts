import styled from "styled-components";
import { ButtonProps } from ".";

export const Container = styled.div`
  position: absolute;
  width: 401px;
  height: 60px;
  left: 760px;
  top: 522px;

  background: #0385fd;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const Button = styled.button<ButtonProps>``;
