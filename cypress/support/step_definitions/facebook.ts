const {given} = require('cypress-cucumber-preprocessor');

const url = 'https://facebook.com';

given('I open Facebook page', () => {
  cy.visit(url);
  new SampleDataModel(url);
});


class SampleDataModel {

  @logProperty // `cypress-cucumber-preprocessor` fails on 1st TypeScript code
  public sampleProperty: string; // `cypress-cucumber-preprocessor` also fails on this TypeScript code

  constructor(sampleValue: string) {
    this.sampleProperty = name;
  }

}

function logProperty(target: any, key: string) {

  // property value
  var _val = this[key];

  // property getter
  var getter = function () {
    console.log(`Get: ${key} => ${_val}`);
    return _val;
  };

  // property setter
  var setter = function (newVal) {
    console.log(`Set: ${key} => ${newVal}`);
    _val = newVal;
  };

  // Delete property.
  if (delete this[key]) {

    // Create new property with getter and setter
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }
}
