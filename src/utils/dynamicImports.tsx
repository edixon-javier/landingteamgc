import dynamic from 'next/dynamic';
import { type ComponentType } from 'react';

interface DynamicLoaderProps {
  loader: () => Promise<{ default: ComponentType<any> }>;
}

// Loader con skeleton animado por defecto
const DefaultSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  </div>
);

export function withDynamicLoader<T>({
  loader,
  LoadingComponent = DefaultSkeleton,
  ssr = false,
}: DynamicLoaderProps & {
  LoadingComponent?: ComponentType;
  ssr?: boolean;
}) {
  return dynamic(loader, {
    loading: LoadingComponent,
    ssr,
  });
}

// Componentes con carga dinámica
export const DynamicHeroSection = withDynamicLoader({
  loader: () => import('@/components/home/HeroSection'),
  ssr: true,
});

export const DynamicCaseStudies = withDynamicLoader({
  loader: () => import('@/components/sections/CaseStudies').then(mod => ({ default: mod.CaseStudies })),
});

export const DynamicSolutions = withDynamicLoader({
  loader: () => import('@/components/sections/Solutions').then(mod => ({ default: mod.Solutions })),
});

export const DynamicMethodology = withDynamicLoader({
  loader: () => import('@/components/sections/Methodology').then(mod => ({ default: mod.Methodology })),
});
