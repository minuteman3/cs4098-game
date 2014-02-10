var assertion = 0;
console.log('TAP version 13');
console.log('1..2');


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
    console.log((a === b ? 'ok' : 'not ok') + ' ' + (++ assertion));
}