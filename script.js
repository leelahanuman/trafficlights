function setLight(active) {
    const lights = {
        stop: {
            button: document.getElementById("stopButton"),
            light: document.getElementById("stopLight"),
            activeColor: "#cf1124",
            inactiveColor: "#1f1d41",
            lightInactive: "#4b5069"
        },
        ready: {
            button: document.getElementById("readyButton"),
            light: document.getElementById("readyLight"),
            activeColor: "#f7c948",
            inactiveColor: "#1f1d41",
            lightInactive: "#4b5069"
        },
        go: {
            button: document.getElementById("goButton"),
            light: document.getElementById("goLight"),
            activeColor: "#199473",
            inactiveColor: "#1f1d41",
            lightInactive: "#4b5069"
        }
    };

    for (let key in lights) {
        if (key === active) {
            lights[key].button.style.backgroundColor = lights[key].activeColor;
            lights[key].light.style.backgroundColor = lights[key].activeColor;
        } else {
            lights[key].button.style.backgroundColor = lights[key].inactiveColor;
            lights[key].light.style.backgroundColor = lights[key].lightInactive;
        }
    }
}

function buttonA() {
    setLight("stop");
}

function buttonC() {
    setLight("ready");
}

function buttonB() {
    setLight("go");
}
