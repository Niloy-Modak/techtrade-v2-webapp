import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <div className="flex justify-around items-center border border-b">
        <h1>navbar</h1>

        <div>
          <ul className="flex gap-4">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/products"}>
              <li>Products</li>
            </Link>
            <Link href={"/admin-dashboard"}>
              <li>Admin Dashboard</li>
            </Link>
          </ul>
        </div>

        <div className="space-x-3">
          <Link href={"/sign-in"}>
            <button>sign in</button>
          </Link>
          <Link href={"/sign-up"}>
            <button>sign up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
