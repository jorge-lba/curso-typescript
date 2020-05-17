class Car {
    private currentSpeed:number = 0

    constructor(
        public brand:string,
        public model:string,
        private maxSpeed:number = 200
    ){}

    protected changeSpeed(delta:number):number {
        const newSpeed:number = this.currentSpeed + delta
        const validSpeed:boolean = newSpeed >= 0 && newSpeed <= this.maxSpeed
        
        if(validSpeed){
            this.currentSpeed = newSpeed
        }else{
            this.currentSpeed = delta > 0 
                ? this.maxSpeed
                : 0
        }

        return this.currentSpeed
    }

    public accelerate:Function = ():number => this.changeSpeed(5)
    public brake:Function = ():number => this.changeSpeed(-5)

    public getCurrentSpeed:Function = ():number => this.currentSpeed
    public getMaxSpeed:Function = ():number => this.maxSpeed
}

class Ferrari extends Car {
    constructor(model:string, maxSpeed:number){
        super('Ferrari', model, maxSpeed)
    }

    public accelerate:Function = ():number => this.changeSpeed(20)
    public brake:Function = ():number => this.changeSpeed(-15)
}

const F40:Ferrari = new Ferrari('F40', 320) 

const carKa = new Car('Ford', 'Ka', 180)

function time (car:Car):void{
    let state:boolean = true

    setInterval(() => {
        let currentSpeed = car.getCurrentSpeed()
        const maxSpeed = car.getMaxSpeed()

        if(currentSpeed < maxSpeed && state){
            currentSpeed = car.accelerate()
            state = true
            if (currentSpeed >= maxSpeed ) state = false
        }else if (currentSpeed > 0) {
            currentSpeed = car.brake()
            state = false
            if (currentSpeed <= 0 ) state = true
        }
        console.log(currentSpeed)
    }, 150)
} 
time(F40)