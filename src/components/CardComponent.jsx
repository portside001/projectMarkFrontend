export default function Card({ image, text, alt }) {
  return (
    <div
      className="
        w-full
        sm:w-64
        aspect-square
        p-4 
        bg-[#f3f3f7]
        shadow-lg
        rounded-xl
        border-2
        border-transparent
        hover:border-blue-500
        hover:scale-102
        transition-all 
        duration-300
        hover:cursor-pointer
        hover:shadow-[0_0_20px_rgba(12,108,203,0.7),0_0_40px_rgba(59,130,246,0.3)]
        flex 
        flex-col 
        items-center 
        justify-center
      "
    >
      <img
        className="h-20 w-20 sm:h-24 sm:w-24 object-cover rounded-full"
        src={image}
        alt={alt}
      />

      <p className="text-base sm:text-lg font-semibold mt-3 text-center px-2">
        {text}
      </p>
    </div>
  );
}
