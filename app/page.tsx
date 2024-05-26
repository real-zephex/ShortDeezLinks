import InputBox from "@/components/inputHandler";
import { fontLexend } from "@/config/fonts";

const HomePage = async () => {
	return (
		<main
			className={`h-full w-full mt-[-2rem] flex flex-col items-center justify-center ${fontLexend.className}`}
		>
			<p className="text-sky-400 text-xl lg:text-3xl md:text-2xl">
				Shorten your links with ease
			</p>
			<InputBox />
		</main>
	);
};

export default HomePage;
