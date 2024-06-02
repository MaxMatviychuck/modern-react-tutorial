import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/a63f8ce6-393a-46d1-afc2-3046c60f0ea5-97btuy.webp",
  "https://utfs.io/f/07f7f570-4928-4fb9-8416-ee48e656874f-xmwnm9.avif",
  "https://utfs.io/f/5775c51f-f1f5-4ce9-8190-056430b4d6b1-179muk.jpg",
  "https://utfs.io/f/0703ce2a-2d0f-40ca-9eb2-a0fad1269a2d-95q048.webp",
  "https://utfs.io/f/fa0c71c3-8120-40bd-b2ba-7996757ea7f5-cxv7nh.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <Link href={`/image/${image.id}`}>
              <img
                src={image.url}
                alt=""
                className="h-48 w-full object-cover"
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
