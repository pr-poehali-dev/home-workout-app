import Icon from "@/components/ui/icon";

export default function ProfileTab() {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col items-center pt-4 pb-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-3xl font-bold font-oswald mb-3 animate-pulse-glow">
          АП
        </div>
        <h2 className="font-oswald text-xl font-bold text-white">Алексей Петров</h2>
        <p className="text-white/40 text-sm mt-0.5">Тренируется с марта 2025</p>
        <div className="flex gap-3 mt-3">
          <span className="tag-badge">💪 Уровень 3</span>
          <span className="tag-badge">🔥 Стрик 5 дней</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-5">
        {[
          { label: "Вес", val: "78 кг" },
          { label: "Рост", val: "181 см" },
          { label: "Цель", val: "−5 кг" },
        ].map((s, i) => (
          <div key={i} className="glass-card rounded-xl p-3 text-center">
            <div className="font-oswald text-lg font-bold text-orange-400">{s.val}</div>
            <div className="text-white/40 text-xs mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {[
          { icon: "Target", label: "Цели тренировок", desc: "Похудение, 4 раза в неделю" },
          { icon: "Bell", label: "Напоминания", desc: "08:00 и 19:00" },
          { icon: "Heart", label: "Здоровье и данные", desc: "ЧСС, калории, шаги" },
          { icon: "Share2", label: "Поделиться прогрессом", desc: "Соцсети, друзья" },
          { icon: "Settings", label: "Настройки", desc: "Язык, уведомления, тема" },
        ].map((item, i) => (
          <div key={i} className="glass-card rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9 rounded-lg bg-orange-500/15 flex items-center justify-center flex-shrink-0">
              <Icon name={item.icon as "Target"} size={16} className="text-orange-400" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">{item.label}</div>
              <div className="text-white/40 text-xs mt-0.5">{item.desc}</div>
            </div>
            <Icon name="ChevronRight" size={16} className="text-white/20" />
          </div>
        ))}
      </div>
    </div>
  );
}
