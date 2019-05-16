import React from 'react'
import PropTypes from 'prop-types'

class DonateBlock extends React.Component {
  state = {
    amount: ''
  };

  onInputChange = event => {
    this.setState({
      amount: event.target.value
    })
  };

  render() {
    return (
      <div className="donation-block">
        <div className="donation-block-amount">
          {this.props.donationAmount ? (
            <h5>${this.props.donationAmount}</h5>
          ) : (
            <input
              type="text"
              value={this.state.amount}
              onChange={this.onInputChange}
              placeholder="$55"
            />
          )}
        </div>
        <p className="donation-block-option">{this.props.rewardText}</p>
        <div className="donation-block-buttons">
          <button className="donation-button">Donate</button>
          <button className="add-to-cart text-link">Add to cart</button>
        </div>
      </div>
    )
  }
}

DonateBlock.propTypes = {
  donationAmount: PropTypes.number,
  rewardText: PropTypes.string
}

export default DonateBlock
