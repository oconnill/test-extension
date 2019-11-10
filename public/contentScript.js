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

// This will send the #someSelector value to popup
console.log('content script is running');
// console.log('body dom', getDataFromDOM('body'));

chrome.runtime.sendMessage({
    type: 'OYO_PLUGIN_EVALUATED_CONFIG',
    // configData: getDataFromDOM('body')
    configData: 'string here'
});



// chrome.runtime.onMessage.addListener(
//     function(message, callback) {
//         if (message == “changeColor”){
//             chrome.tabs.executeScript({
//                 code: 'document.body.style.backgroundColor="orange"'
//             });
//         }
//     });



//chrome context menu a user can right click any where and access the plugin on drop down