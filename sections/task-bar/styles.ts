import styled from 'styled-components';

export const Bar = styled.div`
	padding: 3px 16px;
	display: flex;
	justify-content: center;
	background-color: #202020;
	position: absolute;
	z-index: 2;
	bottom: 0px;
	width: -webkit-fill-available;
	opacity: 0.97;
`;

export const AppsBar = styled.div`
	display: flex;
	gap: 4px;
	width: 100%;

	@media (max-width: 764px) {
		& > div:first-child {
			display: none;
		}
		justify-content: space-between;
		width: 100%;
	}
`;

export const AppIconContainer = styled.div`
	display: flex;
	gap: 8px;

	@media (max-width: 764px) {
		& > div:nth-child(2) {
			display: none;
		}
	}
`;

export const IconContainer = styled.div`
	padding: 8px;
	align-items: center;
	display: flex;
	height: 68%;

	&:hover {
		border-radius: 6px;
		background-color: #303030;
	}
`;

export const WindowsIconContainer = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
	width: 100%;
	gap: 8px;

	@media (max-width: 764px) {
		width: auto;
	}
`;

export const HoursWindows = styled.span`
	font-size: 12px;
	color: #fff;
	text-align: end;
	text-wrap: nowrap;
`;

export const WifiSoundContainer = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;
`;
