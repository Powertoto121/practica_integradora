// Estructura Selectiva pura
export const evaluarCalificacion = (nota) => {
  if (nota >= 50) {
    return 'Aprobado';
  } else {
    return 'Reprobado';
  }
};