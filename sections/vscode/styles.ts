import styled from 'styled-components';

export const Screen = styled.div`
	position: relative;
	display: flex;
	font-family: 'Segoe UI', Arial, Helvetica, sans-serif;

	@media (max-width: 764px) {
		flex-direction: column;
	}
`;
