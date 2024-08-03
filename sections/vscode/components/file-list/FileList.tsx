import { DotsIcon } from '@/components/icons';
import { Container, FileListContainer, FileListLabel, FileListLabelContainer } from './styles';
import { FolderTree } from '..';
import { Sidebar } from '../sidebar/Sidebar';

export const FileList = ({ treeState }: any) => {
	return (
		<FileListContainer>
			<Sidebar />
			<Container>
				<FileListLabelContainer>
					<FileListLabel>EXPLORER</FileListLabel>
					<DotsIcon />
				</FileListLabelContainer>
				<FolderTree treeState={treeState} />
			</Container>
		</FileListContainer>
	);
};
