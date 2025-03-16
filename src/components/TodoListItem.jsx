import { Box, Button, styled, Typography, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";

const CustomCheckbox = styled(Checkbox)({
  "&.MuiCheckbox-root": {
    padding: "8px",
  },
  "& .MuiSvgIcon-root": {
    borderRadius: "50%",
  },
  "&.Mui-checked": {
    color: "#FF5946",
  },
});

const TodoListItem = ({ task, deleteTask, taskId, toggleTaskCompletion, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleSave = () => {
    if (newText.trim() !== "") {
      updateTask(taskId, newText);
      setIsEditing(false);
    }
  };
  
// When Enter is pressed, save changes
    const handleKeyDown = (e) => {
    if (e.key === "Enter" && newText.trim() !== "") {
      handleSave();
    }
  };
  return (
    <Box
      sx={{
        backgroundColor: "white",
        marginBottom: "20px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
        gap: "10px",
      }}
    >
      <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <CustomCheckbox checked={task.completed} onChange={() => toggleTaskCompletion(taskId)} />

        {isEditing ? (
          <TextField
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <Typography
            sx={{
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "gray" : "black",
            }}
          >
            {task.text}
          </Typography>
        )}
      </Box>

      <Box sx={{ display: "flex", gap: "10px" }}>
        {isEditing ? (
          <Button 
            onClick={handleSave} 
            variant="contained" 
            color="primary" 
            size="small"
          >
            Save
          </Button>
        ) : (
          <Button onClick={() => setIsEditing(true)}>
            <EditIcon sx={{ color: "gray" }} />
          </Button>
        )}
        <Button onClick={() => deleteTask(taskId)}>
          <DeleteIcon sx={{ color: "red" }} />
        </Button>
      </Box>
    </Box>
  );
};

export default TodoListItem;
