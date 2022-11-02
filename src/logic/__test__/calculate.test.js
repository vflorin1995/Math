import calculate from '../calculate';
import operate from '../operate';

describe('calcule file tests', () => {
  test('pressing AC', () => {
    expect(calculate({ total: 100, next: 120, operation: '+' }, 'AC')).toStrictEqual({ total: null, next: null, operation: null });
  });

  test('Numbers are pressed', () => {
    expect(calculate({ total: null, next: null, operation: null }, '123')).toStrictEqual({ total: null, next: '123' });
  });

  test('Pressing 0', () => {
    expect(calculate({ total: 100, next: 0, operation: '+' }, '0')).toStrictEqual({ total: 100, next: '0', operation: '+' });
  });

  test('Addition', () => {
    expect(calculate({ total: 1, next: 2, operation: '+' }, '=')).toStrictEqual({ total: '3', next: null, operation: null });
  });

  test('Substraction', () => {
    expect(calculate({ total: 5, next: 4, operation: '-' }, '=')).toStrictEqual({ total: '1', next: null, operation: null });
  });

  test('Multiplying', () => {
    expect(calculate({ total: 10, next: 10, operation: 'x' }, '=')).toStrictEqual({ total: '100', next: null, operation: null });
  });

  test('Division', () => {
    expect(calculate({ total: 1000, next: 200, operation: '÷' }, '=')).toStrictEqual({ total: '5', next: null, operation: null });
  });

  test('Equal is not pressed and another sign', () => {
    expect(calculate({ total: 600, next: 200, operation: '÷' }, '+')).toStrictEqual({ total: '3', next: null, operation: '+' });
  });

  test('Second term is introduced', () => {
    expect(calculate({ total: '3', next: null, operation: '+' }, '5000')).toStrictEqual({ total: '3', next: '5000', operation: '+' });
  });
});

