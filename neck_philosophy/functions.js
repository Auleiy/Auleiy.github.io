var lastContent;

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
    for (var i = 0; i < o.length; i++) {
        Segment(o[i].content, o[i].interpretation, o[i].comment, o[i].date);
        if (i === o.length - 1)
            lastContent = o[i];
    }

}

function getLatestLink() {
    return '#' + lastContent.date;
}

function getLastTimeOffset() {
    var d = new Date(lastContent.date);
    var n = Date.now();
    var o = Math.floor((n - d) / 1000 / 60 / 60 / 24);

    if (o === 0)
        return "刚刚";
    else
        return o + "天前";
}
