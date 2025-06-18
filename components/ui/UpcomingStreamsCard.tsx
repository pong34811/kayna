import { Card } from "@heroui/react";
import Image from "next/image";

import { UpcomingLive } from "@/constants/types";

interface UpcomingStreamsCardProps {
  upcomingStreams: UpcomingLive[];
}

export default function UpcomingStreamsCard({
  upcomingStreams,
}: UpcomingStreamsCardProps) {
  if (upcomingStreams.length === 0) return null;

  return (
    <Card className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-pink-400 bg-[#FF2492]/80 p-10 shadow-lg backdrop-blur-lg">
      <div className="relative z-10">
        <h4 className="mb-6 text-2xl font-semibold text-white drop-shadow-sm">
          ไลฟ์สตรีมที่กำลังจะมาถึง
        </h4>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {upcomingStreams.map((stream) => (
            <a
              key={stream.id.videoId}
              className="group block overflow-hidden rounded-2xl border-pink-400 shadow-lg transition hover:scale-[1.03] hover:shadow"
              href={`https://www.youtube.com/watch?v=${stream.id.videoId}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                unoptimized
                alt={stream.snippet.title}
                className="aspect-video w-full object-cover transition"
                height={180}
                src={stream.snippet.thumbnails.medium.url}
                width={320}
              />
              <div className="p-4">
                <p className="line-clamp-2 text-sm font-semibold text-pink-50 group-hover:text-white">
                  {stream.snippet.title}
                </p>
                <p className="mt-1 text-xs text-pink-200">
                  เผยแพร่เมื่อ:{" "}
                  {new Date(stream.snippet.publishedAt).toLocaleDateString(
                    "th-TH",
                  )}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
}
