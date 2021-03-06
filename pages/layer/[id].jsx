import { useRouter } from "next/router";
import Link from "next/link";

export default function Layer() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="flex flex-col p-8">
      <h1 className="font-bold text-2xl mx-auto text-[#9c69ff] cursor-pointer ">
        Welcome to Layer {id}
      </h1>
      <div className="flex flex-col justify-center my-16 border-2 border-black rounded-lg">
        <div className="my-12 border-b-2 border-black">
          <Link href="/file">
            <span className="font-bold text-xxl cursor-pointer ">EMR</span>
          </Link>
        </div>
        <div className="my-12 border-b-2 border-black">
          <Link href="/file">
            <span className="font-bold text-xxl cursor-pointer ">DMR</span>
          </Link>
        </div>
        <div className="my-12 border-b-2 border-black">
          <Link href="/file">
            <span className="font-bold text-xxl cursor-pointer ">PMH</span>
          </Link>
        </div>
        <div className="mt-8 ">
          <Link href="/file">
            <span className="font-bold text-xxl cursor-pointer ">DOR</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
