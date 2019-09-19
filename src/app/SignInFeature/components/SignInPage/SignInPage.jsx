require('./SignInPage.css');

// Modules
import React from 'react/addons';

// Components
import samplePersonas from 'Global/sample-personas.json';
import Panel from 'Global/components/Panel/Panel.jsx';

import Router from 'react-router-component';

// Router Components
var Link = Router.Link;
var NavigatableMixin = Router.NavigatableMixin;

export default React.createClass({
  
  mixins: [NavigatableMixin],

  componentWillMount() {
    this.props.store.setLoggedInUser({
      name: { 
        first: '',
        last: ''
      },
      picture: ''
    });
  },

  userSelection(persona) {
    this.props.store.setLoggedInUser(persona);
  },

  render() {
    
    var personasList = [];

    samplePersonas.forEach((persona, index) => {

      var personaPicture = persona.picture;

      personasList.push(
        <li key={'persona-' + persona.guid}>
          <Link onClick={this.userSelection.bind(this, persona)} ref='featureLink' href='/feature1'>
            <div>
              <div className='userpic' style={ {backgroundImage: 'url(' + persona.picture + ')'} }/>
              <label className='name'>{persona.name.first + ' ' + persona.name.last}</label>
            </div>
          </Link>
        </li>
      );
    });

    var SignInBody = (
      <div className='signin-body'>
        <h1>Pick a user</h1>
        <ul>{personasList}</ul>
      </div>
    );
   
    return (
      <div className='signin-main'>
        <Panel panelTitle='signin' 
               panelBody={SignInBody}
               panelActions={null}/>
      </div>
    );
  }
});
