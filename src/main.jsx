import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import { fetchUsers } from './features/user/userSlice.js'

store.dispatch(fetchUsers());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
