require('./Feature1Details.css');

// Modules
import React from 'react/addons';
import Panel from 'Global/components/Panel/Panel.jsx';

export default React.createClass({

  render() {
    return (
      <div className="feature1-details-main">
        <Panel panelTitle={this.props.itemID} 
               panelBody={'HI THERE. Show some details here'}/>
      </div>
    );
  }
});
