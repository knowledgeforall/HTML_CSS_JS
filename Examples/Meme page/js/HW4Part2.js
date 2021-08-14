var name;
var year;
var reason;
var sentence;
//These assign the variables needed in the script
name = "Distracted Boyfriend";
reason = "it is so applicable in so many situations where someone is being stupid by wanting something without considering the consequences of their actions.  The look of idiocy on his face and his blindess to the girl he's with's 'what the hell' expression is pricelessly comical.";
year = "2019";
sentence = "The first time I saw " + name + " was in " + year + " and I like it because " + reason;
//These assign values to the variables and concatanate them into a sentence
var memeSentence = document.getElementById("sentence");
memeSentence.innerHTML = sentence;
var memename = document.getElementById("name");
memename.innerHTML = name;
//these provide an entrance into the html file and retrieve the unique ids then subsitute the desired variables into the elements