/**
 * Check if the object exists and if its length is greater than 0.
 * @param {unknown} object - Object which needs to be checked whether its an array or not. If array, whether it has items or not.
 * @return {boolean}
 */
export const isArrayNotEmpty = (object: unknown): boolean => {
  return Array.isArray(object) && object.length > 0;
};
