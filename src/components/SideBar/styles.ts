import styled, { css } from "styled-components";
import { $MQ } from "../../theme";

export const Container = styled.div<{ visible?: boolean }>`
  box-shadow: 0px 0px 24px 4px rgba(0, 14, 51, 0.2);
  background-color: #f8f9fa;
  width: 350px;
  transition: 0.5s;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;

  ${({ visible }) =>
    !visible &&
    css`
      transform: translateX(-100%);
    `}

  ${$MQ.md} {
    box-shadow: none;
    position: static;
    transform: unset;
  }
`;
