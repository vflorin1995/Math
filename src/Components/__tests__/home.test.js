import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import Home from '../home';

describe('Jest Snapshot testing suite', () => {
  it('Matches DOM Snapshot', () => {
    const domTree = renderer.create(<Router><Home /></Router>).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});
