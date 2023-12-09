function css(targetObj, cssObj) {
    var str = targetObj.getAttribute("style") ? targetObj.getAttribute('style') : '';
    for (var i in cssObj) {
        str += i + ':' + cssObj[i] + ';';
    }
    targetObj.style.cssText = str;
}