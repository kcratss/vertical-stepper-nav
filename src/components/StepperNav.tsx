import * as React from 'react';
import {Step} from './Step';
import {Separator} from './Separator';

const displayFlex = {
  display: 'flex',
};

export interface IStepDescription {
  stepContent: () => JSX.Element;
  stepStateColor?: string;
  stepStatusCircleSize?: number;
  onClickHandler?: () => void | undefined;
  isActive: boolean;
  currentPage: number;
  isChecked: boolean;
}

export interface IStepperNavProps {
  steps: IStepDescription[];
  isDesktop: boolean;
}
// const checkIsActive = (steps: IStepDescription[], index: number): boolean => {
//   if (index !== steps.length - 1) {
//     return steps[index + 1].isActive ?? false;
//   }
//   return false;
// };

export const StepperNav = (props: IStepperNavProps): JSX.Element => {
  return (
    <nav style={props.isDesktop ? {} : {...displayFlex}}>
      {props.steps.map(
        (
          {
            stepContent,
            stepStateColor,
            onClickHandler,
            stepStatusCircleSize,
            currentPage,
            isChecked,
          },
          index,
        ) => (
          <div style={props.isDesktop ? {} : {...displayFlex}} key={index}>
            <Step
              stepContent={stepContent}
              statusColor={stepStateColor}
              onClickHandler={onClickHandler}
              statusCircleSize={stepStatusCircleSize}
              isDesktop={props.isDesktop}
              isActive={isChecked}
              isCurrentPage={currentPage === index}
            />
            {index !== props.steps.length - 1 && (
              <div
                style={{
                  padding: props.isDesktop
                    ? `0 0 0 ${(stepStatusCircleSize ?? 16) / 2 + 1}px`
                    : '9px 10px 0 10px',
                }}>
                <Separator
                  isDesktop={props.isDesktop}
                  isActive={props.steps[index + 1].isActive}
                />
              </div>
            )}
          </div>
        ),
      )}
    </nav>
  );
};
