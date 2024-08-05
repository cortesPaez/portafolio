import { useRef } from 'react';
import { Container, ScreenContainer, VscodeContainer } from './styles';
import { DesktopIcon } from '@/components/desktop-icon/DesktopIcon';
import VisualStudioCode from '../vscode/VisualStudioCode';
import { useScreenSize } from '@/hooks/useScreenSize';
import useVisualStudioCode from '@/store/vscode';

export const Screen = () => {
	const { show } = useVisualStudioCode();
	const { width } = useScreenSize();
	const constraintsRef = useRef(null);
	console.log(show);
	return (
		<ScreenContainer ref={constraintsRef}>
			<Container>
				<DesktopIcon icon="opera" />
				<DesktopIcon icon="file" />
				<DesktopIcon icon="spotify" />
			</Container>
			{show && (
				<VscodeContainer
					drag={typeof width === 'number' && width > 764 ? true : 'y'}
					dragMomentum={false}
				>
					<VisualStudioCode />
				</VscodeContainer>
			)}
		</ScreenContainer>
	);
};
