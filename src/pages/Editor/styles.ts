import styled, { css } from "styled-components";

export const Container = styled.div<{ toolbar?: boolean }>`
  flex-grow: 1;
  font-size: 14px;
  height: 100%;
  overflow: hidden;

  ${({ toolbar }) =>
    !toolbar &&
    css`
      .ck-editor__top {
        height: 0 !important;
        opacity: 0;
      }
    `}
`;
