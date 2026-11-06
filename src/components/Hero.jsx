const updates = [
  {
    name: 'Ananya R.',
    initials: 'AR',
    color: '#f2a65a',
    time: '9:12 AM',
    text: 'Shipped the new onboarding flow. Starting on billing emails today.',
    tag: 'On track',
    tone: 'good',
  },
  {
    name: 'Kabir M.',
    initials: 'KM',
    color: '#5bb6a0',
    time: '9:40 AM',
    text: 'Waiting on API keys from the payments team before I can test.',
    tag: 'Blocked',
    tone: 'warn',
  },
  {
    name: 'Sara L.',
    initials: 'SL',
    color: '#8a7cf0',
    time: '10:05 AM',
    text: 'Design review done. Two small fixes left on the settings page.',
    tag: 'On track',
    tone: 'good',
  },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__inner container">
        <a href="#" className="hero__pill" data-reveal>
          <span className="hero__pill-new">New</span>
          AI summaries in Slack
          <span aria-hidden="true">→</span>
        </a>

        <h1 className="hero__title" data-reveal>
          Standups, <em>without</em> the meeting.
        </h1>

        <p className="hero__sub" data-reveal>
          Your team posts a two-minute update whenever suits them. Relay turns
          it into one clear summary, so you know who's blocked before your
          coffee's cold.
        </p>

        <div className="hero__ctas" data-reveal>
          <a href="#" className="btn btn--primary">Start free</a>
          <a href="#how" className="btn btn--ghost">See how it works</a>
        </div>

        <p className="hero__note" data-reveal>
          Free for teams up to 5 · No credit card
        </p>
      </div>

      <div className="hero__stage container" data-reveal>
        <div className="mock" aria-hidden="true">
          <div className="mock__bar">
            <span /><span /><span />
            <div className="mock__url">app.relay.so/today</div>
          </div>

          <div className="mock__body">
            <aside className="mock__side">
              <div className="mock__side-item is-active">Today</div>
              <div className="mock__side-item">This week</div>
              <div className="mock__side-item">Blockers</div>
              <div className="mock__side-item">Team</div>
            </aside>

            <div className="mock__feed">
              <div className="mock__heading">
                <h3>Today's updates</h3>
                <span className="mock__count">3 of 4 posted</span>
              </div>

              {updates.map((u) => (
                <article className="update" key={u.name}>
                  <div className="update__avatar" style={{ '--c': u.color }}>
                    {u.initials}
                  </div>
                  <div className="update__content">
                    <div className="update__meta">
                      <strong>{u.name}</strong>
                      <span>{u.time}</span>
                      <span className={`update__tag update__tag--${u.tone}`}>
                        {u.tag}
                      </span>
                    </div>
                    <p>{u.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="float float--summary" aria-hidden="true">
          <span className="float__icon">✦</span>
          <div>
            <strong>Summary ready</strong>
            <span>1 blocker · 2 on track</span>
          </div>
        </div>

        <div className="float float--streak" aria-hidden="true">
          <strong>12</strong>
          <span>meetings saved this month</span>
        </div>
      </div>
    </section>
  )
}