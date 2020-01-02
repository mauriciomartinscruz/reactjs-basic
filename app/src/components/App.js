import React from 'react'

import Post from './Post'

export default class App extends React.Component {
  render() {
    return ( 
      <div>
        <h1>Hello World </h1>
        <Post title="Post 1" />
        <Post title="Teste 2" />
        <Post title="Adkf fdksfd" />
        <Post title="UU fdfklaaf ad " />
      </div>
    )
  }
}