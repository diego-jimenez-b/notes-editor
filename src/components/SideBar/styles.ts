import styled, { css } from "styled-components";
import { $MQ } from "../../theme";

export const Container = styled.div<{ visible?: boolean }>`
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  background-color: ${({ theme }) => theme.color.NEUTRAL[100]};
  flex-shrink: 0;
  width: 350px;
  transition: 0.4s;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;

  ${({ visible }) =>
    !visible &&
    css`
      transform: translateX(-100%);
      box-shadow: none;
    `}

  ${$MQ.md} {
    box-shadow: none;
    position: static;
    transform: unset;
  }
`;
