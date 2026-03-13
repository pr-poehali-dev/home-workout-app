import { useState } from "react";
import Icon from "@/components/ui/icon";
import { workouts, HERO_IMG, levelColor, type Workout } from "./data";

export default function WorkoutsTab() {
  const [activeWorkout, setActiveWorkout] = useState<Workout | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
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
              className="glass-card rounded-2xl overflow-hidden cursor-pointer animate-fade-in"
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
    </>
  );
}
