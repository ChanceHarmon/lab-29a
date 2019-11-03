import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import content from './content.json';
import Page from './components/Page/page.jsx';
import Header from './components/Header/header.jsx';
import About from './components/About/about.jsx';

const App = (props) => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/page" render={(props) => <Page content={content} />}
        />
        <Route exact path="/about" component={About} />
      </Switch>
    </>
  );
};

const rootElement = document.getElementById('root');

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, rootElement);
export default App;