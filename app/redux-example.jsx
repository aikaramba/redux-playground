var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('New State', store.getState())
  var appEl = document.getElementById('app');
  if(state.map.isFetching) {
      appEl.innerHTML = 'Loading...';
  } else if (state.map.url) {
    appEl.innerHTML = `<a target="_blank" href=${state.map.url}>Click me!</a>`;
  }
});

store.dispatch(actions.fetchLocation());
//unsubscribe();
store.dispatch(actions.changeName('Andrew'));
store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.changeName('Jessica'));
store.dispatch(actions.removeHobby(2));
store.dispatch(actions.addMovie('Interstellar','Drama'));
store.dispatch(actions.addMovie('Naked gun','Comedy'));
store.dispatch(actions.removeMovie(1));
