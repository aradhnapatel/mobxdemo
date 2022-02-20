import {action, extendObservable} from 'mobx';
/*
  In this store we define 3 common actions (reset, add, delete)
  so we can call them from our main view.
*/

class SimpleStore {
  constructor() {
    // We initialize our store with default values in the reset function
    this.reset();
  }

  @action reset() {
    extendObservable(this, {
      someValue: [0],
    });
  }

  @action add = item => {
    this.someValue.push(item);
  };

  @action delete = item => {
    this.someValue.pop(item);
  };
}

var store = new SimpleStore();
export default store;
