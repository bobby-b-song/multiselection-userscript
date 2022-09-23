// ==UserScript==
// @name         multiselection
// @namespace    http://fla.si/
// @version      0.1
// @description  notify you when it's a multiselection question, so you won't lost point when doing online quizzes
// @author       Boyao SONG
// @run-at       document-end
// @match        *://localhost:8000/*
// @match        *://*.ed.ac.uk/*
// @match		 *://*.fla.si/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=undefined.
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	var input_checkboxes = document.querySelectorAll('form input[type="checkbox"]')
	if (input_checkboxes.length >= 2) {
        const element = document.createElement('p')
        element.innerText = 'MULTI SELECTION ALERT'
        element.style.color = 'red'
        element.style.fontWeight = 'bold'
        var parent = input_checkboxes[0].parentElement
        parent.parentNode.insertBefore(element, parent)
	}
})();
