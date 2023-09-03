function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error , results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTMl = 'Acurracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('Dog');
        img1 = document.getElementById('Cat');
        img2 = document.getElementById('Tiger');
        img3 = document.getElementById('Cow');

        if (results[0].label == "Barking") 
        { img = document.getElementById('Dog');
         }
          else if (results[0].label == "Meowing")
          { img1 = document.getElementById('Cat');
             }
              else if (results[0].label == "Roar")
              { img2 = document.getElementById('Tiger');
                 }
                  else
                  { img3 = document.getElementById('Cow');
                     }
    }       
    
}