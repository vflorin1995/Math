import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import Nav from '../nav';

describe('Jest Snapshot testing suite', () => {
  it('Matches DOM Snapshot', () => {
    const quotes = renderer.create(<Router><Nav /></Router>).toJSON();
    expect(quotes).toMatchSnapshot();
  });
});
