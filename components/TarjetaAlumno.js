import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const TarjetaAlumno = ({ alumno }) => {
  const esAprobado = alumno.estado === 'Aprobado';

  return (
    <View style={styles.tarjeta}>
      <View style={styles.infoContainer}>
        <Text style={styles.nombre}>{alumno.nombre}</Text>
        {/* Muestra la carrera del alumno */}
        <Text style={styles.carrera}>{alumno.carrera}</Text>
        <Text style={styles.calificacion}>Calificación: {alumno.calificacion}</Text>
      </View>

      <View style={[styles.badge, esAprobado ? styles.aprobado : styles.reprobado]}>
        <Text style={styles.textoBadge}>{alumno.estado}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  infoContainer: {
    flex: 1,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  carrera: {
    fontSize: 13,
    color: '#3498db',
    fontWeight: '600',
    marginTop: 2,
  },
  calificacion: {
    fontSize: 13,
    color: '#7f8c8d',
    marginTop: 2,
  },
  badge: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  aprobado: {
    backgroundColor: '#2ecc71',
  },
  reprobado: {
    backgroundColor: '#e74c3c',
  },
  textoBadge: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});