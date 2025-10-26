
var myFont;

let scene = 0;

let gap = [
  "_",
  "( )",



  ".                      ...",

  " ' ' ' ' ' ' '      '",

  " *",

  "- ",

  ";",

  ":",

];

let chaos = [
  " (  )",
  "#$@^@@^@%&@%@&",

  "************* ****** * *** * * * * * "
];

let silk = [
  "silk", "shadow", "reflections", "skin", "palimpsest", "rotting", "memory"
];

let lingers = [

  "lingers", "listens", "opens", "approaches", "pulls", "burns"
];

let blinking = [
  'blinking eye', 'marrowed husk', 'boundless dark', 'hyphened tongue', 'fluent shadow', 'surviving particle '
] 
let repeats = [
  'repeats', 'recites', 'remembers', 'forgets', 'simmers', 'exhumes'
]

let tell = [
  'tell', 'sing', 'hum', 'carve', 'dream'
]
let message = [
  "message", "song", "mystery", "story", "riddle", "secret", "prayer",
];

let beings = [
  "beings", "beasts", "wombs", "feet", "tongues", "hearts", "bellies"
];


let memory = [
  "throat", "lips", "thumb", "memory", "nostrils", "cosmos", "sight", "flesh"
];

let ghosts = [
  "ghosts", "phosphene", "dreams", "love", "grief", "haunting", ""

];

let entities = [
  "entities", "bodies", "beings", "creatures", "kin", "living"

];

let whattheyarewearing = [
  'what they are wearing', 'how they talk', 'how they watch', 'what they sigh', 'what they gnaw at',
  'what sight reveals'
]

let impermanence = [
  'are dense and tender', 'pour into red earth', 'pull at rootless trees', 'carve air into backs of time', 'detangle forgotten seas', 'trusts a knife', 'tongues a breaking'
]


function preload() {
  myFont = loadFont("https://cdn.glitch.global/f5921b5b-17b6-4028-95de-016257411e19/Director-Regular.otf?v=1719098950449");
}

function setup() {
  textFont(myFont);
  createCanvas(windowWidth, windowHeight);
  background(255);
  textAlign(CENTER);
  textSize(12);

  story(scene);
}


function mouseClicked() {
  //everytime you click, you add white background with opacity 
  background(255, 200);
  scene++; // x= x+1
  if (scene > 32) {
    scene = 0;
  }
  story(scene);


}

function story(scene) {
  let time_passed = int(random(1000));
  let unit = random(gap);
  let blend = random(chaos);
  let sentence = "";
  let double = "";

  if (scene == 0) {
    for (let i = 0; i < time_passed; i++) {
      text(unit, random(windowWidth), random(windowHeight));

    }
    background(255, 200);

    sentence = "lightning strikes imprecisely.";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);

  }

  if (scene == 1) {

    sentence = " ghost prints stamped on " +
      random(silk);

    double = " ghost prints stamped on " +
      random(silk);

    text(double, random(100, 0.66 * windowWidth), random(0, windowHeight - 100));
    text(sentence, random(100, windowWidth - 500), random(windowHeight - 100, windowHeight - 200), 300);
    textWrap(WORD);

  }

  if (scene == 2) {
    sentence = "something " + random(lingers) + " to " + random(tell) + " you a " + random(message);

    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);
  }

  if (scene == 3) {
    sentence =
      "an image of " + random(beings) + " arrive as light flashes, trails through your " + random(memory) + " . ";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);
  }

  if (scene == 4) {
    sentence =
      "a " + random(blinking) + " " + random(repeats) + "."
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);
  }
  if (scene == 5) {
    sentence =
      "a " + random(blinking) + " " + random(repeats) + "."
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);
  }

  if (scene == 6) {
    sentence = "ray particles interacting with retinas";
    let s5;
    s5 = "an uncontrollable visual obstruction tends to make the present distill.";
    text(s5, random(windowWidth - 500, 0.66 * windowWidth), random(100, windowHeight - 100), 300);
    textWrap(WORD);

    text(sentence, random(100, windowWidth - 500), random(windowHeight - 100, windowHeight - 200), 300);
    textWrap(WORD);


  }


  if (scene == 7) {
    sentence = "the tendencies of " + random(ghosts) + " is to flash time in your face.";
    let s6;
    s6 = "it reverberates into your eyes, down a canal of veins";
    let s6_2;
    s6_2 = "the " + random(entities) + " of another realm enter your dreams.";



    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    text(s6, random(0, 0.66 * windowWidth), random(0, windowHeight - 100), 300);
    text(s6_2, random(100, 0.66 * windowWidth), random(windowHeight - 200, windowHeight - 400), 300);
    textWrap(WORD);

  }

  if (scene == 8) {
    sentence = "notice " + random(whattheyarewearing) + ", they have no interior power, as ethereal objects";
    let s8;
    s8= 'somehow they take the task of guiding you in unexpected, implemented tugs.'
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
        text(s8, random(100, 0.66 * windowWidth), random(windowHeight - 200, windowHeight - 400), 300);

    textWrap(WORD);
  }

  if (scene == 9) {
    sentence = "phosphene elements do not contain agency. they simply react to projections reflected on them.";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);

  }

  if (scene == 10) {
    sentence = "the unknown kin make homes out of worn memory cracks";
    let s9;
    s9 = " filter water by planting faces to gouge out the toxic metals.";
    text(s9, random(windowWidth - 500, 0.66 * windowWidth), random(windowHeight - 200, windowHeight - 400), 300);
    textWrap(WORD);

    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);


  }

  if (scene == 11) {
    sentence = "they learn what stories to tell by watching the extraction. ";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);

  }
  if (scene == 12) {
    sentence = "the temporal walls of impermanence " + random(impermanence);
    let s11 = "“desire carries meaning only in moment.”";
    text(s11, random(50, 0.66 * windowWidth), random(windowHeight - 40, windowHeight - 200), 300);
    textWrap(WORD);
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);



  }

  if (scene == 13) {
    sentence = "i see reflections in the shards of permanence";
    let s12 = "an urgency is conflated with intensity when crucified by light.";
    text(s12, random(0, 0.66 * windowWidth), random(windowHeight - 200, windowHeight - 300), 300);
    textWrap(WORD);

    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);


  }

  if (scene == 14) {
    sentence = "a shudder, a place steeped in the romance of aliveness. a body stained with howls and promises.";
    let s13 = "if it is conceived, constructed, occupied, it is always political.";
    text(s13, random(100, 0.66 * windowWidth), random(windowHeight - 100, windowHeight - 200), 300);
    textWrap(WORD);

    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);

  }


  if (scene == 15) {
    sentence = "every body of water expands and contracts.  ";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);

  }

  if (scene == 16) {
    sentence = "this disruption of materiality is an animalistic tendency that outruns any argument of structural cohesion.";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);
  }

  if (scene == 17) {
    sentence = "the loops of attention produce a mist ";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);
  }

  if (scene == 18) {
    sentence = "from which the sun peaks out occasionally";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);
  }

  if (scene == 19) {
    sentence = " the milky texture swallowed ";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);
  }

  if (scene == 20) {
    sentence = "by a full circle,";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);
  }



  if (scene == 21) {
    sentence = ",the presence of a whole truth. ";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);
  }

  if (scene == 22) {
    sentence = ",it makes your heart heavy, and afraid. a core mounded in stone shedded by a fire enclave";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);
  }

  if (scene == 23) {
    sentence = " the narrative quest creates many reasons to get lost.";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);
  }

  if (scene == 24) {
    sentence = " the nectarine pulp ripens under conditions of love. ";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);
  }

  if (scene == 25) {
    sentence = "aligns justice with truth. intimacy with courage.";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);
  }

  if (scene == 26) {
    sentence = "i manage the silkened translucent thread between a voyreustic tendency of vulnerability and complete privacy. ";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);
  }

  if (scene == 27) {

  }



  if (scene == 28) {
    sentence = " the gaps between our standards of completeness and our lives forever largening to accommodate";
    let s27 = "a humaness punctuated by restlessness.";
    text(s27, random(100, 0.66 * windowWidth), random(windowHeight - 200, windowHeight - 400), 300);
    textWrap(WORD);

    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);


  }


  if (scene == 29) {
    for (let i = 0; i < time_passed; i++) {
      text(blend, random(windowWidth), random(windowHeight));

    }

  }




  if (scene == 30) {
    sentence = "rearranging the need for chaos";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);

  }

  if (scene == 31) {
    for (let i = 0; i < time_passed; i++) {
      text(blend, random(windowWidth), random(windowHeight));

    }
    sentence = "rearranging the need for chaos";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);

  }

  if (scene == 32) {
    sentence = " for immersion into a time-space continuum that breathes into you";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);

  }

  if (scene == 33) {
    sentence = "alternately, you slow down and open, the next iteration is taking care of you";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);
  }


  //print it the sentence out


  console.log(sentence);
}


