import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

/**
 * Get the initial theme based on localStorage or system preference
 */
function getInitialTheme(): Theme {
	if (!browser) return 'light';
	
	// Check localStorage first
	const stored = localStorage.getItem('theme') as Theme;
	if (stored && (stored === 'light' || stored === 'dark')) {
		return stored;
	}
	
	// Fall back to system preference
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';
	}
	
	return 'light';
}

/**
 * Apply theme to document
 */
function applyTheme(theme: Theme) {
	if (!browser) return;
	
	document.documentElement.setAttribute('data-theme', theme);
	localStorage.setItem('theme', theme);
}

// Create the store
const theme = writable<Theme>(getInitialTheme());

// Apply initial theme without transitions
if (browser) {
	// Disable transitions temporarily
	document.documentElement.classList.add('no-transitions');
	applyTheme(getInitialTheme());
	
	// Re-enable transitions after a short delay
	setTimeout(() => {
		document.documentElement.classList.remove('no-transitions');
	}, 100);
}

// Subscribe to theme changes and apply them
theme.subscribe((newTheme) => {
	applyTheme(newTheme);
});

/**
 * Toggle between light and dark themes
 */
export function toggleTheme() {
	theme.update(current => current === 'light' ? 'dark' : 'light');
}

/**
 * Set theme explicitly
 */
export function setTheme(newTheme: Theme) {
	theme.set(newTheme);
}

export { theme }; 