const runOnClick = () => {
    console.log('Button clicked!')
}



chrome.browserAction.onClicked.addListener(function (tab) {
    runOnClick();
});
