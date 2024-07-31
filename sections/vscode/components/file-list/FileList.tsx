import React from 'react';
import { DotsIcon } from '@/components/icons';
import { Container, FileListLabel, FileListLabelContainer } from './styles';
import { FolderTree } from '..';

export const FileList = ({ treeState }: any) => {
	return (
		<Container>
			<FileListLabelContainer>
				<FileListLabel>EXPLORER</FileListLabel>
				<DotsIcon />
			</FileListLabelContainer>
			<FolderTree treeState={treeState} />
		</Container>
	);
};
