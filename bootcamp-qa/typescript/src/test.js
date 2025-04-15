"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
// test.ts
var persona = new persona_1.Persona("Manri", 25, "hombre", "manriboy@ufplus.cl", null, undefined, "Calle 123");
var saludo = persona.saludar();
persona.cambiarDireccion('Avenida SiempreViva 1234');
persona.actualizarEmail('noSoyManri@NoManri.mn');
console.log(saludo);
persona.mostrarInfo();
