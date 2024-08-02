import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/Login");
  return (
    <div className="">
      <h1 className="text-secondary">Hallo Everynian!</h1>
    </div>
  );
}
