import React, { useContext, useState, useEffect } from 'react';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  },
  blue: {
    foreground: 'white',
    background: 'blue'
  }
};

const ThemeContext = React.createContext(themes.light);

export default function App() {
  const [theme, setTheme] = useState(themes.dark);

  useEffect(() => {
    setTimeout(() => {
      setTheme(themes.light);
    }, 3000);
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <ThemeContext.Consumer>
        {value => {
          console.log(ThemeContext);
          return <button style={{ background: value.background, color: value.foreground }}>I am styled by theme context!</button>;
        }}
      </ThemeContext.Consumer>

      <button style={{ background: theme.background, color: theme.foreground }}>I am styled by theme context!</button>
    </div>
  );
}
