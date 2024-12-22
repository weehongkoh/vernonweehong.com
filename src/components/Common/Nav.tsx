"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { clsx } from "@/helpers";

import Reference from "./Reference";
import SocialMedia from "./SocialMedia";

const links = [
  {
    title: "Home",
    href: "/",
  },
];

export default function Nav({
  showOnDesktop = true,
  showOnMobile = true,
}: Readonly<{
  showOnDesktop?: boolean;
  showOnMobile?: boolean;
}>) {
  const pathname = usePathname();

  return (
    <>
      {showOnDesktop && (
        <Disclosure as="nav" className="desktop">
          <ul>
            {links.map((link, index) => {
              const { ...rest } = link;
              return (
                <li key={index}>
                  <Link
                    className={clsx(
                      pathname === link.href ? "active" : "",
                      "group"
                    )}
                    {...rest}
                  >
                    <span className="group-hover:w-24 group-hover:bg-slate-200"></span>
                    <span className="group-hover:text-slate-200">
                      {link.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Disclosure>
      )}
      {showOnMobile && (
        <Disclosure as="nav" className="mobile">
          <div className="mobile-nav-container">
            <div className="nav-header">
              <div className="logo-container">
                <div className="flex-shrink-0"></div>
              </div>
              <div className="menu-toggle">
                <DisclosureButton className="toggle-button group">
                  <span className="toggle-button-bg"></span>
                  <span className="sr-only">Open main menu</span>
                  <FontAwesomeIcon
                    icon={faBars}
                    className="block h-6 w-6 group-data-[open]:hidden"
                  />
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="hidden h-6 w-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="menu-panel">
            <div className="menu-item-container">
              {links.map((link, index) => {
                const { ...rest } = link;
                return (
                  <DisclosureButton
                    as="a"
                    key={index}
                    {...rest}
                    className={clsx(
                      pathname === link.href ? "active" : "",
                      "menu-item"
                    )}
                  >
                    {link.title}
                  </DisclosureButton>
                );
              })}
            </div>
            <hr className="mx-4 border border-slate-700" />
            <footer className="flex flex-col gap-y-3 p-4">
              <Reference />
              <div className="mx-auto">
                <SocialMedia />
              </div>
            </footer>
          </DisclosurePanel>
        </Disclosure>
      )}
    </>
  );
}
