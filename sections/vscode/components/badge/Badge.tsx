import { Container } from './styles';

export type BadgeType =
	| 'ReactJS'
	| 'React Native'
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
	| 'Material UI'
	| 'Jest'
	| 'JQuery'
	| 'HTML'
	| 'CSS'
	| 'Jira'
	| 'ExpressJS';

export const Badge = ({ text }: { text: BadgeType }) => {
	return <Container>{text}</Container>;
};
