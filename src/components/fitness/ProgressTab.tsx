import { weekDays, weekActivity, weekHeights } from "./data";

export default function ProgressTab() {
  return (
    <div className="animate-fade-in">
      <div className="mt-2 mb-5">
        <h2 className="font-oswald text-2xl font-bold text-white uppercase">Мой прогресс</h2>
        <p className="text-white/40 text-sm mt-1">Март 2026 — текущая неделя</p>
      </div>

      <div className="glass-card rounded-2xl p-4 mb-4">
        <h3 className="font-oswald text-sm uppercase tracking-wider text-white/50 mb-3">Активность недели</h3>
        <div className="flex items-end justify-between gap-2" style={{ height: 64 }}>
          {weekDays.map((d, i) => (
            <div key={d} className="flex flex-col items-center gap-1 flex-1">
              <div
                className="w-full rounded-lg transition-all"
                style={{
                  height: `${weekHeights[i]}px`,
                  background: weekActivity[i]
                    ? "linear-gradient(180deg, #FF6600, #FF9900)"
                    : "rgba(255,255,255,0.07)",
                }}
              />
              <span className={`text-xs ${weekActivity[i] ? "text-orange-400 font-semibold" : "text-white/30"}`}>{d}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card rounded-2xl p-4 mb-4 neon-border">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-oswald text-sm uppercase tracking-wider text-white/50">Цель месяца</h3>
          <span className="text-orange-400 font-oswald font-bold">16 / 20</span>
        </div>
        <div className="bg-white/10 rounded-full h-2 overflow-hidden">
          <div className="progress-bar-animated" style={{ "--progress-width": "80%" } as React.CSSProperties} />
        </div>
        <p className="text-white/40 text-xs mt-2">Осталось 4 тренировки до цели</p>
      </div>

      <h3 className="font-oswald text-base uppercase tracking-wider text-white/60 mb-3">Достижения</h3>
      <div className="grid grid-cols-2 gap-3">
        {[
          { emoji: "🔥", title: "7 дней подряд", desc: "Стрик тренировок", done: true },
          { emoji: "💪", title: "100 отжиманий", desc: "За одну тренировку", done: true },
          { emoji: "⚡", title: "HIIT мастер", desc: "10 HIIT тренировок", done: false },
          { emoji: "🏆", title: "Марафонец", desc: "30 дней программы", done: false },
        ].map((a, i) => (
          <div key={i} className={`glass-card rounded-xl p-3 ${a.done ? "neon-border" : "opacity-50"}`}>
            <div className="text-2xl mb-2">{a.emoji}</div>
            <div className="font-oswald text-sm font-semibold text-white">{a.title}</div>
            <div className="text-white/40 text-xs mt-0.5">{a.desc}</div>
            {a.done && <div className="tag-badge inline-block mt-2">Получено</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
