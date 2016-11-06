var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
}
var nextHobbyId = 1;
var nextMovieId = 1;
var reducer = (state = stateDefault, action) => {
  //state = state || {name: 'Anonymous'}; // es5

  console.log('New action', action);
  switch(action.type){
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
      break;
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };
      break;
    case 'REMOVE_HOBBY':
      return {
        ...state,
        hobbies: state.hobbies.filter(hobby => hobby.id !== action.id)
      };
      break;
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            movie: action.movie,
            genre: action.genre
          }
        ]
      };
      break;
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.id)
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
  console.log('New State', store.getState())
});
//unsubscribe();
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Andrew'
});
store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});
store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Walking'
});
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Jessica'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'ADD_MOVIE',
  movie: 'Interstellar',
  genre: 'Drama'
});
store.dispatch({
  type: 'ADD_MOVIE',
  movie: 'Naked gun',
  genre: 'Comedy'
});
store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});
