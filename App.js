import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { evaluarCalificacion } from './utils/evaluador';
import { FormularioAlumno } from './components/FormularioAlumno';
import { TarjetaAlumno } from './components/TarjetaAlumno';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [calificacion, setCalificacion] = useState('');
  const [listaAlumnos, setListaAlumnos] = useState([]);
  const [mensajeEstado, setMensajeEstado] = useState('');

  const agregarAlumno = () => {
    if (!nombre.trim() || !calificacion.trim()) {
      setMensajeEstado('⚠️ Por favor ingresa el nombre y la calificación.');
      return;
    }

    const nota = parseFloat(calificacion);
    const estado = evaluarCalificacion(nota);

    const nuevoAlumno = {
      id: Date.now().toString(),
      nombre,
      calificacion: nota,
      estado,
    };

    setListaAlumnos([...listaAlumnos, nuevoAlumno]);
    setMensajeEstado(`✅ Alumno ${nombre} registrado como ${estado}.`);
    setNombre('');
    setCalificacion('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Evaluación de Alumnos</Text>

      {/* Componente Modularizado del Formulario */}
      <FormularioAlumno
        nombre={nombre}
        setNombre={setNombre}
        calificacion={calificacion}
        setCalificacion={setCalificacion}
        onAgregar={agregarAlumno}
        mensajeEstado={mensajeEstado}
      />

      <Text style={styles.subtitulo}>Lista de Alumnos Registrados</Text>
      <View>
        {/* Estructura Iterativa (.map) que renderiza el componente TarjetaAlumno */}
        {listaAlumnos.length === 0 ? (
          <Text style={styles.textoVacio}>No hay alumnos registrados aún.</Text>
        ) : (
          listaAlumnos.map((alumno) => (
            <TarjetaAlumno key={alumno.id} alumno={alumno} />
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: 60, paddingHorizontal: 20, paddingBottom: 40, backgroundColor: '#f4f6f9' },
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#2c3e50', textAlign: 'center', marginBottom: 20 },
  subtitulo: { fontSize: 18, fontWeight: 'bold', color: '#34495e', marginTop: 20, marginBottom: 10 },
  textoVacio: { textAlign: 'center', color: '#7f8c8d', fontStyle: 'italic', marginTop: 10 },
});