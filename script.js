var firstColumn = ["Koleżanki i koledzy", "Z drugiej strony", "Podobnie", "Nie zapominajmy jednak, że", "W ten sposób", "Praktyka dnia codziennego dowodzi, że", "Wagi i znaczenia tych problemów nie trzeba szerzej uzasadniać, ponieważ", "Różnorakie i bogate doświadczenia", "Troska organizacji, a szczególnie", "Wyższe założenia ideowe, a także" ];
var secondColumn = ["realizacja nakreślonych zadań programowych", "zakres i miejsce szkolenia kadr",  "stały wzrost ilości i zakres naszej aktywności", "aktualna struktura organizacji", "nowy model działalności organizacyjnej", "dalszy rozwój różnych form działalności", "stałe zabezpieczenie informacyjno-programowe naszej działalności", "wzmacnianie i rozwijanie struktur", "konsultacja z szerokim aktywem", "rozpoczęcie powszechnej akcji kształtowania postaw"];
var thirdColumn = ["zmusza nas do przeanalizowania", "spełnia istotną rolę w kształtowaniu", "wymaga sprecyzowania i określenia", "pomaga w przygotowaniu i realizacji", "zabezpiecza udział szerokiej grupie w kształtowaniu", "spełnia ważne zadania w wypracowaniu", "umożliwia w większym stopniu tworzenie", "powoduje docenianie wagi", "przedstawia interesującą próbę sprawdzenia", "pociąga za sobą proces wdrażania i unowocześnienia"];
var fourthColumn = ["istniejących warunków administracyjno-finansowych", "dalszych kierunków rozwoju", "systemu powszechnego uczestnictwa", "postaw uczestników wobec zadań stawianych przez organizację", "nowych propozycji", "kierunków postępowego wychowania", "systemu szkolenia kadry odpowiadającego potrzebom", "odpowiednich warunków aktywizacji", "modelu rozwoju", "form oddziaływania"];



function makeQuote(sentencePart) {
	return sentencePart[Math.floor(Math.random()*sentencePart.length)];
};

console.log(makeQuote(firstColumn) + " " + makeQuote(secondColumn) + " " + makeQuote(thirdColumn) + " " + makeQuote(fourthColumn) + ".");