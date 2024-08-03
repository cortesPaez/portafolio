import styled from 'styled-components';

export const FileListContainer = styled.div`
	display: flex;

	@media (max-width: 764px) {
		& > div:first-child {
			display: none;
		}
	}
`;

export const Container = styled.div`
	background-color: #252526;
	width: 100%;

	@media (max-width: 764px) {
		padding-bottom: 16px;
	}
`;

export const FileListLabelContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px 20px;
`;

export const FileListLabel = styled.div`
	font-size: 11px;
	color: #cccccc;
`;

export const FolderDetail = styled.details`
	color: #cccccc;
	font-size: 11px;
	font-weight: 500;
`;
