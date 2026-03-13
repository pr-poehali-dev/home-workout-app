import Icon from "@/components/ui/icon";
import { programs, levelColor } from "./data";

export default function ProgramsTab() {
  return (
    <div className="animate-fade-in">
      <div className="mt-2 mb-5">
        <h2 className="font-oswald text-2xl font-bold text-white uppercase">Программы</h2>
        <p className="text-white/40 text-sm mt-1">Структурированные курсы тренировок</p>
      </div>

      <div
        className="relative rounded-2xl overflow-hidden mb-5 p-4 neon-border"
        style={{ background: "linear-gradient(135deg, rgba(255,102,0,0.15), rgba(255,50,0,0.05))" }}
      >
        <div className="flex items-center gap-2 mb-1">
          <Icon name="Play" size={14} className="text-orange-400" />
          <span className="text-orange-400 text-xs font-oswald uppercase tracking-wider">Активная программа</span>
        </div>
        <h3 className="font-oswald text-xl font-bold text-white mb-2">30 дней трансформации 🏆</h3>
        <div className="flex gap-3 text-xs text-white/50 mb-3">
          <span>День 16 из 30</span>
          <span>•</span>
          <span>12 тренировок выполнено</span>
        </div>
        <div className="bg-white/10 rounded-full h-2 overflow-hidden mb-1">
          <div className="progress-bar-animated" style={{ "--progress-width": "53%" } as React.CSSProperties} />
        </div>
        <div className="flex justify-between text-xs text-white/40">
          <span>53%</span>
          <span>Осталось 14 дней</span>
        </div>
      </div>

      <h3 className="font-oswald text-base uppercase tracking-wider text-white/60 mb-3">Все программы</h3>
      <div className="flex flex-col gap-3">
        {programs.map((p, i) => (
          <div
            key={p.id}
            className="glass-card rounded-2xl overflow-hidden"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className={`h-1.5 w-full bg-gradient-to-r ${p.color}`} />
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{p.emoji}</span>
                  <span className="font-oswald text-base font-semibold text-white">{p.title}</span>
                </div>
                <span className={`text-xs font-medium ${levelColor(p.level)}`}>{p.level}</span>
              </div>
              <p className="text-white/50 text-sm mb-3">{p.desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-3 text-xs text-white/40">
                  <span>📅 {p.weeks} нед.</span>
                  <span>🏋️ {p.workoutsCount} трен.</span>
                </div>
                <button className="btn-neon px-3 py-1.5 rounded-lg text-xs">
                  Начать
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
