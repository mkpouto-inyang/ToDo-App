import { Box, ThemeProvider, createTheme } from '@mui/material';
import Container from './components/Container';
import TodoWrapper from './components/ToDoWrapper';
import InputSection from './components/InputSection';
import DropDownMenu from './components/Dropdown';
import TodoListItem from './components/TodoListItem';

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

            <Box sx={{marginTop:'40px', padding:'10px 0', overflow:'auto', height:'400px', scrollbarWidth: 'none'}}>
            <TodoListItem/>
            <TodoListItem/>
            <TodoListItem/>
            <TodoListItem/>
            <TodoListItem/>
            <TodoListItem/>
            <TodoListItem/>
            </Box>
           
          </TodoWrapper>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
