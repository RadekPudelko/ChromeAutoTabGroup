// Hitting the + currently adds to the group, maybe detect the + and put that in
// the non grouped area
chrome.tabs.onCreated.addListener(async (tab) => {
    let openerTabId = tab.openerTabId;
    if (openerTabId) {
        let openerTab = await chrome.tabs.get(openerTabId);
        let tabGroupId = openerTab.groupId;
        if(tabGroupId != -1) {
            let groupOptions = {groupId: tabGroupId, tabIds: tab.id};
            chrome.tabs.group(groupOptions);
        }
    }
});

