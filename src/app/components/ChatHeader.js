import Image from "next/image";

const ChatHeader = () => {
  return (
    <div className="flex items-center border-b border-t border-[#1C1D21] text-white">
      <Image
        src="/images/thanos-img.png"
        alt="avatar"
        width={100}
        height={100}
        className="h-10 w-10 rounded-full mr-4 ms-6 object-cover"
      />
      <h2 className="text-lg font-semibold py-4 ">Thanos</h2>
      <div className="ml-auto border-l px-6 py-4  border-[#1C1D21]">
        <button className="text-white hover:opacity-80">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
