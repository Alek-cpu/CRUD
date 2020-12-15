import styled from "styled-components";

export const CategoryGrid = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
`;

export const SettingSector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background: green;
`;

export const DemoSector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: white;
`;

export const SettingSectorItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px 15px;
  cursor: pointer;
`;

export const SpanRotate = styled.span`
  transform: rotate(90deg);
  color: deepskyblue;
`;