import operate from '../operate';

describe('Operate file tests', () => {
  test('It should return the addition of the number', () => {
    const numberOne = 3; const
      numberTwo = 3;
    const operation = '+';
    expect(operate(numberOne, numberTwo, operation)).toEqual('6');
  });

  test('It should return the substraction of the number', () => {
    const numberOne = 3; const
      numberTwo = 3;
    const operation = '-';
    expect(operate(numberOne, numberTwo, operation)).toEqual('0');
  });

  test('It should return the multiplication of the number', () => {
    const numberOne = 3; const
      numberTwo = 3;
    const operation = 'x';
    expect(operate(numberOne, numberTwo, operation)).toEqual('9');
  });

  test('It should return the division of the number', () => {
    const numberOne = 3; const
      numberTwo = 3;
    const operation = '÷';
    expect(operate(numberOne, numberTwo, operation)).toEqual('1');
  });
});
