/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={`${image.id}-${index}`} className="flex w-48 flex-col">
            <Link href={`/image/${image.id}`}>
              <img
                src={image.url}
                alt=""
                className="h-48 w-full object-cover"
              />
              <div className="">{image.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
