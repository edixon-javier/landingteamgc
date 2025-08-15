import { getThemeValue, isDarkMode, getThemeMode, cx, getCssVar } from '@/lib/themeUtils';
import { getOptimizedImagePath, getSrcSet, generateSizes } from '@/lib/imageUtils';

describe('Theme Utils', () => {
  describe('getThemeValue', () => {
    it('returns correct theme value', () => {
      const value = getThemeValue('colors.primary.500');
      expect(value).toBeDefined();
    });

    it('returns undefined for invalid path', () => {
      const value = getThemeValue('invalid.path');
      expect(value).toBeUndefined();
    });
  });

  describe('cx', () => {
    it('combines classes correctly', () => {
      const classes = cx({
        'base-class': true,
        'conditional-class': true,
        'false-class': false,
      });
      expect(classes).toBe('base-class conditional-class');
    });
  });
});

describe('Image Utils', () => {
  describe('getOptimizedImagePath', () => {
    it('handles external URLs', () => {
      const path = getOptimizedImagePath('https://example.com/image.jpg');
      expect(path).toBe('https://example.com/image.jpg');
    });

    it('normalizes local paths', () => {
      const path = getOptimizedImagePath('/images/test.jpg');
      expect(path).toMatch(/^\/.*test\.jpg$/);
    });

    it('converts to specified format', () => {
      const path = getOptimizedImagePath('/images/test.jpg', 'webp');
      expect(path).toMatch(/\.webp$/);
    });
  });

  describe('generateSizes', () => {
    it('generates correct sizes string', () => {
      const sizes = generateSizes({
        mobile: '100vw',
        tablet: '50vw',
        desktop: '33vw',
        default: '100vw',
      });
      
      expect(sizes).toContain('(min-width:');
      expect(sizes).toContain('100vw');
    });
  });
});
