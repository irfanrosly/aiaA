import React from 'react';
import { Text } from '@rneui/themed';

interface Props {
  children: any;
  style?: object;
}

const CustomText: React.FC<Props> = ({ children, style, ...rest }) => {
  return (
    <Text style={[{ color: 'red' }, { ...style }]} {...rest}>
      {children}
    </Text>
  );
};

export default CustomText;
