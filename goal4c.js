// Notes: Frequency
const NOTE_FREQS = {         
  "C0":  16.35,
  "C#0": 17.32,
  "D0":  18.35,
  "D#0": 19.45,
  "E0":  20.60,
  "F0":  21.83,
  "F#0": 23.12,
  "G0":  24.50,
  "G#0": 25.96,
  "A0":  27.50,
  "A#0": 29.14,
  "B0":  30.87,
  "C1":  32.70,
  "C#1": 34.65,
  "D1":  36.71,
  "D#1": 38.89,
  "E1":  41.20,
  "F1":  43.65,
  "F#1": 46.25,
  "G1":  49.00,
  "G#1": 51.91,
  "A1":  55.00,
  "A#1": 58.27,
  "B1":  61.74,
  "C2":  65.41,
  "C#2": 69.30,
  "D2":  73.42,
  "D#2": 77.78,
  "E2":  82.41,
  "F2":  87.31,
  "F#2": 92.50,
  "G2":  98.00,
  "G#2": 103.83,
  "A2":  110.00,
  "A#2": 116.54,
  "B2":  123.47,
  "C3":  130.81,
  "C#3": 138.59,
  "D3":  146.83,
  "D#3": 155.56,
  "E3":  164.81,
  "F3":  174.61,
  "F#3": 185.00,
  "G3":  196.00,
  "G#3": 207.65,
  "A3":  220.00,
  "A#3": 233.08,
  "B3":  246.94,
  "C4":  261.63,
  "C#4": 277.18,
  "D4":  293.66,
  "D#4": 311.13,
  "E4":  329.63,
  "F4":  349.23,
  "F#4": 369.99,
  "G4":  392.00,
  "G#4": 415.30,
  "A4":  440.00,
  "A#4": 466.16,
  "B4":  493.88,
  "C5":  523.25,
  "C#5": 554.37,
  "D5":  587.33,
  "D#5": 622.25,
  "E5":  659.25,
  "F5":  698.46,
  "F#5": 739.99,
  "G5":  783.99,
  "G#5": 830.61,
  "A5":  880.00,
  "A#5": 932.33,
  "B5":  987.77,
  "C6":  1046.50,
  "C#6": 1108.73,
  "D6":  1174.66,
  "D#6": 1244.51,
  "E6":  1318.51,
  "F6":  1396.91,
  "F#6": 1479.98,
  "G6":  1567.98,
  "G#6": 1661.22,
  "A6":  1760.00,
  "A#6": 1864.66,
  "B6":  1975.53,
  "C7":  2093.00,
  "C#7": 2217.46,
  "D7":  2349.32,
  "D#7": 2489.02,
  "E7":  2637.02,
  "F7":  2793.83,
  "F#7": 2959.96,
  "G7":  3135.96,
  "G#7": 3322.44,
  "A7":  3520.00,
  "A#7": 3729.31,
  "B7":  3951.07,
  "C8":  4186.01,
  "C#8": 4434.92,
  "D8":  4698.63,
  "D#8": 4978.03,
  "E8":  5274.04,
  "F8":  5587.65,
  "F#8": 5919.91,
  "G8":  6271.93,
  "G#8": 6644.88,
  "A8":  7040.00,
  "A#8": 7458.62,
  "B8":  7902.13,
}       

//Web Audio Context
const audioContext = new AudioContext();
const gainNode = audioContext.createGain(); //gain node for ADSR
// const mute = document.querySelector(".mute"); //gain node example
// const source; // gain node example
const oscillator = {};
const WAVEFORMS = ["sine", "triangle", "sawtooth", "square"];

//ADSR
// AudioParam.value = value;
// AudioParam.setValueAtTime();
// AudioParam.linearRampToValueAtTime();
// AudioParam.exponentialRampToValueAtTime();
// AudioParam.setTargetAtTime();
// AudioParam.setValueCurveAtTime();
// AudioParam.cancelScheduledValues();

const ADSR = {
  "attack": 1,
  "decay": 1,
  "sustain": 1,
  "release": 1,
};






//Keyboard
const keyboardKeyWhite = ["a", "s", "d", "f", "g", "h", "j"]
const keyboardKeyBlack = ["w", "e", "t", "y", "u"];
const notes = ["C", "D", "E", "F", "G", "A", "B"];
let htmlNotes = "";
for (let oct = 3; oct < 4; oct++) {
      for (let i = 0; i < notes.length; i++) {
        let hasSharp = true;
        let note = notes[i];
        if (note == "E" || note == "B") hasSharp = false;

        htmlNotes += `<div class='whiteNote' onmousedown='playNote(this, false)' onmouseup='releaseNote(this, false)' onmouseleave='releaseNote(this, false)' data-note='${
          note + (oct + 1)
        }'><div>${keyboardKeyWhite.shift()}</div>`; //access note key-value

        if (hasSharp) {
          htmlNotes += `<div class='blackNote' onmousedown='playNote(this, true)' onmouseup='releaseNote(this, true)' onmouseleave='releaseNote(this, true)' data-note='${
            note + "#" + (oct + 1)
          }'><div>${keyboardKeyBlack.shift()}</div></div>`; //access note key-value
        }

        htmlNotes += `</div>`;
      }
}
document.getElementById("keyboard").innerHTML = htmlNotes;


//Waveform Selector
var waveformSlider = `<div id="waveform-slider"><label>Waveform
<input type="range" min="0" max="3" step="1" value="0" id="waveform-slider-input" onchange="updateWaveformSlider(this.value)">
</label>
</div>`;
console.log(waveformSlider);

document.getElementById("osc-button").innerHTML = waveformSlider;


// console.log(sliderValue); // I don't know what this is

const updateWaveformSlider = (slideAmount) => {
  let slider = document.getElementById("waveform-slider-input");
  slider = slideAmount;
  console.log(slider)
  return sliderValue = slider;
}
var sliderValue = document.querySelector("#waveform-slider-input[value]").value;



// ADSR CONTROL
const adsrSlider = `<div id="adsr">
  <label>Attack
    <input type="range" min="0" max="3" step="0.1" value="0" id="adsr-a" onchange="updateAttackSlider(this.value)">
  </label>
  <label>Decay
    <input type="range" min="0" max="3" step="0.1" value="0" id="adsr-d" onchange="updateDecaySlider(this.value)">
  </label>
  <label>Sustain
    <input type="range" min="0" max="3" step="0.1" value="0" id="adsr-s" onchange="updateSustainSlider(this.value)">
  </label>
  <label>Release
    <input type="range" min="0" max="3" step="0.1" value="0" id="adsr-r" onchange="updateReleaseSlider(this.value)">
  </label>
</div>`;
console.log("adsrSlider");
console.log(adsrSlider);

document.getElementById("adsr").innerHTML = adsrSlider;


// console.log(sliderValue);

var updateADSRSlider = (sliderVal, sliderLane) => {
  let sliderADSR = document.getElementById("adsr").innerHTML;
  sliderADSR = sliderVal;
  console.log(sliderADSR)
  console.log(sliderLane);
  return
}
var updateAttackSlider = (sliderVal) => {
  let sliderADSR = document.getElementById("adsr-a").innerHTML;
  console.log(sliderADSR)
  sliderADSR = sliderVal;
  console.log(sliderADSR);
  ADSR.attack = sliderADSR
  console.log(ADSR);
}
var updateDecaySlider = (sliderVal) => {
  let sliderADSR = document.getElementById("adsr-a").innerHTML;
  console.log(sliderADSR)
  sliderADSR = sliderVal;
  console.log(sliderADSR);
  ADSR.decay = sliderADSR
  console.log(ADSR);
}
var updateSustainSlider = (sliderVal) => {
  let sliderADSR = document.getElementById("adsr-a").innerHTML;
  console.log(sliderADSR)
  sliderADSR = sliderVal;
  console.log(sliderADSR);
  ADSR.sustain = sliderADSR
  console.log(ADSR);
}
var updateReleaseSlider = (sliderVal) => {
  let sliderADSR = document.getElementById("adsr-a").innerHTML;
  console.log(sliderADSR)
  sliderADSR = sliderVal;
  console.log(sliderADSR);
  ADSR.release = sliderADSR
  console.log(ADSR);
}
// const adsrSlider = document.querySelector("#waveform-slider-input[value]").value;


    

// const noteUp = (e, isSharp) => {
//   e.style.background = isSharp
//     ? document.querySelector(".blackNote[background]")
//     : document.querySelector(".whiteNote[background]");
//   if (oscillator["osc"]) oscillator["osc"].stop();
// };
    

// const noteDown = (e, isSharp) => {
  //   // gainNode.gain.cancelScheduledValues(); // do I need this?
  //   let note = e.dataset.note;
  //   e.style.background = isSharp ? "turquoise" : "cyan";
  //   oscillator["osc"] = audioContext.createOscillator();
  //   oscillator["osc"].connect(audioContext.destination);
  //   oscillator["osc"].frequency.value = NOTE_FREQS[note];
  //   // oscillator["osc"].connect(gainNode);
  //   console.log(gainNode);
  
  //   oscillator["osc"].start();
  
  //   oscillator["osc"].type = WAVEFORMS[sliderValue];
  //   event.stopPropagation();
  // };
  
const releaseNote = (e, isSharp) => {
  const now = audioContext.currentTime;
  gainNode.gain.cancelScheduledValues(now);
  e.style.background = isSharp
    ? document.querySelector(".blackNote[background]")
    : document.querySelector(".whiteNote[background]");
  // if (oscillator["osc"]) oscillator["osc"].stop(noteOff());
  const relativeDuration = ADSR.release;
  const relativeEndTime = now + relativeDuration;
  gainNode.gain.setValueAtTime(gainNode.gain.value, now);
  gainNode.gain.linearRampToValueAtTime(0, relativeEndTime);
  oscillator["osc"].stop()
};

  const noteOff = () => {
  };
      

const playNote = (e, isSharp) => {
  e.style.background = isSharp ? "turquoise" : "cyan";
  let note = e.dataset.note;
  
  gainNode.gain.cancelScheduledValues(audioContext.currentTime); // do I need this?
  oscillator["osc"] = audioContext.createOscillator();
  oscillator["osc"].frequency.value = NOTE_FREQS[note];

  oscillator["osc"].connect(gainNode);
  gainNode.connect(audioContext.destination)
  
  oscillator["osc"].start(noteOn());
  
  oscillator["osc"].type = WAVEFORMS[sliderValue];
  event.stopPropagation();
};

  const noteOn = () => {

   

    const now = audioContext.currentTime;
    gainNode.gain.cancelScheduledValues(now);
    const attackDuration = ADSR.attack
    const attackEndTime = now + attackDuration;
    const decayDuration = ADSR.decay

    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(1, attackEndTime);
    gainNode.gain.setTargetAtTime(ADSR.sustain, attackEndTime, decayDuration);
  };


// const gainNode = audioContext.createGain();




// keysListener() {
//   document.addEventListener("keydown", (e) => {
//     switch(e.key) {
//       case "a":
//         //pays existing C note
//         break;
//       case "w":
//         //pays existing C# note
//         break;
//       case "s":
//         //pays existing D note
//         break;
//       case "e":
//         //pays existing D# note
//         break;
//       case "d":
//         //pays existing E note
//         break;
//       case "f":
//         //pays existing F note
//         break;
//       case "t":
//         //pays existing F# note
//         break;
//       case "g":
//         //pays existing G note
//         break;
//       case "y":
//         //pays existing G# note
//         break;
//       case "h":
//         //pays existing A note
//         break;
//       case "u":
//         //pays existing A# note
//         break;
//       case "j":
//         //pays existing B note
//         break;
//       default:
//         break;
//     }
//   })
// }