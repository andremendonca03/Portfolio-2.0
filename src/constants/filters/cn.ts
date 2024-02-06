import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
/** 
 * A utility function used to merge multiple Tailwind classes or apply dynamic Tailwind classes.
 * 
 * @param {ClassValue[]} ...inputs - Any type of class (strings, Tailwind utility classes, CSS Module classes etc...).
 * @returns {string} A space-separated string of class names for the element.
 * 
 * @example
 * <div className={cn('bg-red-500', styles.element, {'bg-blue-500': isActive})}>Element</div>
*/
export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
