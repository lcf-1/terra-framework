import React from 'react';
import PillList from '../../../../PillList';
import Pill from '../../../../Pill';

const CollapsiblePillListFirstEllipsesPill = () => (
  <PillList
    ariaLabel="Pill Container"
    isCollapsible
  >
    <Pill
      labelText="Very Long Label which should show ellipses"
    />
    <Pill
      labelText="Random"
    />
  </PillList>
);

export default CollapsiblePillListFirstEllipsesPill;
