import styled from "styled-components";
import { Bar } from "react-chartjs-2";

export const HorizontalBarChartContainer = styled.div`
  max-height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 4;
  background-color: #ffffff;
`;

export const HorizontalBarChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HorizontalBarChartTitle = styled.div`
  font-weight: 500;
`;

export const StyledHorizontalBarChart = styled(Bar)`
  max-width: 100%;
`;
