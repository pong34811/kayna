"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import { Avatar, Card, Spinner } from "@heroui/react";
import { Link as HeroLink } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import {
  EyeIcon,
  FacebookIcon,
  TwitterIcon,
  UsersIcon,
  VideoIcon,
  YoutubeIcon,
} from "lucide-react";

const API_KEY = "AIzaSyBt0PXH2soaHhqepmlzhcqyvcb-yHloulc";
const CHANNEL_ID = "UCC_P34t35REbiPzbHO_bifA";

interface Channel {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: { url: string };
      medium?: { url: string };
      high?: { url: string };
    };
  };
  statistics: {
    subscriberCount: string;
    viewCount: string;
    videoCount: string;
  };
  contentDetails: {
    relatedPlaylists: {
      uploads: string;
    };
  };
}

interface VideoItem {
  id: string;
  snippet: {
    title: string;
    description?: string;
    publishedAt: string;
    thumbnails: {
      medium: { url: string };
    };
    resourceId: {
      videoId: string;
    };
  };
}

export default function Home() {
  const [channel, setChannel] = useState<Channel | null>(null);
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChannelData = async () => {
      try {
        setLoading(true);
        const channelRes = await axios.get(
          "https://www.googleapis.com/youtube/v3/channels",
          {
            params: {
              part: "snippet,statistics,contentDetails",
              id: CHANNEL_ID,
              key: API_KEY,
            },
          }
        );

        const channelInfo: Channel = channelRes.data.items[0];
        setChannel(channelInfo);

        const uploadsPlaylistId =
          channelInfo.contentDetails.relatedPlaylists.uploads;

        const videosRes = await axios.get(
          "https://www.googleapis.com/youtube/v3/playlistItems",
          {
            params: {
              part: "snippet",
              maxResults: 3,
              playlistId: uploadsPlaylistId,
              key: API_KEY,
            },
          }
        );

        setVideos(videosRes.data.items);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("ไม่สามารถโหลดข้อมูลจาก YouTube API ได้");
      } finally {
        setLoading(false);
      }
    };

    fetchChannelData();
  }, []);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-10 bg-transparent px-6 py-16 text-white">
      {/* Profile Card */}
      <Card className="group relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-pink-400 bg-[#FF2492] p-10 shadow-[0_8px_30px_rgba(255,192,203,0.25)] backdrop-blur-md transition-all duration-300">
        <div className="pointer-events-none absolute -inset-px z-0 rounded-[2rem] bg-gradient-to-br from-pink-300/20 to-white/10 opacity-0 blur-[6px] transition-opacity duration-500" />
        <div className="relative z-10 grid grid-cols-1 items-center gap-10 sm:grid-cols-3">
          <div className="flex justify-center">
            <Avatar
              alt="Kayna VTuber"
              className="h-44 w-44 rounded-full border-[10px] border-pink-400 shadow-xl shadow-pink-300 transition-transform duration-300 hover:rotate-[2deg] hover:scale-105"
              size="lg"
              src="/kayna.png"
            />
          </div>
          <div className="space-y-4 text-pink-100 sm:col-span-2">
            <div className="flex justify-center lg:justify-start">
              <h2 className="text-3xl font-bold text-pink-200 drop-shadow">
                สวัสดีค่า~! ฉันคือ Kayna 💖
              </h2>
            </div>
            <div className="flex justify-center lg:justify-start">
              <p className="leading-relaxed">
                VTuber ผู้ชื่นชอบเกม พูดคุย และมอบพลังบวกผ่าน Live สด!
              </p>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-start">
              <HeroLink
                className={buttonStyles({
                  className:
                    "flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white p-2 shadow-lg transition-all duration-300",
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                })}
                href="https://www.youtube.com/@KaynaVtuberTH"
                isExternal
              >
                <YoutubeIcon className="h-4 w-4" />
                YouTube
              </HeroLink>
              <HeroLink
                className={buttonStyles({
                  className:
                    "flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white p-2 shadow-lg transition-all duration-300",
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                })}
                href="https://www.facebook.com/KaynaVTB/"
                isExternal
              >
                <FacebookIcon className="h-4 w-4" />
                Facebook
              </HeroLink>
              <HeroLink
                className={buttonStyles({
                  className:
                    "flex items-center gap-1 bg-black hover:bg-gray-800 text-white p-3 shadow-lg transition-all duration-300",
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                })}
                href="https://x.com/kaynavtuber"
                isExternal
              >
                <TwitterIcon className="h-4 w-4" />
                X.com
              </HeroLink>
            </div>
          </div>
        </div>
      </Card>

      {/* Channel Info */}
      <Card className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-pink-400 bg-[#FF2492]/70 p-10 shadow-lg backdrop-blur-lg transition-all duration-300">
        <div className="pointer-events-none absolute -inset-px z-0 rounded-3xl bg-gradient-to-br from-pink-400/30 to-white/10 opacity-0 blur-[4px] transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative z-10">
          <h3 className="mb-6 text-3xl font-bold text-pink-200 drop-shadow-md">
            ข้อมูลช่อง YouTube
          </h3>
          {loading ? (
            <div className="flex justify-center py-14">
              <Spinner />
            </div>
          ) : error ? (
            <div className="my-6 text-center font-semibold text-red-400 drop-shadow-lg">
              {error}
            </div>
          ) : channel ? (
            <div>
              <p className="mb-6 leading-relaxed text-pink-100">
                {channel.snippet.description}
              </p>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {[{
                  icon: <UsersIcon className="h-6 w-6 text-pink-200" />, label: "Subscribers", value: channel.statistics.subscriberCount },
                  { icon: <EyeIcon className="h-6 w-6 text-pink-200" />, label: "Views", value: channel.statistics.viewCount },
                  { icon: <VideoIcon className="h-6 w-6 text-pink-200" />, label: "Videos", value: channel.statistics.videoCount },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-pink-400 bg-white/10 p-6 text-center shadow-md backdrop-blur-md transition-shadow duration-300 hover:shadow-lg"
                  >
                    <div className="flex flex-col items-center gap-2">
                      {stat.icon}
                      <p className="text-lg font-semibold text-pink-200">
                        {stat.label}
                      </p>
                    </div>
                    <p className="mt-2 text-3xl font-bold text-white">
                      {Number(stat.value).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </Card>

      {/* Latest Videos */}
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
                    <img
                      alt={snippet.title}
                      className="aspect-video w-full object-cover transition"
                      src={snippet.thumbnails.medium.url}
                    />
                    <div className="p-4">
                      <p className="line-clamp-2 text-sm font-semibold text-pink-50 transition group-hover:text-white">
                        {snippet.title}
                      </p>
                      <p className="mt-1 text-xs text-pink-200">
                        {new Date(snippet.publishedAt).toLocaleDateString("th-TH")}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}