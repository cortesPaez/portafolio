import styled from 'styled-components';

export const TabContainer = styled.div`
	width: 500px;
	background-color: #292929;
	border-top-right-radius: 8px;
	border-radius: 8px !important;

	@media (max-width: 764px) {
		width: 100%;
	}
	.cm-editor {
		border-radius: 8px !important;
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
`;

export const TabFlex = styled.div`
	display: flex;
`;
