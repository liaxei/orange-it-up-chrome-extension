import {Logger} from "tslog";

const log = new Logger();
let active = false;

function makeOrange(color: string): void {
    document.body.style.backgroundColor = color;
    log.debug("Color", color);
}

chrome.action.onClicked.addListener((tab) => {
    active = !active;
    const color = active ? 'orange' : 'white';
    chrome.scripting.executeScript({
        target: {tabId: tab.id ? tab.id : -1},
        func: makeOrange,
        args: [color]
    }).then();
});
