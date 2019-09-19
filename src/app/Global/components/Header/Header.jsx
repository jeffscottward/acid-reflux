require('./Header.css');

// Modules
import React from 'react/addons';
import Reflux from 'reflux';
import classnames from 'classnames';
import ShortCutRouteTable from 'Global/components/ShortCutRouteTable/ShortCutRouteTable.js';

var Typeahead = require('react-typeahead').Typeahead;

// Store
import SignInStore from 'SignInFeature/SignInStore.jsx'; 

// Components
import HeaderNavigation from 'Global/components/HeaderNavigation/HeaderNavigation.jsx';
import Balanc3Logo      from 'Global/components/Balanc3Logo/Balanc3Logo.jsx';

export default React.createClass({
  mixins: [Reflux.ListenerMixin],
  componentDidMount() {
    window.typeAheadSearchBox = React.findDOMNode(this.refs.typeahead).children[0];
  },
  componentWillMount() {
    this.listenTo(SignInStore, this.publishedDataStatus); 
    this.setTypeAheadOptions();
  },
  publishedDataStatus(data) {
    data.event === 'updatedStoreData' ?
     this.forceUpdate() : null; 
  },

  setTypeAheadOptions() {
    this.typeAheadOptions = [];

    for (var key in ShortCutRouteTable) {
      this.typeAheadOptions.push(ShortCutRouteTable[key].label);
    }
  },

  handleOptionSelected(data, event) {

    var valueOfField = data.toLowerCase().replace(/ /g, '');
    
    for ( var shortCutKey in ShortCutRouteTable ){
      valueOfField === shortCutKey ?
        window.featuresContainer.navigate(ShortCutRouteTable[shortCutKey].url) : null
    }
  },

  focusTypeAhead() {
    SignInStore.setStoreData({visualhalo: true});
  },
  
  toggleVisualHalo (event){
    
    if(event.which !== 32 && event.which !== 17){
      !!event.target.value === true ? 
        SignInStore.setStoreData({visualhalo:false})
        :
        SignInStore.setStoreData({visualhalo: true});
    }

    event.which === 27 ? React.findDOMNode(event.target).blur() : null
  },
  
  dumpVisualHalo() {
    SignInStore.setStoreData({visualhalo:false});
  },

  render() {
    
    var typeAheadClassNames = classnames({
      'app-search-box': true,
      'halo-visible': SignInStore.data.visualhalo
    });

    return (
      <header className="app-header">
        <div>LOGO HERE</div>
        <Typeahead ref="typeahead"
                   className={typeAheadClassNames}
                   placeholder="Search..."
                   options={this.typeAheadOptions} 
                   maxVisible={10}
                   onOptionSelected={this.handleOptionSelected}
                   onFocus={this.focusTypeAhead}
                   onKeyUp={this.toggleVisualHalo}
                   onBlur={this.dumpVisualHalo}/>
        <HeaderNavigation store={SignInStore}/>
      </header>
    );
  }
});
