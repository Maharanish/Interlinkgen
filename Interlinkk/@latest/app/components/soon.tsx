"use client";

export function Soon() {
  return (
    <div
      className="flex items-center justify-center h-screen w-full text-white"
      style={{
        background: "linear-gradient(0deg, rgba(245,117,5,1) 0%, rgba(251,158,6,1) 23%, rgba(52,119,123,1) 86%, rgba(15,104,110,1) 100%)",
      }}
    >
      <div className="text-center space-y-6">
        {/* Teks Coming Soon */}
        <h1 className="lg:text-6xl text-4xl px-2 lg:px-0 font-bold font-mono tracking-wide">Coming Soon!</h1>

        {/* Tombol Back ke /about */}
        <button
          onClick={() => (window.location.href = "/events")}
          className="mt-4 px-10 py-2 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#f57505] transition duration-300"
        >
          Back
        </button>
      </div>
    </div>
  );
}
