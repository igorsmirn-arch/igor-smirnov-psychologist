'use client';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="nav">
      <div><Link href="/">Igor Smirnov — Psychologist</Link></div>
      <div className="nav-links">
        <Link href="/about">About</Link>
        <Link href="/business">Business</Link>
        <Link href="/education">Education</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
