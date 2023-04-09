import styled from "styled-components";
import Select from "react-select";

export const PieChartContainer = styled.div`
  flex: 2;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  background-color: #ffffff;
`;

export const PieChartTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: gray;
`;

export const PieChartTitle = styled.div`
  padding: 8px 5px 5px 5px;
  font-size: 15px;
  font-weight: 500;
  color: gray;
`;

export const StyledPieSelect = styled(Select)`
  margin: 2vh 2vh 0 0;
  min-width: 18vh;
  max-width:20vh;
  height: 8vh;
  font-size: 13px;
`;
