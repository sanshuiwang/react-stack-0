import React, {PropTypes} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time
const AuthExample = () => (
  <Router>
    <div>
    <AuthButton />
      <ul>
        <li><Link to="/public">Public Page</Link></li>
        <li><Link to="/protected">Protected Page</Link></li>
      </ul>

      <Route path="/public" component={Public}/>
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/protected" component={Protected} />
    </div>
  </Router>
)

const fakeAuth = {
  isAuthenticated: false,
  authenticate(ob) {
    this.isAuthenticated = true;
    setTimeout(ob,100);
  },
  signout(ob) {
    this.isAuthenticated = false;
    setTimeout(ob,100);
  }
}

const AuthButton = withRouter(({history}) => {
  console.log(3000,history);
  return (
  fakeAuth.isAuthenticated ? (
    <p>
      welcome!<button onClick={()=>{
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
)}
)

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render = {props => (
      fakeAuth.isAuthenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: {from: props.location}
        }}/>
      )
  )}/>
)

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({redirectToReferrer: true})
    })
  }
  render() {
    console.log(1000,this.props);
    const { from } = this.props.location.state || {from: {pathname: '/'}};
    console.log(2000,from);
    const { redirectToReferrer } = this.state;
    if(redirectToReferrer){
      return (
        <Redirect to={from}/>
      )
    }
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>login</button>
      </div>
    )
  }
}

export default AuthExample;
