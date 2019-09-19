// Modules
import React   from 'react/addons';
import Reflux  from 'reflux';
import _       from 'lodash';

export default Reflux.createStore({

  data: {},

  init() {

    // Broadcast Store is ready
    this.trigger({
        store: 'SignInStore',
        event: 'initSignInStore',
        data: 'SignInStore Initialized'
    });
  },

  setStoreData(data) {

    // Merge new data
    _.merge(this.data, data);

    // Trigger global update
    this.updatedStoreData('setStoreData', this.data[data]);
  },

  updatedStoreData(data, event) {
    this.trigger({
        store: 'SignInStore',
        event: event || 'updatedStoreData',
        data: data
    });
  },

  setLoggedInUser(PersonaDataObj){
    localStorage.setItem('loggedInUser', PersonaDataObj.guid);
    
    this.setStoreData({
      loggedInUser: PersonaDataObj
    });
  },
  getLoggedInUser(){
    return this.data.loggedInUser;
  }
});
