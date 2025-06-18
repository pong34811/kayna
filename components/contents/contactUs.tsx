"use client";

import { useEffect, useState } from "react";
import {
  getPlaylistVideos,
  PlaylistVideoItem,
} from "@/services/youyubePlaylist";
import { Card } from "@heroui/react";
import {
  Bot,
  Play,
  MessageCircle,
  DollarSign,
  CheckCircle,
  Youtube,
  Zap,
} from "lucide-react";

const CONTACT_PLAYLIST_ID = "PLQsuvZAuNKtJ2dNk5MdLhbLdZpez3mceL";

export default function ContactUs() {
  const [videos, setVideos] = useState<PlaylistVideoItem[]>([]);

  useEffect(() => {
    const fetchVideosDiscord = async () => {
      try {
        const playlistVideos = await getPlaylistVideos(CONTACT_PLAYLIST_ID, 3);
        setVideos(playlistVideos);
      } catch (err) {
        console.error("Error loading contact videos", err);
      }
    };

    fetchVideosDiscord();
  }, []);

  return (
    <section>
      <Card className="relative w-full overflow-hidden rounded-2xl border border-pink-300/50 bg-[#FF2492]/90 shadow-xl backdrop-blur-md transition-all duration-500 hover:shadow-pink-500/25">
        <div className="relative z-10 p-6">
          {/* Header Section */}
          <div className="text-center mb-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 mb-4 bg-green-500/20 backdrop-blur-sm rounded-full px-3 py-1 border border-green-400/30">
              <Zap className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-green-100 text-xs font-medium">
                พร้อมให้บริการ
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">
              <span className="bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
                ผลงานรับโปรเมท
              </span>
            </h1>

            {/* Subtitle with Discord Icon */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <Bot className="w-6 h-6 text-white" />
              <h2 className="text-xl md:text-2xl font-semibold text-white drop-shadow">
                บอทดิสคอร์ด
              </h2>
            </div>

            {/* Price Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30 shadow">
              <DollarSign className="w-4 h-4 text-yellow-300" />
              <span className="text-white text-sm font-bold">
                เรทราคาเริ่มต้น 200 บาท
              </span>
            </div>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {videos.map((video, index) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-md border border-white/20 bg-white/10 backdrop-blur-md shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-red-600 rounded-full p-1 shadow transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-3 h-3 text-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute top-1 right-1 bg-red-600 rounded px-1 py-0.5">
                    <Youtube className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Info */}
                <div className="p-1.5">
                  <h3 className="text-[10px] font-medium text-white line-clamp-2 group-hover:text-pink-100 transition-colors duration-300">
                    {video.snippet.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-0.5 text-pink-100/70 text-[10px]">
                    <CheckCircle className="w-3 h-3" />
                    <span className="hidden sm:inline">คลิกดูผลงาน</span>
                    <span className="sm:hidden">ดู</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}
