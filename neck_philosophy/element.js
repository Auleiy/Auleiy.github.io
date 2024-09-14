function Segment(text, interpretation, comment, date) {
    document.writeln("<div class=\"content\" id=\"" + date + "\">");
    document.writeln("<span>" + date + "</span>");
    document.writeln("<input class=\"copylink-btn\" type=\"button\" value=\"§\" title=\"复制跳转链接\" data-clipboard-text=\"" + window.location.href.slice(0, window.location.href.indexOf('#')) + '#' + date + "\"><br>");
    document.writeln("<span style=\"font-size: x-large;\">" + text + "</span><br>");
    document.writeln("<span>[理解] " + interpretation + "</span><br>");
    comment.forEach(e => {
        document.writeln("<span>[评论] " + e + "</span><br>");
    });
    document.writeln("</div>");
}
