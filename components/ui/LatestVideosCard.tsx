import { Card } from "@heroui/react";
import Image from "next/image";

import { VideoItem } from "@/constants/types";

interface LatestVideosCardProps {
  videos: VideoItem[];
}

export default function LatestVideosCard({ videos }: LatestVideosCardProps) {
  return (
    <Card className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-pink-400 bg-[#FF2492] p-10 shadow-lg backdrop-blur-lg">
      <div className="relative z-10">
        <div>
          <h4 className="mb-6 text-2xl font-semibold drop-shadow-sm">
            วิดีโอล่าสุด
          </h4>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {videos.map((video) => {
              const snippet = video.snippet;

              return (
                <a
                  key={video.id}
                  className="group block overflow-hidden rounded-2xl border-pink-400 shadow-lg transition hover:scale-[1.03] hover:shadow"
                  href={`https://www.youtube.com/watch?v=${snippet.resourceId.videoId}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    unoptimized
                    alt={snippet.title}
                    className="aspect-video w-full object-cover transition"
                    height={180}
                    src={snippet.thumbnails.medium.url}
                    width={320}
                  />
                  <div className="p-4">
                    <p className="line-clamp-2 text-sm font-semibold text-pink-50 transition group-hover:text-white">
                      {snippet.title}
                    </p>
                    <p className="mt-1 text-xs text-pink-200">
                      {new Date(snippet.publishedAt).toLocaleDateString(
                        "th-TH",
                      )}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
}
