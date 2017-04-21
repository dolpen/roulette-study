import React from 'react';
import { connect } from 'react-redux';
import { seed, next } from '../actions/roulette';

class Roulette extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
    props.setSeed(props.match.params.seed);
  }

  render(){
    return (
        <div>
          <p>Seed: {this.props.seed}</p>
          <p>Value: {this.props.value}</p>
          <button onClick={this.props.updateNext.bind(this)}>Next</button>
        </div>
    );
  }
}


const mapStateToProps = state => ({
  seed: state.roulette.seed,
  value: state.roulette.value,
});

const mapDispatchToProps = dispatch => ({
  setSeed: (n) =>{
    const num = parseInt(n);
    dispatch(seed(num ? num : 1))
  },
  updateNext: () => dispatch(next()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Roulette)
