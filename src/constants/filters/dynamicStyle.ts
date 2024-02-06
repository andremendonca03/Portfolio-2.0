/**
 * A utility function that allows creating dynamic styles for elements with a dynamic value being applied to a tailwind utility.
 * 
 * @param {string|null|undefined} style - The dynamic style to be applied on the utility.
 * 
 * @param {string} utility - The Tailwind utility to receive the dynamic style if it exists.
 * 
 * @example
 *  classname={dynamicStyle(content.bg, "bg-")} // bg-blue-500
 */

export default function dynamicStyle(style: string | null | undefined, utility: string) {
  if (style) {
    return `${utility}${style}`;
  }

  return '';
}