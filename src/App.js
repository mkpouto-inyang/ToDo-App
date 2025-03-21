import { Box, ThemeProvider, createTheme, Snackbar, Alert, Button } from '@mui/material';
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
  const [filter, setFilter] = useState('All')
  const [tasks, setTasks] = useState(storedTasks);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks)
  )  
  }, [tasks])
  
  //add new task
  const addNewTask = (newTaskText) => {
    const newTask = { text: newTaskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  //delete task
  const deleteTask = (key) => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = storedTasks.filter((_, index) => index !== key);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks)
  };

  //edit task
  const updateTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task, index) =>
      index === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task, index) =>
      index === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "Completed") return task.completed; 
    if (filter === "To do") return !task.completed;  
    return true;  
  });
  

    // Function to handle opening Snackbar
    const handleSnackbarOpen = () => {
      setSnackbarOpen(true);
    };
  
    // Function to close Snackbar
    const handleSnackbarClose = (event, reason) => {
      if (reason === 'clickaway') return;
      setSnackbarOpen(false);
    };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <TodoWrapper>
            <InputSection addNewTask={addNewTask} displayErrorToast={handleSnackbarOpen} />
            <DropDownMenu filter={filter} handleFilterChange={handleFilterChange} />


            <Box sx={{marginTop:'40px', padding:'10px 0', overflow:'auto', height:'400px', scrollbarWidth: 'none'}}>
            {filteredTasks.map((task, index) => (
              <TodoListItem key={index} taskId={index} task={task} deleteTask={deleteTask}   toggleTaskCompletion={toggleTaskCompletion}
              updateTask={updateTask} 
              />
            ))}
            </Box>
          </TodoWrapper>

             {/* Snackbar for error messages */}
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={handleSnackbarClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert onClose={handleSnackbarClose} severity="error" variant="filled" sx={{ width: "100%" }}>
              Add a valid task. Input cannot be empty.
            </Alert>
          </Snackbar>
        </Container>
      </ThemeProvider>
    </>
  );
}


export default App;
