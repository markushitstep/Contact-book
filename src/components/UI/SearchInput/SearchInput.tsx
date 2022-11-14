import { TextField, InputAdornment } from "@mui/material";
import { FC } from "react"
import { makeStyles } from '@mui/styles'
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles({
  root:{
    '& .MuiInput-root:after, .MuiInput-root:before':{
      borderBottom: "none",
    },
    '& .MuiInput-root:hover:not(.Mui-disabled):before':{
      borderBottom: 'none'
    },
    '& .MuiInput-root ': {
      padding: '5px',
      backgroundColor: '#f2f2f2',
      borderRadius: '70px',
      fontSize: '12px',
      fontWeight: 'bold',
      width: '600px',
    },
    '& .MuiInputAdornment-root':{
      margin: '5px 5px'
    },
    '& .MuiSvgIcon-root': {
      fontSize: '15px'
    }
  },
});

const SearchInput: FC = () => {
    const styles = useStyles();
    
    return (
        <TextField 
          classes={styles}
          id="standard-basic"
          placeholder="Search contacts"
          InputProps={{
            startAdornment:
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            
          }}
          variant="standard"
        />
    )
}

export default SearchInput;

