import styled from "styled-components";
import { BaseButton } from "../../ui/button";

export const Container = styled.div`
  margin: 16px 12px;
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const SelectedFolder = styled.div`
  background-color: ${({ theme }) => theme.color.NEUTRAL[200]};
  margin-right: 5px;
  min-width: 140px;
  min-height: 40px;
  display: flex;
  position: relative;
  font-size: 14px;
  font-weight: 500;
  transition: 0.3s;
  cursor: pointer;

  & > :hover {
    background-color: ${({ theme }) => theme.color.NEUTRAL[300]};
  }
`;

export const FolderName = styled.div`
  flex-grow: 1;
  display: grid;
  place-content: center;
  padding: 3px 12px;

  &[aria-disabled="true"] {
    color: ${({ theme }) => theme.color.NEUTRAL[500]};

    :hover {
      background-color: ${({ theme }) => theme.color.NEUTRAL[200]};
    }
    &,
    span {
      cursor: not-allowed;
    }
  }
`;

export const SelectIndicator = styled(BaseButton)`
  width: 26px;
  border-right: 1px solid ${({ theme }) => theme.color.NEUTRAL[400]};
  display: block;
  align-self: stretch;
  flex-shrink: 0;
  font-size: 17px;

  svg {
    vertical-align: middle;
  }
`;

export const Action = styled(BaseButton)`
  background-color: ${({ theme }) => theme.color.PRIMARY[900]};
  color: white;
  border-radius: 3px;
  width: 24px;
  height: 24px;
  flex-shrink: 0;

  svg {
    vertical-align: middle;
  }
  :hover:not(:disabled) {
    background-color: ${({ theme }) => theme.color.PRIMARY[700]};
  }
  :disabled {
    opacity: 0.5;
  }
`;
