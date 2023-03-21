import GlobalStyle from './globalStyle'
import Navigation from './routes/Navigation'

import { UserProvider } from './context/userContext'
import { TokenProvider } from './context/token'

function App() {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <TokenProvider>
          <Navigation />
        </TokenProvider>
      </UserProvider>
    </>
  )
}

export default App
