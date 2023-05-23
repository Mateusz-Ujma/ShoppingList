import styled from 'styled-components';
import theme from '../../assets/theme';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;
export const MainText = styled.h3`
	margin: 20px 0 0 0;
	padding: 0 15px 0 15px;
	font-size: ${theme.fontSize.m};
	font-weight: 700;
	letter-spacing: 1px;
`;
export const Header = styled.h1`
	margin: 20px 0 20px 0;
	font-family: 'Titan One', cursive;
	letter-spacing: 1px;
	text-shadow: 1px 1px 1px #00000020;
	font-size: 40px;
`;
export const ButtonWrapper = styled.div`
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	font-weight: 700;
`;
export const Button = styled.button`
	background-color: ${theme.colors.lightYellow};
	padding: 5px;
	border-radius: 5px;
	border: 1px solid ${theme.colors.darkPurple};
	margin: 10px 0 10px 0;
	width: 240px;
	height: 40px;
	a {
		text-decoration: none;
		color: ${theme.colors.darkPurple};
		font-size: ${theme.fontSize.s};
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
		letter-spacing: 1px;
	}
`;
