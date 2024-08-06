'use client';
import { useRef } from 'react';
import { Container, ScreenContainer, Drag } from './styles';
import { DesktopIcon } from '@/components/desktop-icon/DesktopIcon';
import VisualStudioCode from '../vscode/VisualStudioCode';
import { useScreenSize } from '@/hooks/useScreenSize';
import useVisualStudioCode from '@/store/vscode';
import { AnimatePresence, easeIn } from 'framer-motion';

export const Screen = () => {
	const { show } = useVisualStudioCode();
	const { width } = useScreenSize();
	const constraintsRef = useRef(null);

	return (
		<ScreenContainer ref={constraintsRef}>
			<Container>
				<DesktopIcon icon="pdf" />
				<DesktopIcon icon="file" />
				<DesktopIcon icon="spotify" />
			</Container>
			<Drag
				style={{ padding: '10px' }}
				drag={typeof width === 'number' && width > 764}
				dragMomentum={false}
			>
				{/* <iframe
					src="https://drive.google.com/file/d/1yH9_vfZFzPoTWljExlQvpyhzXfOmEguG/preview"
					width="640"
					height="580"
				></iframe> */}
			</Drag>
			<AnimatePresence>
				{show && (
					<Drag
						drag={typeof width === 'number' && width > 764}
						dragMomentum={false}
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0, transform: 'translateY(500px)' }}
						transition={{ ease: easeIn }}
					>
						<VisualStudioCode />
					</Drag>
				)}
			</AnimatePresence>
		</ScreenContainer>
	);
};
