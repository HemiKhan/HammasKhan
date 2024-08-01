const textarea = document.querySelector("textarea"),
    voicelist = document.querySelector("select"),
    speachButton = document.querySelector("button");

let synth = speechSynthesis,
    isSpeaking = true;

voices();

function voices() {
    for (let voice of synth.getVoices()) {
        console.log(voice);
        // selecting "Google US English" voice as default
        let selected = voice.name === "Google US English" ? "Selected" : "";
        // creating an option tag with passing voice name and voice language
        let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
        voicelist.insertAdjacentHTML("beforeend", option); // inserting option tag beforeend of select tag
    }
}

synth.addEventListener("voiceschanged", voices);

function TextToSpeach(text) {
    let utternance = new SpeechSynthesisUtterance(text);
    for (let voice of synth.getVoices()) {
        // if the available device name is equal to the user selectedd voice name
        // then set the speach to the user selected voice
        if (voice.name === voicelist.value) {
            utternance.voice = voice;
        }
    }
    synth.speak(utternance); // speak the speech/utternance
}

speachButton.addEventListener("click", e => {
    e.preventDefault();

    if (textarea.value !== "") {
        if (!synth.speaking) { // if an utternance/speech is not currently in the proceess of speaking
            TextToSpeach(textarea.value);
        }
    }

    if (textarea.value.length > 80) {
        // if isSpeaking is true then change it's value to false and resume the utternance/ speeech 
        // else change it's value to true and pause the speech
        if (isSpeaking) {
            synth.resume();
            isSpeaking = false;
            speachButton.innerHTML = "Pause Speech";
        }
        else {
            synth.pause();
            isSpeaking = true;
            speachButton.innerHTML = "Reusme Speech";
        }

        setInterval(() => {
            if (!synth.speaking && !isSpeaking) {
                isSpeaking = true;
                speachButton.innerText = "Convert To Speech";
            }
        });
    }
    else {
        speachButton.innerText = "Convert To Speech";
    }
});