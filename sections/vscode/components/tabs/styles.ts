import styled from 'styled-components';

export const EditorContainer = styled.div`
	& > section {
		height: 500px !important;

		@media (max-width: 764px) {
			height: calc(100svh - 120px) !important;
		}
	}
`;

export const TabContainer = styled.div`
	background-color: #292929;
	height: 500px;
	width: 100%;

	@media (max-width: 764px) {
		height: 100%;
		border-radius: 0px;
		width: 100%;
	}

	.cm-editor {
		& > .cm-scroller {
			& > div:nth-child(2) {
				tab-size: 2 !important;
			}
		}

		@media (max-width: 764px) {
			border-radius: 0px;
		}
	}
`;

interface TabProps {
	$active: boolean;
}

export const Tab = styled.div<TabProps>`
	padding: 9.5px 32px;
	background-color: ${({ $active }) => ($active ? '#1E1E1E' : '#292929')};
	font-size: 13px;
	color: ${({ $active }) => ($active ? '#FFF' : '#A0A0A0')};
	cursor: pointer;
`;

export const TabFlex = styled.div`
	display: flex;
`;
