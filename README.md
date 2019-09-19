# Acid-Reflux
**WARNING - DEPRECATED**

_This repo has been republished for historical refrence by the author only and pre-dates the Redux ecosystem, although the pattern is very close to the same idea. (Great minds must think a like)_

![Alt text](acid-reflux-logo.png)


To install modules and start server

```
npm start
```

### ANOTHER REACT.JS FRAMEWORK!?
**Yes.** Here me out.


[Reflux](https://github.com/reflux/refluxjs) is very awesome, but found myself not caring too much for 

- "Action Dictionaries"
- "Listener Instances"
- "Connections"
- "Filters"

... what? no. madness.

---

I want to think about only **2 things**. 

- A place where I can **centralize my state** for an entire "feature", and **call functions that are relative to more than just a specific component** in that feature
- My view logic for showing / hiding things

So then it looks more like this.

```
╔═════════╗       ╔════════════╗
║  Store  ║──────>║ Components ║
╚═════════╝       ╚════════════╝
     ^                     │
     └─────────────────────┘
     
```

The core of what is going is a re-implementation of `this.setState()`... **but at the store level.**

We pass the **whole store (including its methods and state data) all the way down the line as a prop** to give access to `setStoreData` and other custom methods, as well as a way leverage a **"pure props"** rendering approach. [The dream is real](http://aeflash.com/imgs/data_flow1.svg). [No more nightmares](http://aeflash.com/imgs/data_flow2.svg)

So we now have a truly singular place for accessing a Feature's "global" methods and a way of setting/reading state for ALL of its components. 

What is even better is the stores use the **global pub-sub** model for **broadcasting updates to state**. Other "Features" can then listen to other store events with extreme ease if necessary.

For icing on the cake, not related to Relfux, I have setup through webpack a way to scale styles without needing to manage a "stylesheet config file" aka the infamous `App.css`. Simply add a .css file right next to your .jsx file in your component folder and `require` it in the JSX file right next to it.
Here is how a feature would look.

```
├── app
│   ├── App.css
│   ├── App.js
│   ├── Feature1
│   │   ├── Feature1.js
│   │   ├── Feature1Store.js
│   │   └── components
│   │       ├── Feature1Details
│   │       │   ├── Feature1Details.css
│   │       │   └── Feature1Details.js
│   │       ├── Feature1Modal
│   │       │   ├── Feature1Modal.css
│   │       │   └── Feature1Modal.js
│   │       └── Feature1Page
│   │           ├── Feature1Page.css
│   │           └── Feature1Page.js
```
*NOTE: The Feature File next to the store acts as a parent component that triggers renders all the way down the pipe by listening to store broadcasts.*

When creating new features. You can simply copy paste a template feature folder and customize away. In some cases, you may want modify how a feature listens to its (or other) stores, or instead of merging state data, overwrite it with _.assign.

This is more a methodology than a hardcoded framework you cannot deviate from.

---------------------------------

**WAIT THERE IS MORE!!**

- Router with fuzzy search! (think Sublime Text and Alfred)
- Basic modal component.
- Flexbox all the things
- Tab component
- Loading Spinner

---------------------------------

Learning
=============


- [React Lifecycle](http://javascript.tutorialhorizon.com/2014/09/13/execution-sequence-of-a-react-components-lifecycle-methods/)
- [React Best Practices](http://aeflash.com/2015-02/react-tips-and-best-practices.html)



Technologies
=============

- [React](http://facebook.github.io/react/) - A Javascript Library For Building User Interfaces
- [Reflux](https://github.com/spoike/refluxjs) - A simple library for uni-directional dataflow application architecture inspired by ReactJS Flux
- [React-Router-Component](http://strml.viewdocs.io/react-router-component) - Allows you to define routes in your React application in a declarative manner, directly as a part of your component hierarchy.
- [Webpack](http://webpack.github.io/) - Module Bundler w/ Live Injection
- [Jest](http://facebook.github.io/jest/) - Painless Javascript Unit Testing
- [Nightwatch](http://nightwatchjs.org/) - is an easy to use Node.js based End-to-End (E2E) testing solution for browser based apps and websites.
- [PostCSS](https://github.com/postcss/postcss) - is a tool for transforming CSS with JS plugins
- [SuitCSS](https://suitcss.github.io/) - For normalization and any helpful patterns
- [Babel](https://babeljs.io/) - Babel will turn your ES6+ code into ES5 friendly code, so you can start using it right now without waiting for browser support
- [ESLint](http://eslint.org/) - The pluggable linting utility for JavaScript and JSX 

Development
=
The development server is setup using Webpack with

`npm start`

Tests
=

Unit tests are run using Jest with

`npm test`.


Browser tests are run with Nightwatch with

`npm run browser`

Production
=

Webpack bundles all the assets in production mode and Gulp creates unique file names for caching with

 `NODE_ENV=production npm run build`