import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-x-4">
      <span className="text-xl font-semibold text-white">شیراز بلاگ</span>
      <Image src={"/logo.svg"} alt="logo" width={32} height={32} />
    </Link>
  );
};
