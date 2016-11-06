var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
  //state = state || {name: 'Anonymous'}; // es5

  console.log('New action', action);
  switch(action.type){
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
      break;
    default:
      return state;
  }
};
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New name is', state.name);
  document.getElementById('app').innerHTML = state.name;
});
//unsubscribe();
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Andrew'
});
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Jessica'
});
