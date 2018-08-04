import React, {Component} from 'react';



class LoginPage extends Component {
    constructor(props){
        super(props)
    }
    
    quickAuthenticate() {
        this.props.history.push('/');
    }
    
    render() {
        return (
            <div>
                <button onClick={() => this.quickAuthenticate()}>Click to Login man</button>
            </div>
        )
    }
}

export default LoginPage;