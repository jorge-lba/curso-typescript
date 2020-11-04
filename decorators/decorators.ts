// @loginClass
@loginClassIf(false)
class HouseholdAppliance {
  constructor(){
    console.log('New...')
  }
}

function loginClass(constructor: Function){
  console.log(constructor)
}

function decoratorEmpty(_: Function){}

function loginClassIf(value: boolean){
  return value ? loginClass : decoratorEmpty
}