import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.NEUTRAL[300]};
  min-height: 40px;
  padding: 3px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 14px;

  svg {
    transition: transform 0.3s;
    font-size: 20px;
    cursor: pointer;
    flex-shrink: 0;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
`;
