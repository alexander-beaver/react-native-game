import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {Battle} from "./Pages/game/Battle";
const AppRouter = createSwitchNavigator(
    {
      Debug: { screen: Battle },
    },
    {
      initialRouteName: 'Debug',
    }
);
const AppContainer = createAppContainer(AppRouter);
export default AppContainer;
