import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './style/theme';
import { useDarkMode } from './components/useDarkMode';
import { GlobalStyles } from './style/global';
import Content from './components/content/Content'
import Toggle from './components/Toggle';

const  App =()=> {
    const [theme, toggleTheme ,componentMounted] = useDarkMode();
    const themeMode= theme === 'light'? lightTheme : darkTheme 

        if (!componentMounted) {
            return <div />
          };

    return (
        <ThemeProvider  theme={themeMode}  > 
            <>
                <GlobalStyles/>
                  <Toggle theme={theme} toggleTheme={toggleTheme} />
                   {/* <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1> */}
                 <Content/>
            </>
        </ThemeProvider>         
    )
}

export default  App ;