import React, { FC, useContext } from 'react';
import { PageContext } from '../context/pageContext';

import HomeScreen from '../screens/Home';
import EditNote from '../screens/EditNote';
import AddNote from '../screens/AddNote';

const CurrentPageWidget: FC = () => {
  const { currentPage } = useContext(PageContext);

  switch (currentPage) {
    case 'home':
      return <HomeScreen />;
    case 'edit':
      return <EditNote />;
    case 'add':
      return <AddNote />;
    default:
      return <HomeScreen />;
  }
};

export default CurrentPageWidget;
