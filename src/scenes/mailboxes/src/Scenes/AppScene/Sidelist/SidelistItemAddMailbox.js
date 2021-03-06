const React = require('react')
const { IconButton } = require('material-ui')
const Colors = require('material-ui/styles/colors')
const styles = require('./SidelistStyles')
const { basicPopoverStyles } = require('./SidelistPopoverStyles')
const ReactPortalTooltip = require('react-portal-tooltip')
const uuid = require('uuid')

module.exports = React.createClass({

  /* **************************************************************************/
  // Class
  /* **************************************************************************/

  displayName: 'SidelistItemAddMailbox',

  /* **************************************************************************/
  // Data lifecycle
  /* **************************************************************************/

  getInitialState () {
    return {
      generatedId: uuid.v4(),
      showTooltip: false
    }
  },

  /* **************************************************************************/
  // Rendering
  /* **************************************************************************/

  render () {
    const { style, ...passProps } = this.props
    const { showTooltip, generatedId } = this.state

    return (
      <div
        {...passProps}
        onMouseEnter={() => this.setState({ showTooltip: true })}
        onMouseLeave={() => this.setState({ showTooltip: false })}
        style={Object.assign({}, styles.itemContainer, style)}
        id={`ReactComponent-Sidelist-Item-Add-Mailbox-${generatedId}`}>
        <IconButton
          iconClassName='material-icons'
          onClick={() => { window.location.hash = '/mailbox_wizard/add' }}
          iconStyle={{ color: Colors.blueGrey400 }}>
          add_circle
        </IconButton>
        <ReactPortalTooltip
          active={showTooltip}
          tooltipTimeout={0}
          style={basicPopoverStyles}
          position='right'
          arrow='left'
          group={generatedId}
          parent={`#ReactComponent-Sidelist-Item-Add-Mailbox-${generatedId}`}>
          Add Mailbox
        </ReactPortalTooltip>
      </div>
    )
  }
})
