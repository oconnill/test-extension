// /* global chrome */
//
// import React from 'react'
//
// class Scrape extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             configData: null,
//         };
//     }
//
//     componentDidMount() {
//         window.chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
//             console.log('check this out message', message);
//             if (message.type === "OYO_PLUGIN_EVALUATED_CONFIG") {
//                 this.setState({
//                     configData: message.configData
//                 });
//             }
//         });
//         console.log('config data', this.state.configData)
//     }
//
//     render() {
//         return (
//             <div className=''>
//                 test
//             </div>
//         )
//     }
// }
//
// export default Scrape