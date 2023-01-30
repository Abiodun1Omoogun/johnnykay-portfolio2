import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/project">Project</Link>
            <Link href="/about">About Me</Link>
            <Link href="/contact">Contact Me</Link>
        </nav>
    )
}