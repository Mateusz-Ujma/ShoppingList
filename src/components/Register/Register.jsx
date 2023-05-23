import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebaseConfig';

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userName, setUserName] = useState('');

	const register = async () => {
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			user.user.displayName = userName;
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
			<input
				type='text'
				onChange={(e) => {
					setUserName(e.target.value);
				}}
			/>
			<br />
			<button onClick={register}>zarejestruj</button>
		</div>
	);
};

export default Register;
