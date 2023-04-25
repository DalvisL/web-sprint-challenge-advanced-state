import React from 'react';
import { connect } from 'react-redux';
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';

const Wheel = (props) => {

  const position = props.position;

  const moveClockwise = () => {
    props.moveClockwise();
  }
  const moveCounterClockwise = () => {
    props.moveCounterClockwise();
  }

  const cogs = [0, 1, 2, 3, 4, 5];
  return (
    <div id="wrapper">
      <div id="wheel">
        {/* <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>--i is a custom CSS property, no need to touch that nor the style object */}
        {cogs.map((cog) => {
          if (cog === position) {
            return <div className="cog active" style={{ "--i": cog }} key={cog}>B</div>
          } else {
            return <div className="cog" style={{ "--i": cog }} key={cog}></div>
          }
        })}
      </div>
      <div id="keypad">
        <button onClick={() => moveClockwise()} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={() => moveCounterClockwise()} id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    position: state.wheel.position
  }
};

export default connect(mapStateToProps,{ moveClockwise, moveCounterClockwise })(Wheel);
