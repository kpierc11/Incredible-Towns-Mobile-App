import { Avatar} from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

function AccountAvatar (props: any) {
    return (
        <Avatar
        bg="white"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
        }}
        style={{marginRight:'10%'}}
      >
        Kp
      </Avatar>
    )
}

export default AccountAvatar