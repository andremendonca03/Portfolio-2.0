/**
 * A utility function used to clone an array an arbitrary number of times.
 * 
 * @param {<T>[]} arr - An array of elements of any type, determined by the generic T.
 * 
 * @param {number} times - The amount of times the array should be cloned.
 * 
 * @returns {<T>[]} Returns the same generic type T array cloned the passed amount of times.
 */

export default function cloneArray<T>(arr: T[], times: number): T[] {
  return Array.from({ length: times }, () => [...arr]).flat();
}