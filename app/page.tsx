import Link from "next/link";

const journalEntries = [
  {
    category: "From the Writing Desk",
    title: "Building a History the World Misremembered",
    description:
      "Notes on creating a dark fantasy world where history, faith, and mythology cannot be separated.",
    href: "/journal",
  },
  {
    category: "Character Record",
    title: "The Men Who Believe They Are Right",
    description:
      "Why the most frightening antagonists never consider themselves villains.",
    href: "/journal",
  },
  {
    category: "Worldbuilding",
    title: "Inside the Black Castle",
    description:
      "The architecture, history, and atmosphere surrounding the current work.",
    href: "/journal",
  },
];

export default function HomePage() {
  return (
    <main id="top">
      <section className="home-hero">
        <header className="site-header">
          <Link className="author-mark" href="/" aria-label="Jonathan M. James">
            Jonathan M. James
          </Link>

          <nav className="primary-navigation" aria-label="Primary navigation">
            <Link href="/books">Books</Link>
            <Link href="/about">About</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/inner-circle">Inner Circle</Link>
          </nav>
        </header>

        <div className="hero-atmosphere" aria-hidden="true">
          <div className="hero-arch" />
          <div className="hero-mist hero-mist-one" />
          <div className="hero-mist hero-mist-two" />
        </div>

        <div className="hero-content page-shell">
          <div className="hero-copy">
            <p className="eyebrow">Author of Dark Historical Fantasy</p>

            <h1>
              Stories history was
              <span>too afraid to remember.</span>
            </h1>

            <p className="hero-description">
              Jonathan M. James writes immersive gothic fantasy about
              immortality, faith, political power, and the monsters humanity
              creates in its pursuit of salvation.
            </p>

            <div className="hero-actions">
              <Link className="button button-primary" href="/books">
                Explore the Books
              </Link>

              <Link
                className="button button-secondary"
                href="/inner-circle"
              >
                Join the Inner Circle
              </Link>
            </div>
          </div>

          <aside className="current-work-card">
            <p className="card-label">Current Work</p>
            <div className="card-divider" />

            <p className="work-status">A novel in development</p>
            <h2>The Aurelius Saga</h2>

            <p>
              In a late-medieval world governed by kingdoms, noble bloodlines,
              and a Church willing to sanctify terror, ancient powers begin to
              move again.
            </p>

            <Link href="/books/aurelius-saga">
              Enter the saga <span aria-hidden="true">→</span>
            </Link>
          </aside>
        </div>

        <a className="hero-scroll" href="#author-introduction">
          <span>Continue</span>
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section
        className="author-introduction page-shell"
        id="author-introduction"
      >
        <div className="section-heading">
          <p className="eyebrow">The Author</p>
          <h2>
            History provides the bones.
            <span>Darkness gives them life.</span>
          </h2>
        </div>

        <div className="author-introduction-copy">
          <p>
            Jonathan M. James writes expansive dark historical fantasy rooted
            in real human ambition: the hunger for power, the seduction of
            certainty, and the terrible things people justify in the name of a
            greater good.
          </p>

          <p>
            His work combines gothic horror, political intrigue, ancient
            bloodlines, and morally complicated characters within worlds built
            to feel lived in rather than merely invented.
          </p>

          <Link className="text-link" href="/about">
            About Jonathan <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="featured-work" id="featured-work">
        <div className="featured-work-background" aria-hidden="true">
          <div className="castle-silhouette" />
        </div>

        <div className="featured-work-content page-shell">
          <div className="featured-work-copy">
            <p className="eyebrow">The Current Work</p>
            <p className="series-kicker">A Gothic Historical Fantasy</p>

            <h2>The Aurelius Saga</h2>

            <blockquote>
              “He is neither god nor vampire. Death chose him—and bound him to
              existence.”
            </blockquote>

            <p>
              The Aurelius Saga is the first world being developed by Jonathan
              M. James: an epic of immortal bloodlines, corrupted faith,
              political cruelty, and the ancient man standing beyond every
              history written about him.
            </p>

            <div className="featured-actions">
              <Link
                className="button button-primary"
                href="/books/aurelius-saga"
              >
                Discover the Saga
              </Link>

              <Link className="text-link" href="/books">
                View all books <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="saga-seal" aria-label="The Aurelius Saga">
            <span className="saga-seal-symbol" aria-hidden="true">
              ✦
            </span>
            <p>The Aurelius Saga</p>
            <small>Work in progress</small>
          </div>
        </div>
      </section>

      <section className="journal-preview page-shell">
        <div className="journal-heading">
          <div>
            <p className="eyebrow">From the Journal</p>
            <h2>Behind the creation.</h2>
          </div>

          <Link className="text-link" href="/journal">
            Read the journal <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="journal-grid">
          {journalEntries.map((entry, index) => (
            <article className="journal-card" key={entry.title}>
              <p className="journal-number">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="card-label">{entry.category}</p>
              <h3>{entry.title}</h3>
              <p>{entry.description}</p>

              <Link href={entry.href} aria-label={`Read ${entry.title}`}>
                Read entry <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="inner-circle-preview">
        <div className="page-shell inner-circle-grid">
          <div>
            <p className="eyebrow">An Invitation</p>
            <h2>Enter the Inner Circle.</h2>
          </div>

          <div className="inner-circle-copy">
            <p>
              Follow the creation of the books from their earliest stages.
              Receive development letters, private artwork, character records,
              historical research, and future reading excerpts.
            </p>

            <Link
              className="button button-primary"
              href="/inner-circle"
            >
              Join the Inner Circle
            </Link>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-shell footer-content">
          <div>
            <p className="author-mark">Jonathan M. James</p>
            <p>Author of dark historical fantasy</p>
          </div>

          <nav aria-label="Footer navigation">
            <Link href="/books">Books</Link>
            <Link href="/about">About</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <a href="#top">Return to the beginning ↑</a>
        </div>

        <div className="page-shell copyright">
          <p>© {new Date().getFullYear()} Jonathan M. James</p>
          <p>All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}