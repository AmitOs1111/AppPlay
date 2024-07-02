import { AppHeader } from './cmps/app-header.jsx'
import { About } from './views/about.jsx'
import { Home } from './views/home.jsx'
import { MailIndex } from './apps/mail/views/mail-index.jsx'
import { NoteIndex } from './apps/note/views/note-index.jsx'

const Router = ReactRouterDOM.HashRouter
const { Routes, Route, Switch } = ReactRouterDOM

export function App() {
  return (
    <Router>
      <section className="app">
        <AppHeader />
        <Routes>
          <Route path="/mail" element={MailIndex} />
          <Route path="/note" element={NoteIndex} />
          <Route path="/about" element={About} />
          <Route path="/" element={Home} />
        </Routes>
        {/* <Switch>
          <Route path="/mail" component={MailIndex} />
          <Route path="/note" component={NoteIndex} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch> */}
      </section>
    </Router>
  )
}
