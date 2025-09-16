export const MadeWithWivy = () => {
  return (
    <div className="p-4 text-center">
      <a
        href="https://wivy.dev/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Made with Wivy"
        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      >
        <span className="font-sans">Made with</span>
        <span className="inline-flex items-center gap-1 font-mono">
          <span className="text-teal-400">&lt;</span>
          <span className="text-sky-500">W</span>
          <span className="text-slate-400">.</span>
          <span className="text-purple-400">I</span>
          <span className="text-slate-400">.</span>
          <span className="text-pink-400">V</span>
          <span className="text-slate-400">.</span>
          <span className="text-emerald-400">Y</span>
          <span className="text-sky-500">/</span>
          <span className="text-teal-400">&gt;</span>
        </span>
      </a>
    </div>
  );
};


