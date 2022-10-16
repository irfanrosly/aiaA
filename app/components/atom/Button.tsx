import React from 'react';
import { Button } from '@rneui/themed';

interface Props {
  title: string;
  buttonStyle?: object;
}
const CustomButton: React.FC<Props> = ({ title = 'Button Title', ...rest }) => {
  return <Button title={title} {...rest} />;
};

export default CustomButton;
