import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-red-600 sticky top-0 p-4 drop-shadow-xl z-10">
      <div className=" prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <Link href="/" className=" text-white no-underline hover:text-#fbbf24">
          Elin's DevBlog
        </Link>
      </div>
    </nav>
  );
}
