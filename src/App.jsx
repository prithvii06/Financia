import './App.css'
import { Monitor, Apple, Terminal, Smartphone } from 'lucide-react'
import heroImage from './assets/Hero Image.png'
import mazeSS from './assets/Maze SS.png'
import citySS from './assets/City SS.png'
import fightSS from './assets/Fight SS.png'
import dnyanaAvatar from './assets/dnyana.png'
import prithviAvatar from './assets/prithvi.png'
import prabodhAvatar from './assets/prabodh.png'
import payalAvatar from './assets/payal.png'

const platforms = [
  {
    name: 'Windows',
    icon: Monitor,
    description: 'Windows 10+',
    available: true,
    downloadUrl: null,
  },
  {
    name: 'macOS',
    icon: Apple,
    description: 'macOS 11+',
    available: true,
    downloadUrl: '/Financia-mac.zip',
  },
  {
    name: 'Linux',
    icon: Terminal,
    description: 'Ubuntu 20.04+',
    available: true,
    downloadUrl: null,
  },
  {
    name: 'Android',
    icon: Smartphone,
    description: 'Android 8+',
    available: true,
    downloadUrl: null,
  },
  {
    name: 'iOS',
    icon: Smartphone,
    description: 'iOS 14+',
    available: false,
    downloadUrl: null,
  },
]

const sections = [
  { id: 'about', label: 'About' },
  { id: 'features', label: 'Features' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'creators', label: 'Creators' },
  { id: 'community', label: 'Community' },
]

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function App() {
  return (
    <div className="page">
      <header className="navbar">
        <div className="navbar-left">
          <span className="logo-text">FINANCIA</span>
        </div>
        <nav className="navbar-nav">
          {sections.map((s) => (
            <button
              key={s.id}
              className="nav-link"
              onClick={() => scrollToSection(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>
        <div className="navbar-right">
          <button
            className="download-btn"
            onClick={() => scrollToSection('play')}
          >
            DOWNLOAD
          </button>
        </div>
      </header>

      <main>
        <section id="about" className="section hero-section">
          <div className="hero-content">
            <h1 className="hero-title">FINANCIA</h1>
            <p className="hero-subtitle">
              Level up your financial life in a pixel world.
            </p>
            <p className="hero-text">
              Embark on an epic quest to master money! Learn saving, investing,
              and budgeting through magical NPCs, challenging quests, and
              real-world financial choices.
            </p>
            <button
              className="primary-cta"
              onClick={() => scrollToSection('play')}
            >
              ▼ DOWNLOAD GAME
            </button>
          </div>
          <div className="hero-image-card card-glow">
            <img
              src={heroImage}
              alt="Financia hero scene"
              className="hero-image"
            />
          </div>
        </section>

        <section id="what" className="section two-column">
          <div className="text-column">
            <h2 className="section-title">WHAT IS FINANCIA?</h2>
            <p>
              Financia is a cozy pixel-art RPG that makes financial literacy an
              adventure! Instead of boring textbooks, learn real money skills
              through quests, NPCs, and meaningful choices in a magical world.
            </p>
            <p>
              Build your financial stats, unlock new abilities, and become a
              money master while having fun. Perfect for players of all ages who
              want to level up their real-world financial skills!
            </p>
          </div>
          <div className="stats-card card-glow">
            <div className="stats-left">
              <h3 className="stats-title">YOUR MONEY SKILLS</h3>
              <div className="stat-bar">
                <span>Saving</span>
                <div className="bar">
                  <div className="fill fill-green" style={{ width: '85%' }} />
                </div>
                <span className="level">LV. 85</span>
              </div>
              <div className="stat-bar">
                <span>Investing</span>
                <div className="bar">
                  <div className="fill fill-blue" style={{ width: '70%' }} />
                </div>
                <span className="level">LV. 70</span>
              </div>
              <div className="stat-bar">
                <span>Budgeting</span>
                <div className="bar">
                  <div className="fill fill-purple" style={{ width: '90%' }} />
                </div>
                <span className="level">LV. 90</span>
              </div>
              <div className="stat-bar">
                <span>Debt Management</span>
                <div className="bar">
                  <div className="fill fill-orange" style={{ width: '65%' }} />
                </div>
                <span className="level">LV. 65</span>
              </div>
              <div className="stat-bar">
                <span>Smart Spending</span>
                <div className="bar">
                  <div className="fill fill-teal" style={{ width: '80%' }} />
                </div>
                <span className="level">LV. 80</span>
              </div>
            </div>
            <div className="stats-right">
              <div className="stats-grid">
                <div className="stats-box">
                  <span className="big-number">4</span>
                  <span className="label">Lessons</span>
                </div>
                <div className="stats-box">
                  <span className="big-number">5+</span>
                  <span className="label">Quests</span>
                </div>
                <div className="stats-box">
                  <span className="big-number">10</span>
                  <span className="label">Items</span>
                </div>
                <div className="stats-box">
                  <span className="big-number">5</span>
                  <span className="label">Unique Enemies</span>
                </div>
              </div>
              <div className="quote-box">
                “The most fun I’ve had learning about money!”
                <span className="quote-author">— A happy player</span>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <h2 className="section-title">GAME ABILITIES</h2>
          <p className="section-subtitle">
            Discover the features that make Financia a unique financial learning
            adventure.
          </p>
          <div className="cards-grid">
            {[
              {
                title: 'Explore Worlds',
                text: 'Journey through beautifully crafted pixel worlds, each teaching different financial concepts.',
              },
              {
                title: 'NPC Mentors',
                text: 'Meet wise characters who guide you through saving, investing, and smart money choices.',
              },
              {
                title: 'Real Choices',
                text: 'Make meaningful financial decisions that affect your character’s journey and wealth.',
              },
              {
                title: 'Skill Progression',
                text: 'Level up your financial abilities and unlock new tools, shops, and opportunities.',
              },
              {
                title: 'Virtual Economy',
                text: 'Experience a living economy with shops, banks, investments, and market dynamics.',
              },
              {
                title: 'Learn by Playing',
                text: 'Absorb financial literacy naturally through gameplay, not boring lectures.',
              },
            ].map((card) => (
              <article key={card.title} className="info-card card-glow">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="section">
          <h2 className="section-title">GAME SCREENSHOTS</h2>
          <p className="section-subtitle">
            Get a glimpse into the charming world of Financia.
          </p>
          <div className="cards-grid screenshots-grid">
            {[
              { src: mazeSS, caption: 'Battle monsters in pixel dungeons' },
              { src: citySS, caption: 'Explore vibrant pixel cities' },
              { src: fightSS, caption: 'Epic boss battles await' },
            ].map((shot) => (
              <figure
                key={shot.caption}
                className="screenshot-card card-glow"
              >
                <img
                  src={shot.src}
                  alt={shot.caption}
                  className="screenshot-image"
                />
                <figcaption>{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="play" className="section">
          <h2 className="section-title">PLAY FINANCIA</h2>
          <p className="section-subtitle">
            Download the game on your favorite platform and start your financial
            adventure!
          </p>
          <div className="cards-grid play-grid">
            {platforms.map((p) => {
              const Icon = p.icon
              const cta = p.available ? 'DOWNLOAD' : 'COMING SOON'
              const btnClass = p.available ? 'platform-btn' : 'platform-btn disabled'

              return (
                <article key={p.name} className="platform-card card-glow">
                  <div className="platform-icon">
                    <Icon size={28} />
                  </div>
                  <h3>{p.name}</h3>
                  <p className="platform-note">{p.description}</p>
                  <a
                    href={p.downloadUrl || '#'}
                    className={btnClass}
                    download={p.downloadUrl ? 'Financia-mac.zip' : undefined}
                  >
                    {cta}
                  </a>
                </article>
              )
            })}
          </div>
        </section>

        <section id="creators" className="section">
          <h2 className="section-title">MEET THE CREATORS</h2>
          <p className="section-subtitle">
            The developers who made Financia real.
          </p>
          <div className="cards-grid creators-grid">
            {[
              {
                name: 'Dnyaneshwari Karde',
                role: 'Lead Developer',
                text: 'Spearheads the development process, architecting the core game systems and mechanics.',
                image: dnyanaAvatar,
              },
              {
                name: 'Prabodh Kamble',
                role: 'Backend Developer',
                text: 'Powers the server-side logic, database design, and ensures seamless data flow.',
                image: prabodhAvatar,
              },
              {
                name: 'Prithviraj Gokule',
                role: 'UI/UX Designer',
                text: 'Crafts the visual experience, bringing every screen and interaction to life.',
                image: prithviAvatar,
              },
              {
                name: 'Payal Khode',
                role: 'Game Designer',
                text: 'Designs the quests, storylines, and financial literacy challenges players love.',
                image: payalAvatar,
              },
            ].map((creator) => (
              <article key={creator.name} className="creator-card card-glow">
                <img
                  src={creator.image}
                  alt={creator.name}
                  className="creator-image-placeholder"
                />
                <h3>{creator.name}</h3>
                <p className="creator-role">{creator.role}</p>
                <p>{creator.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="community" className="section community-section">
          <h2 className="section-title">JOIN THE GUILD</h2>
          <p className="section-subtitle">
            Connect with fellow adventurers, get updates, and be the first to
            know about new features!
          </p>
          <div className="community-grid">
            <div className="social-cards">
              {['Discord', 'Twitter', 'Instagram', 'YouTube'].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="social-card card-glow"
                  target="_blank"
                  rel="noreferrer"
                >
                  {name}
                </a>
              ))}
            </div>
            <div className="newsletter card-glow">
              <span className="newsletter-label">GET UPDATES</span>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  alert('Subscribed! (demo)')
                }}
                className="newsletter-form"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                />
                <button type="submit">SUBSCRIBE</button>
              </form>
              <p className="newsletter-note">
                No spam, only game updates and financial tips!
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-section">
          <h3 className="footer-logo">FINANCIA</h3>
          <p>
            A cozy pixel-art RPG that makes learning about money an adventure.
            Level up your financial life while having fun!
          </p>
          <p>Made with ♥ for financial freedom</p>
        </div>
        <div className="footer-section">
          <h4>LINKS</h4>
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('features')}>Features</a>
          <a onClick={() => scrollToSection('play')}>Download</a>
        </div>
        <div className="footer-section">
          <h4>LEGAL</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Press Kit</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default App
