import { Container } from './styles';

type BadgeType = {
	text:
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
		| 'Redux';
};

export const Badge = ({ text }: BadgeType) => {
	return <Container>{text}</Container>;
};
