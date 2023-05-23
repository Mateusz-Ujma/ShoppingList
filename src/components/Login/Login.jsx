import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebaseConfig';
import { useContext, useState } from 'react';
import { AuthContext } from '../../utils/authContext';
import { NavLink, Navigate, redirect } from 'react-router-dom';

const Login = () => {
	const { currentUser } = useContext(AuthContext);
	const [isLogged, setIsLogged] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const login = async () => {
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			setIsLogged(true);
			console.log(currentUser);
		} catch (error) {
			console.log(error.message);
		}
	};
	return (
		<div>
			<input
				type='text'
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>
			<br />
			<input
				type='text'
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>
			<br />
			<button onClick={login}>zaloguj</button>
			<br />
			<button onClick={() => auth.signOut()}>Wyloguj</button>
			<br />
			{isLogged ? <Navigate to='/dashboard' /> : null}
			<button>
				<NavLink to='/dashboard'>dalej</NavLink>
			</button>
		</div>
	);
};

export default Login;
