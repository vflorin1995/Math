import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import Calculator from '../Calculator';

describe('Jest Snapshot testing suite', () => {
  it('Matches DOM Snapshot', () => {
    const quotes = renderer.create(<Router><Calculator /></Router>).toJSON();
    expect(quotes).toMatchSnapshot();
  });
});
