import React from 'react'
import { StyleSheet, FlatList } from 'react-native'

import { connect } from 'react-redux'

import LibraryDetail from './LibraryDetail'

class LibraryList extends React.PureComponent {
  _renderDetail = ({ item }) => (
    <LibraryDetail data={item} />
  )

  _keyExtractor = item => item.title

  render = () => (
    <FlatList
      data={this.props.library}
      keyExtractor={this._keyExtractor}
      renderItem={this._renderDetail}
      style={styles.view}
    />
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
})

const mapStateToProps = state => ({
  library: state.library,
})

export default connect(mapStateToProps)(LibraryList)