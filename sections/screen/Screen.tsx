import { useRef } from 'react';
import { Container, ScreenContainer, VscodeContainer } from './styles';
import { DesktopIcon } from '@/components/desktop-icon/DesktopIcon';
import VisualStudioCode from '../vscode/VisualStudioCode';
import { useScreenSize } from '@/hooks/useScreenSize';

export const Screen = () => {
	const constraintsRef = useRef(null);
	const { width } = useScreenSize();

	return (
		<ScreenContainer ref={constraintsRef}>
			<Container>
				<DesktopIcon icon="file" />
				<DesktopIcon icon="opera" />
				<DesktopIcon icon="spotify" />
			</Container>
			<VscodeContainer
				drag={typeof width === 'number' && width > 764 ? true : 'y'}
				dragMomentum={false}
			>
				<VisualStudioCode />
			</VscodeContainer>
		</ScreenContainer>
	);
};
