import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PersistGate loading={null} persistor={persistor}>
  <Provider store={store}>
  <ChakraProvider>
    <App />
    </ChakraProvider>
    </Provider>
    </PersistGate>
)
