import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './reducer'
import { Header } from './components/common'
import LibraryList from './components/LibraryList'

const App = () => {
  return (
    <Provider store={createStore(reducer)}>
      <View style={styles.view}>
        <Header title='Tech Stack' />
        <LibraryList />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
})

export default App