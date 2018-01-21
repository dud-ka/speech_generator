var firstColumn = ["Koleżanki i koledzy", "Z drugiej strony", "Podobnie", "Nie zapominajmy jednak, że", 
"W ten sposób", "Praktyka dnia codziennego dowodzi, że", "Wagi i znaczenia tych problemów nie trzeba szerzej uzasadniać, ponieważ", 
"Różnorakie i bogate doświadczenia", "Troska organizacji, a szczególnie", "Wyższe założenia ideowe, a także" ];
var secondColumn = ["realizacja nakreślonych zadań programowych", "zakres i miejsce szkolenia kadr",  
"stały wzrost ilości i zakres naszej aktywności", "aktualna struktura organizacji", "nowy model działalności organizacyjnej", 
"dalszy rozwój różnych form działalności", "stałe zabezpieczenie informacyjno-programowe naszej działalności", 
"wzmacnianie i rozwijanie struktur", "konsultacja z szerokim aktywem", "rozpoczęcie powszechnej akcji kształtowania postaw"];
var thirdColumn = ["zmusza nas do przeanalizowania", "spełnia istotną rolę w kształtowaniu", 
"wymaga sprecyzowania i określenia", "pomaga w przygotowaniu i realizacji", "zabezpiecza udział szerokiej grupie w kształtowaniu", 
"spełnia ważne zadania w wypracowaniu", "umożliwia w większym stopniu tworzenie", "powoduje docenianie wagi", 
"przedstawia interesującą próbę sprawdzenia", "pociąga za sobą proces wdrażania i unowocześnienia"];
var fourthColumn = ["istniejących warunków administracyjno-finansowych", "dalszych kierunków rozwoju", 
"systemu powszechnego uczestnictwa", "postaw uczestników wobec zadań stawianych przez organizację", "nowych propozycji", 
"kierunków postępowego wychowania", "systemu szkolenia kadry odpowiadającego potrzebom", "odpowiednich warunków aktywizacji", 
"modelu rozwoju", "form oddziaływania"];

// 1 makeSentencePart - create random part of sentence
function makeSentencePart(sentencePart) { 
	return sentencePart[Math.floor(Math.random()*sentencePart.length)];
};

//2 makeSentence - create sentence using parts of sentence
function makeSentence() {
    return [firstColumn, secondColumn, thirdColumn, fourthColumn].map(makeSentencePart).join(" ") + ".";
};


//3 makeNSentences - create N sentences in for loop with "N" parameters
// sentences will be string array and you sholuld check if sentence exist in array (if exist don't add it to aaray)
function makeNSentences(sentencesNumber) {
    var sentencesArray = [];
    while (sentencesArray.length < sentencesNumber) {
        var sentence = makeSentence();
        if (!sentencesArray.includes(sentence)) {
            sentencesArray.push(sentence);
        };
    };
    return sentencesArray;
};

//4 mergeSentenceArray - merge all sentences and make one string
function mergeSentencesArray(sentencesNumber) {
    return makeNSentences(sentencesNumber).join(" ");
};


//generate speech
function sentencesNumber() {
    return parseInt(document.getElementById("sentences-number").value);
};

document.getElementById("generate-btn").addEventListener("click", function () {
    var number = sentencesNumber();
    var speech = mergeSentencesArray(number);
    var paragraph = document.getElementById("speech");
    return paragraph.innerHTML = speech;
});


//copy speech

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

//reset btn

$("#reset-btn").click(function () {
    var paragraph = document.getElementById("speech");
    var reset = "Wprowadź liczbę zdań jaką chcesz wygenerować, a następnie kliknij w przycisk \"Generuj\"";
    return paragraph.innerHTML = reset;
});



