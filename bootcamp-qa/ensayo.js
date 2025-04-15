class Persona {

    constructor(nombre, grito){
        this.nombre = nombre
        this.grito = grito
    }

    gritar(aa) {
        console.log(aa)
        console.log(this.grito)
        console.log('Me llamo', this.nombre)

    }
    
}

aldo = new Persona('Aldo','aaa')
aldo.gritar('uuuu')