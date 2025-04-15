import { Persona } from "./persona";
// test.ts

let persona = new Persona(
  "Manri", 
  25,
  "hombre",
  "manriboy@ufplus.cl",
  null,
  undefined, 
  "Calle 123"
);

let saludo = persona.saludar();
persona.cambiarDireccion('Avenida SiempreViva 1234')
persona.actualizarEmail('noSoyManri@NoManri.mn')

console.log(saludo);

persona.mostrarInfo();