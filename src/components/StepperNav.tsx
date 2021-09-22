import * as React from 'react';
import {Step} from './Step';
import {Separator} from './Separator';

const displayFlex = {
  display: 'flex'
};

export interface IStepDescription {
  stepContent: () => JSX.Element;
  stepStateColor?: string;
  stepStatusCircleSize?: number;
  onClickHandler?: () => void | undefined;
}

export interface IStepperNavProps {
  steps: IStepDescription[];
  isDesktop: boolean;
}

export const StepperNav = (props: IStepperNavProps): JSX.Element => {
  return (
    <nav style={props.isDesktop?{}:{...displayFlex}}>
      {props.steps.map(
        (
          {stepContent, stepStateColor, onClickHandler, stepStatusCircleSize},
          index,
        ) => (
          <div style={props.isDesktop?{}:{...displayFlex}} key={index}>
            <Step
              stepContent={stepContent}
              statusColor={stepStateColor}
              onClickHandler={onClickHandler}
              statusCircleSize={stepStatusCircleSize}
              isDesktop={props.isDesktop}
            />
            {index !== props.steps.length - 1 && (
              <div
                style={{
                  padding: props.isDesktop? `0 0 0 ${(stepStatusCircleSize ?? 16) / 2 + 1}px`:'9px 10px 0 10px',
                }}>
                <Separator isDesktop={props.isDesktop} />
              </div>
            )}
          </div>
        ),
      )}
    </nav>
  );
};
