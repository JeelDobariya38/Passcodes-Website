'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(t: Theme) {
  const root = document.documentElement;
  root.classList.toggle('light', t === 'light');
  root.classList.toggle('dark', t === 'dark');
  root.style.colorScheme = t;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Initial value is a placeholder; the inline <head> script sets the real
  // class before first paint, and we sync from the DOM on mount (no flash).
  const [theme, setThemeState] = useState<Theme>('dark');

  useEffect(() => {
    const current: Theme = document.documentElement.classList.contains('light')
      ? 'light'
      : 'dark';
    setThemeState(current);
  }, []);

  const setTheme = useCallback((t: Theme) => {
    try {
      localStorage.setItem('theme', t);
    } catch {
      /* ignore */
    }
    applyTheme(t);
    setThemeState(t);
  }, []);

  const toggle = useCallback(
    () => setTheme(theme === 'light' ? 'dark' : 'light'),
    [theme, setTheme]
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}

/** Inline script injected into <head> to apply the saved theme before paint. */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t='dark';}var d=document.documentElement;d.classList.toggle('light',t==='light');d.classList.toggle('dark',t==='dark');d.style.colorScheme=t;}catch(e){}})();`;
