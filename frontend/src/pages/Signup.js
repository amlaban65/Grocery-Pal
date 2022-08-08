import { useState } from 'react';
const register = async (e) => {
    e.preventDefault();
}
const Signup = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    
    return (
        <form className='signup' onSubmit={register}>
            <h3>Sign up</h3>
            <label>Email:</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)}
            value={email}></input>
            <label>Password:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)}
            value={password}></input>
            <button>Sign up!</button>
        </form>
    )
};
export default Signup;