import React from 'react';
import { Child } from './Child';
import { Sibling } from './Sibling'


export class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "Arthur" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const newName = event.target.value
    this.setState({name: newName})
  }

  render() {
    return(
      <div>
      < Sibling name={this.state.name} />
      < Child onChange={this.handleChange} />
     </div>
    )
  }
}
