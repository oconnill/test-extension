/* global chrome */

import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            configData: null,
        };
    }

    componentDidMount() {
        // window.chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        //     if (message) {
        //         this.setState({
        //             configData: message
        //         });
        //     }
        // });
        chrome.runtime.onMessage.addListener((msg) => {
            console.log('got here maybes app side', msg);
            this.setState({
                configData: msg
            })
            // sendResponse('pong')
        });
    }

    render() {
        return (
            <div className='testing-container'>
                Extension Pop Up for Testing
                {this.state.configData}
            </div>
        )
    }
}

export default App