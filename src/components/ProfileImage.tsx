import { memo } from "react";

interface ProfileImageProps {
    src: string; // Path to the image
    alt: string; // Alt text for the image
  }
  
  const ProfileImage: React.FC<ProfileImageProps> = memo(({ src, alt }) => (
    <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
      <div 
        className="relative group" 
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
        </div>
        <div className="relative">
          <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  ));

  export default ProfileImage