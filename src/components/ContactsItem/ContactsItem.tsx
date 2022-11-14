import Avatar from '@mui/material/Avatar';
import { FC } from "react"
import DoneIcon from '@mui/icons-material/Done';
import style from './ContactsItem.module.css'
import { Add } from "@mui/icons-material";
import MyIconButton from '../UI/MyIconButton/MyIconButton';
import { IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles'

interface IProps{
    contact: any,
    styles: any
}

const useStyles = makeStyles( {
    customHoverFocus: {
        "&:hover, &.Mui-focusVisible": { backgroundColor: "yellow" }
      }
});


const muiIconBtn = {
    padding: '7px',
    backgroundColor: '#c2d0d6',
    "&:hover":{
        backgroundColor: '#c2d0d6',
        opacity: 0.7
    },
    "& .MuiSvgIcon-root": {
        fontSize:'13px',
        color: 'white'
    }
};


const ContactsItem: FC<IProps> = ({contact,styles}):any => {    
    const iconButton = useStyles();
    return ( 
        <div style={styles} className={style.contactsWrapper}>
            <div className={style.contactsContainer}>
                <div className={style.contactsContent}>
                    <div>
                        <MyIconButton fontSize="13" backgroundColor='#c2d0d6'>
                            <DoneIcon />
                        </MyIconButton>
                        <IconButton sx={muiIconBtn}>
                            <DoneIcon  />
                        </IconButton>
                    </div>
                    <div>
                        <Avatar 
                            src="/broken-image.jpg" 
                            sx={{
                                height: '45px',
                                width: '45px'
                            }}
                        />
                    </div>
                    <div className={style.contactsContent_info}>
                        <p>{contact.name}</p>
                        <div>
                            +{contact.phoneNumber}
                        </div> 
                    </div>
                </div>
                <div>
                    <MyIconButton fontSize="13" backgroundColor='#00b38f'>
                        <Add />
                    </MyIconButton>
                </div>  
            </div>
        </div>
    )

}

export default ContactsItem;