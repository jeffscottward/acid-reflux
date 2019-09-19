require('./SidebarNavigation.css');

// Modules
import React  from 'react/addons';
import Router from 'react-router-component';

// Router Link Component
var Link = Router.Link;

export default React.createClass({
  render() {
    return (
      <nav className={'sidebar-navigation' + ' ' + this.props.currentFreature}>
        <ul>
          <li className='Feature1'>
            <Link href='/feature1'><i className='fa fa-envelope'></i> Feature1</Link>
          </li>
          <li className='feature2'>
            <Link href='/feature2'><i className='fa fa-connectdevelop'></i> Feature2</Link>
          </li>
        </ul>
      </nav>
    );
  }
});
