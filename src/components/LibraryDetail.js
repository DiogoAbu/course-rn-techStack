import React from 'react'
import { LayoutAnimation, StyleSheet, Text, TouchableWithoutFeedback, UIManager, View } from 'react-native'
import { connect } from 'react-redux'

import * as action from '../action'
import { CardSection } from './common'

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)

class LibraryList extends React.PureComponent {
  _onPressLibrary = id => {
    LayoutAnimation.spring()
    this.props.selectLibrary(id)
  }

  render = () => {
    const { expanded, data : { id, title, description } } = this.props

    return (
      <TouchableWithoutFeedback onPress={() => this._onPressLibrary(id)}>
        <View>
          <CardSection style={expanded ? styles.active : null}>
            <Text style={[ styles.text, expanded ? styles.activeText : null ]}>
              {title}
            </Text>
          </CardSection>
          {expanded ? (
            <CardSection>
              <Text style={styles.textDescription}>{description}</Text>
            </CardSection>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  active: {
    backgroundColor: '#47A0FF',
  },
  activeText: {
    color: '#fff',
  },
  text: {
    fontSize         : 18,
    paddingHorizontal: 12,
  },
  textDescription: {
    paddingHorizontal: 12,
    paddingBottom    : 12,
  },
})

const mapStateToProps = (state, ownProps) => ({
  expanded: state.selectedId === ownProps.data.id,
})

export default connect(mapStateToProps, action)(LibraryList)