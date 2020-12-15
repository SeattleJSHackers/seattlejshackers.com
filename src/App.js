import Home from './components/Home';
import React, { useEffect, useState } from 'react';
import Events from './components/Events';
import CodeOfConduct from './components/CodeOfConduct';
import NotFound from './components/NotFound';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import theme from './styles/theme';
import darkTheme from './styles/darkTheme';
import Navigation from './components/Navigation'
import { AppFrame, ThemeButton } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const RouteWithMenu = ({ component, ...rest }) => {
  const render = (Component) => (props) => {
    return <Component {...props} />
  }

  return (
    <AppFrame>
      <Navigation />
      <Route {...rest} render={render(component)} />
    </AppFrame>
  );
}

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isButtonShown, setIsButtonShown] = useState(true);

  useEffect(() => {
    let isDarkMode = localStorage.getItem('isDarkMode');

    if (isDarkMode === 'true') {
      setIsDarkTheme(true);
    }
  }, []);

  const handleThemeChange = () => {
    setIsButtonShown(false);
    setTimeout(() => {
      setIsDarkTheme(prevState => {
        localStorage.setItem('isDarkMode', !prevState);
        return !prevState;
      })
      setTimeout(() => setIsButtonShown(true), 100);
    }, 500)

  }
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>
      <ThemeButton onClick={handleThemeChange} disabled={!isButtonShown}>
        <FontAwesomeIcon icon={isDarkTheme ? faSun : faMoon} className={`icon ${isButtonShown ? 'is-shown' : 'not-shown'}`} />
      </ThemeButton>
      <Router>
        <Switch>
          <RouteWithMenu exact path='/' component={Home} />
          <RouteWithMenu exact path='/code-of-conduct' component={CodeOfConduct} />
          <RouteWithMenu exact path='/events' component={Events} />
          <RouteWithMenu component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );

}

export default App;
