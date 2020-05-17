"use strict";
class Car {
    constructor(brand, model, maxSpeed = 200) {
        this.brand = brand;
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.currentSpeed = 0;
        this.accelerate = () => this.changeSpeed(5);
        this.brake = () => this.changeSpeed(-5);
        this.getCurrentSpeed = () => this.currentSpeed;
        this.getMaxSpeed = () => this.maxSpeed;
    }
    changeSpeed(delta) {
        const newSpeed = this.currentSpeed + delta;
        const validSpeed = newSpeed >= 0 && newSpeed <= this.maxSpeed;
        if (validSpeed) {
            this.currentSpeed = newSpeed;
        }
        else {
            this.currentSpeed = delta > 0
                ? this.maxSpeed
                : 0;
        }
        return this.currentSpeed;
    }
}
const carKa = new Car('Ford', 'Ka', 180);
function time(car) {
    let state = true;
    setInterval(() => {
        let currentSpeed = car.getCurrentSpeed();
        const maxSpeed = car.getMaxSpeed();
        if (currentSpeed < maxSpeed && state) {
            currentSpeed = car.accelerate();
            state = true;
            if (currentSpeed >= maxSpeed)
                state = false;
        }
        else if (currentSpeed > 0) {
            currentSpeed = car.brake();
            state = false;
            if (currentSpeed <= 0)
                state = true;
        }
        console.log(currentSpeed);
    }, 150);
}
time(carKa);
