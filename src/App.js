import { Box, ThemeProvider, createTheme } from '@mui/material';
import Container from './components/Container';
import TodoWrapper from './components/ToDoWrapper';
import InputSection from './components/InputSection';
import DropDownMenu from './components/Dropdown';
import TodoListItem from './components/TodoListItem';
import { useEffect, useState } from 'react';

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
  },
});

function App() {
 
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  console.log(`Stored Tasks: ${storedTasks}`)

  //initialize empty array with stored tasks
  const [tasks, setTasks] = useState(storedTasks);

    // Update localStorage whenever tasks change

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks)
  )  
  }, [tasks])
  
  const addNewTask = (newTask) =>{
    setTasks([...tasks, newTask])
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <TodoWrapper>
            <InputSection addNewTask={addNewTask}/>
            <DropDownMenu/>

            <Box sx={{marginTop:'40px', padding:'10px 0', overflow:'auto', height:'400px', scrollbarWidth: 'none'}}>
            {tasks.map((task, index) => (
              <TodoListItem key={index} newTask={task} />
            ))}
            </Box>
          </TodoWrapper>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
