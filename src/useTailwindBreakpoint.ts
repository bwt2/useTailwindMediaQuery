import { tailwindBreakpointQueries, type TailwindBreakpoint } from "./tailwindBreakpoints";
import { useMediaQuery } from "./useMediaQuery";

export function useTailwindBreakpoint(tailwindBreakpoint: TailwindBreakpoint): boolean {
  return useMediaQuery(tailwindBreakpointQueries[tailwindBreakpoint]);
}

export function useIsMobile(): boolean {
  return !useTailwindBreakpoint("md");
}

export function useIsTablet(): boolean {
  const md = useTailwindBreakpoint("md");
  const lg = useTailwindBreakpoint("lg");

  return md && !lg;
}

export function useIsDesktop(): boolean {
  return useTailwindBreakpoint("lg");
}

export function useIsLargeDesktop(): boolean {
  return useTailwindBreakpoint("xl");
}