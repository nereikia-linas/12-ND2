"use strict";

var names = ["Jon Snow", "Cersei Lannister", "Daenerys Targaryen", "Theon Greyjoy", "Tyrion Lannister", "Arya Stark"];
alert("Iš viso yra šeši avatarai. Pirmas iš jų: " + names[0] + ", paskutinis: " + names[names.length -1] + ".");
console.log("Pirmas ir paskutinis avatarai yra: " + names[0] + " ir " + names[names.length -1] + ", iš viso yra šeši.");
var number = prompt("Pasirinkite avatarą įrašydami skaičių nuo 0 iki 5");
alert("Jūs pasirinkote " + names[number] + "!");
console.log("Pasirinktas avataras — " + names[number] + ".");
