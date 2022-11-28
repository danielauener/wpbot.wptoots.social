import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import Sources from '../components/Sources';

import pic8 from '../assets/images/pic08.jpg';

const sections = [
  { id: 'top', name: 'Follow', icon: 'fa-arrow-right' },
  { id: 'sources', name: 'Sources', icon: 'fa-th' },
  { id: 'contribute', name: 'Contribute', icon: 'fa-github' },
  { id: 'sponsoring', name: 'Sponsoring', icon: 'fa-star' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h3>Toot! I'm the</h3>
            <h2>@wpbot</h2>
            <p>
              Bringing you the best WordPress content to your Mastodon timeline
            </p>
          </header>

          <footer>
            <a href="https://wptoots.social/@wpbot" className="button">
              Follow me: @wpbot@wptoots.social
            </a>
          </footer>
        </div>
      </section>

      <section id="sources" className="two">
        <div className="container">
          <header>
            <h2>Sources</h2>
          </header>

          <p>
            Every source that I publish from, has been checked for{' '}
            <strong>
              credibility, community reputation,
              <br /> relevant content and tollerable posting frequency
            </strong>
            .
          </p>
          <p>
            However if someting is off, gets spammy or in any other way
            <br />
            problematic, please report to{' '}
            <a href="https://wptoots.social/@danielauener" target="_blank">
              @danielauener@wptoots.social
            </a>
            .
          </p>

          <Sources />
        </div>
      </section>

      <section id="contribute" className="three">
        <div className="container">
          <header>
            <h2>Contribute</h2>
          </header>

          <p>
            The @wpbot sources are managed via the following git repo, where you
            are very welcome contribute:
            <br />{' '}
            <a
              href="https://github.com/danielauener/wpbot.wptoots.social"
              target="_blank"
            >
              https://github.com/danielauener/wpbot.wptoots.social
            </a>
          </p>
          <p>The bot syncs the sources file several times per day.</p>
        </div>
      </section>

      <section id="sponsoring" className="four">
        <div className="container">
          <header>
            <h2>Sponsoring</h2>
          </header>
          <p>
            The @wpbot is curated and hosted by the Team of the{' '}
            <a href="https://wptoots.social" target="_blank">
              Mastodon instance wptoots.social
            </a>
            <br />
            If you like it, consider buying them a coffee:
          </p>
          <p>
            <a
              class="sponsor-link"
              target="_blank"
              href="https://www.buymeacoffee.com/wptoots"
            >
              <img src="https://img.buymeacoffee.com/button-api/?text=Buy us a coffee&emoji=&slug=wptoots&button_colour=21759b&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00" />
            </a>
            <br />
            <br />
            <i>
              All donations will be used to cover the costs of running
              wptoots.social
            </i>
          </p>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
