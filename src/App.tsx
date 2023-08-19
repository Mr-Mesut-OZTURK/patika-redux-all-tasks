import './App.css'

import { Provider } from 'react-redux'
import { CssBaseline } from '@mui/material'

import store from 'src/redux/store'
import AppRouter from 'src/routes/AppRouter'


function App() {

  return (
    <Provider store={store}>
      <CssBaseline />
      <AppRouter />
    </Provider>
  )
}

export default App
