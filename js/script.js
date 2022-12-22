let allIntervalIDs = [];

function setDeletableInterval(theFunction, intervalTime) {
    let id = setInterval(theFunction, intervalTime);
    allIntervalIDs.push(id);
}

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitrequestFullscreen) {
        element.webkitrequestFullscreen();
    }
}

function exitFullscreen(){
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }else if(document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}


function fullscreen() {
    let element = document.getElementById('screen');
    enterFullscreen(element);
    
}

function resetGame() {
    allIntervalIDs.forEach(id => {
        clearInterval(id);
    });
}
