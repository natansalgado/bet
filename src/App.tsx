import GlobalStyles from './styles/global'
import { Nav } from './components/Nav'
import { Mine } from './components/Mine'
import { Double } from './components/Double'
import { Crash } from './components/Crash'
import { Settings } from './components/Settings'

import { useAppSelector } from './hooks'

function App() {
  const { actived } = useAppSelector(state => state.user)

  return (
    <div className='App'>
      <Nav />
      {actived === 'mine' && <Mine />}
      {actived === 'double' && <Double />}
      {actived === 'crash' && <Crash />}
      {actived === 'settings' && <Settings />}
      <GlobalStyles />
    </div>
  )
}

export default App
