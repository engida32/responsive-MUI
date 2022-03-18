
import { createTheme } from '@mui/system';
// define custom color palette  using createTheme
export const theme = createTheme({
    palette: {
        primary: {
            main: '#3F9CE6',
        },
    },
    myButton: {
        backgroundColor: 'red',
        color: 'white',
        border: '1px solid black',
    },
});