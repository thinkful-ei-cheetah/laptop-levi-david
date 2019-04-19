import React, { Component } from 'react';

class Summary extends Component {
  render() {
    console.log(this.props.selected);
    const summary = Object.keys(this.props.selected)
      .map(key => <div className="summary__option" key={key}>
        <div className="summary__option__label">{key}  </div>
        <div className="summary__option__value">{this.props.selected[key].name}</div>
        <div className="summary__option__cost">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(this.props.selected[key].cost)}
        </div>
      </div>)

    const total = Object.keys(this.props.selected)
      .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0);

    return (
      <div className="summary-wrapper">
        {summary}
        <div className="summary__total">
          <div className="summary__total__label">Your Price: </div>
          <div className="summary__total__value">
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
              .format(total)}
          </div>
        </div>
      </div>
    )
  }
}

export default Summary;