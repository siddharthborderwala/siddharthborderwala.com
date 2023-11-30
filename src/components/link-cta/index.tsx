import { ArrowRight, CaretRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

const LinkCTA: React.FC<{
  href: string;
  label: string;
  isSecondary?: boolean;
}> = ({ href, label, isSecondary }) => {
  return (
    <Link
      href={href}
      className={`group font-serif text-lg py-2 px-4 mt-8 inline-flex gap-3 items-center rounded-xl ${
        isSecondary
          ? 'bg-transparent border border-red-400 text-red-400 shadow-red-100/50 hover:shadow-red-200/50 active:shadow-red-200/50'
          : 'bg-red-400 text-white shadow-red-100 hover:shadow-red-200 active:shadow-red-200'
      } transition-all shadow-xl hover:shadow-2xl active:shadow-lg`}
    >
      <span>{label}</span>
      {isSecondary ? null : (
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
      )}
    </Link>
  );
};

export default LinkCTA;
