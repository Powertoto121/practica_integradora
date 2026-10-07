import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CARRERAS = [
  'Ingeniería en Sistemas',
  'Contabilidad',
  'Ingeniería en Mecatrónica'
];

export const CarrerasSelector = ({ carreraSeleccionada, setCarrera }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Carrera:</Text>
      <View style={styles.grupoBotones}>
        {CARRERAS.map((item) => {
          const esSeleccionado = carreraSeleccionada === item;
          return (
            <TouchableOpacity
              key={item}
              style={[styles.botonOption, esSeleccionado && styles.botonActivo]}
              onPress={() => setCarrera(item)}
            >
              <Text style={[styles.textoOption, esSeleccionado && styles.textoActivo]}>
                {item.replace('Ingeniería en ', '')}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 12 },
  label: { fontSize: 14, fontWeight: '600', color: '#2c3e50', marginBottom: 5 },
  grupoBotones: { flexDirection: 'row', justifyContent: 'space-between' },
  botonOption: {
    flex: 1,
    paddingVertical: 8,
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#f8f9fa'
  },
  botonActivo: { backgroundColor: '#3498db', borderColor: '#3498db' },
  textoOption: { fontSize: 12, fontWeight: '600', color: '#7f8c8d' },
  textoActivo: { color: '#fff' }
});