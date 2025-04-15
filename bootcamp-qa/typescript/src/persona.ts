export class Persona {
    nombre: string;
    edad: number;
    sexo: string;
    email: string;
    pais: string | null;
    region: string | undefined;
    direccion: string;  
  
    constructor(
      nombre: string,
      edad: number,
      sexo: string,
      email: string,
      pais: string | null,
      region: string | undefined,
      direccion: string
    ) {
      this.nombre = nombre;
      this.edad = edad;
      this.sexo = sexo;
      this.email = email;
      this.pais = pais;
      this.region = region;
      this.direccion = direccion;
    }
  
    saludar(): string {
      return "¡Hola! Me llamo " + this.nombre + " y tengo " + this.edad + " años.";
    }
  
    actualizarEmail(nuevoEmail: string): void {
      this.email = nuevoEmail;
      console.log("Mi mail nuevo es: " + this.email);
    }
  
    cambiarDireccion(nuevaDireccion: string): void {
      this.direccion = nuevaDireccion;
      console.log("Ahora vivo en: " + this.direccion);
    }
  
    mostrarInfo(): void {
      console.log("Nombre: " + this.nombre + ", Edad: " + this.edad + ", Sexo: " + this.sexo + ", Email: " + this.email + ", Dirección: " + this.direccion);
    }
  }