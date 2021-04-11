import React from 'react';
import ReactDOM from 'react-dom';
import Box from './Box.js';
import Button from './Button.js';
import BoxJsinCss from './BoxJsinCss.js';

ReactDOM.render(
  <div>
    <Button size="big" />
    <Button size="small" />
    <Box size="big" />
    <Box size="small" />
    <BoxJsinCss size="big" />
    <BoxJsinCss size="small" />
  </div>,
  document.getElementById('root')
);
