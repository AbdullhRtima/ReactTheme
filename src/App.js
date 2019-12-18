import React  ,{ useState }from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './style/theme';
import { GlobalStyles } from './style/global';
import Toggle from './components/Toggle'

 
const  App =()=> {
    const [theme, setTheme] = useState('light');

    // The function that toggles between themes
        const toggleTheme = () => {
            // if the theme is not light, then set it to dark
            if (theme === 'light') {
            setTheme('dark');
            // otherwise, it should be light
            } else {
            setTheme('light');
            }
        }
    return (
        <ThemeProvider theme={ theme === 'light'? lightTheme : darkTheme }> 
            <>
                <GlobalStyles />
                <Toggle theme={theme} toggleTheme={toggleTheme} />
                 <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>
                 <footer>
                <span>Abdullah Rtima React js components </span>
                 
        </footer>
            </>
        </ThemeProvider>         
    )
}

export default  App ;