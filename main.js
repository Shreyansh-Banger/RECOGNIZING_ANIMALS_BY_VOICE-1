function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
        classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DIrI4x7rs/model.json', modelReady);
}
