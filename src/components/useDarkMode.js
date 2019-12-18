// useDarkMode.js
import { useEffect, useState } from 'react';

export const useDarkMode = () => {

  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };

  // const toggleTheme = () => {
  //   if (theme === 'light') {
  //     window.localStorage.setItem('theme', 'dark')
  //     setTheme('dark')
  //   } else {
  //     window.localStorage.setItem('theme', 'light')
  //     setTheme('light')
  //   }
  // };
  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setTheme('light')
      window.localStorage.setItem('theme', 'light')
    }
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme,componentMounted]
};