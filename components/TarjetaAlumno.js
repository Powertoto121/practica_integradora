import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const TarjetaAlumno = ({ alumno }) => {
  return (
    <View style={styles.itemAlumno}>
      <View>
        <Text style={styles.nombreAlumno}>{alumno.nombre}</Text>
        <Text style={styles.notaAlumno}>Calificación: {alumno.calificacion}</Text>
      </View>
      <View
        style={[
          styles.badge,
          alumno.estado === 'Aprobado' ? styles.badgeAprobado : styles.badgeReprobado,
        ]}
      >
        <Text style={styles.textoBadge}>{alumno.estado}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemAlumno: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2,
  },
  nombreAlumno: { fontSize: 16, fontWeight: 'bold', color: '#2c3e50' },
  notaAlumno: { fontSize: 14, color: '#7f8c8d' },
  badge: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 20 },
  badgeAprobado: { backgroundColor: '#2ecc71' },
  badgeReprobado: { backgroundColor: '#e74c3c' },
  textoBadge: { color: '#fff', fontWeight: 'bold', fontSize: 12 },
});