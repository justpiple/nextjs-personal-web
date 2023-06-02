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
          <a
            href="/"
            className={"hover-underline" + (pathname == "/" ? " active" : "")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className={
              "hover-underline" + (pathname == "/about" ? " active" : "")
            }
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/skills"
            className={
              "hover-underline" + (pathname == "/skills" ? " active" : "")
            }
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="/certificate"
            className={
              "hover-underline" + (pathname == "/certificate" ? " active" : "")
            }
          >
            Certificate
          </a>
        </li>
        <li>
          <a
            href="/schools"
            className={
              "hover-underline" + (pathname == "/schools" ? " active" : "")
            }
          >
            Schools
          </a>
        </li>
        <li>
          <a
            href="/blog"
            className={
              "hover-underline" + (pathname == "/blog" ? " active" : "")
            }
          >
            Blog
          </a>
        </li>
        <li>
          <a href="https://my.benspace.xyz" className="hover-underline">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
}
