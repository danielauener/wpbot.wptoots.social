import React from 'react';

export default function PageFooter() {
  return (
    <div id="footer">
      <ul className="copyright">
        <li>&copy; Untitled. All rights reserved.</li>
        <li>
          Bot engine:{' '}
          <a href="https://gitlab.com/chaica/feed2toot">feed2toot</a>
        </li>
        <li>
          Theme:{' '}
          <a href="https://github.com/anubhavsrivastava/gatsby-starter-prologue">
            Gatsby Starter Prologue
          </a>
        </li>
      </ul>
    </div>
  );
}
