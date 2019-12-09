import React from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { connect } from 'react-redux';
import {userLoginFetch} from '../Actions';
import { Form, Button } from 'semantic-ui-react'
import '../App.css';


class LoginForm extends React.Component {

  state = {
    username: "",
    password: "",
  }

  componentWillReceiveProps(newProps) {
    if(newProps.currentUser){
      this.props.history.push(`/profile`)
    }
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    console.log('in handle submit login')
    this.props.userLoginFetch(this.state)


  }

  render() {
    return (
      <div className="centered">
      <MDBContainer  >
        <MDBRow >
          <MDBCol >
            <Form onSubmit={this.handleSubmit}>
              <p className="h4 text-center mb-4">Sign in</p>

              <Form.Field>
               <label>Username</label>
               <input onChange={this.handleChange} name="username" value={this.state.username} placeholder='Username' />
              </Form.Field>

              <br />

              <Form.Field>
      		      <label>Password</label>
      		      <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder='Password' />
      		    </Form.Field>

              <div className="text-center mt-4">
                <Button color="indigo" type="submit">Login</Button>
              </div>
            </Form>

          </MDBCol>
        </MDBRow>
      </MDBContainer>

      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})
function mapStateToProps(state) {
  // maps the state from the store to the props
  const {user} = state
  return {
    currentUser: user.currentUser
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);