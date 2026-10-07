"use client";

import { useEffect, useState } from "react";

// 1. april 2027 kl. 00:00 norsk tid (sommertid, UTC+2)
const TARGET = Date.parse("2027-04-01T00:00:00+02:00");

function parts(now: number) {
  const ms = Math.max(0, TARGET - now);
  const min = Math.floor(ms / 60000);
  return {
    d: Math.floor(min / 1440),
    h: Math.floor((min % 1440) / 60),
    m: min % 60,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown() {
  const [p, setP] = useState<ReturnType<typeof parts> | null>(null);

  useEffect(() => {
    const tick = () => setP(parts(Date.now()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="device" role="timer" aria-label="Tid igjen til 1. april 2027">
      <div className="device-top">
        <span>Fartsskriver</span>
        <span>Varebil 2,5–3,5 t</span>
      </div>
      <div className="device-screen">
        <span className="tacho-label">Krav gjelder om</span>
        <span className="tacho-digits">
          {p ? (
            <>
              {p.d}
              <small>d</small> {pad(p.h)}:{pad(p.m)}
            </>
          ) : (
            <>
              ---<small>d</small> --:--
            </>
          )}
        </span>
      </div>
      <div className="device-keys" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
      <p className="device-foot">Fra 1. april 2027 · nasjonal godstransport</p>
    </div>
  );
}
