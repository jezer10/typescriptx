"use strict";
var Libro = /** @class */ (function () {
    function Libro(isbn, titulo, autor, editorial, npaginas) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.npaginas = npaginas;
    }
    return Libro;
}());
var n = 1;
function addtabla(isbn, tit, autor, edit, npag) {
    var hola = "<tr><td>" + n + "</td><td>" + isbn + "</td><td>" + tit + "</td><td>" + autor + "</td><td>" + edit + "</td><td>" + npag + "</td></tr>";
    var ada = document.createElement("tr");
    ada.innerHTML = hola;
    document.getElementById("tablabody").appendChild(ada);
    n++;
}
document.getElementById('submit').addEventListener('click', function (e) {
    var isbn = document.getElementById("isbn").value;
    var tit = document.getElementById("titulo").value;
    var autor = document.getElementById("autor").value;
    var edit = document.getElementById("editorial").value;
    var npag = document.getElementById("npaginas").value;
    addtabla(isbn, tit, autor, edit, npag);
    limpiar();
    e.preventDefault();
});
function limpiar() {
    document.getElementById("isbn").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("editorial").value = "";
    document.getElementById("npaginas").value = "";
    document.getElementById("isbn").focus();
}
