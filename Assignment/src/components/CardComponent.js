import * as React from 'react';
import { Button, Card, Title,} from 'react-native-paper';

const CardComponent = props => (
  <Card>
    <Card.Content>
      <Title>{props.title}</Title>
    </Card.Content>
    <Card.Cover
      source={{
        uri:
          'https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/2b523223-05a3-4a2b-a728-354b0815b475',
      }}
    />
    <Card.Actions>
      <Button theme={theme}>{props.firstButton}</Button>
      <Button theme={theme}>{props.secondButton}</Button>
    </Card.Actions>
  </Card>
);
const theme = {
  colors: {
    primary: '#006aff',
  },
};
export default CardComponent;
