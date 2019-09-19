// Modules
import React  from 'react/addons';
import Reflux from 'reflux';

// Store
import Feature1Store from './Feature1Store.jsx'; 

// Components
import Feature1Page   from './components/Feature1Page/Feature1Page.jsx';
import Feature1Modal  from './components/Feature1Modal/Feature1Modal.jsx';
import Feature1Details from './components/Feature1Details/Feature1Details.jsx';

export default React.createClass({
  mixins: [Reflux.ListenerMixin],
  componentWillMount() {this.listenTo(Feature1Store, this.publishedDataStatus); },
  componentWillUnmount() {delete Feature1Store.data.receivedInvoices; },
  publishedDataStatus(data) {data.event === 'updatedStoreData' ? this.forceUpdate() : null; },  
  render() {
    return (
      <div className='feature1-feature'>
        { !Feature1Store.data.feature1Modal.openStatus ? null : 
            <Feature1Modal store={Feature1Store}/>}
        { !this.props.itemID ? <Feature1Page store={Feature1Store}/> :
            <Feature1Details itemID={this.props.itemID} 
                             store={Feature1Store}/>}
      </div>
    );
  }
});
