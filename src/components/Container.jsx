import {Box, Typography} from "@mui/material";


const Container = ({children}) => {
  return ( 
    <Box sx={{
      backgroundColor: "#06021D", 
      minHeight: "100vh",
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center",
      padding: "20px", 
    }}>
    

    <Typography sx={{color:"white", fontSize:48, fontWeight:"bold", marginBottom:"20px" }}>TODO APP</Typography>
      {children}
    </Box>
   );
}
 
export default Container;
