// ==UserScript==
// @name         VeePN Element Blocker
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Blocks VeePN guard alert and lock screen elements
// @match        *://*/*
// @grant        none
// @author       IMAGINESAMURAI
// License: MIT

// ==/UserScript==

(function() {
    'use strict';

    // Function to remove VeePN elements
    function removeVeePNElements() {
        const elements = [
            'veepn-guard-alert',
            'veepn-lock-screen'
        ];

        elements.forEach(elementName => {
            const element = document.querySelector(elementName);
            if (element) {
                element.remove();
            }
        });
    }

    // Run on page load
    removeVeePNElements();

    // Create observer to handle dynamically added elements
    const observer = new MutationObserver(() => {
        removeVeePNElements();
    });

    // Start observing the document for changes
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();