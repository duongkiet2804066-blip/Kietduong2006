import { useEffect, useState } from 'react';

const useCountdown = () => {
  const [time, setTime] = useState({ h: 5, m: 47, s: 33 });

  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { return { h: 23, m: 59, s: 59 }; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
};

const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div style={{ textAlign: 'center' }}>
    <div
      style={{
        background: 'rgba(255,255,255,0.12)',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: 12,
        padding: '14px 20px',
        minWidth: 72,
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: 36,
        fontWeight: 900,
        color: '#fff',
        lineHeight: 1,
        marginBottom: 8,
      }}
    >
      {String(value).padStart(2, '0')}
    </div>
    <div
      style={{
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.5)',
      }}
    >
      {label}
    </div>
  </div>
);

interface DiscountSectionProps {
  onNavigate?: (page: string) => void;
}

const DiscountSection = ({ onNavigate }: DiscountSectionProps) => {
  const { h, m, s } = useCountdown();

  return (
    <section
      style={{
        background: '#1a1a1a',
        color: '#fff',
        padding: '80px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'repeating-linear-gradient(0deg,rgba(255,255,255,0.02) 0px,rgba(255,255,255,0.02) 1px,transparent 1px,transparent 60px),' +
            'repeating-linear-gradient(90deg,rgba(255,255,255,0.02) 0px,rgba(255,255,255,0.02) 1px,transparent 1px,transparent 60px)',
          pointerEvents: 'none',
        }}
      />
      {/* Accent blob */}
      <div
        style={{
          position: 'absolute',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'rgba(230,57,70,0.08)',
          top: -200,
          right: -100,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 760,
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            background: '#e63946',
            color: '#fff',
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            padding: '6px 18px',
            borderRadius: 999,
            marginBottom: 24,
            animation: 'pulse 2s ease-in-out infinite',
          }}
        >
          ⚡ Limited Time Offer
        </span>

        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(40px, 6vw, 64px)',
            fontWeight: 900,
            margin: '0 0 16px',
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
          }}
        >
          30% OFF{' '}
          <span style={{ color: '#e63946', fontStyle: 'italic' }}>New Arrivals</span>
        </h2>

        <p
          style={{
            fontSize: 17,
            color: 'rgba(255,255,255,0.6)',
            margin: '0 0 40px',
          }}
        >
          Don't miss out on this exclusive offer!
        </p>

        {/* Countdown */}
        <div
          style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 48,
          }}
        >
          <TimeBox value={h} label="Hours" />
          <span style={{ fontSize: 32, fontWeight: 900, color: '#e63946', marginBottom: 20 }}>:</span>
          <TimeBox value={m} label="Minutes" />
          <span style={{ fontSize: 32, fontWeight: 900, color: '#e63946', marginBottom: 20 }}>:</span>
          <TimeBox value={s} label="Seconds" />
        </div>

        <button
          onClick={() => onNavigate?.('discount')}
          style={{
            background: '#e63946',
            color: '#fff',
            border: '2px solid #e63946',
            padding: '16px 52px',
            borderRadius: 4,
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.3s',
            fontFamily: 'inherit',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
            (e.currentTarget as HTMLButtonElement).style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = '#e63946';
            (e.currentTarget as HTMLButtonElement).style.color = '#fff';
          }}
        >
          Claim Your Discount →
        </button>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.04); }
        }
      `}</style>
    </section>
  );
};

export default DiscountSection;