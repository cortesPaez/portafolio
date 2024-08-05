import styled from 'styled-components';

export const Screen = styled.div`
	position: relative;
	display: flex;
	font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
	height: 645px;
	overflow: hidden;

	@media (max-width: 764px) {
		flex-direction: column;
		height: 100%;
	}
`;
