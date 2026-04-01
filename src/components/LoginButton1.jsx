import { useState } from 'react';

function LoginButton1() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    if (isLoggedIn) {
        return <button onClick={logout}>Logout1</button>;
    } else {
        return <button onClick={login}>Login1</button>;
    }
}

export default LoginButton1;