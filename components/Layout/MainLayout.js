import { PropsWithChildren, ReactNode } from 'react';
import Footer from '../UI/Footer';
import Nav from '../UI/Navbar';
import { ChakraProvider } from '@chakra-ui/react';

function MainLayout({ children }) {
	return (
		<ChakraProvider>
			<Nav />
			{children}
			<Footer />
		</ChakraProvider>
	);
}

export default MainLayout;
