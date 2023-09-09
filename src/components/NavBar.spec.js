import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
require('../path_to_your_NavBar_component');

describe('NavBar Component', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <nav-bar>
        <a href="/" slot="nav-link">Home</a>
        <a href="/" slot="nav-link">About</a>
      </nav-bar>
    `;
  });

  test('it correctly accepts content via slot', () => {
    const navBar = screen.getByRole('navigation');
    expect(navBar).toBeInTheDocument();

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveTextContent('Home');
    expect(links[1]).toHaveTextContent('About');
  });
});