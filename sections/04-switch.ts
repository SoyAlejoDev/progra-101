// =============================================
// 04 - Sentencia Switch
// =============================================
// Este archivo demuestra el uso de la estructura switch
// como alternativa a múltiples if-else para casos específicos.

let weekDay: number = 4; // Día de la semana: 1=lunes, 2=martes, 3=miércoles, 4=jueves, 5=viernes

// Validación básica: el día debe ser positivo
if (weekDay <= 0) {
  console.log("El valor del día de la semana no es válido");
  throw new Error("El valor del día de la semana no es válido");
}

// Estructura switch para determinar el día de la semana
switch (weekDay) {
  case 1:
    console.log("Hoy es lunes");
    break; // Importante: break para salir del switch
  case 2:
    console.log("Hoy es martes");
    break;
  case 3:
    console.log("Hoy es miércoles");
    break;
  case 4:
    console.log("Hoy es jueves");
    break;
  case 5:
    console.log("Hoy es viernes");
    break;
  default:
    console.log("Es fin de semana o cualquier día"); // Caso por defecto
}
