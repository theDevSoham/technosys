import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DataUsageActivity = () => {
  const targetDownload = 449;
  const targetUpload = 131;
  const totalUsed = targetDownload + targetUpload;

  const [download, setDownload] = useState<number>(0);
  const [upload, setUpload] = useState<number>(0);

  // Animate download/upload progress values
  useEffect(() => {
    const downloadInterval = setInterval(() => {
      setDownload((prev) => {
        if (prev < targetDownload) return prev + 5;
        clearInterval(downloadInterval);
        return prev;
      });
    }, 20);

    const uploadInterval = setInterval(() => {
      setUpload((prev) => {
        if (prev < targetUpload) return prev + 2;
        clearInterval(uploadInterval);
        return prev;
      });
    }, 20);

    return () => {
      clearInterval(downloadInterval);
      clearInterval(uploadInterval);
    };
  }, []);

  const downloadPercent = (download / targetDownload) * 100;
  const uploadPercent = (upload / targetUpload) * 100;

  return (
    <>
      <div className="space-y-4">
        {/* Download */}
        <div>
          <p className="text-sm font-semibold flex items-center gap-2">
            <span className="text-green-600">⬇️</span> Download
          </p>
          <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden mt-1">
            <motion.div
              className="h-2 bg-green-500"
              initial={{ width: 0 }}
              animate={{ width: `${downloadPercent}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <p className="text-xs text-gray-600 mt-1">{download} GB</p>
        </div>

        {/* Upload */}
        <div>
          <p className="text-sm font-semibold flex items-center gap-2">
            <span className="text-blue-600">⬆️</span> Upload
          </p>
          <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden mt-1">
            <motion.div
              className="h-2 bg-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${uploadPercent}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <p className="text-xs text-gray-600 mt-1">{upload} GB</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm text-gray-700">Total Used</p>
        <h3 className="text-2xl font-bold text-pink-700">{totalUsed} GB</h3>
      </div>
    </>
  );
};

export default DataUsageActivity;
