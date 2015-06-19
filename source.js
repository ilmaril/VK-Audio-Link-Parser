javascript:(function() {
    var audioDivs = document.body.getElementsByClassName('audio');

    var links = [];
    for (var i=0; i<audioDivs.length; i+=1) {
        var inp = audioDivs[i].getElementsByTagName('input')[0];
        if (inp && inp.value.startsWith('http')) {
            links.push(inp.value.replace('https://', 'http://'));
        }
    }

    var mainDiv = document.createElement('div');
    mainDiv.style.zIndex = '100';
    mainDiv.style.position = 'fixed';
    mainDiv.style.borderRadius = '4px';
    mainDiv.style.width = '50%';
    mainDiv.style.top = '15%';
    mainDiv.style.left = '20%';
    mainDiv.style.border = '3px solid #2B587A';
    mainDiv.style.backgroundColor = '#FFF';

    var closeBtn = document.createElement('button');
    closeBtn.innerHTML = 'Close';
    closeBtn.style.borderRadius = '2px';
    closeBtn.style.backgroundColor = '#6383A8';
    closeBtn.style.color = '#FFF';
    closeBtn.style.border = '0';
    closeBtn.style.padding = '5px 10px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.onclick = function() {mainDiv.style.display = 'none';};

    var info = document.createElement('div');
    info.style.fontSize = '14pt';
    info.style.color = '#2B587A';
    info.innerHTML = 'Found ' + links.length + ' audios';


    var header = document.createElement('div');
    header.style.backgroundColor = '#E9EDF1';
    header.style.position = 'relative';
    header.style.top = '0px';
    header.style.borderBottom = '2px solid #d9e0e7';
    header.style.margin = 'auto';
    header.style.textAlign = 'center';

    header.appendChild(info);
    header.appendChild(closeBtn);


    var content = document.createElement('div');
    if (links.length) {
        content.innerHTML = links.join('<br>');
    }
    else {
        content.innerHTML = '<center><h1>No audios on the page</h1></center>';
    }

    content.style.overflow = 'auto';
    content.style.position = 'relative';
    content.style.width = '100%';
    content.style.height = '300px';

    mainDiv.appendChild(header);
    mainDiv.appendChild(content);
    document.body.appendChild(mainDiv);
})()