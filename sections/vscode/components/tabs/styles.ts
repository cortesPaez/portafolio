import styled from 'styled-components';

export const TabContainer = styled.div`
	background-color: #292929;
	border-radius: 0 8px 8px 0px;

	@media (max-width: 764px) {
		padding-bottom: 16px;
		border-radius: 0px;
		width: 100%;
	}

	.cm-editor {
		border-radius: 8px;

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
