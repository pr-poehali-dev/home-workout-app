import { useState } from "react";
import Icon from "@/components/ui/icon";

type Tab = "workouts" | "progress" | "stats" | "programs" | "profile";

const HERO_IMG = "https://cdn.poehali.dev/projects/d6576aea-c3e2-4b15-86d9-e56071831192/files/d8cd3b0f-873f-4eea-8f02-9c2b6eea83c8.jpg";

const workouts = [
  {
    id: 1,
    title: "Взрывная кардио",
    duration: "25 мин",
    level: "Средний",
    calories: 320,
    exercises: 8,
    tag: "Кардио",
    emoji: "🔥",
    videoThumb: "https://img.youtube.com/vi/ml6cT4AZdqI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=ml6cT4AZdqI",
    tips: ["Держи спину прямо", "Дыши ритмично", "Не задерживай дыхание"],
  },
  {
    id: 2,
    title: "Сила без железа",
    duration: "35 мин",
    level: "Сложный",
    calories: 280,
    exercises: 10,
    tag: "Сила",
    emoji: "💪",
    videoThumb: "https://img.youtube.com/vi/vc1E5CfRfos/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=vc1E5CfRfos",
    tips: ["Контролируй движение", "Полная амплитуда", "Не блокируй суставы"],
  },
  {
    id: 3,
    title: "Утренний заряд",
    duration: "15 мин",
    level: "Лёгкий",
    calories: 120,
    exercises: 6,
    tag: "Разминка",
    emoji: "☀️",
    videoThumb: "https://img.youtube.com/vi/qsNDkUsP25c/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=qsNDkUsP25c",
    tips: ["Плавные движения", "Разогрей суставы", "Дыши глубоко"],
  },
  {
    id: 4,
    title: "Пресс и кор",
    duration: "20 мин",
    level: "Средний",
    calories: 180,
    exercises: 7,
    tag: "Кор",
    emoji: "⚡",
    videoThumb: "https://img.youtube.com/vi/2pLT-olgUJs/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=2pLT-olgUJs",
    tips: ["Держи пресс в тонусе", "Поясница к полу", "Не тяни шею руками"],
  },
  {
    id: 5,
    title: "HIIT тренировка",
    duration: "30 мин",
    level: "Сложный",
    calories: 400,
    exercises: 12,
    tag: "HIIT",
    emoji: "🚀",
    videoThumb: "https://img.youtube.com/vi/7gOBjfpHOQ4/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=7gOBjfpHOQ4",
    tips: ["Максимальная отдача", "Отдых строго по таймеру", "Следи за пульсом"],
  },
  {
    id: 6,
    title: "Растяжка и гибкость",
    duration: "25 мин",
    level: "Лёгкий",
    calories: 90,
    exercises: 9,
    tag: "Растяжка",
    emoji: "🧘",
    videoThumb: "https://img.youtube.com/vi/g_tea8ZNk5A/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=g_tea8ZNk5A",
    tips: ["Без резких движений", "Дыши в растяжке", "Чувствуй мышцу"],
  },
];

const programs = [
  {
    id: 1,
    title: "30 дней трансформации",
    desc: "Полная программа для изменения тела с нуля",
    weeks: 4,
    workoutsCount: 24,
    level: "Любой",
    emoji: "🏆",
    color: "from-orange-600 to-red-600",
  },
  {
    id: 2,
    title: "Сжигание жира",
    desc: "Высокоинтенсивные тренировки для похудения",
    weeks: 6,
    workoutsCount: 36,
    level: "Средний",
    emoji: "🔥",
    color: "from-red-600 to-pink-600",
  },
  {
    id: 3,
    title: "Набор мышц дома",
    desc: "Функциональная сила без оборудования",
    weeks: 8,
    workoutsCount: 48,
    level: "Сложный",
    emoji: "💪",
    color: "from-yellow-600 to-orange-600",
  },
  {
    id: 4,
    title: "Новичок старт",
    desc: "Первые шаги в спорте — мягко и уверенно",
    weeks: 3,
    workoutsCount: 15,
    level: "Лёгкий",
    emoji: "🌱",
    color: "from-green-600 to-teal-600",
  },
];

const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
const weekActivity = [true, true, false, true, true, false, false];
const weekHeights = [44, 38, 12, 52, 32, 12, 12];

const levelColor = (l: string) => {
  if (l === "Лёгкий") return "text-green-400";
  if (l === "Средний") return "text-yellow-400";
  return "text-red-400";
};

export default function Index() {
  const [tab, setTab] = useState<Tab>("workouts");
  const [activeWorkout, setActiveWorkout] = useState<(typeof workouts)[0] | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  const navItems: { id: Tab; label: string; icon: string }[] = [
    { id: "workouts", label: "Тренировки", icon: "Dumbbell" },
    { id: "progress", label: "Прогресс", icon: "TrendingUp" },
    { id: "stats", label: "Статистика", icon: "BarChart3" },
    { id: "programs", label: "Программы", icon: "BookOpen" },
    { id: "profile", label: "Профиль", icon: "User" },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col max-w-md mx-auto relative">
      {/* Header */}
      <header className="px-5 pt-6 pb-3 flex items-center justify-between">
        <div>
          <h1 className="font-oswald text-2xl font-bold gradient-text tracking-wide uppercase">FitHome</h1>
          <p className="text-xs text-white/40 font-golos mt-0.5">Тренировки дома</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 glass-card rounded-full flex items-center justify-center">
            <Icon name="Bell" size={16} className="text-white/60" />
          </button>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-sm font-bold font-oswald">
            АП
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto pb-24 px-4">

        {/* === WORKOUTS === */}
        {tab === "workouts" && (
          <div className="animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden mb-5 mt-2" style={{ height: 180 }}>
              <img src={HERO_IMG} alt="workout" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-xs text-orange-400 font-oswald uppercase tracking-widest mb-1">Тренировка дня</p>
                <h2 className="font-oswald text-xl font-bold text-white">HIIT Взрыв — 30 мин</h2>
                <div className="flex items-center gap-3 mt-2">
                  <span className="tag-badge">400 ккал</span>
                  <span className="text-white/60 text-xs">12 упражнений</span>
                </div>
              </div>
              <button className="btn-neon absolute bottom-4 right-4 px-4 py-2 rounded-xl text-sm">
                Начать
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { label: "Тренировок", val: "24", icon: "Zap" },
                { label: "Калорий", val: "8.4k", icon: "Flame" },
                { label: "Часов", val: "18.5", icon: "Clock" },
              ].map((s, i) => (
                <div key={i} className={`glass-card rounded-xl p-3 text-center animate-fade-in delay-${(i + 1) * 100}`}>
                  <Icon name={s.icon as "Zap"} size={16} className="text-neon mx-auto mb-1" />
                  <div className="font-oswald text-lg font-bold text-white">{s.val}</div>
                  <div className="text-white/40 text-xs">{s.label}</div>
                </div>
              ))}
            </div>

            <h3 className="font-oswald text-base uppercase tracking-wider text-white/60 mb-3">Все тренировки</h3>
            <div className="flex flex-col gap-3">
              {workouts.map((w, i) => (
                <div
                  key={w.id}
                  className={`glass-card rounded-2xl overflow-hidden cursor-pointer animate-fade-in`}
                  style={{ animationDelay: `${i * 0.07}s` }}
                  onClick={() => { setActiveWorkout(w); setVideoOpen(false); }}
                >
                  <div className="flex items-stretch">
                    <div className="relative w-24 flex-shrink-0 bg-black/40" style={{ minHeight: 72 }}>
                      <img
                        src={w.videoThumb}
                        alt={w.title}
                        className="w-full h-full object-cover absolute inset-0"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-orange-500/80 flex items-center justify-center">
                          <Icon name="Play" size={12} className="text-black ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <div className="p-3 flex-1">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-1">
                          <span className="text-base">{w.emoji}</span>
                          <span className="font-oswald font-semibold text-white text-sm">{w.title}</span>
                        </div>
                        <span className="tag-badge">{w.tag}</span>
                      </div>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-white/50 text-xs flex items-center gap-1">
                          <Icon name="Clock" size={10} />
                          {w.duration}
                        </span>
                        <span className={`text-xs font-medium ${levelColor(w.level)}`}>{w.level}</span>
                        <span className="text-white/50 text-xs flex items-center gap-1">
                          <Icon name="Flame" size={10} />
                          {w.calories} ккал
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* === PROGRESS === */}
        {tab === "progress" && (
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
        )}

        {/* === STATS === */}
        {tab === "stats" && (
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
        )}

        {/* === PROGRAMS === */}
        {tab === "programs" && (
          <div className="animate-fade-in">
            <div className="mt-2 mb-5">
              <h2 className="font-oswald text-2xl font-bold text-white uppercase">Программы</h2>
              <p className="text-white/40 text-sm mt-1">Структурированные курсы тренировок</p>
            </div>

            <div className="relative rounded-2xl overflow-hidden mb-5 p-4 neon-border" style={{ background: "linear-gradient(135deg, rgba(255,102,0,0.15), rgba(255,50,0,0.05))" }}>
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
                <div key={p.id} className="glass-card rounded-2xl overflow-hidden" style={{ animationDelay: `${i * 0.08}s` }}>
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
        )}

        {/* === PROFILE === */}
        {tab === "profile" && (
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
        )}
      </main>

      {/* Bottom navigation */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md border-t border-white/[0.08] bg-[#0f0f0f]/95 backdrop-blur-xl px-2 py-2 z-50">
        <div className="flex justify-around">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                tab === item.id ? "nav-active" : "text-white/35 hover:text-white/60"
              }`}
            >
              <Icon name={item.icon as "Dumbbell"} size={20} />
              <span className="text-[10px] font-medium font-golos">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Workout detail modal */}
      {activeWorkout && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setActiveWorkout(null)}
        >
          <div
            className="w-full max-w-md bg-[#141414] rounded-t-3xl p-5 animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-4" />
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{activeWorkout.emoji}</span>
              <div>
                <h3 className="font-oswald text-xl font-bold text-white">{activeWorkout.title}</h3>
                <div className="flex gap-3 text-xs mt-0.5">
                  <span className="text-white/50">{activeWorkout.duration}</span>
                  <span className={levelColor(activeWorkout.level)}>{activeWorkout.level}</span>
                  <span className="text-orange-400">{activeWorkout.calories} ккал</span>
                </div>
              </div>
            </div>

            <div
              className="relative rounded-xl overflow-hidden mb-4 cursor-pointer group bg-black/40"
              style={{ height: 160 }}
              onClick={() => setVideoOpen(true)}
            >
              <img src={activeWorkout.videoThumb} alt="video" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shadow-[0_0_20px_rgba(255,102,0,0.5)] group-hover:scale-110 transition-transform">
                  <Icon name="Play" size={22} className="text-black ml-1" />
                </div>
              </div>
              <div className="absolute bottom-2 left-3">
                <span className="tag-badge">Видео-урок</span>
              </div>
            </div>

            <h4 className="font-oswald text-sm uppercase tracking-wider text-white/50 mb-2">Техника выполнения</h4>
            <div className="flex flex-col gap-2 mb-5">
              {activeWorkout.tips.map((tip, i) => (
                <div key={i} className="flex items-center gap-2 glass-card rounded-lg px-3 py-2">
                  <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-400 text-xs font-bold">{i + 1}</span>
                  </div>
                  <span className="text-sm text-white/70">{tip}</span>
                </div>
              ))}
            </div>

            <button className="btn-neon w-full py-3.5 rounded-xl text-sm tracking-wide">
              Начать тренировку
            </button>
          </div>
        </div>
      )}

      {/* Video modal */}
      {videoOpen && activeWorkout && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90"
          onClick={() => setVideoOpen(false)}
        >
          <div className="w-full max-w-md px-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-oswald text-lg text-white">{activeWorkout.title}</h4>
              <button
                onClick={() => setVideoOpen(false)}
                className="w-8 h-8 glass-card rounded-full flex items-center justify-center"
              >
                <Icon name="X" size={14} className="text-white/70" />
              </button>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <iframe
                src={activeWorkout.videoUrl.replace("watch?v=", "embed/")}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                title={activeWorkout.title}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
