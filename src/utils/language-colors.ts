// Colors from GitHub's linguist: https://github.com/github-linguist/linguist/blob/main/lib/linguist/languages.yml
const LANGUAGE_COLORS: Record<string, string> = {
  "C++": "#f34b7d",
  C: "#555555",
  Rust: "#dea584",
  Go: "#00add8",
  Elixir: "#6e4a7e",
  Python: "#3572a5",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Zig: "#ec915c",
  Lua: "#000080",
  Java: "#b07219",
  Kotlin: "#a97bff",
  Swift: "#f05138",
  Ruby: "#701516",
  PHP: "#4f5d95",
  "C#": "#178600",
  GLSL: "#5686a5",
  WGSL: "#1a5e9a",
  CMake: "#da3434",
  Makefile: "#427819",
  Dockerfile: "#384d54",
};

const FALLBACK_COLOR = "#8b8b8b";

export function getLanguageColor(language: string | null): string {
  if (!language) return FALLBACK_COLOR;
  return LANGUAGE_COLORS[language] ?? FALLBACK_COLOR;
}
