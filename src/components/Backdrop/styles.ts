import styled from "styled-components";
import { IStyledProps } from "./types";

export const Backdrop = styled.div<IStyledProps>`
  background-color: black;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  opacity: ${({ opacity }) => opacity ?? 0.5};
`;
