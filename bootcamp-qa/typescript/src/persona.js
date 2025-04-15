"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, sexo, email, pais, region, direccion) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.email = email;
        this.pais = pais;
        this.region = region;
        this.direccion = direccion;
    }
    Persona.prototype.saludar = function () {
        return "¡Hola! Me llamo " + this.nombre + " y tengo " + this.edad + " años.";
    };
    Persona.prototype.actualizarEmail = function (nuevoEmail) {
        this.email = nuevoEmail;
        console.log("Mi mail nuevo es: " + this.email);
    };
    Persona.prototype.cambiarDireccion = function (nuevaDireccion) {
        this.direccion = nuevaDireccion;
        console.log("Ahora vivo en: " + this.direccion);
    };
    Persona.prototype.mostrarInfo = function () {
        console.log("Nombre: " + this.nombre + ", Edad: " + this.edad + ", Sexo: " + this.sexo + ", Email: " + this.email + ", Dirección: " + this.direccion);
    };
    return Persona;
}());
exports.Persona = Persona;
