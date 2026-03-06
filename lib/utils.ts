import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Returns a human-readable duration from a start date to now.
 *  e.g. "3 months", "1 year 2 months", "1 year"
 */
export function getLiveDuration(startDateStr: string): string {
  const start = new Date(startDateStr);
  const now = new Date();

  let months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth()) +
    1; // count the starting month itself

  if (months < 1) months = 1;

  const years = Math.floor(months / 12);
  const rem = months % 12;

  if (years === 0) return `${months} month${months !== 1 ? "s" : ""}`;
  if (rem === 0) return `${years} year${years !== 1 ? "s" : ""}`;
  return `${years} yr ${rem} mo`;
}