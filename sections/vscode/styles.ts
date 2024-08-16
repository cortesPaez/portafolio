import styled from 'styled-components';

export const Screen = styled.div`
	position: relative;
	display: flex;
	font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
	height: 100%;
	/* overflow: hidden; */

	@media (max-width: 764px) {
		flex-direction: column;
		height: 100%;
	}
`;

export const ScreenBar = styled.div`
	padding: 8px;
	background-color: #202020;
	max-width: 1100px;
	border-radius: 10px 10px 0 0;
	display: flex;
	align-items: center;
	justify-content: end;

	@media (max-width: 764px) {
		border-radius: 0;
	}
`;
