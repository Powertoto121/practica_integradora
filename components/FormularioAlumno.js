import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { CarrerasSelector } from './CarrerasSelector';

export const FormularioAlumno = ({ 
  nombre, 
  setNombre, 
  calificacion, 
  setCalificacion, 
  carrera, 
  setCarrera, 
  onAgregar, 
  mensajeEstado 
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Nombre del Alumno:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. Juan Pérez"
        value={nombre}
        onChangeText={setNombre}
      />

      {/* Componente Modular Independiente de Carrera */}
      <CarrerasSelector 
        carreraSeleccionada={carrera} 
        setCarrera={setCarrera} 
      />

      <Text style={styles.label}>Calificación (0 - 100):</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. 85"
        keyboardType="numeric"
        value={calificacion}
        onChangeText={setCalificacion}
      />

      <TouchableOpacity style={styles.boton} onPress={onAgregar}>
        <Text style={styles.textoBoton}>Evaluar y Registrar</Text>
      </TouchableOpacity>

      {mensajeEstado !== '' && (
        <Text style={styles.mensaje}>{mensajeEstado}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 16, elevation: 3 },
  label: { fontSize: 14, fontWeight: '600', color: '#2c3e50', marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#bdc3c7', borderRadius: 8, padding: 10, marginBottom: 12 },
  boton: { backgroundColor: '#3498db', paddingVertical: 12, borderRadius: 8, alignItems: 'center' },
  textoBoton: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  mensaje: { marginTop: 12, textAlign: 'center', fontWeight: '600', color: '#2c3e50' },
});