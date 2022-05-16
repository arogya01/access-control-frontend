import Image from "next/image";

export default function BlogCard({ imgSrc, blogHeadline, blogContent }) {
  return (
    <div className="flex-col font-sans border-2 border-black rounded-lg w-80 m-4 ">
      <figure className="border-b-2">
        <Image src={imgSrc} alt="blog picture" width={300} height={180} />
      </figure>

      <div className="p-2">
        <h1 className="font-bold text-lg">{blogHeadline} </h1>
        <p className="text-sm">{blogContent}</p>
      </div>
    </div>
  );
}
