

// if (window.navigator.platform.startsWith() === 'Mac') {
if (window.navigator.platform.startsWith('Win')) {
  // document.body.classList.add("mac")
  document.body.style.fontFamily = 'Segoe UI'
  // document.b.style.color = "green"
  
}

COUNT = 0; //reset osc count
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
  "C9":  8345.64,
  "C#9": 8789.15,
  "D9":  9232.66,
  "D#9": 9676.17,
  "E9": 10119.68
}
//Keyboard
  const keyboardKeyWhite = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"]
  const keyboardKeyWhite2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"]
  const keyboardKeyBlack = ["w", "e", "t", "y", "u", "o", "p"];
  const keyboardKeyBlack2 = ["w", "e", "t", "y", "u", "o", "p"];
  const notes = ["C", "D", "E", "F", "G", "A", "B", "C", "D", "E"];
  var htmlNotes = "";
  function setKeysAtOctave(octave = 2) {
    htmlNotes = "";
    for (let oct = octave; oct < octave + 1; oct++) {
      for (let i = 0; i < notes.length; i++) {
        let hasSharp = true;
        let note = notes[i];
        if (note == "E" || note == "B") hasSharp = false;

        htmlNotes += 
        `<div 
          id='${keyboardKeyWhite2.shift().split("<")[0]}' 
          class='whiteNote' 
          data-note='${note}'
        >
        <div class="font-control" id="${i}-white">${keyboardKeyWhite.shift()}</div>`; //access note key-value

        if (hasSharp) {
          htmlNotes += 
          `<div 
            id='${keyboardKeyBlack2.shift().split("<")[0]}' 
            class='blackNote'
            data-note='${note + "#" + (oct + 1)}'
            >
              <div class="font-control" id="${i}-black">${keyboardKeyBlack.shift()}
              </div>
          </div>`; //access note key-value
        }

        htmlNotes += `</div>`;
      }
    }
  }
  var OCTAVE = 3
  setKeysAtOctave()
  document.getElementById("keyboard").innerHTML = htmlNotes;

// END KEYBOARD

document.addEventListener("keydown", (e) => {
  console.log("octave", OCTAVE)
  switch (e.key) {
    case "a":
      console.log("a pressed");
      playKey(`${"C" + OCTAVE}`, "a");
      pressedKeys["a"].on = true;
      break;
    case "w":
        playKey(`${"C#" + OCTAVE}`, "w");
        pressedKeys["w"].on = true
      break;
    case "s":
        playKey(`${"D" + OCTAVE}`, "s");
        pressedKeys["s"].on = true
      break;
    case "e":
        playKey(`${"D#" + OCTAVE}`, "e");
        pressedKeys["e"].on = true
      break;
    case "d":
        playKey(`${"E" + OCTAVE}`, "d");
        pressedKeys["d"].on = true
      break;
    case "f":
        playKey(`${"F" + OCTAVE}`, "f");
        pressedKeys["f"].on = true
      break;
    case "t":
        playKey(`${"F#" + OCTAVE}`, "t");
        pressedKeys["t"].on = true
      break;
    case "g":
        playKey(`${"G" + OCTAVE}`, "g");
        pressedKeys["g"].on = true
      break;
    case "y":
        playKey(`${"G#" + OCTAVE}`, "y");
        pressedKeys["y"].on = true
      break;
    case "h":
        playKey(`${"A" + OCTAVE}`, "h");
        pressedKeys["h"].on = true
      break;
    case "u":
        playKey(`${"A#" + OCTAVE}`, "u");
        pressedKeys["u"].on = true
      break;
    case "j":
        playKey(`${"B" + OCTAVE}`, "j");
        pressedKeys["j"].on = true
      break;
    case "k":
        playKey(`${"C" + (OCTAVE + 1)}`, "k");
        pressedKeys["k"].on = true
      break;
    case "o":
        playKey(`${"C#" + (OCTAVE + 1)}`, "o");
        pressedKeys["o"].on = true
      break;
    case "l":
        playKey(`${"D" + (OCTAVE + 1)}`, "l");
        pressedKeys["l"].on = true
      break;
    case "p":
        playKey(`${"D#" + (OCTAVE + 1)}`, "p");
        pressedKeys["p"].on = true
      break;
    case ";":
        playKey(`${"E" + (OCTAVE + 1)}`, ";");
        pressedKeys[";"].on = true
      break;
    case "z":
      if (OCTAVE > 0) {
        OCTAVE--
        octatePress("down")
      }
      break;
    case "x":
      if (OCTAVE < 8) {
        OCTAVE++
        octatePress("up")
      }
      break;
    case "m":
      disconnectAll()
      break;
    case "n":
      deleteOscs()
      break;
    default:
      break;
  }
})
document.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "a":
      pressedKeys["a"].on = false;
      unplayKey(`${"C" + OCTAVE}`, "a");
      break;
    case "w":
      pressedKeys["w"].on = false;
      unplayKey(`${"C#" + OCTAVE}`, "w");
      break;
    case "s":
      pressedKeys["s"].on = false;
      unplayKey(`${"D" + OCTAVE}`, "s");
      break;
    case "e":
      pressedKeys["e"].on = false;
      unplayKey(`${"D#" + OCTAVE}`, "e");
      break;
    case "d":
      pressedKeys["d"].on = false;
      unplayKey(`${"E" + OCTAVE}`, "d");
      break;
      case "f":
      pressedKeys["f"].on = false;
      unplayKey(`${"F" + OCTAVE}`, "f");
      break;
      case "t":
      pressedKeys["t"].on = false;
      unplayKey(`${"F#" + OCTAVE}`, "t");
      break;
      case "g":
      pressedKeys["g"].on = false;
      unplayKey(`${"G" + OCTAVE}`, "g");
      break;
      case "y":
      pressedKeys["y"].on = false;
      unplayKey(`${"G#" + OCTAVE}`, "y");
      break;
      case "h":
      pressedKeys["h"].on = false;
      unplayKey(`${"A" + OCTAVE}`, "h");
      break;
      case "u":
      pressedKeys["u"].on = false;
      unplayKey(`${"A#" + OCTAVE}`, "u");
      break;
      case "j":
      pressedKeys["j"].on = false;
      unplayKey(`${"B" + OCTAVE}`, "j");
      break;
      case "k":
      pressedKeys["k"].on = false;
      unplayKey(`${"C" + (OCTAVE + 1)}`, "k");
      break;
      case "o":
        pressedKeys["o"].on = false;
        unplayKey(`${"C#" + (OCTAVE + 1)}`, "o");
        break;
      case "l":
        pressedKeys["l"].on = false;
        unplayKey(`${"D" + (OCTAVE + 1)}`, "l");
        break;
      case "p":
        pressedKeys["p"].on = false;
        unplayKey(`${"D#" + (OCTAVE + 1)}`, "p");
        break;
      case ";":
        pressedKeys[";"].on = false;
        unplayKey(`${"E" + (OCTAVE + 1)}`, ";");
        break;
      case "z":
        octateRelease("down")
        break
      case "x":
        octateRelease("up")
    default:
      break;
  }
});
function playKey(note, key) {
  playNote(note, key);
  document.getElementById(`${key}`).style.backgroundColor = "rgba(152, 55, 96, 0.7)"
};
function unplayKey(_, key) {
  noteRelease(key);
  document.getElementById(`${key}`).style.backgroundColor = ""
  COUNT++;
  if (COUNT > 100) {
    deleteOscs()
    COUNT = 0
  }
};
function octatePress(dir) {
  document.getElementById(`${dir}`).style.backgroundColor = "rgba(152, 55, 96, 0.7)"
}
function octateRelease(dir) {
  document.getElementById(`${dir}`).style.backgroundColor = ""
}
var pressedKeys = {
  "a": {on: false, pressTime: "", clearTime: Date.now(), id: ""},  //c
  "w": {on: false, pressTime: "", clearTime: Date.now(), id: ""},  //c#
  "s": {on: false, pressTime: "", clearTime: Date.now(), id: ""},  //d
  "e": {on: false, pressTime: "", clearTime: Date.now(), id: ""},  //d# eb
  "d": {on: false, pressTime: "", clearTime: Date.now(), id: ""},  //e
  "f": {on: false, pressTime: "", clearTime: Date.now(), id: ""},  //f
  "t": {on: false, pressTime: "", clearTime: Date.now(), id: ""},  //f#
  "g": {on: false, pressTime: "", clearTime: Date.now(), id: ""},  //g
  "y": {on: false, pressTime: "", clearTime: Date.now(), id: ""},  //g#
  "h": {on: false, pressTime: "", clearTime: Date.now(), id: ""},  //a
  "u": {on: false, pressTime: "", clearTime: Date.now(), id: ""},  //a# bb
  "j": {on: false, pressTime: "", clearTime: Date.now(), id: ""},  //c
  "o": {on: false, pressTime: "", clearTime: Date.now(), id: ""},  //c#
  "k": {on: false, pressTime: "", clearTime: Date.now(), id: ""},  //d
  "p": {on: false, pressTime: "", clearTime: Date.now(), id: ""},  //d# eb
  "l": {on: false, pressTime: "", clearTime: Date.now(), id: ""},  //e
  ";": {on: false, pressTime: "", clearTime: Date.now(), id: ""},  //e
};
// let mouseNotes = {}
// const notesToPress = Object.keys(pressedKeys);
// notesToPress.forEach(ele =>
//   mouseNotes[ele] = document.getElementById(ele)
// )

const note_a = document.getElementById("a")
const note_w = document.getElementById("w")
const note_s = document.getElementById("s")
const note_e = document.getElementById("e")
const note_d = document.getElementById("d")
const note_f = document.getElementById("f")
const note_t = document.getElementById("t")
const note_g = document.getElementById("g")
const note_y = document.getElementById("y")
const note_h = document.getElementById("h")
const note_u = document.getElementById("u")
const note_j = document.getElementById("j")
const note_k = document.getElementById("k")
const note_o = document.getElementById("o")
const note_l = document.getElementById("l")
const note_p = document.getElementById("p")
const note_semicolon = document.getElementById(`;`)
const octave_z = document.getElementById("up")
const octave_x = document.getElementById("down")

function mouseWhiteNote (e, assocKey, idNum) {
  e.preventDefault();
  if (e.target === document.getElementById(`${idNum}-black`)) return;
  if (e.type === 'mousedown') {
    document.dispatchEvent(new KeyboardEvent('keydown',{'key': assocKey}));
  } else {
    document.dispatchEvent(new KeyboardEvent('keyup',{'key': assocKey}));
  }
}
function mouseBlackNote (e, assocKey, idNum) {
  e.preventDefault();
  if (e.type === 'mousedown') {
    document.dispatchEvent(new KeyboardEvent('keydown',{'key': assocKey}));
  } else {
    document.dispatchEvent(new KeyboardEvent('keyup',{'key': assocKey}));
  }
}
function octaveDownPress(e) {e.preventDefault(); document.dispatchEvent(new KeyboardEvent('keydown',{'key': "x"}))}
function octaveDownRelease(e) {e.preventDefault(); document.dispatchEvent(new KeyboardEvent('keyup',{'key': "x"}))}
function octaveUpPress(e) {e.preventDefault(); document.dispatchEvent(new KeyboardEvent('keydown',{'key': "z"}))} 
function octaveUpRelease(e) {e.preventDefault(); document.dispatchEvent(new KeyboardEvent('keyup',{'key': "z"}))} 
octave_x.addEventListener       ('mousedown', octaveUpPress)
octave_x.addEventListener       ('mouseup', octaveUpRelease)
octave_z.addEventListener       ('mousedown', octaveDownPress)
octave_z.addEventListener       ('mouseup', octaveDownRelease)


note_a.addEventListener         ('mousedown', function(e){mouseWhiteNote(e, "a", 0)})
note_w.addEventListener         ('mousedown', function(e){mouseBlackNote(e, "w", 0)})
note_s.addEventListener         ('mousedown', function(e){mouseWhiteNote(e, "s", 1)})
note_e.addEventListener         ('mousedown', function(e){mouseBlackNote(e, "e", 1)})
note_d.addEventListener         ('mousedown', function(e){mouseWhiteNote(e, "d", 2)})
note_f.addEventListener         ('mousedown', function(e){mouseWhiteNote(e, "f", 3)})
note_t.addEventListener         ('mousedown', function(e){mouseBlackNote(e, "t", 3)})
note_g.addEventListener         ('mousedown', function(e){mouseWhiteNote(e, "g", 4)})
note_y.addEventListener         ('mousedown', function(e){mouseBlackNote(e, "y", 4)})
note_h.addEventListener         ('mousedown', function(e){mouseWhiteNote(e, "h", 5)})
note_u.addEventListener         ('mousedown', function(e){mouseBlackNote(e, "u", 5)})
note_j.addEventListener         ('mousedown', function(e){mouseWhiteNote(e, "j", 6)})
note_k.addEventListener         ('mousedown', function(e){mouseWhiteNote(e, "k", 7)})
note_o.addEventListener         ('mousedown', function(e){mouseBlackNote(e, "o", 7)})
note_l.addEventListener         ('mousedown', function(e){mouseWhiteNote(e, "l", 8)})
note_p.addEventListener         ('mousedown', function(e){mouseBlackNote(e, "p", 8)})
note_semicolon.addEventListener ('mousedown', function(e){mouseWhiteNote(e, `;`, 9)})
note_a.addEventListener         ('mouseup', function(e){mouseWhiteNote(e, "a", 0)})
note_w.addEventListener         ('mouseup', function(e){mouseBlackNote(e, "w", 0)})
note_s.addEventListener         ('mouseup', function(e){mouseWhiteNote(e, "s", 1)})
note_e.addEventListener         ('mouseup', function(e){mouseBlackNote(e, "e", 1)})
note_d.addEventListener         ('mouseup', function(e){mouseWhiteNote(e, "d", 2)})
note_f.addEventListener         ('mouseup', function(e){mouseWhiteNote(e, "f", 3)})
note_t.addEventListener         ('mouseup', function(e){mouseBlackNote(e, "t", 3)})
note_g.addEventListener         ('mouseup', function(e){mouseWhiteNote(e, "g", 4)})
note_y.addEventListener         ('mouseup', function(e){mouseBlackNote(e, "y", 4)})
note_h.addEventListener         ('mouseup', function(e){mouseWhiteNote(e, "h", 5)})
note_u.addEventListener         ('mouseup', function(e){mouseBlackNote(e, "u", 5)})
note_j.addEventListener         ('mouseup', function(e){mouseWhiteNote(e, "j", 6)})
note_k.addEventListener         ('mouseup', function(e){mouseWhiteNote(e, "k", 7)})
note_o.addEventListener         ('mouseup', function(e){mouseBlackNote(e, "o", 7)})
note_l.addEventListener         ('mouseup', function(e){mouseWhiteNote(e, "l", 8)})
note_p.addEventListener         ('mouseup', function(e){mouseBlackNote(e, "p", 8)})
note_semicolon.addEventListener ('mouseup', function(e){mouseWhiteNote(e, `;`, 9)})
note_a.addEventListener         ('mouseleave', function(e){mouseWhiteNote(e, "a", 0)})
note_w.addEventListener         ('mouseleave', function(e){mouseBlackNote(e, "w", 0)})
note_s.addEventListener         ('mouseleave', function(e){mouseWhiteNote(e, "s", 1)})
note_e.addEventListener         ('mouseleave', function(e){mouseBlackNote(e, "e", 1)})
note_d.addEventListener         ('mouseleave', function(e){mouseWhiteNote(e, "d", 2)})
note_f.addEventListener         ('mouseleave', function(e){mouseWhiteNote(e, "f", 3)})
note_t.addEventListener         ('mouseleave', function(e){mouseBlackNote(e, "t", 3)})
note_g.addEventListener         ('mouseleave', function(e){mouseWhiteNote(e, "g", 4)})
note_y.addEventListener         ('mouseleave', function(e){mouseBlackNote(e, "y", 4)})
note_h.addEventListener         ('mouseleave', function(e){mouseWhiteNote(e, "h", 5)})
note_u.addEventListener         ('mouseleave', function(e){mouseBlackNote(e, "u", 5)})
note_j.addEventListener         ('mouseleave', function(e){mouseWhiteNote(e, "j", 6)})
note_k.addEventListener         ('mouseleave', function(e){mouseWhiteNote(e, "k", 7)})
note_o.addEventListener         ('mouseleave', function(e){mouseBlackNote(e, "o", 7)})
note_l.addEventListener         ('mouseleave', function(e){mouseWhiteNote(e, "l", 8)})
note_p.addEventListener         ('mouseleave', function(e){mouseBlackNote(e, "p", 8)})
note_semicolon.addEventListener ('mouseleave', function(e){mouseWhiteNote(e, `;`, 9)})

function touchWhiteNote (e, assocKey, idNum) {
  e.preventDefault();
  if (e.target === document.getElementById(`${idNum}-black`)) return;
  if (e.type === 'touchstart') {
    document.dispatchEvent(new KeyboardEvent('keydown',{'key': assocKey}));
  } else {
    document.dispatchEvent(new KeyboardEvent('keyup',{'key': assocKey}));
  }
}
function touchBlackNote (e, assocKey, idNum) {
  e.preventDefault();
  if (e.type === 'touchstart') {
    document.dispatchEvent(new KeyboardEvent('keydown',{'key': assocKey}));
  } else {
    document.dispatchEvent(new KeyboardEvent('keyup',{'key': assocKey}));
  }
}
note_a.addEventListener         ('touchstart', (e) => {e.preventDefault();console.log("touching you"); touchWhiteNote(e, "a", 0)})
note_w.addEventListener         ('touchstart', function(e){e.preventDefault(); touchBlackNote(e, "w", 0)})
note_s.addEventListener         ('touchstart', function(e){touchWhiteNote(e, "s", 1)})
note_e.addEventListener         ('touchstart', function(e){touchBlackNote(e, "e", 1)})
note_d.addEventListener         ('touchstart', function(e){touchWhiteNote(e, "d", 2)})
note_f.addEventListener         ('touchstart', function(e){touchWhiteNote(e, "f", 3)})
note_t.addEventListener         ('touchstart', function(e){touchBlackNote(e, "t", 3)})
note_g.addEventListener         ('touchstart', function(e){touchWhiteNote(e, "g", 4)})
note_y.addEventListener         ('touchstart', function(e){touchBlackNote(e, "y", 4)})
note_h.addEventListener         ('touchstart', function(e){touchWhiteNote(e, "h", 5)})
note_u.addEventListener         ('touchstart', function(e){touchBlackNote(e, "u", 5)})
note_j.addEventListener         ('touchstart', function(e){touchWhiteNote(e, "j", 6)})
note_k.addEventListener         ('touchstart', function(e){touchWhiteNote(e, "k", 7)})
note_o.addEventListener         ('touchstart', function(e){touchBlackNote(e, "o", 7)})
note_l.addEventListener         ('touchstart', function(e){touchWhiteNote(e, "l", 8)})
note_p.addEventListener         ('touchstart', function(e){touchBlackNote(e, "p", 8)})
note_semicolon.addEventListener ('touchstart', function(e){touchWhiteNote(e, `;`, 9)})
note_a.addEventListener         ('touchend', (e) => {e.preventDefault(); console.log("touching me"); touchWhiteNote(e, "a", 0)})
note_w.addEventListener         ('touchend', function(e){touchBlackNote(e, "w", 0)})
note_s.addEventListener         ('touchend', function(e){touchWhiteNote(e, "s", 1)})
note_e.addEventListener         ('touchend', function(e){touchBlackNote(e, "e", 1)})
note_d.addEventListener         ('touchend', function(e){touchWhiteNote(e, "d", 2)})
note_f.addEventListener         ('touchend', function(e){touchWhiteNote(e, "f", 3)})
note_t.addEventListener         ('touchend', function(e){touchBlackNote(e, "t", 3)})
note_g.addEventListener         ('touchend', function(e){touchWhiteNote(e, "g", 4)})
note_y.addEventListener         ('touchend', function(e){touchBlackNote(e, "y", 4)})
note_h.addEventListener         ('touchend', function(e){touchWhiteNote(e, "h", 5)})
note_u.addEventListener         ('touchend', function(e){touchBlackNote(e, "u", 5)})
note_j.addEventListener         ('touchend', function(e){touchWhiteNote(e, "j", 6)})
note_k.addEventListener         ('touchend', function(e){touchWhiteNote(e, "k", 7)})
note_o.addEventListener         ('touchend', function(e){touchBlackNote(e, "o", 7)})
note_l.addEventListener         ('touchend', function(e){touchWhiteNote(e, "l", 8)})
note_p.addEventListener         ('touchend', function(e){touchBlackNote(e, "p", 8)})
note_semicolon.addEventListener ('touchend', function(e){touchWhiteNote(e, `;`, 9)})


















// touch.addEventListener("mousedown", pressingDown, false);
// touch.addEventListener("mouseup", notPressingDown, false);
// touch.addEventListener("mouseleave", notPressingDown, false);

// touch.addEventListener("touchstart", pressingDown, false);
// touch.addEventListener("touchend", notPressingDown, false);
// // touch.addEventListener("pressHold", doSomething, false); //maybe redundant
function pressingDown(e) {
  e.preventDefault();
  console.log("e", e)
  // document.getElementsByClassName(e).style.backgroundColor = "white"
}
// function notPressingDown(e) {
//   document.getElementsByClassName("whiteNote").style.backgroundColor = ""
// }


















//Sliders
let DETUNE = 1;
let FM = 0;
const WAVEFORMS = ["sine", "triangle", "sawtooth", "square"];
const ADSR = {
  attack: 0.1,
  decay: 0.3,
  sustain: 1,
  release: 0.1,
};

function deleteOscs() {
  Object.keys(oscillator).forEach(key => {
    if (key.startsWith("osc") || key.startsWith("2osc") || key.startsWith("3osc") || key.startsWith("FM")) {
      oscillator[key].stop();
      oscillator[key].disconnectAll;
      delete oscillator[key];
    }
  });
  Object.keys(amplifier).forEach(key => {
    if (key.startsWith("osc") || key.startsWith("2osc") || key.startsWith("3osc") || key.startsWith("FM")) {
      amplifier[key].disconnectAll;
      delete amplifier[key];
    }
  });
}

//Web Audio Context
var audioContext = new AudioContext();
var oscillator = {};
var amplifier = {};
var filter = audioContext.createBiquadFilter();
  filter.frequency.value = 22050
var filter2 = audioContext.createBiquadFilter();
  filter2.frequency.value = 22050
var delay = audioContext.createDelay();
  delay.delayTime.value = 0;
var distortion = audioContext.createWaveShaper();
  distortion.curve = Float32Array.from([0, 0]);
var compressor = audioContext.createDynamicsCompressor();
  compressor.knee = 30;
  compressor.threshold = -10;
  compressor.ratio = 20;
  compressor.attack = 0.1;
  compressor.release = 0.5;
  
amplifier.mixBus = audioContext.createGain();
  amplifier.mixBus.gain.value = 0.4;
amplifier.bus = audioContext.createGain();
  amplifier.bus.gain.value = 0.4;
amplifier.bus2 = audioContext.createGain();
  amplifier.bus.gain.value = 0.4;
amplifier.distortion = audioContext.createGain();
  amplifier.distortion.gain.value = 0;
amplifier.feedback = audioContext.createGain();
  amplifier.feedback.gain.value = 0.5;
amplifier.delay = audioContext.createGain();
  amplifier.delay.gain.value = 1;

amplifier.bus.connect(filter);
filter.connect(distortion);
filter.connect(amplifier.bus2);
distortion.connect(amplifier.distortion);
amplifier.distortion.connect(amplifier.bus2);

amplifier.bus2.connect(delay);
delay.connect(amplifier.feedback);
amplifier.feedback.connect(delay);
delay.connect(amplifier.delay);

// route efx busses to filter to compressor to output
amplifier.bus2.connect(filter2)
amplifier.delay.connect(filter2);
distortion.connect(filter2);
filter2.connect(compressor);
compressor.connect(amplifier.mixBus);

//Waveform Selector
var waveformSlider = `<div id="waveform-slider"><label><div class="font-control">
Waveform 
</div>
  <input type="range" min="0" max="3" step="1" value="0" id="waveform-slider-input" onchange="updateWaveformSlider(this.value)">
  </label>
  </div>`;
document.getElementById("osc-button").innerHTML = waveformSlider;

const updateWaveformSlider = (slideAmount) => {
  let slider = document.getElementById("waveform-slider-input");
  slider = slideAmount;
  return sliderValue = slider;
};
var sliderValue = document.querySelector("#waveform-slider-input[value]").value;

// SLIDER CONTROL
const adsrSlider = `<div class="sliders" id="adsr">
  <label><div class="font-control">Attack</div>
    <input type="range" min="1" max="120" step="1" value="1" id="adsr-a" onchange="updateAttackSlider(this.value)">
  </label>
  <label><div class="font-control">Decay</div>
    <input type="range" min="1" max="120" step="1" value="1" id="adsr-d" onchange="updateDecaySlider(this.value)">
  </label>
  <label><div class="font-control">Sustain</div>
    <input type="range" min="0" max="1" step="0.1" value="1" id="adsr-s" onchange="updateSustainSlider(this.value)">
  </label>
  <label><div class="font-control">Release</div>
    <input type="range" min="1" max="120" step="1" value="1" id="adsr-r" onchange="updateReleaseSlider(this.value)">
  </label>
  <label><div class="font-control">FM</div>
    <input type="range" min="1" max="120" step="1" value="1" id="FM" onchange="updateFM(this.value)">
  </label>
  <label><div class="font-control">Pre-Filter</div>
    <input type="range" min="1" max="120" step="1" value="120" id="filter" onchange="updateFilter(this.value)">
  </label>
  <label><div class="font-control">Pre-Filter Q</div>
    <input type="range" min="1" max="120" step="1" value="10" id="filterQ" onchange="updateFilterQ(this.value)">
  </label>
  <label><div class="font-control">Post-Filter</div>
    <input type="range" min="1" max="120" step="1" value="120" id="filter2" onchange="updateFilter2(this.value)">
  </label>
  <label><div class="font-control">Post-Filter Q</div>
    <input type="range" min="1" max="120" step="1" value="10" id="filterQ2" onchange="updateFilterQ2(this.value)">
  </label>
  <label><div class="font-control">Delay Time</div>
    <input type="range" min="1" max="120" step="1" value="1" id="delayTime" onchange="updateDelayTime(this.value)">
  </label>
  <label><div class="font-control">Delay Feedback</div>
    <input type="range" min="1" max="120" step="1" value="1" id="delayFeedback" onchange="updateDelayFeedback(this.value)">
  </label>
  <label><div class="font-control">Detune</div>
    <input type="range" min="0" max="0.02973" step="0.00003" value="0" id="detune" onchange="updateDetune(this.value)">
  </label>
  <label><div class="font-control">Distortion Gain</div>
    <input type="range" min="1" max="120" step="1" value="1" id="distortion" onchange="updateDistortion(this.value)">
  </label>
  <label><div class="font-control">Distortion Wave</div>
    <input type="range" min="0" max="1" step="0.01" value="0" id="distortionWave" onchange="updateDistortionWave(this.value)">
  </label>
</div>`;
function sliderExponential(val, min, max) {
  theConstant = Math.pow(max, 1/120) / Math.pow(min, 1/120) 
  return min * theConstant ** val
}

document.getElementById("adsr").innerHTML = adsrSlider;

var updateAttackSlider = (sliderVal) => {
  let sliderADSR = parseFloat(document.getElementById("adsr-a").innerHTML);
  sliderADSR = sliderVal;
  ADSR.attack = sliderExponential(sliderADSR, 1, 4) - 1
  console.log("ADSR.attack", ADSR.attack)
};
var updateDecaySlider = (sliderVal) => {
  let sliderADSR = parseFloat(document.getElementById("adsr-d").innerHTML);
  sliderADSR = sliderVal;
  ADSR.decay = sliderExponential(sliderADSR, 1, 4) - 1
  console.log("ADSR.decay", ADSR.decay)
};
var updateSustainSlider = (sliderVal) => {
  let sliderADSR = parseFloat(document.getElementById("adsr-s").innerHTML);
  sliderADSR = sliderVal;
  ADSR.sustain = sliderADSR
  console.log("ADSR.sustain", ADSR.sustain)
};
var updateReleaseSlider = (sliderVal) => {
  let sliderADSR = parseFloat(document.getElementById("adsr-r").innerHTML);
  sliderADSR = sliderVal;
  ADSR.release = sliderExponential(sliderADSR, 1, 4) - 1
  console.log("ADSR", ADSR.release)
};
var updateFM = (sliderVal) => {
  let sliderFM = parseFloat(document.getElementById("FM").innerHTML);
  sliderFM = sliderVal;
  FM = sliderExponential(sliderFM, 1, 10000) - 1
  console.log("FM", FM)
};
var updateFilter = (sliderVal) => {
  let sliderFilter = parseFloat(document.getElementById("filter").innerHTML);
  sliderFilter = sliderVal;
  filter.frequency.value = sliderExponential(sliderFilter, 20, 22050)
  console.log("Filter", filter.frequency.value)
};
var updateFilterQ = (sliderVal) => {
  let sliderFilterQ = parseFloat(document.getElementById("filterQ").innerHTML);
  sliderFilterQ = sliderVal;
  filter.Q.value = sliderExponential(sliderFilterQ, 1, 30)
  console.log("FilterQ", filter.Q.value)
};
var updateFilter2 = (sliderVal) => {
  let sliderFilter = parseFloat(document.getElementById("filter2").innerHTML);
  sliderFilter = sliderVal;
  filter2.frequency.value = sliderExponential(sliderFilter, 20, 22050)
  console.log("Filter", filter2.frequency.value)
};
var updateFilterQ2 = (sliderVal) => {
  let sliderFilterQ = parseFloat(document.getElementById("filterQ2").innerHTML);
  sliderFilterQ = sliderVal;
  filter2.Q.value = sliderExponential(sliderFilterQ, 1, 30)
  console.log("FilterQ", filter2.Q.value)
};
var updateDelayTime = (sliderVal) => {
  let sliderDelay = parseFloat(document.getElementById("delayTime").innerHTML);
  sliderDelay = sliderVal;
  delay.delayTime.value = sliderExponential(sliderDelay, 1, 3) - 1 // 0, 1.6 with 0.2 steps
  console.log("delay time", delay.delayTime.value)
};
var updateDelayFeedback = (sliderVal) => {
  let sliderDelay = parseFloat(document.getElementById("delayFeedback").innerHTML);
  sliderDelay = sliderVal;
  amplifier.feedback.gain.value = sliderExponential(sliderDelay, 1, 2) - 1
  console.log(amplifier.feedback.gain.value)
};
var updateDetune = (sliderVal) => {
  let sliderDetune = parseFloat(document.getElementById("detune").innerHTML);
  sliderDetune = sliderVal;
  DETUNE = 1 + parseFloat(sliderDetune)
  console.log(DETUNE)
};
var updateDistortion = (sliderVal) => {
  let sliderDistortion = parseFloat(document.getElementById("distortion").innerHTML);
  sliderDistortion = sliderVal;
  amplifier.distortion.gain.value = sliderExponential(sliderDistortion, 1, 2) - 1
  console.log(amplifier.distortion.gain.value)
};
var updateDistortionWave = (sliderVal) => {
  let sliderDistortion = parseFloat(document.getElementById("distortionWave").innerHTML);
  sliderDistortion = sliderVal;
  distortion.curve = distortionCurve(sliderDistortion)
  console.log(typeof distortion.curve)
};
  function distortionCurve(sliderVal) {
    return distortion.curve = Float32Array.from([-(sliderVal * 0.8), sliderVal, 0, -sliderVal, (sliderVal * 0.8)])
  };

const uptune = (note) => {
  return (note * DETUNE)
};
const downtune = (note) => {
  return (note / DETUNE)
};

const playNote = (note, key) => {
  let noteFreq = Number(NOTE_FREQS[note]);
  console.log(noteFreq);
  if (
    (pressedKeys[key].on === false)
    ) {  
    let oscID = audioContext.currentTime + key;                                       
    pressedKeys[key].id = oscID;                                
    oscillator[`osc+${oscID}`] = audioContext.createOscillator();           
      oscillator[`2osc+${oscID}`] = audioContext.createOscillator();
      oscillator[`3osc+${oscID}`] = audioContext.createOscillator();
    oscillator[`osc+${oscID}`].frequency.value = NOTE_FREQS[note];          
      oscillator[`2osc+${oscID}`].frequency.value = uptune(noteFreq);          
      oscillator[`3osc+${oscID}`].frequency.value = downtune(noteFreq);          
    oscillator[`osc+${oscID}`].type = WAVEFORMS[sliderValue];               
      oscillator[`2osc+${oscID}`].type = WAVEFORMS[sliderValue];               
      oscillator[`3osc+${oscID}`].type = WAVEFORMS[sliderValue];               
    oscillator[`FM+${oscID}`] = audioContext.createOscillator();          
      oscillator[`FM+${oscID}`].frequency.value = NOTE_FREQS[note];         
      oscillator[`FM+${oscID}`].type = WAVEFORMS[sliderValue];              
      amplifier [`FM+${oscID}`] = audioContext.createGain();
      amplifier [`FM+${oscID}`].gain.value = FM;
      oscillator[`FM+${oscID}`].connect(amplifier[`FM+${oscID}`]);
      amplifier [`FM+${oscID}`].connect(oscillator[`osc+${oscID}`].frequency);
        amplifier [`FM+${oscID}`].connect(oscillator[`2osc+${oscID}`].frequency);
        amplifier [`FM+${oscID}`].connect(oscillator[`3osc+${oscID}`].frequency);
    amplifier[`osc+${oscID}`] = { 
        attack: audioContext.createGain(), 
        decay: audioContext.createGain(), 
        release: audioContext.createGain()
      };

    oscillator[`osc+${oscID}`].start();
    oscillator[`2osc+${oscID}`].start();
    oscillator[`3osc+${oscID}`].start();
    noteAttack(key);
  } else {
    null;
  }
};

const noteAttack = (key) => {
  let oscID = pressedKeys[key].id;
  oscillator[`FM+${pressedKeys[key].id}`].start(); 
  oscillator[`osc+${oscID}`].connect(amplifier[`osc+${oscID}`].attack);
  oscillator[`2osc+${oscID}`].connect(amplifier[`osc+${oscID}`].attack);
  oscillator[`3osc+${oscID}`].connect(amplifier[`osc+${oscID}`].attack);
  const now = audioContext.currentTime;
  const attackDuration = parseFloat(ADSR.attack);
  const attackEndTime = now + attackDuration;
  amplifier[`osc+${oscID}`].attack.gain.setValueAtTime(0, now);
  amplifier[`osc+${oscID}`].attack.gain.linearRampToValueAtTime(1, attackEndTime);
  amplifier [`osc+${oscID}`].attack.connect(amplifier[`osc+${oscID}`].decay);
  const decayRate = parseFloat(ADSR.decay);
  const sustainAmplitude = parseFloat(ADSR.sustain);
  amplifier[`osc+${oscID}`].decay.gain.setTargetAtTime(sustainAmplitude, attackEndTime, decayRate);
  amplifier[`osc+${oscID}`].decay.connect(amplifier.bus);
}

const noteRelease = (key) => {
  let oscID = pressedKeys[key].id;
  let now = audioContext.currentTime;
  const releaseTime = parseFloat(ADSR.release);
  amplifier[`osc+${oscID}`].decay.disconnect(amplifier.bus);
  amplifier[`osc+${oscID}`].decay.connect(amplifier[`osc+${oscID}`].release);
  amplifier[`osc+${oscID}`].release.gain.cancelScheduledValues(now);
  amplifier[`osc+${oscID}`].release.gain.setTargetAtTime(0, now, releaseTime);
    amplifier[`FM+${oscID}`].gain.cancelScheduledValues(now);
    amplifier[`FM+${oscID}`].gain.setTargetAtTime(0, now, releaseTime);
  amplifier[`osc+${oscID}`].release.connect(amplifier.bus);      
}


//********************** END SYNTH */

const header = () => {

}



const modalFAQ =
    `<div id="modal">
      <div id="modal-screen"></div>
      <div class="modal-content">
        <div><h3>Documentation</h3></div>
        <div id="param-documentation">
          <div><b class="bold-div">Dragon Scream</b> is a keyboard synthesizer. Play notes with the corresponding listed keyboard keys. For example, you can play a C-major chord by pressing a, d, and g. Or a C-minor chord with a, e, and g. To play higher and lower notes, change octaves up and down with x and z.</div>
          <div style="margin-bottom:6px;"><h4>Adjust parameters to change the sound:</h4></div>
          <div class="inline-this"><b class="bold-div">Waveform</b> is the root sound of the oscillator: the positions are Sine, Triangle, Saw, and Square.</div>
          <div><b class="bold-div">Attack</b> changes how long the note takes to go from no sound to full sound. A leftmost slider will start the sound at full volume and a rightmost position will swell the sound slowly.</div>
          <div><b class="bold-div">Decay</b> changes the time between the full volume at the end of the attack, and the volume level of the sustain.</div>
          <div><b class="bold-div">Sustain</b> is the volume level after the decay, while the notes are still being pressed or "sustained".</div>
          <div><b class="bold-div">Release</b> is the amount of time the note will fade out after the decay and letting go of notes. Left is instant, right is a seconds long slow release like a bell.</div>
          <div><b class="bold-div">FM</b> is actually amplitude modulation in this case, but yolo. This brightens and saturates the sound by adding waves to the waves.</div>
          <div><b class="bold-div">Pre-Filter</b> is a 12dB/octave lo-pass filter. Use this to cut the high frequencies before sending the signal to the delay, distortion, and final mixbus for further processing.</div>
          <div><b class="bold-div">Filter Q</b>s are volume boosts that target the cutoff point of the filter. This creates resonance at the highest frequency before the filtered frequencies.</div>
          <div><b class="bold-div">Post-Filter</b> is the same as the pre-filter except it happens last in the signal-flow. This filters the total aggregate sound.</div>
          <div><b class="bold-div">Delay Time</b> adds an echo effect, from none, to very short, to long interspersed echoes. Use a very short time with a long feedback to create a reverberation effect.</div>
          <div><b class="bold-div">Delay Feedback</b> controls how many echoes the delay echoes before it don't echo no more.</div>
          <div><b class="bold-div">Detune</b> instantiates two additional oscillators that are the same frequency at the leftmost postion, to a quarter-tone divergent each, up and down at a rightmost position. Use it to "widen" the sound, as a chorusing effect or even a Reese-bass.</div>
          <div><b class="bold-div">Distortion Gain</b> is the volume level of the side-chained distortion effect. Requires the Distortion Wave parameter.</div>
          <div><b class="bold-div">Distortion Wave</b> controls how much wave shaping the distortion bus distorts. More = Trogdorian.</div>
          <div><b class="bold-div">Octave up</b> allows you to play higher notes</div>
          <div><b class="bold-div">Octave down</b> allows you to play lower notes.</div>
        </div>
      </div>
    </div>`;
modalFAQopen = true;
modalFAQopen ? 
  document.getElementById("modal").innerHTML = modalFAQ 
  : document.getElementById("modal").innerHTML = null;

const modalAbout =
    `<div id="modal">
      <div id="modal-screen"></div>
      <div class="modal-content">
        <div id="personal-info">
          <div><b class="bold-div">Justin Cheasty</b> makes dragons scream.</div>
          <span>
            <a href="https://github.com/justinnnnnnnn/drgn">Github</a> | 
            <a href="https://www.linkedin.com/in/justin-cheasty-2a521a14/">LinkdIn</a>
          </span>
        </div>
      </div>
    </div>`;
modalFAQopen = false;
const toggleModalFAQ = () => {
  modalFAQopen ? 
  document.getElementById("modal").innerHTML = modalFAQ
  : document.getElementById("modal").innerHTML = null;
}
toggleModalFAQ()

modalAboutOpen = false;
const toggleModalAbout = () => {
  modalAboutOpen ? 
  document.getElementById("modal").innerHTML = modalAbout
  : document.getElementById("modal").innerHTML = null;
}
toggleModalAbout()

document.getElementById('docs').onclick = function openModal() {
  modalFAQopen = true
  toggleModalFAQ()
  document.getElementById('modal-screen').onclick = function closeModal() {
    modalFAQopen = false;
    modalAboutOpen = false;
    toggleModalFAQ();
  }
}
document.getElementById('about').onclick = function openModal() {
  modalAboutOpen = true
  toggleModalAbout()
  document.getElementById('modal-screen').onclick = function closeModal() {
    modalFAQopen = false;
    modalAboutOpen = false;
    toggleModalAbout();
  }
}





//********************** BEGIN VISUALS */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const analyser = audioContext.createAnalyser();
amplifier.mixBus.connect(analyser);
analyser.connect(audioContext.destination);
let the_freqs;
var bufferLength = analyser.frequencyBinCount
the_freqs = new Uint8Array(bufferLength);
dataArray = new Uint8Array(bufferLength);
const HEIGHT = canvas.height
const WIDTH = canvas.width

var img   = new Image(100, 100);  
  var img2  = new Image(200, 200); 
  var img3  = new Image(200, 200); 
  var img4  = new Image(200, 200); 
  var img5  = new Image(200, 200); 
  var img6  = new Image(200, 200); 
  var img7  = new Image(200, 200); 
  var img8  = new Image(200, 200); 
  var img9  = new Image(200, 200); 
  var img10 = new Image(200, 200);

  img.src   = 'resources/dragonyarg.png'
  img4.src  = 'resources/Paladin_M_CriticalHP.png'
  img2.src  = 'resources/ded.png'
  img3.src  = 'resources/ded2.png'
  img5.src  = 'resources/kneel2.png'
  img6.src  = 'resources/kneel.png'
  img7.src  = 'resources/run.png'
  img8.src  = 'resources/withstand.png'
  img9.src  = 'resources/wizard.png'
  img10.src = 'resources/aboutface.png'

  img.globalCompositeOperation='destination-over'

function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  analyser.getByteTimeDomainData(dataArray)
  analyser.getByteFrequencyData(the_freqs);

  ctx.font = '84px Angelwish';
  const avg = [...Array(255).keys()].reduce((acc, curr) => acc + the_freqs[curr], 0) / 200;
  ctx.fillStyle = `rgba(${10 + avg}, ${80 - avg}, ${255}, ${1})`;
  ctx.textAlign = "center";
  ctx.textBaseline = "top";

  ctx.fillText("Dragon Scream", 220, 20);
  ctx.fillText("", canvas.width / 2, canvas.height / 2 + 6);
  
  
  ctx.drawImage(img, 480, 10)
  
  ctx.drawImage(img8, 403, 543) 
  ctx.drawImage(img9, 431, 542) 
  ctx.drawImage(img2, 456, 554) 
  ctx.drawImage(img4, 486, 545) 
  ctx.drawImage(img5, 505, 545) 
  ctx.drawImage(img6, 521, 544) 
  ctx.drawImage(img10,538, 542) 
  ctx.drawImage(img7, 555, 541) 
  ctx.drawImage(img3, 565, 554) 

  ctx.lineCap = 'round'
  
  var bars = 5;
  function oscope(i = 0, bar_height = 0) {
    let plusMinus;
    i % 2 === 0 ? plusMinus = i : plusMinus = -i;
    if (i === 0 ) plusMinus = 0;
    let color_in_osco = `rgba(${255}, ${(150 - the_freqs[i])/i}, ${10 + the_freqs[i]}, ${1})`
    ctx.strokeStyle = color_in_osco;
    ctx.lineWidth = 6;
    var sliceWidth = WIDTH * 1.0 / bufferLength;
    var x_osc = WIDTH / 2;
    var y_start = HEIGHT / 3;
    ctx.beginPath();
    for(var j = 0; j < bufferLength; j++) {
      var v = dataArray[j] / 128.0;
      var y = (v * HEIGHT / bar_height / (1024 + (plusMinus * 20)) * bar_height * (j));
      if(j === 0) {
        ctx.moveTo(x_osc, y_start);
      } else {
        ctx.lineTo((x_osc + 1.3 * y), (y + y_start));
      }
      x_osc -= sliceWidth;
    }
  }

  let radius = 1;
  let zap_color =`rgba(${150}, ${(100)}, ${100}, ${0.556})`;
  
  // fire with osco
  for (var i = 0; i < bars; i++) {
    ctx.strokeStyle = `rgba(${200}, ${(50 - the_freqs[i])/i}, ${the_freqs[i] }, ${1})`;
    let bar_height = the_freqs[i] * 10.5;
    ctx.lineWidth = 4;
    ctx.beginPath();
      oscope(i, bar_height)
    ctx.stroke();
  }

  // main fire
  var bars2 = 20;
  for (var i = 0; i < bars2; i++) {
    ctx.strokeStyle = zap_color;
    zap_color =`rgba(${150 + (i * 3)}, ${(250 + i /the_freqs[i])}, ${the_freqs[i]}, ${0.556})`;
    let radians = (0.6) / bars2;
    let bar_height = the_freqs[i] * 10.5;
    let x_start = canvas.width / 2 - Math.cos(radians * i) ;
    let y_start = canvas.height / 3 + Math.sin(radians * i) ;
    let x_end = canvas.width / 2 - Math.sin(radians * i) * (radius + bar_height) ;
    let y_end = canvas.height / 3 + Math.cos(radians * i) * (radius + bar_height);
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(x_start, y_start);
    ctx.lineTo(x_end, y_end);
    ctx.stroke();
  }

  // splashback
  let barsScreen = 130;
  for (var i = 0; i < barsScreen; i++) {
    let radians = (Math.PI)/i;
    let bar_height = the_freqs[i] * 400;
    let x = canvas.height / 500 + Math.cos(radians * i) * 3 * radius;
    let y = canvas.width + 200 + Math.sin(radians * i) * 3 * radius;
    let x_end =
      (canvas.width) * i / 50 + Math.cos(1001 * radians * i) * (radius + bar_height / (i));
    let y_end = -60;
    let splash_color =`rgba(${(i + the_freqs[i])}, ${(i + the_freqs[i])/i}, ${the_freqs[i]*2}, ${0.0001 * i*2})`;
    ctx.strokeStyle = splash_color;
    ctx.lineWidth = 250 - i;
    ctx.beginPath();
    ctx.moveTo(x - 20, y);
    ctx.lineTo(x_end - 100 + i, y_end);
    ctx.stroke();
  }

  requestAnimationFrame(draw);
}
// draw()
requestAnimationFrame(draw);