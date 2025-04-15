class Persona {
    
    static cuentaPersonas = 0;

    nombre;
    apellido;
    videoJuegoFav;
    twitch;
    instagram;
    mail;

    constructor(nombre, apellido, videoJuegoFav, twitch, instagram, mail){
        this.nombre = nombre
        this.apellido = apellido
        this.videoJuegoFav = videoJuegoFav
        this.twitch = twitch
        this.instagram = instagram
        this.mail = mail
        Persona.cuentaPersonas += 1;
    }

    actualizaNombre(nuevoNombre) {
        this.nombre = nuevoNombre
    }

    actualizaMail(nuevoMail) {
        this.mail = nuevoMail
    }

    muestraDatos(){
        console.log(this.mail)
        console.log(this.nombre)
    }

    static muestraConteo(){
        console.log('Por ahora tenemos',Persona.cuentaPersonas ,'personas conectadas.')
    }
}

let pancho = new Persona("Francisco",'Francísquez','Final Fantasy','panchiquitox','panchosox','pancho@pancholandia.pn')
pancho.muestraDatos()
pancho.actualizaMail('notPancho@pancholandia.pn')
pancho.actualizaNombre('Panchisco')
pancho.muestraDatos()
console.log(Persona.cuentaPersonas)
Persona.muestraConteo()