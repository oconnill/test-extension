/* global chrome */

import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            configData: null,
            emails: ''
        };
    }

    componentDidMount() {
        // Component would mount and then have a button that onclick would send out a message that would return the dom from the page
        //Possibly constat ping to send dom with a function on that is filtering data for duplicates and also a stop bt
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
            });
            this.getEmailsFromString(this.state.configData);
        });

    }

    convertData = (data) => {
        console.log(data)
        debugger
    };

    getEmailsFromString = (input) => {
        let ret = [];
        let email = /\"([^\"]+)\"\s+\<([^\>]+)\>/g;
        let dataStr = JSON.stringify(input);
        let newArray = dataStr.split(' ');

        console.log('split array', newArray);

        let match;
        while (match = email.exec(dataStr))
            ret.push({'name': match[1], 'email': match[2]});

        this.setState({
            emails: ret
        });
        console.log('emails', ret)
    };

    validateEmail = (email) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    render() {
        return (
            <div className='testing-container'>
                Extension Pop Up for Testing
                {this.state.emails}
            </div>
        )
    }
}

export default App