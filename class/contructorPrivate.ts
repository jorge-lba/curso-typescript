export = {}

class Unic {
    private static _instance:Unic = new Unic
    private constructor(){ }

    static instance():Unic{
        return Unic._instance
    }

    now():Date{
        return new Date
    }
}

console.log(Unic.instance().now())

// Somente leitura

class Airplane{
    public readonly model:string

    constructor(
        model:string,
        public readonly prefix:string
    ){
        this.model = model
    }
}

const turboH:Airplane = new Airplane('Tu-114', 'PT-ABC')
console.log(turboH.model, turboH.prefix) 