import Image from "next/image";
import Link from "next/link";

interface CardProps {
  href: string;
  label: string;
  description: string;
  image?: string;
}

export const Card = ({ href, label, description, image }: CardProps) => {
  return (
    <Link href={href}>
      <div className="flex flex-col lg:flex-row items-center min-h-40 max-w-4xl justify-between rounded-md border border-slate-400 bg-white shadow-sm">
        <div className="h-60 w-full lg:w-60 lg:h-full p-1">
          <div className="w-full h-full relative">
            
            {image && (
              <Image
                src={image}
                alt={label}
                width={300}
                height={300}
                className="absolute inset-0 w-full h-full rounded-sm"
              />
            )}
          </div>
        </div>
        <div className="flex max-w-lg flex-col items-center lg:items-end space-y-3 p-3">
          <h2 className="text-lg font-semibold">{label}</h2>
          <span className="text-gray-600 text-sm text-center lg:text-right">
            {description}
          </span>
        </div>
      </div>
    </Link>
  );
};
