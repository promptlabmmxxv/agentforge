const pageStyles: React.CSSProperties = {
  background: "radial-gradient(circle at top, #1f2937 0, #020617 55%, #000000 100%)",
  minHeight: "100vh",
  color: "white",
  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const containerStyles: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "3rem 1.5rem 4rem",
};

const heroStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  gap: "3rem",
  alignItems: "center",
  justifyContent: "space-between",
};

const leftStyles: React.CSSProperties = {
  flex: 1.3,
};

const rightStyles: React.CSSProperties = {
  flex: 1,
};

const badgeStyles: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4rem",
  padding: "0.35rem 0.75rem",
  borderRadius: "999px",
  backgroundColor: "rgba(148, 163, 184, 0.15)",
  border: "1px solid rgba(148, 163, 184, 0.4)",
  fontSize: "0.8rem",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "#e5e7eb",
};

const titleStyles: React.CSSProperties = {
  fontSize: "3rem",
  lineHeight: 1.1,
  fontWeight: 700,
  margin: "1.2rem 0 0.75rem",
};

const gradientWordStyles: React.CSSProperties = {
  background: "linear-gradient(90deg, #22d3ee, #a855f7)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const subtitleStyles: React.CSSProperties = {
  fontSize: "1.05rem",
  color: "#9ca3af",
  maxWidth: "32rem",
};

const ctaRowStyles: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  marginTop: "1.8rem",
  alignItems: "center",
};

const primaryButtonStyles: React.CSSProperties = {
  padding: "0.9rem 1.8rem",
  borderRadius: "999px",
  border: "none",
  backgroundImage: "linear-gradient(135deg, #22d3ee, #a855f7)",
  color: "#020617",
  fontWeight: 600,
  fontSize: "0.95rem",
  cursor: "pointer",
  boxShadow: "0 12px 30px rgba(15, 118, 110, 0.45)",
};

const secondaryLinkStyles: React.CSSProperties = {
  fontSize: "0.9rem",
  color: "#e5e7eb",
  textDecoration: "underline",
  textDecorationColor: "rgba(148, 163, 184, 0.6)",
  cursor: "pointer",
};

const statsRowStyles: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "1.5rem",
  marginTop: "2rem",
  fontSize: "0.8rem",
  color: "#9ca3af",
};

const statItemStyles: React.CSSProperties = {
  minWidth: "8rem",
};

const statNumberStyles: React.CSSProperties = {
  fontSize: "1.1rem",
  fontWeight: 600,
  color: "#e5e7eb",
};

const cardStyles: React.CSSProperties = {
  background:
    "radial-gradient(circle at top left, rgba(56,189,248,0.12), transparent 55%), rgba(15,23,42,0.9)",
  borderRadius: "1.25rem",
  border: "1px solid rgba(148, 163, 184, 0.45)",
  padding: "1.5rem 1.7rem",
  boxShadow: "0 18px 45px rgba(15,23,42,0.8)",
};

const cardHeaderStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1rem",
  fontSize: "0.8rem",
  color: "#9ca3af",
};

const chipStyles: React.CSSProperties = {
  padding: "0.2rem 0.7rem",
  borderRadius: "999px",
  border: "1px solid rgba(148,163,184,0.6)",
};

const stepListStyles: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: "0.5rem 0 0",
  fontSize: "0.83rem",
  color: "#e5e7eb",
};

const stepItemStyles: React.CSSProperties = {
  marginBottom: "0.6rem",
  display: "flex",
  gap: "0.5rem",
  alignItems: "flex-start",
};

const bulletStyles: React.CSSProperties = {
  width: "0.55rem",
  height: "0.55rem",
  borderRadius: "999px",
  marginTop: "0.3rem",
  background:
    "radial-gradient(circle at 30% 30%, #22d3ee, #a855f7)",
};

const footerStyles: React.CSSProperties = {
  marginTop: "3rem",
  borderTop: "1px solid rgba(31,41,55,0.9)",
  paddingTop: "1.5rem",
  fontSize: "0.8rem",
  color: "#6b7280",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "0.8rem",
};

export default function Home() {
  return (
    <main style={pageStyles}>
      <div style={containerStyles}>
        {/* HERO */}
        <div style={heroStyles}>
          <section style={leftStyles}>
            <div style={badgeStyles}>
              <span>⚡ Agent Marketplace</span>
              <span style={{ opacity: 0.7 }}>Build · Sell · Scale</span>
            </div>

            <h1 style={titleStyles}>
              Lancia <span style={gradientWordStyles}>agenti AI</span>{" "}
              pronti a vendere in poche ore.
            </h1>

            <p style={subtitleStyles}>
              AgentForge è la piattaforma per creare, testare e monetizzare
              agenti AI senza un team di sviluppatori. Tu porti l&apos;idea,
              noi ti diamo l&apos;infrastruttura.
            </p>

            <div style={ctaRowStyles}>
              <button style={primaryButtonStyles}>Inizia gratis</button>
              <span style={secondaryLinkStyles}>Guarda un esempio di agente →</span>
            </div>

            <div style={statsRowStyles}>
              <div style={statItemStyles}>
                <div style={statNumberStyles}>15 min</div>
                <div>per creare il tuo primo agente guidato</div>
              </div>
              <div style={statItemStyles}>
                <div style={statNumberStyles}>0€ setup</div>
                <div>paghi solo quando gli agenti iniziano a lavorare</div>
              </div>
              <div style={statItemStyles}>
                <div style={statNumberStyles}>Pronto per Stripe</div>
                <div>integrazione pensata per monetizzare da subito</div>
              </div>
            </div>
          </section>

          {/* CARD DI ANTEPRIMA */}
          <aside style={rightStyles}>
            <div style={cardStyles}>
              <div style={cardHeaderStyles}>
                <span>Anteprima agente</span>
                <span style={chipStyles}>Nova · Sales Assistant</span>
              </div>

              <ul style={stepListStyles}>
                <li style={stepItemStyles}>
                  <span style={bulletStyles} />
                  <span>
                    Definisci <strong>ruolo</strong>, tono di voce e
                    confini dell&apos;agente.
                  </span>
                </li>
                <li style={stepItemStyles}>
                  <span style={bulletStyles} />
                  <span>
                    Collega le tue <strong>fonti</strong>: documenti, offerte,
                    listini, FAQ.
                  </span>
                </li>
                <li style={stepItemStyles}>
                  <span style={bulletStyles} />
                  <span>
                    Pubblica l&apos;agente su <strong>landing page</strong> o
                    embed sul tuo sito.
                  </span>
                </li>
                <li style={stepItemStyles}>
                  <span style={bulletStyles} />
                  <span>
                    Traccia conversazioni, <strong>lead</strong> e
                    performance in un unico pannello.
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        {/* FOOTER MINI */}
        <footer style={footerStyles}>
          <span>© {new Date().getFullYear()} AgentForge · Private beta</span>
          <span>Made for solo founder, marketer e small teams.</span>
        </footer>
      </div>
    </main>
  );
}
