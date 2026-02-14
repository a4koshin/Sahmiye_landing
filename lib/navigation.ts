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
    name: "Terms",
    href: "/terms",
  },
  {
    id: 2,
    name: "Privacy",
    href: "/privacy",
  },
];
