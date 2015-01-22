/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function (aGlobal) {
  var ForceHideMessagePaneHandler = {
    run: function run() {
      ChangeMessagePaneVisibility(false);
    }
  };

  document.addEventListener("DOMContentLoaded", function onDOMContentLoaded(aEvent) {
    document.removeEventListener("DOMContentLoaded", onDOMContentLoaded);
    ForceHideMessagePaneHandler.run();
  });
  aGlobal.ForceHideMessagePaneHandler = ForceHideMessagePaneHandler;
})(this);
