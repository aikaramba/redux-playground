var redux = require('redux');

console.log('Starting redux todo example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};
var reducer = (state = stateDefault, action) => {
  //state = state || {name: 'Anonymous'}; // es5
  console.log(action);
  switch(action.type){
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
      break;
    default:
      return state;
  }
};
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  document.getElementById('app').innerHTML = state.searchText;
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'New search text'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Heh, I guess it\'s working fine'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Dog'
});
