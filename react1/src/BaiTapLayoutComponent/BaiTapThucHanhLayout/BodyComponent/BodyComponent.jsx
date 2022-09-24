import React, { Component } from 'react'
import BannerComponent from '../BannerComponent/BannerComponent'
import ItemComponent from '../ItemComponent/ItemComponent'

export default class BodyComponent extends Component {
  render() {
    return (
      <div className='Body'>
        <BannerComponent/>
        <ItemComponent/>
      </div>
    )
  }
}
