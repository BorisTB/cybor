import * as React from 'react'
import NxWelcome from './nx-welcome'
import { Link, Route, Routes } from 'react-router-dom'
import { List, ListItem } from '@brs/shared/ui'

const Me = React.lazy(() => import('me/Module'))

export function App() {
  return (
    <React.Suspense fallback={null}>
      <List>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/me">Me</Link>
        </ListItem>
      </List>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/me">Me</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="web" />} />

        <Route path="/me" element={<Me />} />
      </Routes>
    </React.Suspense>
  )
}

export default App
