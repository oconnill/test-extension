import React from 'react'

class Scrape extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            configData : null,
        };
    }

    componentDidMount() {
        window.chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            if (message.type === "OYO_PLUGIN_EVALUATED_CONFIG") {
                this.setState({
                    configData: message.configData
                });
            }
        });
    }

    render() {
        return (
            <div className=''>
            </div>
        )
    }
}

export default Scrape