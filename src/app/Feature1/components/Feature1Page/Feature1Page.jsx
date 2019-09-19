require('./Feature1Page.css');

// Modules
import React from 'react/addons';
import Moment from 'moment';
import Router from 'react-router-component';

// Global Components
import LoadingSpinner from 'Global/components/LoadingSpinner/LoadingSpinner.jsx';
import TabsPage from 'Global/components/TabsPage/TabsPage.jsx';

// Router Links
var Link  = Router.Link; 

export default React.createClass({
  
  fireModal() {
    this.props.store.setStoreData({
      feature1Modal: { openStatus: true }
    });
    console.log(this.props.store.data);
  },
  
  render() {

    var panelABody;

    this.props.store.data.quandlData === undefined ?
      panelABody = <LoadingSpinner/> :
      panelABody = (<div><Link href={'/feature1/hiiii'}>Hiiii</Link>{this.props.store.data.quandlData}</div>);
      
    var Panels = [
      {
        panelTitle: 'PanelA',
        panelBody: {panelABody},
        panelActions: <button onClick={this.fireModal}>Fire Modal</button>
      }, {
        panelTitle: 'Panel B',
        panelBody: <table key='RecurringBody'>Recurring</table>,
        panelActions: <button>Schedule a recurring invoice</button>
      }, {  
        panelTitle: 'Panel C',
        panelBody: <table key='EstimatesBody'>Estimates</table>,
        panelActions: <button>Create an Estimate</button>
      }
    ];

    return (
      <div className='feature1-page-main'>
        <TabsPage panels={Panels} />
      </div>
    );
  }
});
