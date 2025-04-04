import { useState } from "react";
import ErrorPassword from "./ErrorPassword";

type Props = {
    fxLogin: (isAuthenticated: boolean) => void;
}

const Login = ({ fxLogin }: Props) => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const correctPassword = import.meta.env.VITE_PASS;

    const handleLogin = () => {
        if (password === correctPassword) {
            fxLogin(true)
        } else {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 6000);
        }
    }

    return (
        <div className="login-container">
            <p>Solo pueden tener acceso quienes tengan una solicitud A-2 aprobada, y reciban la contraseña.</p>
            <h2>Ingresa la contraseña</h2>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
            />
            <button onClick={handleLogin}>Ingresar</button>
            {error && <ErrorPassword />}
        </div>
    );
}

export default Login;