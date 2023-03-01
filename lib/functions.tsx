import { chunk, flatten, map } from 'lodash';

// function to generate a random id
export const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const assignColor = (
  projectIndices: number[],
  colors: string[],
): { [key: number]: string } => {
  // chunk the project indices into groups of the length of the colors array
  let groupsOf3 = chunk(projectIndices, colors.length);

  const assignedColors = map(groupsOf3, chunk => {
    return map(chunk, (item, index) => {
      return {
        [item]: colors[index],
      };
    });
  });

  return Object.assign({}, ...flatten(assignedColors));
};

//get a random number between start and end
export const getRandomNumber = (
  start: number,
  end: number,
  isInclusive: boolean = true,
): number => {
  const min = isInclusive ? Math.ceil(start) : Math.floor(start);
  const max = isInclusive ? Math.floor(end) : Math.ceil(end);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
