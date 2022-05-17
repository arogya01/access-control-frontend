import Link from "next/link";

export default function NavbarBtn({ btnName, btnLink, onClick }) {
  return (
    <Link href={btnLink}>
      <a
        onClick={onClick}
        className="font-bold font-sans p-3 rounded-md mr-8 border-2 border-cyan-500 transition-all hover:translate-y-1 hover:bg-cyan-500"
      >
        {btnName}
      </a>
    </Link>
  );
}
