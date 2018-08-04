import React, {Component} from 'react';
import {Link,BrowserRouter as Router} from 'react-router-dom';
//import LoginPage from './src'

class Page extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div className="page">
                {this.props.children}
            </div>
             
        )
    }
}

export default Page;