import { useState } from 'react'
import { RxRocket } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
    const [userCred, setUserCred] = useState(null)
    const navigate = useNavigate()
    const onSubmit = (ev) => {

        ev.preventDefault()
        const data = new FormData(ev.currentTarget)
        const credentials = {
            username: data.get('email'),
            password: data.get('password')
        }
        if (!credentials.username || !credentials.password) {
            alert("Fields Most Cotain Data.")
            return
        }
        setUserCred(credentials)
        navigate('/main')
    }

    return (
        < main className="text-center" >

            <section className="form-signin w-100 m-auto">
                <RxRocket className='icon-login' />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <form onSubmit={(ev) => onSubmit(ev)}>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
                </form>
            </section>

        </main >
    )
}