function copy(text) {
    var inp = document.createElement('input');
    document.body.appendChild(inp)
    inp.value = text.textContent
    inp.select();
    document.execCommand('copy', false);
    inp.remove();
}