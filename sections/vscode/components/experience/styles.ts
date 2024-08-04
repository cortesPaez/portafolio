import styled from 'styled-components';

export const Card = styled.div`
	background-color: #1e1e1e;
	border-bottom-right-radius: 8px;
	display: flex;
	padding: 24px;

	@media (max-width: 764px) {
		img {
			display: none;
		}
	}
`;

export const CardBody = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	flex-wrap: wrap;
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	color: #cccccc;

	ul {
		padding: 0px;
		margin-left: 16px;
	}

	h2 {
		margin: 0;
		font-size: 26px;
		font-weight: 500;
	}

	span,
	p {
		margin: 0;
		font-size: 16px;
	}

	span {
		font-style: italic;
	}
`;

export const EmployerContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

export const BadgeContainer = styled.div`
	display: flex;
	gap: 8px;
	margin-top: 8px;
	flex-wrap: wrap;
`;
