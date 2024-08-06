import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ScreenContainer = styled.div`
	width: 100%;
	height: 100svh;
	max-height: 100svh;
	overflow: hidden;
	background-color: #011627;
	background-image: url('https://images4.alphacoders.com/132/1327480.png');
	position: relative;
	background-position: center;
	background-size: cover;

	@media (max-width: 764px) {
		background-image: url('https://wallpapers-clan.com/wp-content/uploads/2023/01/darth-vader-art-wallpaper.jpg');
		background-position: center;
		background-size: cover;
	}
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
