class OperStatic {

    static numeroOperaciones = 0;



    static cuentaOperaciones(){
        console.log('Se han ejecutado', OperStatic.numeroOperaciones,'operaciones.')
    }

    static aumentaOperaciones(){
        OperStatic.numeroOperaciones++;
    }

    static sumar(a,b){
        console.log(a,'+',b,'=',a+b)
        this.aumentaOperaciones()
    }

    static restar(a,b){
        console.log(a,'-',b,'=',a-b)
        this.aumentaOperaciones()
    }

    static multiplicar(a,b){
        console.log(a,'*',b,'=',a*b)
        this.aumentaOperaciones()
    }

    static dividir(a,b){
        console.log(a,'/',b,'=',a/b)
        this.aumentaOperaciones()
    }

}



OperStatic.sumar(3,50)
OperStatic.restar(3,50)
OperStatic.multiplicar(3,50)
OperStatic.dividir(3,50)

OperStatic.cuentaOperaciones()