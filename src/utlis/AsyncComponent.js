/*
 * @Author: liuruijun
 * @Date: 2020-08-26 09:22:50
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-04 15:19:56
 * @Description: file content
 */
import React, { Component } from 'react'

const asyncComponent = (importComponent) => {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        component: null
      }
    }

    async componentDidMount() {
      const { default: component } = await importComponent()
      this.setState({
        component
      })
    }

    render() {
      const { component: C } = this.state
      return C ? <C {...this.props} /> : null
    }
  }

  return AsyncComponent
}

export default asyncComponent
