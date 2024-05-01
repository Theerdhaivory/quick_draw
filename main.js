var doodle_array=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell"];

var random_no = Math.floor((Math.random() * doodle_array.length)+ 1);

var sketch = doodle_array[random_no];

var timer = 0;

var timercheck = "";

document.getElementById("drawn").innerHTML="sketch to be drawn:" + sketch;


function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}

function setup(){
    canvas= createCanvas(280, 280)
    canvas.center();
    background("pink");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}


function draw(){
    strokeWeight(13);
    stroke(0)
    if(mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    timer++;
    document.getElementById("timer").innerHTML="time:"+timer;
    if (timer>1000)
    {
        timer=0;
       timercheck = "completed";
    }
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(dude_what_did_you_do);
    }
    console.log(results);
    document.getElementById('sketch').innerHTML = 'label: ' + results[0].label;

    document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%';
    
    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}

function update(){
    background("pink");

}

