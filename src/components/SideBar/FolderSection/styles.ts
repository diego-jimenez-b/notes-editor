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
`;

export const SelectIndicator = styled(BaseButton)`
  width: 26px;
  border-right: 1px solid ${({ theme }) => theme.color.NEUTRAL[400]};
  display: block;
  align-self: stretch;
  font-size: 17px;

  svg {
    vertical-align: middle;
  }
`;

export const Action = styled(BaseButton)`
  background-color: ${({ theme }) => theme.color.PRIMARY[900]};
  border-radius: 3px;
  width: 24px;
  height: 24px;
  color: white;

  svg {
    vertical-align: middle;
  }
  :hover {
    background-color: ${({ theme }) => theme.color.PRIMARY[700]};
  }
`;
