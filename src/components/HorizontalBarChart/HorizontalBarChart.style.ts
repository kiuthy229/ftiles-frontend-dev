import styled from "styled-components";
import { Bar } from "react-chartjs-2";

export const HorizontalBarChartContainer = styled.div`
  max-height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 8px;
  flex: 4;
`;

export const HorizontalBarChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HorizontalBarChartTitle = styled.div`
  margin-bottom: 10px;
  font-weight: 500;
`;

export const StyledHorizontalBarChart = styled(Bar)`
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-size: 18px;
  font-weight: 500;
`;
