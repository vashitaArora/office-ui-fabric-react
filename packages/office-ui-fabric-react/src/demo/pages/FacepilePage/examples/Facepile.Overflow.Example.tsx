import * as React from 'react';
import {
  IFacepileProps,
  Facepile,
  OverflowButtonType,
} from '../../../../Facepile';
import { Dropdown } from '../../../../Dropdown';
import { Slider } from '../../../../Slider';
import { facepilePersonas } from './FacepileExampleData';
import './Facepile.Examples.scss';

const facepileProps: IFacepileProps = {
  personas: facepilePersonas,
  maxDisplayablePersonas: 5,
  overflowButtonType: OverflowButtonType.downArrow,
  overflowButtonProps: {
    ariaLabel: 'More info',
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) =>
      alert('overflow icon clicked')
  }
};

export interface IFacepileOverflowExampleState {
  displayedPersonas: any;
  overflowButtonType: OverflowButtonType;
}

export class FacepileOverflowExample extends React.Component<any, IFacepileOverflowExampleState> {
  public constructor() {
    super();

    this.state = {
      displayedPersonas: 5,
      overflowButtonType: OverflowButtonType.none
    };
  }

  public render() {
    let { displayedPersonas, overflowButtonType } = this.state;
    facepileProps.maxDisplayablePersonas = displayedPersonas;
    facepileProps.overflowButtonType = overflowButtonType;

    return (
      <div className={ 'ms-FacepileExample' }>
        <Facepile {...facepileProps} />
        <div className={ 'control' }>
          <Slider
            label='Number of Personas Shown:'
            min={ 0 }
            max={ 6 }
            step={ 1 }
            showValue={ true }
            value={ this.state.displayedPersonas }
            onChange={ value => this.setState((prevState: IFacepileOverflowExampleState) => {
              prevState.displayedPersonas = value;
              return prevState;
            }) }
            />
        </div>
        <Dropdown
          label='Overflow Type:'
          selectedKey={ this.state.overflowButtonType }
          options={
            [
              { key: OverflowButtonType.none, text: OverflowButtonType[OverflowButtonType.none] },
              { key: OverflowButtonType.descriptive, text: OverflowButtonType[OverflowButtonType.descriptive] },
              { key: OverflowButtonType.downArrow, text: OverflowButtonType[OverflowButtonType.downArrow] },
              { key: OverflowButtonType.more, text: OverflowButtonType[OverflowButtonType.more] },

            ]
          }
          onChanged={ value => this.setState((prevState: IFacepileOverflowExampleState) => {
            prevState.overflowButtonType = value.key as OverflowButtonType;
            return prevState;
          }) }
          />
      </div>
    );
  }
}