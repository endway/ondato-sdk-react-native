export const getHiddenString = (value: string, count: number = 5): string => {
  return `${getStringStart(value, count)}...${getStringEnd(value, count)}`;
};

export const getStringEnd = (value: string, count: number = 5): string => {
  return value.slice(value.length - count);
};

export const getStringStart = (value: string, count: number = 5): string => {
  return value.slice(0, count);
};
