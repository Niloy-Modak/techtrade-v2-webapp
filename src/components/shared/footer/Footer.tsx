"use client"
import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Github, Mail } from "lucide-react";

type NavLink = {
  name: string;
  href: string;
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navImformationLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Explore", href: "/admin-dashboard" },
  ];

  const footerLinks = [
    {
      title: "Information",
      links: navImformationLinks,
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-8">
          {/* Brand & Newsletter Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link
              href="/"
              className="text-white text-2xl font-bold tracking-tight"
            >
              Tech Trade
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              Making the world a better place through constructing elegant
              hierarchies and robust software solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2  gap-12 lg:gap-8">
            {/* Nav Links */}
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs">
            © {currentYear} Tech Trade Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Github size={20} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
