import {Box, Button, Typography} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';


const TodoListItem = ({icon, task}) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return ( 
        <Box sx={{backgroundColor:'white', marginBottom:'20px', borderRadius:'8px', display:'flex', justifyContent:'space-between', padding:'15px'}}>
            <Box sx={{display:'flex', gap:'20px', alignItems:'center' }} >
                <Checkbox {...label} />
                <Typography>Buy Groceries</Typography>
            </Box>
            <Box sx={{display:'flex'}}>
                <Button>
                    <EditIcon sx={{color: 'gray'}}/>
                </Button>
                <Button>
                    <DeleteIcon sx={{color: 'red'}}/>
                </Button>
               
            </Box>
        </Box>
     );
}
 
export default TodoListItem;