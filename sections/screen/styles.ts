import { CallExpression } from './../../node_modules/acorn/dist/acorn.d';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ScreenContainer = styled.div`
	height: 100svh;
	max-height: 100svh;
	width: 100vw;
	overflow: hidden;
	background-color: #011627;
`;

export const Container = styled.div`
	display: flex;
	gap: 24px;
	padding: 20px;
`;

export const VscodeContainer = styled(motion.div)`
	width: 100%;
	max-width: 1100px;
	display: block;
	margin: -40px auto;

	@media (max-width: 764px) {
		position: absolute;
		top: 0px;
	}
`;
