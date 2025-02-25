import {Box} from "@mui/material";

const TodoWrapper = ({children}) => {
    return ( 
        <>
         <Box sx={{width:"45%", height:"70%"}}>
            {children}
         </Box>
        </>
     );
}
 
export default TodoWrapper;