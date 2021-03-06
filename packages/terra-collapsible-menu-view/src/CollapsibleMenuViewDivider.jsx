import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Menu from 'terra-menu';
import ThemeContext from 'terra-theme-context';
import styles from './CollapsibleMenuView.module.scss';

const cx = classNames.bind(styles);

const contextTypes = {
  isCollapsibleMenuItem: PropTypes.bool,
};

const CollapsibleMenuViewDivider = (props, { isCollapsibleMenuItem }) => {
  const theme = React.useContext(ThemeContext);
  if (isCollapsibleMenuItem) {
    return <Menu.Divider />;
  }
  return <div className={cx(['divider', 'face-up-item', theme.className])} />;
};

CollapsibleMenuViewDivider.contextTypes = contextTypes;
export default CollapsibleMenuViewDivider;
