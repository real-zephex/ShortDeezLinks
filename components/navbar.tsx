import React from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
} from "@nextui-org/react";

const NavBar = () => {
	return (
		<Navbar>
			<NavbarBrand>
				<p className="font-bold text-2xl">ShortDeezLinks</p>
			</NavbarBrand>

			<NavbarContent justify="end">
				<NavbarItem>
					<Button
						as={Link}
						color="primary"
						href="https://github.com/real-zephex"
						variant="faded"
						isExternal={true}
					>
						Github
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};

export default NavBar;
