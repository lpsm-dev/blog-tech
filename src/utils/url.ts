export const getBaseUrl = (): string => {
  return import.meta.env.BASE_URL.replace(/\/$/, "");
};

export const getUrl = (path: string): string => {
  const baseUrl = getBaseUrl();
  const cleanPath = path.replace(/^\//, "");
  return `${baseUrl}/${cleanPath}`.replace(/\/+/g, "/");
};
