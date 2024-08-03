import { CallExpression } from './../../node_modules/acorn/dist/acorn.d';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ScreenContainer = styled.div`
	height: 100vh;
	max-height: 100vh;
	width: 100vw;
	background-image: url('https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?t=st=1722718231~exp=1722721831~hmac=8aa2c5c63b44ad0b0a94892e1ad36ca8d030b5cb9ce8e8f71f02b7d7c50eff75&w=2000 ');
	background-size: cover;
	overflow: hidden;

	@media (max-width: 764px) {
		background-position: center;
	}
`;

export const Container = styled.div`
	display: flex;
	gap: 24px;
	padding: 20px;
`;

export const VscodeContainer = styled(motion.div)`
	width: 100%;
	display: flex;
	justify-content: center;

	@media (max-width: 764px) {
		display: block;
		margin: 0 auto;
	}
`;
