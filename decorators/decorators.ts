type Constructor = { new(...args: any[]) : {} }

function loginClass(constructor: Constructor){
  console.log(constructor)
}

function decoratorEmpty(_: Constructor){}

function loginClassIf(value: boolean){
  return value ? loginClass : decoratorEmpty
}

// @loginClassIf(false)

@loginObject
class HouseholdAppliance {
  constructor(){
    console.log('New...')
  }
}

function loginObject(constructor: Constructor) {
  console.log('Loaded...')
  return class extends constructor {
    constructor(...args: any[]){
      console.log('Before...')
      super(...args)
      console.log('After...')
    }
  }
}

new HouseholdAppliance()
