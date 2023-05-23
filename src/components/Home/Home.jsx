import { NavLink } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h3>
				Nie zapomnisz już o rzeczach, które musisz kupić podczas
				zakupów spożywczych (i nie tylko).Ta aplikajca pozwoli ci
				łatwo dodawać pozycje do twojej listy, gdy o nich myślisz, a
				także pomaże ci efektywnie organizować zakupy. Dzięki
				aplikacji możesz również oznaczać przedmioty jako kupione,
				dzięki czemu będziesz sprawniej robić zakupy.
			</h3>
			<div>
				<button>
					<NavLink to='login'>Zaloguj się </NavLink>
				</button>
				lub
				<button>
					<NavLink to='register'>Załóż darmowe konto </NavLink>
				</button>
			</div>
		</div>
	);
};

export default Home;
