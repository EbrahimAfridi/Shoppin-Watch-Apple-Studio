import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-8 left-10 w-screen h-fit">
      <Image src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&hei=52&fmt=jpeg&qlt=90&.v=1566849941844" alt="Apple Studio" width={90} height={19} />
    </nav>
  );
};

export default Navbar;
