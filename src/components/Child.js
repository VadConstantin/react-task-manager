import React from 'react';

export class Child extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <select id="great-names" onChange={this.props.onChange}>
          <option value="Arthur">
            Arthur
          </option>

          <option value="Jean">
            Jean
          </option>

          <option value="Jack">
            Jack
          </option>
        </select>
      </div>
    );
  }
}
