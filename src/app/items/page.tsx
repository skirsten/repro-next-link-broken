import Link from "next/link";

type PageProps = {
  searchParams: { page?: string };
};

export default async function Home(props: PageProps) {
  const page = parseInt(props.searchParams.page || "1");

  return (
    <main className="p-4 flex flex-col">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl">You are on page {page}.</h1>

        <span>
          Note that the bug only kicks in if you navigated to this page from /.
        </span>
        <span>If you do a refresh on this site it won{"'"}t reproduce</span>
        <span>
          It also has to be a production build. So next dev does not work.
        </span>
        <span>
          Also note that the order matters. If the order that the links appear
          is switched, the bug won{"'"}t reproduce.
        </span>

        <div>
          Go to{" "}
          <Link
            className={
              page != 1
                ? "underline focus:text-gray-600"
                : "font-bold focus:text-gray-600"
            }
            href="/items"
            replace
          >
            page 1
          </Link>{" "}
          (click me second, it will not work. You have to click me again for it
          to update)
        </div>

        <div>
          Go to{" "}
          <Link
            className={
              page != 2
                ? "underline focus:text-gray-600"
                : "font-bold focus:text-gray-600"
            }
            href="/items?page=2"
            replace
          >
            page 2
          </Link>{" "}
          (click me first, it works as expected)
        </div>
      </div>
    </main>
  );
}
