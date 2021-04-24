import React from 'react'
import ReactDOM from 'react-dom'

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = {isloggedIn: false}
  }
  handleLoginClick() {
    this.setState({isloggedIn: true})
  }
  handleLogoutClick() {
    this.setState({isloggedIn: false})
  }

  render() {
    const isloggedIn = this.state.isloggedIn
    let button

    if (isloggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }
    return (
      <div>
        <Greeting isloggedIn={isloggedIn} />
        {button}
      </div>
    )
  }
}
function UserGreeting(props) {
  return <h1>Welcome Back!</h1>
}
function GuestGreeting(props) {
  return <h1>Please sign up</h1>
}
function Greeting(props) {
  const isloggedIn = props.isloggedIn
  if (isloggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>
}
function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>
}

ReactDOM.render(<LoginControl />, document.getElementById('root'))
