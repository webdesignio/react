import { connect } from 'react-redux'

import { isEditable, createValueSelector } from '@webdesignio/floorman/selectors'
import { update } from '@webdesignio/floorman/actions'
import getDisplayName from './lib/getDisplayName'

export default function connectToField ({ defaultName } = {}) {
  return Child => {
    function mapStateToProps () {
      const value = createValueSelector()
      return (state, { name = defaultName }) => {
        if (!name) throw new Error(getDisplayName(Child) + ': No name given')
        return {
          isEditable: isEditable(state),
          value: value(state, name)
        }
      }
    }

    function mapDispatchToProps (dispatch, { name = defaultName }) {
      return {
        onChange (value) {
          dispatch(update({ [name]: value }))
        }
      }
    }

    return connect(mapStateToProps, mapDispatchToProps)(Child)
  }
}
