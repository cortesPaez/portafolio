import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ScreenContainer = styled.div`
	width: 100%;
	height: calc(100svh - 50px);
	/* overflow: hidden; */
	background-color: #011627;
	/* background-image: url('https://images4.alphacoders.com/132/1327480.png'); */
	position: relative;
	background-position: center;
	background-size: cover;
	background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
	@media (max-width: 764px) {
		/* background-image: url('https://wallpapers-clan.com/wp-content/uploads/2023/01/darth-vader-art-wallpaper.jpg'); */
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

export const Pdf = styled.iframe`
	width: 50%;
	height: 80%;
	position: absolute;
	z-index: 1;
	left: 0;

	@media (max-width: 764px) {
		width: 94%;
		left: 0;
		height: 500px;
	}
`;
