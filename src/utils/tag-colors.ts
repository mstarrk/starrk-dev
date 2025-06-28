export const TAG_COLORS: Record<string, string> = {
  // Code
  astro: "bg-purple-600 text-white",
  tailwind: "bg-cyan-600 text-white",
  javascript: "bg-yellow-400 text-black",
  typescript: "bg-blue-500 text-white",
  react: "bg-sky-500 text-white",
  "node.js": "bg-lime-500 text-black",
  git: "bg-red-600 text-white",
  github: "bg-neutral-800 text-white",

  // Writing
  "learning in public": "bg-pink-600 text-white",
  devlog: "bg-orange-600 text-white",
  snippet: "bg-emerald-600 text-white",
  notes: "bg-gray-600 text-white",

  // Gamedev
  gamedev: "bg-violet-500 text-white",
  godot: "bg-indigo-600 text-white",

  // Music
  music: "bg-rose-500 text-white",
  production: "bg-fuchsia-600 text-white",
  soundtrack: "bg-teal-500 text-white",
  composition: "bg-amber-600 text-black",

  // Fallback
  default: "bg-gray-700 text-white",
};

export const getTagColor = (tag: string) => {
  return TAG_COLORS[tag.toLowerCase()] || TAG_COLORS.default;
};
