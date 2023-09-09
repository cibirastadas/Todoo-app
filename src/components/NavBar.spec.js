import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import './NavBar.js';  // Import your web component

describe('NavBar Component', () => {
  beforeEach(() => {
    // Set up the DOM with your web component
    document.body.innerHTML = `
      <nav-bar>
        <a href="/" slot="nav-link">Home</a>
      </nav-bar>
    `;
  });

  test('it correctly accepts content via slot', () => {
    // Query the DOM using testing-library's screen object
    const links = screen.getByRole('link');
    
    expect(links).toHaveTextContent('Home');
  });
});
