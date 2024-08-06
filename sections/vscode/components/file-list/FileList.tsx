import { DotsIcon } from '@/components/icons';
import { Container, FileListContainer, FileListLabel, FileListLabelContainer } from './styles';
import { FolderTree } from '..';
import { Sidebar } from '../sidebar/Sidebar';
import { useScreenSize } from '@/hooks/useScreenSize';

export const FileList = () => {
	const { width } = useScreenSize();
	return (
		<FileListContainer>
			<Sidebar />
			{width && width > 768 && (
				<Container>
					<FileListLabelContainer>
						<FileListLabel>EXPLORER</FileListLabel>
						<DotsIcon />
					</FileListLabelContainer>
					<FolderTree />
				</Container>
			)}
		</FileListContainer>
	);
};
