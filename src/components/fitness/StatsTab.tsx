import Icon from "@/components/ui/icon";

export default function StatsTab() {
  return (
    <div className="animate-fade-in">
      <div className="mt-2 mb-5">
        <h2 className="font-oswald text-2xl font-bold text-white uppercase">Статистика</h2>
        <p className="text-white/40 text-sm mt-1">Всё о твоих результатах</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { val: "24", label: "Тренировок", icon: "Dumbbell", color: "text-orange-400" },
          { val: "8 450", label: "Калорий сожжено", icon: "Flame", color: "text-red-400" },
          { val: "18.5ч", label: "Общее время", icon: "Clock", color: "text-yellow-400" },
          { val: "5.2кг", label: "Результат", icon: "TrendingDown", color: "text-green-400" },
        ].map((s, i) => (
          <div key={i} className="glass-card rounded-2xl p-4">
            <Icon name={s.icon as "Dumbbell"} size={20} className={s.color} />
            <div className={`font-oswald text-2xl font-bold mt-2 ${s.color}`}>{s.val}</div>
            <div className="text-white/40 text-xs mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="glass-card rounded-2xl p-4 mb-4">
        <h3 className="font-oswald text-sm uppercase tracking-wider text-white/50 mb-4">По категориям</h3>
        {[
          { label: "Кардио", pct: 35, count: 8, color: "#FF6600" },
          { label: "Сила", pct: 28, count: 7, color: "#FF9900" },
          { label: "HIIT", pct: 20, count: 5, color: "#FFB347" },
          { label: "Растяжка", pct: 17, count: 4, color: "#FFD700" },
        ].map((c, i) => (
          <div key={i} className="mb-3 last:mb-0">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-white/70">{c.label}</span>
              <span style={{ color: c.color }}>{c.count} трен.</span>
            </div>
            <div className="bg-white/10 rounded-full h-1.5 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${c.pct}%`, background: c.color }} />
            </div>
          </div>
        ))}
      </div>

      <h3 className="font-oswald text-base uppercase tracking-wider text-white/60 mb-3">Личные рекорды</h3>
      <div className="flex flex-col gap-2">
        {[
          { label: "Планка", record: "3 мин 42 сек", emoji: "⏱️" },
          { label: "Отжимания", record: "48 раз", emoji: "💪" },
          { label: "Приседания", record: "75 раз", emoji: "🦵" },
          { label: "Бурпи за 1 мин", record: "22 раза", emoji: "⚡" },
        ].map((r, i) => (
          <div key={i} className="glass-card rounded-xl px-4 py-3 flex justify-between items-center">
            <span className="text-white/70 text-sm">{r.emoji} {r.label}</span>
            <span className="font-oswald font-semibold text-orange-400">{r.record}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
