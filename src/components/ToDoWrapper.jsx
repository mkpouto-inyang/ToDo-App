import { Box } from "@mui/material";

const TodoWrapper = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          width: "90%",
          maxWidth: "600px",
          height: "70%",
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default TodoWrapper;
