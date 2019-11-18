console.log('content script is running');

function getDataFromDOM(selector) {
    let domNode = document.querySelector(selector);
    if (domNode) {
        let content = document.querySelector(selector).textContent;
        if (content) {
            return content.trim();
        }
    }
    return undefined;
}

function ping() {
    chrome.runtime.sendMessage(getDataFromDOM('body'), response => {
        if (chrome.runtime.lastError) {
                    setTimeout(ping, 1000);
                } else {
            console.log('ready to send dom');
            chrome.runtime.sendMessage({
                message: getDataFromDOM('body')
            });
        }
    });
}

ping();

// Content script
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     console.log(request.ping)
//     if(request.ping) { sendResponse({pong: true}); return; }
/* Content script action */
// });

// This will send the #someSelector value to popup
// chrome.runtime.sendMessage({
//     type: 'OYO_PLUGIN_EVALUATED_CONFIG',
//     configData: getDataFromDOM('body')
// });

// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//     console.log(response.farewell);
// });

// This will send the #someSelector value to popup
// console.log('body dom', getDataFromDOM('body'));

// chrome.runtime.sendMessage({
//     type: 'DOM',
// configData: getDataFromDOM('body')
//     configData: 'string here'
// });

// chrome.runtime.sendMessage(
//     "foo",
//     function (response) {
//         console.log(response);
//     }
// );
// chrome.runtime.onMessage.addListener(
//     function (request, sender, sendResponse) {
//         console.log(' got message');
//         if (request.type === "getDom") {
//             sendResponse(getDataFromDOM('body'))
//         }
//     }
// );


// chrome.runtime.onMessage.addListener(
//     function(message, callback) {
//         if (message == “changeColor”){
//             chrome.tabs.executeScript({
//                 code: 'document.body.style.backgroundColor="orange"'
//             });
//         }
//     });


//chrome context menu a user can right click any where and access the plugin on drop down