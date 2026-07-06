import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import { render } from 'vitest-browser-react'

import {
  useIsDesktop,
  useIsLargeDesktop,
  useIsMobile,
  useIsTablet,
} from '../src'
import { tailwindBreakpointQueries } from '../src/tailwindBreakpoints'
import {
  installMatchMediaMock,
  seedMatch,
  setMatch,
} from './matchMediaTestUtils'

function BreakpointProbe() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const isDesktop = useIsDesktop()
  const isLargeDesktop = useIsLargeDesktop()

  return (
    <output data-testid="breakpoint-probe">
      {JSON.stringify({ isMobile, isTablet, isDesktop, isLargeDesktop })}
    </output>
  )
}

beforeEach(() => {
  installMatchMediaMock()
})

afterEach(() => {
  vi.unstubAllGlobals()
})

test('breakpoint helpers report mobile, tablet, desktop, and large desktop states', async () => {
  seedMatch(tailwindBreakpointQueries.md, false)
  seedMatch(tailwindBreakpointQueries.lg, false)
  seedMatch(tailwindBreakpointQueries.xl, false)

  const screen = await render(<BreakpointProbe />)
  const output = screen.getByTestId('breakpoint-probe')

  expect(output).toHaveTextContent(
    JSON.stringify({
      isMobile: true,
      isTablet: false,
      isDesktop: false,
      isLargeDesktop: false,
    }),
  )

  setMatch(tailwindBreakpointQueries.md, true)

  await expect.element(output).toHaveTextContent(
    JSON.stringify({
      isMobile: false,
      isTablet: true,
      isDesktop: false,
      isLargeDesktop: false,
    }),
  )

  setMatch(tailwindBreakpointQueries.lg, true)

  await expect.element(output).toHaveTextContent(
    JSON.stringify({
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      isLargeDesktop: false,
    }),
  )

  setMatch(tailwindBreakpointQueries.xl, true)

  await expect.element(output).toHaveTextContent(
    JSON.stringify({
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      isLargeDesktop: true,
    }),
  )
})
