const { ipcRenderer, contextBridge } = require('electron');

let counter = 0;

contextBridge.exposeInMainWorld('mainAPI', {
    toastCounter: () => {
      counter += 1;
      if (counter > 3){
        ipcRenderer.invoke('new:window')
      }
    },
});