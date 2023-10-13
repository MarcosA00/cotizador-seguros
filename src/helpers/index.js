export function getDifYear(year) {
  return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
  let i;

  switch (marca) {
    case 1:
      i = 1.3
      break;
    case 2:
      i = 1.15
      break;
    case 3:
      i = 1.05
      break;
    default:
      break;
  }

  return i;
}

export function calcularPlan(plan) {
  return plan  === '1' ? 1.2 : 1.5
}

export function formatearDinero(cantidad) {
  return cantidad.toLocaleString('en-Us', {
    style: 'currency',
    currency: 'USD'
  })
}