import * as React from 'react'
import NxWelcome from './nx-welcome'
import { Link, Route, Routes } from 'react-router-dom'
import styled from '@emotion/styled'

const Me = React.lazy(() => import('me/Module'))
const Sidebar = React.lazy(() => import('sidebar/Module'))

const Foo = styled('div')({
  background: 'teal',
  width: '300px',
  height: '100px',
  color: 'white'
})

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Sidebar />
      <ul>
        <li>
          <Foo>TEST TEST</Foo>
        </li>
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
