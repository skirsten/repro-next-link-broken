import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <Link
        className="underline"
        href={{
          pathname: "/items",
        }}
        prefetch={false}
      >
        Get started
      </Link>
    </main>
  );
}
