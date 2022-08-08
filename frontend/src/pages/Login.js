import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const register = async (e) => {
    e.preventDefault();
}
const Login = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const {login, loading, error} = useLogin();
    const signin = async (e) => {
        e.preventDefault();
        await login(email, password); 
    }
    return (
        <form className='login' onSubmit={signin}>
            <h3>Login</h3>
            <label>Email:</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)}
            value={email}></input>
            <label>Password:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)}
            value={password}></input>
            <button disabled={loading}>Log in</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
};
export default Login;