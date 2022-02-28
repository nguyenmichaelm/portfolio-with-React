import React from 'react';
import IconButtonList from '../components/IconButtonList';

function Footer() {
  return (
    <footer>
      <section id="contact" className="contact">
        <h2>Contact me via:</h2>
        <IconButtonList />
      </section>
      <p className="copyright">&copy;
        <script>document.write(new Date().getFullYear())</script>
        <span>Copyright Michael Nguyen</span>
      </p>
    </footer>
  );
}

export default Footer;