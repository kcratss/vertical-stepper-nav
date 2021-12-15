import * as React from 'react';
import * as CSS from 'csstype';

export interface IStep {
  stepContent: () => JSX.Element;
  statusColor?: string;
  statusCircleSize?: number;
  onClickHandler?: (
    event?: React.MouseEvent<HTMLDivElement>,
  ) => void | undefined;
  isDesktop: boolean;
  isActive: boolean;
  isCurrentPage: boolean;
}

const buttonContainerStyles: CSS.Properties = {
  display: 'inline-flex',
  flexWrap: 'wrap',
  gap: '12px',
  padding: '2px',
  cursor: 'pointer',
};

export const Step = ({
  stepContent,
  statusColor,
  statusCircleSize,
  onClickHandler,
  isDesktop,
  isActive,
}: IStep): JSX.Element => {
  const circleStyles = {
    borderRadius: statusCircleSize ?? 16,
    width: statusCircleSize ?? 16,
    height: statusCircleSize ?? 16,
    border: '1px solid',
    borderColor:
      statusColor && statusColor !== 'white' ? statusColor : '#E1E1E1',
    background: statusColor ?? 'white',
    color: '#FFF',
    align: 'center',
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      onClickHandler?.();
    }
  };

  return (
    <div
      tabIndex={0}
      onClick={onClickHandler}
      onKeyDown={keyDownHandler}
      role="button"
      style={{...buttonContainerStyles}}>
      <div>
        <div style={circleStyles}>
          {isActive ? (
            <i
              className="fa fa-check"
              style={{position: 'relative', bottom: '2px'}}></i>
          ) : (
            ''
          )}
        </div>
      </div>
      {isDesktop ? <div style={{paddingBottom: 2}}>{stepContent()}</div> : ''}
    </div>
  );
};
