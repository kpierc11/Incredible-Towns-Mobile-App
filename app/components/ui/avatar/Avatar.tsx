import { Avatar} from 'native-base';
import React from 'react';

function AccountAvatar () {
    return (
        <Avatar
        bg="green.500"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
        }}
      >
        SS
      </Avatar>
    )
}

export default AccountAvatar