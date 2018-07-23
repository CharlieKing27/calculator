import React from 'react';

const ScreenRow = (props) => {
  return (
    <div className="screen-row">
      <input type="text" readOnly value={props.value}/>
    </div>
  );
}

const Screen = (props) => {
  return (
    <div className="screen">
      <ScreenRow value={props.answer+props.operator}/>
      <ScreenRow value={props.question}/>
    </div>
  );
}

export default Screen;
