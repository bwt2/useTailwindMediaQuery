import { tailwindBreakpointQueries, type TailwindBreakpoint } from "./tailwindBreakpoints";
import { useMediaQuery } from "./useMediaQuery";

export function useTailwindBreakpoint(tailwindBreakpoint: TailwindBreakpoint) {
  return useMediaQuery(tailwindBreakpointQueries[tailwindBreakpoint]);
}

export function useIsMobile() {
  return !useTailwindBreakpoint("md");
}

export function useIsTablet() {
  const md = useTailwindBreakpoint("md");
  const lg = useTailwindBreakpoint("lg");

  return md && !lg;
}

export function useIsDesktop() {
  return useTailwindBreakpoint("lg");
}

export function useIsLargeDesktop() {
  return useTailwindBreakpoint("xl");
}