import { createRoot } from 'react-dom/client'
import CesiumViewer from './CesiumViewer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
createRoot($('CesiumViewer')).render(
    <BrowserRouter>
      <Routes>
      <Route
          path='/doc'
          element={
            <a href='/Documentation/index.html' target='_blank' rel='noopener noreferrer'>
              Documentation
            </a>
          }
        />
        <Route path='/' element={<CesiumViewer />} />
      </Routes>
    </BrowserRouter>,
)
