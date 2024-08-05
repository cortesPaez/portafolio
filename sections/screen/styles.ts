import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ScreenContainer = styled.div`
	width: 100%;
	height: 100svh;
	max-height: 100svh;
	overflow: hidden;
	background-color: #011627;
`;

export const Container = styled.div`
	display: flex;
	gap: 24px;
	padding: 20px;
`;

export const VscodeContainer = styled(motion.div)`
	max-width: 1000px;
	display: block;
	margin: -40px auto;
	transition: all 1ms ease;

	@media (max-width: 764px) {
		position: absolute;
		top: 0px;
		width: 100%;
		margin: 0;
	}
`;
