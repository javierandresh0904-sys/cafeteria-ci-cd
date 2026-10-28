
const { calcularTotal } = require('./pedido');

test('calcula el total de un pedido', () => {
  expect(calcularTotal(12000, 2)).toBe(24000);
});
