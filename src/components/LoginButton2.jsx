import { useState } from "react";

function LoginButton2() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return (
        <>
            {isLoggedIn ? (
                <div>
                    <button onClick={logout}>Logout2</button>
                </div>
            ) : (
                <div>
                    <button onClick={login}>Login2</button>
                </div>
            )}
        </>
    );
}

export default LoginButton2;
    