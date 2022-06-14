import { Dimensions } from '../components/DimensionContainer';

export const getHeight = (width: number, dimentions: Dimensions = { x: 3, y: 2 }): number => {
  return (width / dimentions.x) * dimentions.y;
};
