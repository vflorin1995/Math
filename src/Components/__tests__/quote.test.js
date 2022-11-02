import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import Quote from '../quote';

describe('Jest Snapshot testing suite', () => {
  it('Matches DOM Snapshot', () => {
    const quotes = renderer.create(<Router><Quote /></Router>).toJSON();
    expect(quotes).toMatchSnapshot();
  });
});
