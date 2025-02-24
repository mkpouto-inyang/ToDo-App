import {Box} from "@mui/material";
import { lightBlue } from "@mui/material/colors";

const TodoWrapper = ({children}) => {
    return ( 
        <>
         <Box sx={{width:"50%", height:"70%", padding:" 0px 100px"}}>
            {children}
         </Box>
        </>
     );
}
 
export default TodoWrapper;