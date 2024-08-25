import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ScreenContainer = styled.div`
	width: 100%;
	height: calc(100svh - 50px);
	overflow: hidden;
	background-color: #011627;
	background-image: url('/bg-desktop.png');
	position: relative;
	background-position: center;
	background-size: cover;
	/* background-image: linear-gradient(60deg, #29323c 0%, #485563 100%); */
	@media (max-width: 764px) {
		background-image: url('/bg-mobile.jpg');
		background-position: center;
		background-size: cover;
	}

	@keyframes blur-in {
		0% {
			filter: blur(12px);
			opacity: 0;
		}

		100% {
			filter: blur(0);
			opacity: 1;
		}
	}

	animation: blur-in 1s linear both;
`;

export const Container = styled.div`
	display: flex;
	gap: 24px;
	padding: 20px;
`;

export const Drag = styled(motion.div)`
	display: block;
	margin: -40px auto;
	transition: all 1ms ease;
	overflow: hidden;
	max-width: 800px;
	height: 537px;

	@media (max-width: 764px) {
		position: absolute;
		top: 0px;
		width: 100%;
		margin: 0;
		height: 100%;
	}
`;

export const Pdf = styled(motion.iframe)`
	width: 50%;
	height: 80%;
	display: block;
	margin: 0 auto;
	z-index: 1;
	left: 0;

	@media (max-width: 764px) {
		width: 94%;
		left: 0;
		height: 500px;
	}
`;
