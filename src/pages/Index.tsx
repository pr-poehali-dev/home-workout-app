import { useState } from "react";
import Icon from "@/components/ui/icon";
import { type Tab } from "@/components/fitness/data";
import WorkoutsTab from "@/components/fitness/WorkoutsTab";
import ProgressTab from "@/components/fitness/ProgressTab";
import StatsTab from "@/components/fitness/StatsTab";
import ProgramsTab from "@/components/fitness/ProgramsTab";
import ProfileTab from "@/components/fitness/ProfileTab";

export default function Index() {
  const [tab, setTab] = useState<Tab>("workouts");

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
        {tab === "workouts" && <WorkoutsTab />}
        {tab === "progress" && <ProgressTab />}
        {tab === "stats" && <StatsTab />}
        {tab === "programs" && <ProgramsTab />}
        {tab === "profile" && <ProfileTab />}
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
    </div>
  );
}
