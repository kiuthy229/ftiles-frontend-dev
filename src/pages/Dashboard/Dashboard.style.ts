import styled from "styled-components";

export const Home = styled.div`
  display: flex;
`;
export const HomeContainer = styled.div`
  flex: 6;
  height: auto;
  max-height: 100vh;
  overflow: auto;
  overscroll-behavior: auto none;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 70%;
`;
export const WidgetsContainer = styled.div`
  margin: 10vh 0 0 0;
  display: flex;
  padding: 20px;
  gap: 20px;
`;
export const ChartsContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
`;
export const BottomContainer = styled.div`
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 20px;
  margin: 20px;
`;
export const BottomTitle = styled.div`
  font-weight: 500;
  color: gray;
  margin-bottom: 15px;
`;
export const ActivitiesContainer = styled.div`
  flex: end;
  border-left: 0.5px solid rgb(230, 227, 227);
  width: 17%;
  min-height: 100vh;
  background-color: white;
  height: auto;
  max-height: 100vh;
  overflow: auto;
  overscroll-behavior: auto none;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
