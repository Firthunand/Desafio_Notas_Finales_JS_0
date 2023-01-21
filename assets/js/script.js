


document.write("<div class='container'>");
document.write("<h1>Notas Finales</h1>");

var nombre = prompt("Escriba su nombre ");
var carrera = prompt("Indique carrera ");

document.write("<p>Nombre " + nombre + "</p>");
document.write("<p>Carrera " + carrera + "</p>");

var Nota_Min = prompt("indique nota minima de aprobacion");
console.log(Nota_Min);

document.write( "<table class='table'>" );
document.write( "<thead class='bg-dark text-white'>" );
document.write( "<tr>" );
document.write( "<th scope='col'>Ramo</th>" );
document.write( "<th scope='col'>Nota 1</th>" );
document.write( "<th scope='col'>Nota 2</th>" );
document.write("<th scope='col'>Nota 3</th>");
document.write( "<th scope='col'>Promedio</th>" );
document.write( "</tr" );
document.write( "</thead>" );
document.write("<tbody>");

//PRIMERA FILA 
document.write("<tr>");
var ramo = prompt("indique ramo 1 ", "HTML");
document.write("<th scope='row'>" + ramo + "</th>");
var nota1 = prompt("indique nota 1 (" + ramo + ")" ,"1.0 a 7");
document.write("<td>"+nota1+"</td>");
var nota2 = prompt("indique nota 2 (" + ramo + ")");
document.write("<td>"+nota2+"</td>");
var nota3 = prompt("indique nota 3 (" + ramo + ")");
document.write("<td>" + nota3 + "</td>");
var promedio = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

document.write("<td>" + promedio.toFixed(2) + "</td>");
document.write("</tr>");

//SEGUNDA FILA
document.write("<tr>");
ramo = prompt("indique ramo 2 ");
document.write("<th scope='row'>" + ramo + "</th>");
nota1 = prompt("indique nota 1 (" + ramo + ")");
document.write("<td>"+nota1+"</td>");
nota2 = prompt("indique nota 2 (" + ramo + ")");
document.write("<td>"+nota2+"</td>");
nota3 = prompt("indique nota 3 (" + ramo + ")");
document.write("<td>" + nota3 + "</td>");
promedio = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
document.write("<td>" + promedio.toFixed(2) + "</td>");
document.write("</tr>");

//TERCERA FILA
document.write("<tr>");
ramo = prompt("indique ramo 3 ");
document.write("<th scope='row'>" + ramo + "</th>");
nota1 = prompt("indique nota 1 (" + ramo + ")");
document.write("<td>"+nota1+"</td>");
nota2 = prompt("indique nota 2 (" + ramo + ")");
document.write("<td>"+nota2+"</td>");
document.write("<td>-</td>");
document.write("<td>-</td>");
document.write("</tr>");

var nota = (Nota_Min * 3) - (parseFloat(nota1) + parseFloat(nota2));


//CUARTA Final
document.write("<tr>")
document.write("<td>Para aprobar el ramo de " + ramo + " con nota " + Nota_Min + " necesitas " + nota.toFixed(2) + " en la ultima nota </td>");
document.write("</tr>");

document.write("</tbody>");
document.write("</table");
document.write("</div>");



