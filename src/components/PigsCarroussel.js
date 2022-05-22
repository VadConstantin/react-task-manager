import React from 'react';
import PropTypes from 'prop-types';

export class GuineaPigs extends React.Component {
  render() {
    let src = this.props.src;
    return (
      <div style={{ marginTop: "30px" }}>
        <h1>Carroussel</h1>
        <img src={src} />
      </div>
    );
  }
}
GuineaPigs.propTypes = {
  src: PropTypes.string.isRequired
}
