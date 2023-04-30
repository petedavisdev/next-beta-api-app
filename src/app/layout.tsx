import 'modern-normalize/modern-normalize.css';
import '../styles/utils.css';

type AppLayoutProps = {
	children: React.ReactNode;
};

export default function AppLayout(props: AppLayoutProps) {
	return props.children;
}

