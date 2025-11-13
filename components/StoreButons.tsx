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
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
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
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="Download on the App Store"
          width={180}
          height={60}
        />
      </a>
    </div>
  );
}
