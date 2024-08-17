import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <>
          <Link to="/order-status" className="font-bold hover:text-red-700">
            Order Status
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <Button
          variant="ghost"
          className="font-bold hover:text-red-700 hover:bg-white"
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
      <a
        href="https://www.linkedin.com/in/ayush-kr-iitkgp/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold hover:text-red-700"
      >
        Contact
      </a>
    </span>
  );
};

export default MainNav;
