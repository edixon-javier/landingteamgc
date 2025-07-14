export function getBasePath() {
  return process.env.NODE_ENV === 'production' ? '/landingteamgc' : '';
}

export function getImagePath(path: string) {
  const basePath = getBasePath();
  // Asegurarse de que la ruta comience con '/'
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
