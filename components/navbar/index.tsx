import CartButton from "./cart-button";
import Logo from "./logo";
import SearchInput from "./search-input";

const Navbar = () => (
  <nav className="flex m-8 pb-8 border-b items-center justify-between">
    <Logo />
    <SearchInput />
    <CartButton />
  </nav>
);

export default Navbar;
