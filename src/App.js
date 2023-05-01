import styled, { useTheme } from "styled-components";
import Header from "./components/Header";
import Button from "./components/Button";


function App() {

const theme = useTheme();


  return (
    <AppStyled theme={theme}>
      <Header/>
      <div className="fetch-btns">
        <Button name={'Liked'} icon={<i className="fa-solid fa-heart"></i>}/>
        <Button name={'Trending'} icon={<i className="fa-solid fa-arrow-trend-up"></i>}/>
        <Button name={'Random'} icon={<i className="fa-solid fa-shuffle"></i>}/>

      </div>

    </AppStyled>
  
  );
}



const AppStyled = styled.div`
min-height: 100vh;
background-color: ${props => props.theme.colorBg1};

.fetch-btns{
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
}
`

export default App;
