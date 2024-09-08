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
        <span>If you do a refresh on this side it won{"'"}t reproduce</span>
        <span>
          It also has to be a production build. So next dev does not work.
        </span>

        <div>
          Go to{" "}
          <Link
            className={
              page != 2
                ? "underline focus:text-gray-600"
                : "font-bold focus:text-gray-600"
            }
            // href={{
            //   pathname: "/items",
            //   query: {
            //     page: 2,
            //   },
            // }}
            href="/items?page=2"
            replace
          >
            page 2
          </Link>{" "}
          (click me first, it works as expected, but only because its the first
          link, the next two exact same ones do not)
        </div>
        <div>
          Go to{" "}
          <Link
            className={
              page != 3
                ? "underline focus:text-gray-600"
                : "font-bold focus:text-gray-600"
            }
            // href={{
            //   pathname: "/items",
            //   query: {
            //     page: 3,
            //   },
            // }}
            href="/items?page=3"
            replace
          >
            page 3
          </Link>{" "}
          (click me second, you will notice it doesn{"'"}t work)
        </div>
        <div>
          Go to{" "}
          <Link
            className={
              page != 4
                ? "underline focus:text-gray-600"
                : "font-bold focus:text-gray-600"
            }
            // href={{
            //   pathname: "/items",
            //   query: {
            //     page: 4,
            //   },
            // }}
            href="/items?page=4"
            replace
          >
            page 4
          </Link>{" "}
          (click me third, you will notice it doesn{"'"}t work)
        </div>
        <div>
          Go to{" "}
          <Link
            className={
              page != 1
                ? "underline focus:text-gray-600"
                : "font-bold focus:text-gray-600"
            }
            // href={{
            //   pathname: "/items",
            //   query: {
            //     page: undefined,
            //   },
            // }}
            href="/items"
            replace
          >
            page 1
          </Link>{" "}
          (click me fourth, (sometimes it you have to click it twice) and now
          the other links will work as well)
        </div>
      </div>
    </main>
  );
}
