import Container from "@/components/Container";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Link href="/">Header</Link>
      </Container>
    </header>
  );
};

export default Header;
