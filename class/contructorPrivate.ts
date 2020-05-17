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