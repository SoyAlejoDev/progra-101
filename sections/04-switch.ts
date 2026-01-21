let weekDay: number = 4; // 1 = lunes 2 = martes 3 = miercoles 4 = jueves 5 = viernes

if (weekDay <= 0) {
  console.log("El valor del día de la semana no es válido");
  throw new Error("El valor del día de la semana no es válido");
}
switch (weekDay) {
  case 1:
    console.log("Hoy es lunes");
    break;
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
    console.log("Es fin de semana o cualquier día");
}
