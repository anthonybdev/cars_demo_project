export const convertSpecString = (str: string) =>
  (str.charAt(0).toUpperCase() + str.slice(1)).replaceAll('_', ' ');
