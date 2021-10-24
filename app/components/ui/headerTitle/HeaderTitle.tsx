import React from "react";
import {Image} from 'react-native';
import images from "../../../assets/images";

function HeaderTitle() {
  return (
    <Image
      style={{ width: 75, height: 75, resizeMode:'contain' }}
      source={images.logoImage}
    />
  );
}

export default HeaderTitle;
