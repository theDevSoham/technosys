"use client";
import Image from "next/image";

export default function StoreButtons() {
  return (
    <div className="flex flex-col items-start gap-4">
      {/* Google Play Button */}
      <a
        href="https://play.google.com/store"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-black text-white rounded-lg shadow-md hover:opacity-90 transition"
      >
        <Image
          src="/google_play.png"
          alt="Get it on Google Play"
          width={180}
          height={60}
        />
      </a>

      {/* App Store Button */}
      <a
        href="https://www.apple.com/app-store/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-black text-white rounded-lg shadow-md hover:opacity-90 transition"
      >
        <Image
          src="/app_store.png"
          alt="Download on the App Store"
          width={180}
          height={60}
        />
      </a>
    </div>
  );
}
