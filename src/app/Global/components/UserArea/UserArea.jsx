require('./UserArea.css');

// Modules
import React  from 'react/addons';
import Router from 'react-router-component';
import classNames from 'classnames';

// Router Link Component
var Link = Router.Link;

export default React.createClass({

  getInitialState() {
    return {
      userMenuOpen: false
    };
  },

  toggleUserMenu() {
    this.setState({
      userMenuOpen: !this.state.userMenuOpen
    });
  },

  logoutClick() {
    // this.props.store.setLoggedInUser(undefined);
  },

  render() {

    var userAreaClasses = classNames({
      'user-area': true,
      'open': this.state.userMenuOpen
    });

    var loggedInUser = this.props.store.data.loggedInUser;

    return (
      <div className={userAreaClasses} onClick={this.toggleUserMenu}>
        { 
          loggedInUser !== undefined ?
            <div>
              <div className="user-name">{loggedInUser.name.first + ' ' + loggedInUser.name.last}</div>
              <img className="user-pic" src={loggedInUser.picture}/>
              <ul className="user-menu">
                <li><Link href="/"><i className="fa fa-cogs"></i> Settings</Link></li>
                <li><Link onCLick={this.logoutClick} href="/"><i className="fa fa-sign-out"></i> Log Out</Link></li>
              </ul>
            </div>
          :
          null 
        }
      </div>
    );
  }
});
