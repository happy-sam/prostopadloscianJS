var div = document.getElementById("tutaj");

div.onclick = function() {


// skrypt - prostopadłościan


var bokA = prompt("Podaj wartość pierwszej krawędź podstawy - 'a':");

var bokB = prompt("Podaj wartość drugiej krawędź podstawy - 'b':");

var wysokoscH = prompt("Podaj wysokość - 'H':");

document.write("<h3>" + "krawędź a: " + bokA + "</h3>");

document.write("<h3>" + "krawędź b: " + bokB + "</h3>");

document.write("<h3>" + "Wysokość H: " + wysokoscH + "</h3>");

document.write("<p>" + "Z podanych wartości podstawiając do wzorów otrzymaliśmy:" + "</p>");

var pP = bokA * bokB;

document.write("<h3>" + "Pole podstawy: Pp = " + pP + "</h3>");

var oP = pP * wysokoscH;

document.write("<h3>" + "Objętość prostopadłościanu: V = " + oP + "</h3>");

var pC = 2 * bokA * bokB + 2 * bokA * wysokoscH + 2 * bokB * wysokoscH;

document.write("<h3>" + "Pole całkowite prostopadłościanu: Pc = " + pC + "</h3>");

return false;
    
};