import React from 'react'
import {Image} from 'react-native';

export default function HeaderBar() {
    return (
        <Image
          style={{ width: 50, height: 50 }}
          source={require('@expo/snack-static/react-native-logo.png')}
        />
      );
}
