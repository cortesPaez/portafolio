'use client';
import { useRef } from 'react';
import { Container, ScreenContainer, Drag, Pdf } from './styles';
import { DesktopIcon } from '@/components/desktop-icon/DesktopIcon';
import VisualStudioCode from '../vscode/VisualStudioCode';
import { useScreenSize } from '@/hooks/useScreenSize';
import useVisualStudioCode from '@/store/vscode';
import { AnimatePresence } from 'framer-motion';

export const Screen = () => {
	const { show, showPdf } = useVisualStudioCode();
	const { width } = useScreenSize();
	const constraintsRef = useRef(null);

	return (
		<ScreenContainer ref={constraintsRef}>
			<Container>
				<DesktopIcon icon="pdf" />
			</Container>
			{showPdf && (
				<Drag
					style={{ padding: '10px' }}
					drag={typeof width === 'number' && width > 764}
					dragMomentum={false}
				>
					<Pdf src="https://drive.google.com/file/d/1yH9_vfZFzPoTWljExlQvpyhzXfOmEguG/preview"></Pdf>
				</Drag>
			)}
			<AnimatePresence>
				{show && (
					<Drag drag={typeof width === 'number' && width > 764} dragMomentum={false}>
						<VisualStudioCode />
					</Drag>
				)}
			</AnimatePresence>
		</ScreenContainer>
	);
};
