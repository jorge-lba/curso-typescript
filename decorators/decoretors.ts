@loginClass
class HouseholdAppliance {
  constructor(){
    console.log('New...')
  }
}

function loginClass(constructor: Function){
  console.log(constructor)
}

const element = new HouseholdAppliance()