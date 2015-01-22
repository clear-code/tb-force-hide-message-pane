/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function (aGlobal) {
  let observerService = Cc["@mozilla.org/observer-service;1"]
                          .getService(Ci.nsIObserverService);
  var ForceHideMessagePaneHandler = {
    run: function run() {
      observerService.addObserver(this, "mail-startup-done", false);
    },
    // nsIObserver
    observe: function observe(aEvent) {
      observerService.removeObserver(this, "mail-startup-done", false);
      setTimeout(function () {
        if (!IsMessagePaneCollapsed()) {
          MsgToggleMessagePane();
        }
      }, 0);
    }
  };

  document.addEventListener("DOMContentLoaded", function onDOMContentLoaded(aEvent) {
    document.removeEventListener("DOMContentLoaded", onDOMContentLoaded);
    ForceHideMessagePaneHandler.run();
  });
  aGlobal.ForceHideMessagePaneHandler = ForceHideMessagePaneHandler;
})(this);