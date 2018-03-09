import { NavigationActions } from 'react-navigation';

export const dismissModal = (_this) => {
    _this.props.navigation.dispatch(NavigationActions.back())
  }