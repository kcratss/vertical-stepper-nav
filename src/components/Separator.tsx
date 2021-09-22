import * as React from 'react';

const separatorStyles = {
  height: '5vh',
  width: 0,
  borderLeft: '2px solid rgb(237, 235, 233)',
  background: '#E1E1E1',
};

const separatorStylesHorizontal = {
  height: 0,
  width: '40px',
  borderBottom: '2px solid rgb(237, 235, 233)',
  background: '#E1E1E1',
};

export interface ISeparator {
  height?: string | number;
  isDesktop: boolean;
}

export const Separator = (props:ISeparator): JSX.Element => {
  return <div style={props.isDesktop?{...separatorStyles}:{...separatorStylesHorizontal}} />;
};
