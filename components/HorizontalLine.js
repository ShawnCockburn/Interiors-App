import React from 'react';
import { View } from 'react-native';

import { Theme } from "../constants/Theme";


const HorizontalLine = props => {
    const theme = Theme();
    return (
        <View
        style={{
          borderColor: theme.colors.text,
          borderBottomWidth: 1,
          ...props.style
        }}
      />
    );
};

export default HorizontalLine;
