const {ipcRenderer} = require('electron')

window.ipc = window.ipc || {},
function(n) {
    ipc.messaging = {

      sendOpenLoginWindowEvent: function() {
        ipcRenderer.send('open-login-window', 'an-argument')
      },

      sendCloseLoginWindowEvent: function() {
        ipcRenderer.send('close-login-window', 'an-argument')
      },

      sendOpenSecondWindowEvent: function() {
        ipcRenderer.send('open-second-window', 'an-argument')
      },

      sendCloseSecondWindowEvent: function() {
        ipcRenderer.send('close-second-window', 'an-argument')
      },

      init: function() {
        $('#open-login-button').click( function () {
          ipc.messaging.sendOpenLoginWindowEvent()
        })

        $('#close-login-button').click( function () {
          ipc.messaging.sendCloseLoginWindowEvent()
        })

        $('#open-secondwindow-button').click( function () {
          ipc.messaging.sendOpenSecondWindowEvent()
        })

        $('#close-me-button').click( function () {
          ipc.messaging.sendCloseSecondWindowEvent()
        })

      }
    };

    n(function() {
        ipc.messaging.init();
    })

}(jQuery);
