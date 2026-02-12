interface Navbar {
  id: number;
  name: string;
  href: string;
}

export const navbar: Navbar[] = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },
  {
    id: 1,
    name: "how it works",
    href: "/howitworks",
  },
  {
    id: 2,
    name: "Contact us",
    href: "/contact",
  },
];
