describe(('Cypress Add TypeScript'), (): void => {
  it('should work with decorators', (done: MochaDone) => {
    const thisThing = new SampleDataModelWorks('initialized');
    thisThing.sampleProperty = 'changed';
    expect('Logging on the Console').to.exist;
    done();
  })
});


class SampleDataModelWorks {

  @logPropertyWorks
  public sampleProperty: string;

  constructor(sampleValue: string) {
    this.sampleProperty = name;
  }

}

function logPropertyWorks(target: any, key: string) {

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
