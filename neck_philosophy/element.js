function Segment(text, interpretation, comment, date) {
    document.writeln("<div class=\"content\" id=\"" + date + "\">");
    document.writeln("<div class=\"header-container\">")
    document.writeln("<span>" + date + "</span>");
    document.writeln("<input class=\"copylink-btn btn\" type=\"button\" value=\"§\" title=\"复制跳转链接\" data-clipboard-text=\"" + window.location.href.slice(0, window.location.href.indexOf('#')) + '#' + date + "\" onclick=\"alert(\'复制成功！\')\"><br>");
    document.writeln("</div>")
    document.writeln("<span style=\"font-size: x-large;\">" + text + "</span><br>");
    document.writeln("<div class=\"content-description\">");
    document.writeln("<span>[理解] " + interpretation + "</span><br>");
    document.writeln("</div>");
    if (comment.length !== 0) {
        document.writeln("<hr class=\"black\">");
        document.writeln("<div class=\"content-description\">");
        document.writeln("<span style=\"font-size: larger;\">评论</span>");
        document.writeln("</div>");
        for (var i = 0; i < comment.length; i++) {
            var v = comment[i];
            document.writeln("<div class=\"content-description\">");
            document.writeln("<span>" + v + "</span><br>");
            if (i !== comment.length - 1)
                document.writeln("<hr class=\"half\">");
            document.writeln("</div>");
        }
    }
    document.writeln("</div>");
}

function alertElement() {
    var a = [];
    a.push(
        document.createElement("")
    )
}
