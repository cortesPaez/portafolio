'use client';
import { useRef } from 'react';
import { Container, ScreenContainer, Drag, Pdf } from './styles';
import VisualStudioCode from '../vscode/VisualStudioCode';
import { useScreenSize } from '@/hooks/useScreenSize';
import { AnimatePresence } from 'framer-motion';
import { DesktopIcon } from '../../components/desktop-icon/DesktopIcon';
import useWindows from '@/store/windows';

const Screen = () => {
	const { showVscode, showPdf } = useWindows();
	const { width } = useScreenSize();
	const constraintsRef = useRef(null);

	return (
		<ScreenContainer ref={constraintsRef}>
			<Container>
				<DesktopIcon icon="pdf" />
				<DesktopIcon icon="linkedin" />
				<DesktopIcon icon="github" />
			</Container>
			{showPdf && (
				<Pdf
					loading="lazy"
					drag
					dragMomentum={false}
					src="https://drive.google.com/file/d/1sHCp7DjLWO701QmVBczN38JH5OfNE1s7/preview"
				/>
			)}
			<AnimatePresence>
				{showVscode && (
					<Drag drag={typeof width === 'number' && width > 764} dragMomentum={false}>
						<VisualStudioCode />
					</Drag>
				)}
			</AnimatePresence>
		</ScreenContainer>
	);
};

export default Screen;
