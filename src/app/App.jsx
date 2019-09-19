// CSS Injection
require('font-awesome-webpack');
require('suitcss-base');
require('react-datagrid/index.css');
require('./App.css');

// Modules
import React     from 'react/addons';
import Router    from 'react-router-component';
import KeyMaster from 'keymaster';

// Router Components
var Locations = Router.Locations;
var Location  = Router.Location;
var NotFound  = Router.NotFound;

// Components
import Header            from 'Global/components/Header/Header.jsx';
import SidebarNavigation from 'Global/components/SidebarNavigation/SidebarNavigation.jsx';

// Features
import SignInFeature     from 'SignInFeature/SignInFeature.jsx';
import Feature1          from 'Feature1/Feature1.jsx';

// Global Pages
import NotFoundPage      from 'Global/components/Page404/Page404.jsx';

export default React.createClass({

  componentDidMount() {
    window.featuresContainer = this.refs.featuresContainer;
    
    KeyMaster('⌘+space, ctrl+space', function(){
      window.typeAheadSearchBox.focus();
    });
  },

  routeReporter(obj, data) {
    console.log({
      routeURL: obj,
      routeURLData: data
    });
  },

  render() {
    return (
      <div id='app-container' 
           className='app-container'>
        <Header/>
        <main>
          <SidebarNavigation/>
          <Locations ref='featuresContainer' 
                     className='features-container'
                     onBeforeNavigation={this.routeReporter}>
            
            {/* SignInFeature */}
            <Location path='/'                    handler = { SignInFeature } />
            <Location path='/signin'              handler = { SignInFeature } />
            <Location path='/signout'             handler = { SignInFeature } />
            <Location path='/login'               handler = { SignInFeature } />
            <Location path='/logout'              handler = { SignInFeature } />

            {/* InvoiceFeature */}
            <Location path='/feature1'            handler = { Feature1 } />
            <Location path='/feature1/:itemID'    handler = { Feature1 } />

            {/* Page Not Found */}
            <NotFound handler = { NotFoundPage } />
          </Locations>
        </main>
      </div>
    );
  }
});
