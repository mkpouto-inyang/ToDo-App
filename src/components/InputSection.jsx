import { Box, Button, InputBase, styled } from "@mui/material";
import { useState } from "react";

const CustomInput = styled(InputBase)({
  backgroundColor: "white",
  width: "100%",
  maxWidth: "470px",
  padding: "12px 16px",
  borderRadius: "10px",
});

const AddButton = styled(Button)({
  backgroundColor: "#FF5946",
  color: "white",
  padding: "12px 16px",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "bold",
  width: "100%",
});

const InputSection = ({ addNewTask, displayErrorToast }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
    if (userInput.trim().length === 0) {
      displayErrorToast();
    } else {
      addNewTask(userInput);
      setUserInput(" ");
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "8px",
        flexDirection: { xs: "column", sm: "row" },
        width: "100%"
      }}
    >
      <CustomInput
      sx={{  marginBottom: {xs:"20px", sm:"0px"}
    }}
        placeholder="E.g Buy Groceries"
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />

      <AddButton variant="contained" type="submit" onClick={handleSubmit} sx={{  maxWidth: {xs:"50px", sm:"150px"},
}}>
        ADD
      </AddButton>
    </Box>
  );
};

export default InputSection;
