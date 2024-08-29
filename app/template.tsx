import Link from "next/link";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">about</Link>
      </div>
      <div>{children}</div>
    </div>
  );
}
