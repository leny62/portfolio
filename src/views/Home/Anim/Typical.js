import React, { Component } from 'react'
import Typical from 'react-typical'
 
class Home extends React.Component {
  render () {
    return (
      <Typical
        steps={['Hello', 1000, 'welcome to Lenycode!', 500]}
        loop={Infinity}
        wrapper="p"
      />
    )
  }
}

export default Home;