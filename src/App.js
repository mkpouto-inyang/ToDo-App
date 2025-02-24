import { ThemeProvider, createTheme } from '@mui/material';
import Container from './components/Container';
import TodoWrapper from './components/ToDoWrapper';
import InputSection from './components/InputSection';
import DropDownMenu from './components/Dropdown';

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <TodoWrapper>
            <InputSection/>
            <DropDownMenu/>
          </TodoWrapper>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
