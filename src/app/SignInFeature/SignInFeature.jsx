// Modules
import React  from 'react/addons';
import Router from 'react-router-component';
import Reflux from 'reflux';
import classnames from 'classnames';

// Store
import SignInStore from './SignInStore.jsx'; 

// Components
import SignInPage from './components/SignInPage/SignInPage.jsx';

// Router Components
var Locations = Router.Locations;
var Location  = Router.Location; 

export default React.createClass({
  mixins: [Reflux.ListenerMixin],
  componentWillMount() {
    this.listenTo(SignInStore, this.publishedDataStatus); 
  },
  publishedDataStatus(data) {
    data.event === 'updatedStoreData' ?
     this.forceUpdate() : null; 
  },  
  render() {
    return (
      <div className='signin-feature'>
        <SignInPage store={SignInStore}/>
      </div>
    );
  }
});
