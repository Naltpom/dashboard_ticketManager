import React, {  Component } from 'react';
import { Redirect } from 'react-router-dom'

import './NotFound404.scss'

class NotFound404 extends Component {
    state = {
        homeSubmit: false
    }

    handleHomeClick = () => {
        const homeSubmit = !this.state.homeSubmit
        this.setState({ homeSubmit })
    }
  
  render() {
    if (this.state.homeSubmit) {
        return <Redirect push to={`/`} />
    }

    return (
        <div className="errorPage">
            <div className="box">
                <h3>Sorry, page not found!</h3>
                <p>Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.</p>
                <button onClick={this.handleHomeClick}>Go Home</button>
            </div>
        </div>
    );
  }
}

export default NotFound404;