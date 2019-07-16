export function  setHtmlFontSize(){
    var html = document.documentElement;
    var htmlWidth = html.clientWidth;
    html.style.fontSize = (htmlWidth/1366)*18+'px'
    
}

export function resetHtmlFontSize(){
    var html = document.documentElement;
    html.style.fontSize = 'inherit';
}