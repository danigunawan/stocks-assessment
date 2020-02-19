import React from 'react'
import { Form } from 'semantic-ui-react'

class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }

    // controlled log in forrm
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // send submitted values to the backend
        this.props.loginSubmitHandler(this.state)
        // reset state
        this.setState({
            email: "",
            password: ""
        })
    }

    render() {
        return (
            <div>
                <h1>Log In</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input
                        name="email"
                        placeholder="Email"
                        required
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <Form.Button
                        content="Log In"
                    />
                </Form>
            </div>
        )
    }
}

export default Login