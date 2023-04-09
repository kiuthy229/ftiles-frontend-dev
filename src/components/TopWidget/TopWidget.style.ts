import styled from "styled-components";

export const WidgetContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 10px;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  border-radius: 10px;
  height: 100px;
  background-color: #E1FFEE;
`;

export const WidgetLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WidgetRightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const WidgetHeader = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: rgb(160, 160, 160);
`;

export const WidgetAmount = styled.span`
  font-size: 28px;
  font-weight: 300;
`;
export const WidgetLink = styled.span`
  width: max-content;
  font-size: 12px;
  border-bottom: 1px solid gray;
`;

export const WidgetPercentage = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
`;
