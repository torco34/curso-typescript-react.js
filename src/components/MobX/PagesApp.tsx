import React from 'react'
import { Provider } from 'mobx-react'
import { View } from './View'

// import ArepaStore from "./store/containerStore"
export const PagesApp = () => {
  return (
    <Provider >
      <View />
    </Provider>
  )
}



