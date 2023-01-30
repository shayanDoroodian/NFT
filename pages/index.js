import { Container } from '@chakra-ui/react';
import Hero from '../components/HomePage/hero';
import Banner from '../components/HomePage/banner';
import List from '../components/HomePage/list';

export default function HomePage() {
	return (
		<Container maxW={'container.lg'}>
			<Hero></Hero>
			<List></List>
			<Banner></Banner>
		</Container>
	);
}
