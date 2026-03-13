export type Tab = "workouts" | "progress" | "stats" | "programs" | "profile";

export const HERO_IMG =
  "https://cdn.poehali.dev/projects/d6576aea-c3e2-4b15-86d9-e56071831192/files/d8cd3b0f-873f-4eea-8f02-9c2b6eea83c8.jpg";

export type Workout = {
  id: number;
  title: string;
  duration: string;
  level: string;
  calories: number;
  exercises: number;
  tag: string;
  emoji: string;
  videoThumb: string;
  videoUrl: string;
  tips: string[];
};

export type Program = {
  id: number;
  title: string;
  desc: string;
  weeks: number;
  workoutsCount: number;
  level: string;
  emoji: string;
  color: string;
};

export const workouts: Workout[] = [
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

export const programs: Program[] = [
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

export const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
export const weekActivity = [true, true, false, true, true, false, false];
export const weekHeights = [44, 38, 12, 52, 32, 12, 12];

export const levelColor = (l: string) => {
  if (l === "Лёгкий") return "text-green-400";
  if (l === "Средний") return "text-yellow-400";
  return "text-red-400";
};
