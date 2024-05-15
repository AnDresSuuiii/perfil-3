import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const studentsData = [
  {
    id: 1,
    name: 'Andres Flores (。・ω・。)',
    carnet: '20210001',
    photo: require('../img/image.png')
  },
  {
    id: 2,
    name: 'Edgar Ariel (. ❛ ᴗ ❛.)',
    carnet: '20210002',
    photo: require('../img/ari.png')
  },
];

const StudentsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {studentsData.map(student => (
        <Card key={student.id} style={styles.card}>
          <Card.Content>
            <Title style={styles.name}>{student.name}</Title>
            <Paragraph style={styles.carnet}>Carnet: {student.carnet}</Paragraph>
          </Card.Content>
          <Card.Cover source={student.photo} style={styles.image} />
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
    backgroundColor: '#f2f2f2', // Color de fondo para la pantalla
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
    backgroundColor: '#fff', // Color de fondo para la card
    overflow: 'hidden', // Para que la imagen no se salga de los bordes de la card
  },
  image: {
    height: 220,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#333', // Color del texto del nombre
  },
  carnet: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555', // Color del texto del carné
    marginBottom: 10,
  },
});

export default StudentsScreen;
