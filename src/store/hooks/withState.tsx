import React, { ComponentType, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators, ActionCreatorsMapObject } from 'redux';
import isEqual from 'lodash/isEqual';
import allActions from '../state/state.actions';
import { RootState } from '../store'; // Adjust the import according to your store setup
import type { GenericComponentProps } from '../../types/components';
import type { NavigationProps } from '../../routes/Router.types';
import { ScreenNames } from '../../routes/Router.constants';
type AllActions = typeof allActions;

export type SelectorProps<S> = {
  selectedState: S;
};

export type PropsWithActions<
  ContainerProps extends GenericComponentProps,
  RouteName extends ScreenNames,
> = ContainerProps &
  NavigationProps<RouteName> & {
    actions: AllActions;
  };

export type PropsWithActionsAndState<
  P extends GenericComponentProps,
  S,
  RouteName extends ScreenNames,
> = PropsWithActions<P, RouteName> & SelectorProps<S>;

const EmptySelectedState = {};

const withState = <P extends GenericComponentProps, S>(
  WrappedComponent: ComponentType<P>,
  selector?: (state: RootState) => S,
  equalityFn: (a: S, b: S) => boolean = isEqual,
) => {
  return (props: P) => {
    const dispatch = useDispatch();

    const actions = useMemo(
      () => bindActionCreators(allActions as ActionCreatorsMapObject, dispatch),
      [dispatch],
    );

    const selectedState = selector
      ? useSelector(selector, equalityFn)
      : (EmptySelectedState as S);

    return (
      <WrappedComponent
        {...props}
        actions={actions as AllActions}
        selectedState={selectedState}
      />
    );
  };
};

export default withState;
