import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineDown } from "react-icons/ai";

const Header = () => {
  return (
    <header className="flex items-center justify-center justify-between">
      <div className="bg-pink-2 p-2 rounded-lg w-fit">
        <GiHamburgerMenu className="w-5 h-5 text-red" />
      </div>

      <div className="flex items-center">
        <HiOutlineLocationMarker className="text-red" />
        <p className="mx-2">Námestie osloboditeľov 3A</p>
        <AiOutlineDown className="text-red" />
      </div>

      <img
        src="/images/profile-picture.png"
        alt="profile picture"
        className="h-12 w-12 rounded-lg"
      />
    </header>
  );
};

export default Header;
