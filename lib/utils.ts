import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateYearsOfExperience(startYear: number): number {
  const currentYear = 2025; // 기준 연도
  const years = (currentYear - startYear) + 1; // 입사 연도부터 1년차로 계산
  
  return years;
}
