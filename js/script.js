"use strict";
exports.__esModule = true;
var nombre;
nombre = "lp1";
var edad;
edad = 20;
var persona = { nombre: nombre, edad: edad };
var varsuma = function (a, b) { return (a + b); };
var Circulo = /** @class */ (function () {
    function Circulo(radio) {
        this.radio = radio;
    }
    Circulo.prototype.calculararea = function () {
        return Math.PI * Math.pow(this.radio, 2);
    };
    return Circulo;
}());
var clase = new Circulo(5);
console.log(clase.calculararea());
