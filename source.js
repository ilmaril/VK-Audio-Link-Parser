/*Букмарклет собирает с открытой страницы ВК все доступные аудиозаписи и
выводит их ссылки в диве который открыт поверх всех остальных элементов.*/

(function() {
    var audioDivs = document.body.getElementsByClassName('audio');

    var links = [];
    for (var i=0; i<audioDivs.length; i+=1) {
        var inp = audioDivs[i].getElementsByTagName('input')[0];
        if (inp) {
            links.push(inp.value.replace('https://', 'http://'));
        }
    }
    var divText = document.createElement('div');
    divText.innerHTML = links.join('<br>');

    var mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'links_list');
    mainDiv.style.overflow = 'auto';
    mainDiv.style.position = 'fixed';
    mainDiv.style.top = '25%';
    mainDiv.style.left = '20%';
    mainDiv.style.border = '1px solid #d6e9c6';
    mainDiv.style.borderRadius = '4px';
    mainDiv.style.backgroundColor = '#dff0d8';
    mainDiv.style.color = '#3c763d';
    mainDiv.style.zIndex = '10';
    mainDiv.style.width = '50%';
    mainDiv.style.height = '60%';

    var closeButton = document.createElement('button');
    closeButton.innerHTML = 'Close';
    closeButton.onclick = function() {mainDiv.style.display = 'none';};

    var span = document.createElement('span');
    span.style.fontSize = '14pt';
    span.innerHTML = 'Find ' + links.length + ' audios<br><br>';

    var closeScriptElem = document.createElement('script');

    mainDiv.appendChild(closeButton);
    mainDiv.appendChild(closeScriptElem);
    mainDiv.appendChild(span);
    mainDiv.appendChild(divText);
    document.body.appendChild(mainDiv);

})()
