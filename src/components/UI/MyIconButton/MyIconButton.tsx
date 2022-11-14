import { IconButton } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { FC } from "react"

interface IProps{
    children: any,
    backgroundColor?: string,
    fontSize?: string
}

const MyIconButton: FC<IProps> = ({children, backgroundColor, fontSize}) => {
    
    const themeIconButton = createTheme({
        components:{
            MuiIconButton:{
                styleOverrides: {
                    root: {
                        padding: '7px',
                        backgroundColor: `${backgroundColor}`,
                        "&:hover":{
                            backgroundColor: `${backgroundColor}`,
                            opacity: 0.7
                        },
                        '& .MuiSvgIcon-root': {
                            fontSize: `${fontSize}px`,
                            color: 'white',
                        }
                    },
                },
            }
        }
    })

    return (
        <ThemeProvider theme={themeIconButton}>
            <IconButton>
                {children}
            </IconButton>
        </ThemeProvider>
    )
}

export default MyIconButton;
