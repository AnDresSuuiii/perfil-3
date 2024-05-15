import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const mealsData = [
  {
    id: 1,
 
    description: 'Tostadas integrales con aguacate y huevos',
    photo: require('../img/a.jpg')
  },
  {
    id: 2,
 
    description: 'Ensalada verduras frescas',
    photo: require('../img/as.jpeg')
  },
  {
    id: 3,
  
    description: 'Batido de frutas y frutos secos',
    photo: require('../img/asd.jpg')
  },
  {
    id: 4,

    description: 'Pechuga de pollo a la plancha con vegetales ',
    photo: require('../img/asdf.jpeg')
  },
  {
    id: 5,

    description: 'Yogurt griego con miel y nueces',
    photo: require('../img/asdfg.jpg')  },
  {
    id: 6,

    description: 'frijol con huevo',
    photo: require('../img/huev.jpeg')
  },
];

const MealsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {mealsData.map(meal => (
        <Card key={meal.id} style={styles.card}>
          <Card.Cover source={meal.photo} style={styles.image} />
          <Card.Content style={styles.content}>
            <Title style={styles.name}>{meal.name}</Title>
            <Paragraph style={styles.description}>{meal.description}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f2f2f2',
  },
  card: {
    width: 300,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
  },
  image: {
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    padding: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 10,
  },
});

export default MealsScreen;
