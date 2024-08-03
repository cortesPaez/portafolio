import { FileIconVscode, GitIcon, SearcIconVscode, SettingsIcon } from '@/components/icons';
import { Container, SidebarIconContainer } from './styles';

export const Sidebar = () => {
	return (
		<Container>
			<div>
				<SidebarIconContainer $active={true}>
					<FileIconVscode color="#FFF" />
				</SidebarIconContainer>
				<SidebarIconContainer>
					<SearcIconVscode />
				</SidebarIconContainer>
				<SidebarIconContainer>
					<GitIcon />
				</SidebarIconContainer>
			</div>
			<div>
				<SidebarIconContainer>
					<SettingsIcon />
				</SidebarIconContainer>
			</div>
		</Container>
	);
};
