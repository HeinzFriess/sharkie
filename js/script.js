let allIntervalIDs = [];

/**
 * sets an interval with the given function with the given time
 * @param {function to be called} theFunction 
 * @param {time in ms} intervalTime 
 */
function setDeletableInterval(theFunction, intervalTime) {
    let id = setInterval(theFunction, intervalTime);
    allIntervalIDs.push(id);
}

/**
 * sets the given element to fullscreen mode
 * @param {*} element 
 */
function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitrequestFullscreen) {
        element.webkitrequestFullscreen();
    }
}

/**
 * exits the fullscreen mode
 */
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

/**
 * is deleting all deletable Intervals
 */
function deleteIntervals() {
    allIntervalIDs.forEach(id => {
        clearInterval(id);
    });
}
