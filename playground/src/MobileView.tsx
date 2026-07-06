const cards = [
  { title: 'Inbox', value: '14', accent: '#ff8a5b' },
  { title: 'Orders', value: '28', accent: '#2ec4b6' },
  { title: 'Alerts', value: '3', accent: '#4f6df5' },
]

export function MobileView() {
  return (
    <main
      style={{
        minHeight: '100vh',
        width: '100%',
        background:
          'linear-gradient(180deg, #0f1728 0%, #14213d 38%, #f1ebe3 38%, #f1ebe3 100%)',
      }}
    >
      <section
        style={{
          minHeight: '100vh',
          width: '100%',
          maxWidth: '480px',
          margin: '0 auto',
          padding: '28px 22px 32px',
          background: '#fffaf4',
          color: '#132238',
          textAlign: 'left',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            padding: '8px 12px',
            borderRadius: '999px',
            background: '#132238',
            color: '#fffaf4',
            fontSize: '13px',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          Mobile view
        </div>
        <h1
          style={{
            margin: '18px 0 10px',
            fontSize: 'clamp(2.4rem, 11vw, 3.5rem)',
            lineHeight: 1.1,
          }}
        >
          Adaptive Design
        </h1>
        <p style={{ margin: 0, color: '#58677a', fontSize: '16px' }}>
          On small screens the same app becomes a stacked, thumb-friendly summary with one
          primary action path.
        </p>

        <div style={{ display: 'grid', gap: '12px', marginTop: '22px' }}>
          {cards.map((card) => (
            <article
              key={card.title}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 18px',
                borderRadius: '20px',
                background: '#f5eee5',
              }}
            >
              <div>
                <div style={{ fontSize: '15px', color: '#58677a' }}>{card.title}</div>
                <div style={{ marginTop: '4px', fontSize: '28px', fontWeight: 700 }}>
                  {card.value}
                </div>
              </div>
              <div
                style={{
                  width: '14px',
                  height: '52px',
                  borderRadius: '999px',
                  background: card.accent,
                }}
              />
            </article>
          ))}
        </div>

        <button
          type="button"
          style={{
            width: '100%',
            marginTop: '24px',
            padding: '16px',
            border: 0,
            borderRadius: '18px',
            background: '#132238',
            color: '#fffaf4',
            fontSize: '16px',
            fontWeight: 700,
          }}
        >
          Continue to dashboard
        </button>
      </section>
    </main>
  )
}
