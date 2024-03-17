const { contextBridge, ipcRenderer } = require('electron')

let updateFirstName = (userID, firstName) => {
    console.log(`update userID: ${userID} with new name: ${firstName}`); 
    console.log("Renderer Process > updateFirstName"); 
    ipcRenderer.send("update-first-name", userID, firstName); 
}

let getFirstName = (userID) => {
    console.log(`get first name of userID: ${userID}`); 
    console.log("Renderer Process > getFirstName"); 
    ipcRenderer.send("get-first-name", userID); 
}

let indexBridge = {
    updateFirstName: updateFirstName, 
    getFirstName: getFirstName,
    firstNameReply: (callback) => ipcRenderer.on("get-first-name-reply", (callback))
}

contextBridge.exposeInMainWorld("Bridge", indexBridge); 