import Image from "next/image";

export const metadata = {
  title: "Gallery",
  description: "Image gallery Page",
};

export default function GalleryPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center mb-8">Gallery Page</h1>
      <div className="grid grid-cols-3 gap-4">
        <Image
          blurDataURL="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
          placeholder="blur"
          width={500}
          height={500}
          src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
          alt="Image 1"
        />
        <Image
          width={500}
          height={500}
          src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
          alt="Image 1"
        />
        <Image
          width={500}
          height={500}
          src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
          alt="Image 1"
        />
      </div>
      {/* <div className="grid grid-cols-3 gap-4">
        <img
          src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
          alt="Image 1"
        />
        <img
          src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
          alt="Image 1"
        />
        <img
          src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
          alt="Image 1"
        />
      </div> */}
    </div>
  );
}
