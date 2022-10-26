Webcam.set({
    width: 350,
    height: 400,
    image_format: "jpeg",
    jpeg_quality: 100,
});
Webcam.attach("webcam");

function captureImg() {
    Webcam.snap(function(dataUri) {
        document.getElementById("result").innerHTML =
            "<img id='capImg' src='" + dataUri + "'>";
    });
}
var classifier = ml5.imageClassifier(
    "https://teachablemachine.withgoogle.com/models/TYiENdpBj/model.json",
    modelReady
);
console.log(ml5.version);

function check() {
    var capImg = document.getElementById('capImg')
    classifier.classify(capImg, gotResults);
}

function modelReady() {
    console.log("Model Loaded");
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        handsign = results[0].label
        if (handsign == 'Perfect') {
            var synth = window.speechSynthesis
            var utterThis = new SpeechSynthesisUtterance('This is perfect!')
            synth.speak(utterThis)
            document.getElementById('emoji').innerHTML = "Your handsign is a &#128076; sign"
        } else if (handsign == 'Thumbs Up') {
            var synth = window.speechSynthesis
            var utterThis = new SpeechSynthesisUtterance('Good Job!')
            synth.speak(utterThis)
            document.getElementById('emoji').innerHTML = "Your handsign is a &#128077; sign"
        } else if (handsign == 'Peace') {
            var synth = window.speechSynthesis
            var utterThis = new SpeechSynthesisUtterance('Peace!')
            synth.speak(utterThis)
            document.getElementById('emoji').innerHTML = "Your handsign is a &#9996; sign"
        } else if (handsign == 'Rock') {
            var synth = window.speechSynthesis
            var utterThis = new SpeechSynthesisUtterance('Rock on!')
            synth.speak(utterThis)
            document.getElementById('emoji').innerHTML = "Your handsign is a &#129304; sign"
        } else if (handsign == 'Waving') {
            var synth = window.speechSynthesis
            var utterThis = new SpeechSynthesisUtterance('Hello!')
            synth.speak(utterThis)
            document.getElementById('emoji').innerHTML = "Your handsign is a &#128400; sign"
        }
    }
}