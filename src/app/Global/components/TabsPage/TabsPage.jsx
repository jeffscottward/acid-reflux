require('./TabsPage.css');

// Modules
import React from 'react/addons'; 
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

// Components
import Panel from 'Global/components/Panel/Panel.jsx';

export default React.createClass({
  render() {

    var Panels = this.props.panels;
    var TabListSet = [];
    var TabPanelSet = [];

    Panels.forEach((element, index) => {
      TabListSet.push(
        <Tab key={'tab-set' + index}>
          {element.panelTitle}
        </Tab>
      );
    });

    Panels.forEach((element, index) => {
      TabPanelSet.push(
        <TabPanel key={'tab-panel' + index}>
          <Panel key={'element-panel' + Math.random() + element.panelTitle + index}
                 panelTitle={element.panelTitle} 
                 panelBody={element.panelBody}
                 panelActions={element.panelActions}/>
        </TabPanel>
      );
    });

    return (
      <Tabs onSelect={this.props.handleSelected} selectedIndex={0}>
        <TabList key='tab-list-invoice'>{TabListSet}</TabList>
        {TabPanelSet}
      </Tabs>
    );
  }
});
