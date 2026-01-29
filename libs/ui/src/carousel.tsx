import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

export interface CarouselProps {
  imageUri?: string;
  title?: string;
  content: string;
}

export function Carousel({ imageUri, title, content }: CarouselProps) {
  return (
    <Card>
      {imageUri && <Card.Cover source={{ uri: imageUri }} />}
      <Card.Content>
        {title && <Title>{title}</Title>}
        <Paragraph>{content}</Paragraph>
      </Card.Content>
    </Card>
  );
}

export default Carousel;

// import React from 'react';
// import { View, Text } from 'react-native';

// /* eslint-disable-next-line */
// export interface CarouselProps {
// }

// export function Carousel(props: CarouselProps) {
//   return (
//     <View>
//       <Text>Welcome to carousel!</Text>
//     </View>
//   );
// }

// export default Carousel;
