const stats = [
  { label: 'Active projects', value: '12' },
  { label: 'Weekly revenue', value: '$48.2k' },
  { label: 'Team health', value: '94%' },
]

const tasks = [
  { title: 'Q3 launch review', meta: '10:00 AM with product + growth' },
  { title: 'Homepage experiment', meta: 'Variant B is outperforming by 18%' },
  { title: 'Infrastructure check', meta: '2 alerts cleared, 1 pending review' },
]

export function DesktopView() {
  return (
    <main
      style={{
        minHeight: '100vh',
        width: '100%',
        background:
          'radial-gradient(circle at top left, #f8d57e 0%, #f1eee4 30%, #d7e6f5 100%)',
      }}
    >
      <section
        style={{
          minHeight: '100vh',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1.4fr 0.9fr',
        }}
      >
        <div
          style={{
            padding: '56px 56px 48px',
            color: '#132238',
            textAlign: 'left',
            background: 'rgba(255, 250, 244, 0.82)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 14px',
              borderRadius: '999px',
              background: '#132238',
              color: '#f5f0e8',
              fontSize: '14px',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            Desktop view
          </div>
          <h1
            style={{
              margin: '22px 0 12px',
              fontSize: 'clamp(3rem, 5vw, 4.8rem)',
              lineHeight: 0.95,
            }}
          >
            Wide layouts
            <br />
            can carry more context.
          </h1>
          <p style={{ margin: 0, maxWidth: '52ch', fontSize: '18px', color: '#43556c' }}>
            This breakpoint switches to a denser dashboard composition with side-by-side
            panels, broader reading width, and persistent secondary information.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '16px',
              marginTop: '28px',
            }}
          >
            {stats.map((item) => (
              <article
                key={item.label}
                style={{
                  borderRadius: '20px',
                  padding: '20px',
                  background: '#f7f1e8',
                }}
              >
                <div style={{ fontSize: '14px', color: '#6b7787' }}>{item.label}</div>
                <div style={{ marginTop: '8px', fontSize: '32px', fontWeight: 700 }}>
                  {item.value}
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside
          style={{
            background: '#132238',
            color: '#f5f0e8',
            padding: '56px 40px 48px',
            textAlign: 'left',
          }}
        >
          <div style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Today
          </div>
          <div style={{ marginTop: '10px', fontSize: '36px', fontWeight: 700, lineHeight: 1 }}>
            3 priorities
          </div>
          <div style={{ marginTop: '22px', display: 'grid', gap: '14px' }}>
            {tasks.map((task) => (
              <article
                key={task.title}
                style={{
                  borderRadius: '18px',
                  padding: '18px',
                  background: 'rgba(255, 255, 255, 0.08)',
                }}
              >
                <div style={{ fontSize: '18px', fontWeight: 600 }}>{task.title}</div>
                <div style={{ marginTop: '6px', fontSize: '14px', color: '#c4d0dc' }}>
                  {task.meta}
                </div>
              </article>
            ))}
          </div>
        </aside>
      </section>
    </main>
  )
}
