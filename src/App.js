import React from 'react';
import {
  Route, withRouter, BrowserRouter, Redirect, Switch,
} from 'react-router-dom';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import store from './redux/redux-store';
import { initializeApp } from './redux/appReduser';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import Loader from './components/commons/Loader/Loader';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Loader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/' render={() => <Redirect to={'profile'} />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <Login />} />
            <Route path='*' render={() => <div>404 Filenot found</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(connect(mapStateToProps, { initializeApp }), withRouter)(App);

const MyApp = () => (
  <BrowserRouter>
    <Provider store={store}>
      <AppContainer key="app" />
    </Provider>
  </BrowserRouter>
);

export default MyApp;
