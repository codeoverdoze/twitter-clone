import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default function NotificationScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <ExpoConfigView />;
}

NotificationScreen.navigationOptions = {
  title: 'app.json',
};
