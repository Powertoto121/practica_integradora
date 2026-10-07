import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CARRERAS = [
  'Ingeniería en Sistemas',
  'Contabilidad',
  'Ingeniería en Mecatrónica'
];

export default function CarrerasSelector({ carreraSeleccionada, onSelectCarrera }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecciona tu Carrera:</Text>
      <View style={styles.buttonGroup}>
        {CARRERAS.map((carrera) => (
          <Button 
            key={carrera}
            title={carrera.replace('Ingeniería en ', '')} 
            color={carreraSeleccionada === carrera ? '#007AFF' : '#A0A0A0'} 
            onPress={() => onSelectCarrera(carrera)} 
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 8, color: '#495057' },
  buttonGroup: { flexDirection: 'row', justifyContent: 'space-between' }
});