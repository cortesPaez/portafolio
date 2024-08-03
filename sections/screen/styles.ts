import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ScreenContainer = styled.div`
	height: 100vh;
	max-height: 100vh;
	width: 100vw;
	background-image: url('https://mrwallpaper.com/images/file/cityscape-full-desktop-screen-hd-wm129moc1zq8gphu.jpg');
	background-size: cover;
	overflow: hidden;
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
