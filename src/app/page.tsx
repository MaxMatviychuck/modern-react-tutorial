/* eslint-disable @next/next/no-img-element */
import { SignedOut, SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const Images = async () => {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <Link href={`/image/${image.id}`}>
            <img src={image.url} alt="" className="h-48 w-full object-cover" />
            <div className="">{image.name}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="p-4 text-center">
          <p>You need to be signed in to view this page.</p>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
