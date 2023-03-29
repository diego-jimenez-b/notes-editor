import styled from "styled-components";

export const InlineInput = styled.input<{ maxWidth?: string }>`
  background-color: transparent;
  border: 1px solid black;
  border: none;
  height: 1.75em;
  width: 20px;
  max-width: ${({ maxWidth = "100%" }) => maxWidth};
  padding: 0 0.2em;
  font-size: 1em;
  font-weight: inherit;

  :focus {
    outline: none;
  }
`;

export const TextWrapper = styled.span`
  box-sizing: border-box;
  padding: 0 0.2em;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
`;
