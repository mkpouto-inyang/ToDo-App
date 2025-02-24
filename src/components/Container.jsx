import {Box, Typography} from "@mui/material";


const Container = ({children}) => {
  return ( 
    <Box sx={{backgroundColor: "#06021D", height:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

    <Typography sx={{color:"white", fontSize:48, fontWeight:"bold" }}>TODO APP</Typography>
    <p>Hellii</p>
      {children}
    </Box>
   );
}
 
export default Container;
