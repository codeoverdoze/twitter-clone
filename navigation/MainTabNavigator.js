import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MessageScreen from '../screens/MessageScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="ios-home"
    />
  ),
};

//Creating the seacrh stack
const SearchStack = createStackNavigator(
    {
        Search: SearchScreen,
    },
    config
);

SearchStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name="ios-search"
        />
    ),
};

const NotificationStack = createStackNavigator(
    {
        Notification: NotificationScreen,
    },
    config
);

NotificationStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name="ios-notifications-outline"
        />
    ),
};

const MessageStack = createStackNavigator(
    {
        Message: MessageScreen,
    },
    config
);

MessageStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name="ios-mail"
        />
    ),
};




const tabNavigator = createBottomTabNavigator({
  HomeStack,
    SearchStack,
    NotificationStack,
    MessageStack
},{tabBarOptions:{ showLabel: false}});

tabNavigator.path = '';

export default tabNavigator;
