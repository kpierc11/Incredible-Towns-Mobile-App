import React from 'react'
import {Image, View} from 'react-native';

export default function HeaderBar() {
    return (
      <View style={{width:'100%', backgroundColor:'blue'}}>
        <Image
          style={{ width: 50, height: 50, backgroundColor:'blue' }}
          source={{uri:'https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg'}}
        />
      </View>
        
      );
}
