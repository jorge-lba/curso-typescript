type Constructor = { new(...args: any[]) : {} }

function loginClass(constructor: Constructor){
  console.log(constructor)
}

function decoratorEmpty(_: Constructor){}

function loginClassIf(value: boolean){
  return value ? loginClass : decoratorEmpty
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

interface HouseholdAppliance {
  print?(): void
}

@printable
class HouseholdAppliance {
  constructor(){
    console.log('New...')
  }
}

function printable(constructor: Function){
  constructor.prototype.print = function (){
    console.log(this)
  }
}

const printer = new HouseholdAppliance
printer.print && printer.print()
