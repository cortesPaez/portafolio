import { Container } from './styles';

export type BadgeType =
	| 'ReactJS'
	| 'Typescript'
	| 'Github'
	| 'Gitlab'
	| 'Git'
	| 'Bitbucket'
	| 'Storybook'
	| 'Atomic Design'
	| 'Ruby on Rails'
	| 'NodeJS'
	| 'Scrum'
	| 'Redux'
	| 'styled-components'
	| 'Material UI';

export const Badge = ({ text }: { text: BadgeType }) => {
	return <Container>{text}</Container>;
};
