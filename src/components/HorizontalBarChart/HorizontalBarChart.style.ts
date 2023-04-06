import styled from "styled-components";
import { Bar } from "react-chartjs-2";

export const HorizontalBarChartContainer = styled.div`
  max-height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;
  background-color: #f7f9fb;
  border-radius: 8px;
`;

export const StyledHorizontalBarChart = styled(Bar)`
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-size: 18px;
  font-weight: 500;
`;
