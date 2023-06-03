import Link from "next/link";

export default function Navbar({ pathname }) {
  return (
    <nav
      className="flex justify-between"
      data-aos="fade-down"
      data-aos-duration="650"
    >
      <a className="text-secondary font-bold text-xl mdl:text-2xl hover:cursor-pointer">
        Ben.
      </a>
      <ul className="flex text-secondary space-x-6 font-medium">
        <li>
          <Link
            href="/"
            className={"hover-underline" + (pathname == "/" ? " active" : "")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={
              "hover-underline" + (pathname == "/about" ? " active" : "")
            }
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/skills"
            className={
              "hover-underline" + (pathname == "/skills" ? " active" : "")
            }
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            href="/certificate"
            className={
              "hover-underline" + (pathname == "/certificate" ? " active" : "")
            }
          >
            Certificate
          </Link>
        </li>
        <li>
          <Link
            href="/schools"
            className={
              "hover-underline" + (pathname == "/schools" ? " active" : "")
            }
          >
            Schools
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={
              "hover-underline" + (pathname == "/blog" ? " active" : "")
            }
          >
            Blog
          </Link>
        </li>
        <li>
          <a
            href="https://my.benspace.xyz"
            className="hover-underline"
            target="_blank"
          >
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
}
