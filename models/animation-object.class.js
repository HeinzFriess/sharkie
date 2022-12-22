class AnimationObject {
    index = 1;

    constructor(object, array, ms) {
        this.index = 1;
        let animationInterval = setInterval(() => {
            object.sequenz = true;
            if (this.index <= array.length) {
                let path = array[this.index];
                object.img = object.imageCache[path];
                this.index++;
            }
            if (this.index == array.length) {
                clearInterval(animationInterval);
                object.sequenz = false;
            };
        }, ms);
    }
}

