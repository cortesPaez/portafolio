import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	background-color: #333333;
	max-width: 48px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	min-height: 300px;
	cursor: pointer;
	border-radius: 8px 0 0 8px;

	@media (max-width: 764px) {
		border-radius: 0px;
	}
`;

interface ISidebarIconContainer {
	readonly $active?: boolean;
}

export const SidebarIconContainer = styled.div<ISidebarIconContainer>`
	padding: 12px;
	position: relative;
	max-height: 45px;

	${({ $active }) =>
		$active &&
		`&::after {
    content: "";
    height: 100%;
    width: 2px;
    background-color: white;
    left: 0px;
    top: 0px;
    position: absolute;
  }`}
`;
