import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
	return (
		<footer className="bg-accent-1 border-t border-accent-2">
			<Container>
				<div className="py-10 flex flex-col lg:flex-row items-center">
					<a
						href="/about-me"
						className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 "
					>
						About Me
					</a>
				</div>
			</Container>
		</footer>
	);
}
