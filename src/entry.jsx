// Grab React and our App
import React  from  'react/addons';
import App    from  './app/App.jsx';

// Render App when DOM is loaded
document.addEventListener('DOMContentLoaded', (event) => {
  React.render(<App/>, document.getElementById('app'));
});
