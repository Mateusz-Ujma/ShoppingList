import { NavLink } from 'react-router-dom';
import {
	Button,
	ButtonWrapper,
	Header,
	MainText,
	Wrapper,
} from './Home.styles';

const Home = () => {
	return (
		<Wrapper>
			<Header>Shopping List</Header>
			<MainText>
				Nie zapomnisz już o rzeczach, które musisz kupić podczas
				zakupów spożywczych (i nie tylko).Ta aplikajca pozwoli ci
				łatwo dodawać pozycje do twojej listy, gdy o nich myślisz, a
				także pomaże ci efektywnie organizować zakupy. Dzięki
				aplikacji możesz również oznaczać przedmioty jako kupione,
				dzięki czemu będziesz sprawniej robić zakupy.
			</MainText>
			<ButtonWrapper>
				<Button>
					<NavLink to='login'>Zaloguj się </NavLink>
				</Button>
				lub
				<Button>
					<NavLink to='register'>Załóż darmowe konto </NavLink>
				</Button>
			</ButtonWrapper>
		</Wrapper>
	);
};

export default Home;
