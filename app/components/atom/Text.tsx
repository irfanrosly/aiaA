import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';

interface Props {
  children: any;
  style?: object;
}

const CustomText: React.FC<Props> = ({ children, style, ...rest }) => {
  return (
    <Text style={[styles.baseStyle, { ...style }]} {...rest}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  baseStyle: {
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
  },
});
