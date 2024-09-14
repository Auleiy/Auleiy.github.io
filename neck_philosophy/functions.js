function loadFile(filePath) {
    var result = null;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", filePath, false);
    xhr.send();
    if (xhr.status == 200)
        result = xhr.responseText;
    return result;
}

function init() {
    var s = loadFile("content.json");
    var o = JSON.parse(s);
    for (var v in o) {
        console.log(v + ": " + o[v].content);
        Segment(o[v].content, o[v].interpretation, o[v].comment, v);
    }
}

function copyLink(e) {
    var id = element.parentElement.id;
    copy();
}
