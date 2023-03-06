import { LoginPage } from "./pages/login-page"
import { MainPage } from "./pages/main-page"

export default [
    {
        path: '/',
        element: <LoginPage />
    },
    {
        path: '/main',
        element: <MainPage />
    },
]