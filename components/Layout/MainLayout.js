import { PropsWithChildren, ReactNode } from 'react';
import Footer from '../UI/Footer';
import Nav from '../UI/Navbar';

function MainLayout({ children }) {
	return (
		<>
			<Nav />
			{children}
			<Footer />
		</>
	);
}

export default MainLayout;
