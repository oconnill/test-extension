console.log('background script hit');

chrome.runtime.onConnect.addListener(port => {
    port.onMessage.addListener(msg => {
            console.log('background recieved msg', msg);
            chrome.tabs.sendMessage(activeTab.id,
                {"message": msg}
            );
        }
    );
});

chrome.runtime.onMessage.addListener((msg) => {
    console.log('got here maybes', msg);
    // sendResponse('pong')
});

