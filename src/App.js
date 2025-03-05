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
  const [filter, setFilter] = useState('All')
  const [tasks, setTasks] = useState(storedTasks);

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
  

  const displayErrorToast = () =>{
    alert('add a valid task')
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <TodoWrapper>
            <InputSection addNewTask={addNewTask} displayErrorToast={displayErrorToast}/>
            <DropDownMenu filter={filter} handleFilterChange={handleFilterChange} />


            <Box sx={{marginTop:'40px', padding:'10px 0', overflow:'auto', height:'400px', scrollbarWidth: 'none'}}>
            {filteredTasks.map((task, index) => (
              <TodoListItem key={index} taskId={index} task={task} deleteTask={deleteTask}   toggleTaskCompletion={toggleTaskCompletion}
              updateTask={updateTask} 
              />
            ))}
            </Box>
          </TodoWrapper>
        </Container>
      </ThemeProvider>
    </>
  );
}

//Thinking through edit 
// when edit button is clicked,
// make the todolist item to become an input box, with the task.text for that id set inside the input
// One can edit like a regular input box
// once I write a new thing and click enter, the enter button triggers a function 
// This function gets the input value and put inlocal storage, in place of the task that was there before
// The input place becomes noneditable again

export default App;
