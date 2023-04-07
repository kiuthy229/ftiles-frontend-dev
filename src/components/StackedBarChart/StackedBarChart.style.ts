import styled from "styled-components";
import Select from "react-select";

export const StackedBarChartContainer = styled.div`
  flex: 4;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 10px;
  color: gray;
`;

export const StackedBarChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StackedBarChartTitle = styled.div`
  margin-bottom: 10px;
  font-weight: 500;
`;

export const StyledSelect = styled(Select)`
  margin: 0 0 0 5vh;
  max-width: 25vh;
  height: 8vh;
  font-size: 13px;
`;
