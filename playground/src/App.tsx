import { useIsMobile } from '../../src'
import { DesktopView } from './DesktopView'
import { MobileView } from './MobileView'

export function App() {
  const isMobile = useIsMobile()

  return isMobile
    ? <MobileView />
    : <DesktopView />
}
