import { theme } from './theme';

/**
 * Recupera un valor del tema por su path
 * @param path Path al valor del tema (e.g., 'colors.primary.500')
 * @returns El valor del tema o undefined si no existe
 */
export function getThemeValue(path: string): string | undefined {
  type ThemeValue = string | number | boolean | null | undefined;
  type ThemeObject = { [key: string]: ThemeObject | ThemeValue };
  type ThemeObjectOrValue = ThemeObject | ThemeValue;
  
  return path.split('.').reduce<ThemeObjectOrValue>((obj, key) => 
    obj && typeof obj === 'object' ? obj[key] : undefined, 
    theme as ThemeObjectOrValue
  ) as string | undefined;
}

/**
 * Verifica si el sistema está en modo oscuro
 * @returns boolean
 */
export function isDarkMode(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Aplica estilos condicionales basados en el modo oscuro/claro
 * @param lightValue Valor para modo claro
 * @param darkValue Valor para modo oscuro
 * @returns El valor apropiado según el modo actual
 */
export function getThemeMode<T>(lightValue: T, darkValue: T): T {
  return isDarkMode() ? darkValue : lightValue;
}

/**
 * Combina clases CSS condicionalmente
 * @param classes Objeto con clases CSS y sus condiciones
 * @returns String de clases CSS combinadas
 */
export function cx(classes: { [key: string]: boolean }): string {
  return Object.entries(classes)
    .filter(([, condition]) => condition)
    .map(([className]) => className)
    .join(' ');
}

/**
 * Obtiene el valor de una variable CSS
 * @param variableName Nombre de la variable CSS (sin --)
 * @returns Valor de la variable CSS
 */
export function getCssVar(variableName: string): string {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement)
    .getPropertyValue(`--${variableName}`).trim();
}
