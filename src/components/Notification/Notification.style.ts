import styled from "styled-components";

export const ActivityHeaderContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ActivityContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ActivityItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  padding: 3px 0 4px 0;
  &:hover {
    background-color: #ece8ff;
  }
`;

export const ActivityImage = styled.div`
  margin: 0 0 0 5px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const ActivityContent = styled.p`
  padding: 0 0 0 10px;
  margin: 0;
`;
export const MessageText = styled.span`
  margin: 0 2px 0 2px;
`;
export const MessageBoldText = styled.span`
  margin: 0 2px 0 2px;
  font-weight: 600;
`;
export const MessageTime = styled.p`
  margin: 0;
  padding: 0 0 0 10px;
  font-style: normal;
  font-size: 12px;
  font-weight: 400;
  color: #8c8c8c;
`;
