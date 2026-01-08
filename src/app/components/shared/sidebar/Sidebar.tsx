import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="border-r h-screen space-y-4 px-4">
      <h1>Sidebar</h1>

      <div>
        <ul className="flex flex-col gap-2">
          <Link href={"/admin-dashboard"}>
            <li>Admin Dashboard</li>
          </Link>

          <Link href={"/admin-dashboard/add-products"}>
            <li>Add Products</li>
          </Link>

          <Link href={"/admin-dashboard/products-management"}>
            <li>Products Management</li>
          </Link>

          <Link href={"/admin-dashboard/user-management"}>
            <li>UserManagement</li>
          </Link>
          <Link href={"/"}>
            <li>Home</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
