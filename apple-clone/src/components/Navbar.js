import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black text-white py-2 px-4 flex justify-center text-sm">
      <ul className="flex space-x-6">
        <li><Link href="/">Store</Link></li>
        <li><Link href="/">Mac</Link></li>
        <li><Link href="/">iPad</Link></li>
        <li><Link href="/">iPhone</Link></li>
        <li><Link href="/">Watch</Link></li>
        <li><Link href="/">AirPods</Link></li>
        <li><Link href="/">TV & Home</Link></li>
        <li><Link href="/">Entertainment</Link></li>
        <li><Link href="/">Accessories</Link></li>
        <li><Link href="/">Support</Link></li>
      </ul>
    </nav>
  );
}
