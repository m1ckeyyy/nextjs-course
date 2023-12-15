"use client";
//cause we'll use hooks
import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
	// const router = useRouter();
	const pathname = usePathname();

	return (
		<Navbar
			bg="primary"
			variant="dark"
			sticky="top"
			expand="sm"
			collapseOnSelect
		>
			<Container>
				<Navbar.Brand as={Link} href="/">
					Next JS 14 Image Galleria
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="main-navbar" />
				<Navbar.Collapse id="main-navbar">
					<Nav>
						<Nav.Link as={Link} href="/hello" active={pathname === "/hello"}>
							Hello
						</Nav.Link>
						<Nav.Link as={Link} href="/static" active={pathname === "/static"}>
							Static
						</Nav.Link>
						<Nav.Link
							as={Link}
							href="/dynamic"
							active={pathname === "/dynamic"}
						>
							Dynamic
						</Nav.Link>
						<Nav.Link as={Link} href="/isr" active={pathname === "/isr"}>
							ISR
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
