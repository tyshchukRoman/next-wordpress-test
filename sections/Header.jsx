import Container from "@/components/Container";
import HeaderMenu from "@/components/HeaderMenu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <HeaderMenu />
      </Container>
    </header>
  );
};

export default Header;
