import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import { render } from 'vitest-browser-react'

import { useMediaQuery } from '../src'
import { tailwindBreakpointQueries } from '../src/tailwindBreakpoints'
import {
  installMatchMediaMock,
  seedMatch,
  setMatch,
} from './matchMediaTestUtils'

function QueryProbe() {
  const md = useMediaQuery(tailwindBreakpointQueries.md)

  return <output data-testid="query-probe">{String(md)}</output>
}

beforeEach(() => {
  installMatchMediaMock()
})

afterEach(() => {
  vi.unstubAllGlobals()
})

test('useMediaQuery reflects the current media-query match and updates on change', async () => {
  seedMatch(tailwindBreakpointQueries.md, false)

  const screen = await render(<QueryProbe />)
  const output = screen.getByTestId('query-probe')

  expect(output).toHaveTextContent('false')

  setMatch(tailwindBreakpointQueries.md, true)

  await expect.element(output).toHaveTextContent('true')
})
