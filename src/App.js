import Home from './components/Home';
import CodeOfConduct from './components/CodeOfConduct';
import NotFound from './components/NotFound';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import theme from './styles/theme.js';
import Navigation from './components/Navigation'
import React from 'react';

const RouteWithMenu = ({ component, ...rest }) => {
  const render = (Component) => (props) => {
    return <Component {...props} />
  }

  return (
    <>
      <Navigation />
      <Route {...rest} render={render(component)} />
    </>
  );
}

function App() {

  try {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <RouteWithMenu exact path='/' component={Home} />
            <RouteWithMenu exact path='/code-of-conduct' component={CodeOfConduct} />
            <RouteWithMenu component={NotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  } catch (error) {
    console.warn(error);
    return (<>{JSON.stringify(error)}</>)
  }

}

export default App;
