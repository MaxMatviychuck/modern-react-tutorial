import { SignedOut, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

const Images = async () => {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              alt=""
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
            />
          </Link>
          <div className="">{image.name}</div>
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
