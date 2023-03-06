import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import routes from './routes'

export function MainApp() {
    return (
        <Router>
            <Routes>
                {routes.map(route => <Route path={route.path} element={route.element} key={route.path} />)}
            </Routes>
        </Router>
    )
}