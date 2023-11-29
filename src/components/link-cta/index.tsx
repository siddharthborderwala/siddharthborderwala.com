import { ArrowRight, CaretRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

const LinkCTA: React.FC<{
  href: string;
  label: string;
}> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="group bg-red-400 font-serif text-white text-lg py-2 px-4 mt-8 inline-flex items-center rounded-xl transition-all shadow-xl shadow-red-100 hover:shadow-2xl hover:shadow-red-200 active:shadow-lg active:shadow-red-200"
    >
      <span className="mr-3">{label}</span>
      <div className="relative w-4 h-4 mb-[2px]">
        <CaretRight
          className="absolute inset-0 opacity-100 scale-100 group-hover:scale-0 transition-all group-hover:opacity-0 group-hover:translate-x-4"
          weight="bold"
        />
        <ArrowRight
          className="absolute inset-0 opacity-0 scale-0 group-hover:scale-100 transition-all group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
          weight="bold"
        />
      </div>
    </Link>
  );
};

export default LinkCTA;
