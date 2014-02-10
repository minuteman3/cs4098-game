var assertion = 0;
console.log('TAP version 13');
console.log('1..2');

// this is a "faux-TAP-outputter", made so that testling can interpret it.
console.log('# localStorage is enabled');
window.localStorage.setItem(
              'test-local-storage',
              "hi");
equal(window.localStorage.getItem('test-local-storage'), "hi");


console.log('# regions can be retrieved');
window.localStorage.setItem(
              'test-local-storage',
              "hi");
equal(pt.region('test-local-storage'), "hi");


function text(elem) { return elem.textContent || elem.innerText }
function equal (a, b) {
	// output must be in this format (either 'ok', or 'not ok') followed by the number of assertions which have occurred.
    console.log((a === b ? 'ok' : 'not ok') + ' ' + (++ assertion));
}