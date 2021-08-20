export const stringLimiter = (string: string, limit: number, delimiter: string = "..."): string => {
  return string.length > limit ? `${string.substr(0, limit)}${delimiter}` : string;
};