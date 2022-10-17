import React from 'react';
import { Text, Card, Button, Icon } from '@rneui/themed';

interface Props {
  children: any;
  style?: object;
}

const CustomCard: React.FC<Props> = ({ id, item }) => {
  const { Name, wTeaser, wUrl } = item;
  console.log('rest : ', Name);

  return (
    <Card>
      <Card.Title>{Name}</Card.Title>
      <Card.Divider />
      <Card.Image
        style={{ padding: 0 }}
        source={{
          uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
        }}
      />
      <Text style={{ marginBottom: 10 }}>{wUrl}</Text>
      <Button
        // icon={
        //   <Icon name="code" color="#ffffff" iconStyle={{ marginRight: 10 }} />
        // }
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="VIEW NOW"
      />
    </Card>
  );
};

export default CustomCard;
