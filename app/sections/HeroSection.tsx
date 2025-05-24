import Image from "next/image";

interface HeroSectionProps {
  introductions: string[];
  yearsOfExperience: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  introductions,
  yearsOfExperience,
}) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-10">
      <div className="flex-1 space-y-8">
        <div className="space-y-2">
          <p className="text-gray-600 font-d2coding whitespace-nowrap">
            Backend Developer | {yearsOfExperience} 년차
          </p>
        </div>
        <h1 className="text-5xl md:text-6xl font-paperlogy tracking-tight whitespace-nowrap">
          홍 성 철
        </h1>
        <div className="space-y-3 text-lg text-gray-600 font-d2coding">
          {introductions.map((intro, index) => (
            <p key={index} className="hover:text-gray-800 transition-colors">
              {intro}
            </p>
          ))}
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          src="/me.jpg"
          alt="sungchul hong"
          width={250}
          height={250}
          className="rounded-full shadow-lg hover:shadow-xl transition-shadow"
        />
      </div>
    </div>
  );
};

export default HeroSection;
