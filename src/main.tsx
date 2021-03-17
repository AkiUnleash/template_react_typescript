// React
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Components
import Top from './components/pages/Top';
import Login from './components/pages/Login';
// Redux
import { Provider } from "react-redux"
import { store } from './common/redux/store'


const App: React.FC = () => {
  console.log("aaa");

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector('#app'));