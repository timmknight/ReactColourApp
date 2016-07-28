import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ColorPalette from './components/color_palette';
import ColorIndex from './components/color_index'
import CreatePalette from './components/create_palette';
import About from './components/about';



export default (
  <Route path='/' component={App} >
    <IndexRoute component={ColorIndex} />
    <Route path='/new' component={CreatePalette} />
    <Route path='/about' component={About} />
  </Route>
)
