// Modules
import React   from 'react/addons';
import Reflux  from 'reflux';
import Request from 'axios';
import _       from 'lodash';

export default Reflux.createStore({

  data: {
    feature1Modal: {
      hello: 'hey heyyy',
      sup: 'yo',
      hi: 'blah',
      openStatus: false
    },
    dummyData: 'blah'
  },

  init() {
    // Broadcast Store is ready
    this.trigger({
        store: 'Feature1Store',
        event: 'initStore',
        data: 'Feature1Store Initialized'
    });
  },

  setStoreData(data) {
    // Merge new data
    _.merge(this.data, data);

    // Trigger global update
    this.updatedStoreData('setStoreData', this.data[data]);
  },

  updatedStoreData(data, event) {
    // Broadcast Store has updated
    this.trigger({
        store: 'Feature1Store',
        event: event || 'updatedStoreData',
        data: data
    });
  },

  someStoreMethod(callback) {
    console.log('someStoreMethod')

    var requestURL = 'https://www.quandl.com/api/v3/datasets/WIKI/ABBV.json';
    
    Request.get(requestURL).then((dataPayLoad) => { 
      
      // Think of this as setState
      this.setStoreData({ quandlData: dataPayLoad });

      console.log(this.data);
    });

    if(callback) { callback(); }
  },

  anotherStoreMethod(data) {
    return data * 2;
  }
});
