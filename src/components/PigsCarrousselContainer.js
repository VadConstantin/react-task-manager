import React from 'react';
import { GuineaPigs } from './PigsCarroussel.js'

const GUINEAPATHS = [
  'https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg',
  'https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg',
  'https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg',
  'https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg'
];

export class GuineaPigsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };

    this.interval = null;

    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    let current = this.state.index;
    let newIndex = ++current % GUINEAPATHS.length;
    this.setState({ index: newIndex });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let src = GUINEAPATHS[this.state.index];
    return (
      <GuineaPigs src={src}/>
    );
  }
}
