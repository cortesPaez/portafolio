import { FileIconVscode, GitIcon, SearcIconVscode, SettingsIcon } from '@/app/windows/components/icons';
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
