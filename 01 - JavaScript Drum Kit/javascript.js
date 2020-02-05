
    function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // get the key css class
        if(!audio) return; // stop the function run all together
        audio.currentTime = 0; // rewind to start
        audio.play();
        key.classList.add('playing'); // add .playing css class
    };
    function removeTransition(e) {
        if(e.propertyName !== 'transform') return; // skip it if it is not a transform (property)
        this.classList.remove('playing')
    };

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound)

// keyCode: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode