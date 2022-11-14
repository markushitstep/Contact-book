import { FC } from "react"
import style from './ContactsHeader.module.css'
import { Button, createTheme, ThemeProvider } from "@mui/material";
import SearchInput from "../UI/SearchInput/SearchInput";
import DoneIcon from '@mui/icons-material/Done';
import { Add } from "@mui/icons-material";
import MyIconButton from "../UI/MyIconButton/MyIconButton";

interface IProps{
    contactsLength: number
}

const themeExportBtn = createTheme({
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    backgroundColor: '#00b38f',
                    borderRadius: '10px',
                    textTransform: 'none',
                    padding: '5px 10px',
                    color: 'white',
                    fontSize: '13px',
                    "&:hover":{
                        backgroundColor: '#00b38f',
                        opacity: 0.7
                    }
                }
            }
        } 
    }
})

const ContactsHeader: FC<IProps> = ({contactsLength}) => {
    return (
        <div className={style.contactsHeader}>
            <div className={style.contactsHeader_blockTitle}>
                <h1>All Contacts {`(${contactsLength})`}</h1>
                <MyIconButton fontSize="16" backgroundColor='#00b38f'>
                    <Add />
                </MyIconButton>
            </div>
            <SearchInput />
            <div className={style.contactsHeader_blockSelect}>
                <div className={style.blockSelect_selectAll}>
                    <MyIconButton fontSize="13" backgroundColor='#c2d0d6'>
                        <DoneIcon />
                    </MyIconButton>
                    <div>
                        Select all
                    </div>
                </div>
                <ThemeProvider theme={themeExportBtn}>
                    <Button>Export all</Button>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default ContactsHeader;
