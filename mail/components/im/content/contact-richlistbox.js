/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

/* global MozElements */

/**
 * The MozContactRichlistbox widget is used to override a method for contact richlistbox
 * in chat-messenger window due to some remaining De-XBL work.
 *
 * @extends {MozElements.RichListBox}
 */
class MozContactRichlistbox extends MozElements.RichListBox {
  connectedCallback() {
    if (this.delayConnectedCallback()) {
      return;
    }
    super.connectedCallback();
    this.setAttribute("is", "contact-richlistbox");
  }

  get itemChildren() {
    let children = Array.from(this.children).filter(
      node =>
        (node.localName == "imcontact" ||
          node.localName == "imgroup" ||
          node.localName == "imconv") &&
        !node.getAttribute("hidden")
    );
    return children;
  }
}

customElements.define("contact-richlistbox", MozContactRichlistbox, {
  extends: "richlistbox",
});
