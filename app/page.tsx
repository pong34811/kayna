"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import { Link as HeroLink } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { GithubIcon } from "@/components/icons";

import { Card, Avatar, Spinner } from "@heroui/react";
import {
  YoutubeIcon,
  FacebookIcon,
  TwitterIcon,
  UsersIcon,
  EyeIcon,
  VideoIcon,
} from "lucide-react"; // ใช้ไอคอนจาก Lucide

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
    <section className="flex flex-col items-center justify-center gap-10 py-16 px-6 min-h-screen bg-transparent text-white ">
      {/* Profile Card */}
      <Card className="relative max-w-5xl w-full p-10 bg-gradient-to-br  border border-pink-400 rounded-[2rem] shadow-[0_8px_30px_rgba(255,192,203,0.25)] backdrop-blur-md transition-all duration-300 group overflow-hidden bg-[#FF2492]">
        <div className="absolute -inset-px rounded-[2rem] pointer-events-none z-0 bg-gradient-to-br from-pink-300/20 to-white/10 opacity-0  transition-opacity duration-500 blur-[6px]" />
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-10 items-center">
          <div className="flex justify-center">
            <Avatar
              src="/kayna.png"
              alt="Kayna VTuber"
              size="lg"
              className="rounded-full w-44 h-44 border-[10px] border-pink-400 shadow-pink-300 shadow-xl transition-transform duration-300 hover:rotate-[2deg] hover:scale-105"
            />
          </div>
          <div className="sm:col-span-2 space-y-4 text-pink-100 ">
            <div className="flex justify-center lg:justify-start">
              <h2 className="text-3xl font-bold text-pink-200 drop-shadow ">
                สวัสดีค่า~! ฉันคือ Kayna 💖
              </h2>
            </div>
            <div className="flex justify-center lg:justify-start">
              <p className="leading-relaxed">
                VTuber ผู้ชื่นชอบเกม พูดคุย และมอบพลังบวกผ่าน Live สด!
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
              <HeroLink
                href="https://www.youtube.com/@KaynaVtuberTH"
                isExternal
                className={buttonStyles({
                  color: "primary",
                  variant: "shadow",
                  radius: "full",
                  className:
                    "flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white p-2 shadow-lg transition-all duration-300",
                })}
              >
                <YoutubeIcon className="w-4 h-4" />
                YouTube
              </HeroLink>

              <HeroLink
                href="https://www.facebook.com/KaynaVTB/"
                isExternal
                className={buttonStyles({
                  color: "primary",
                  variant: "shadow",
                  radius: "full",
                  className:
                    "flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white p-2 shadow-lg transition-all duration-300",
                })}
              >
                <FacebookIcon className="w-4 h-4" />
                Facebook
              </HeroLink>

              <HeroLink
                href="https://x.com/kaynavtuber"
                isExternal
                className={buttonStyles({
                  color: "primary",
                  variant: "shadow",
                  radius: "full",
                  className:
                    "flex items-center gap-1 bg-black hover:bg-gray-800 text-white p-3 shadow-lg transition-all duration-300",
                })}
              >
                <TwitterIcon className="w-4 h-4" />
                X.com
              </HeroLink>
            </div>
          </div>
        </div>
      </Card>

      {/* Channel Info */}
      <Card className="relative max-w-5xl w-full p-10 border border-pink-400 rounded-3xl shadow-lg backdrop-blur-lg overflow-hidden transition-all duration-300 bg-[#FF2492]/70">
        <div className="absolute -inset-px z-0 bg-gradient-to-br from-pink-400/30 to-white/10 blur-[4px] opacity-0 group-hover:opacity-100 rounded-3xl pointer-events-none transition-opacity duration-500" />
        <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-6 text-pink-200 drop-shadow-md">
            ข้อมูลช่อง YouTube
          </h3>

          {loading ? (
            <div className="flex justify-center py-14">
              <Spinner />
            </div>
          ) : error ? (
            <div className="text-red-400 font-semibold text-center my-6 drop-shadow-lg">
              {error}
            </div>
          ) : channel ? (
            <div>
              <p className="text-pink-100 leading-relaxed mb-6">
                {channel.snippet.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                {[
                  {
                    label: "Subscribers",
                    value: channel.statistics.subscriberCount,
                    icon: <UsersIcon className="w-6 h-6 text-pink-200" />,
                  },
                  {
                    label: "Views",
                    value: channel.statistics.viewCount,
                    icon: <EyeIcon className="w-6 h-6 text-pink-200" />,
                  },
                  {
                    label: "Videos",
                    value: channel.statistics.videoCount,
                    icon: <VideoIcon className="w-6 h-6 text-pink-200" />,
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-md border border-pink-400 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-col items-center gap-2">
                      {stat.icon}
                      <p className="text-lg font-semibold text-pink-200">
                        {stat.label}
                      </p>
                    </div>
                    <p className="text-3xl font-bold text-white mt-2">
                      {Number(stat.value).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </Card>
      <Card className="relative max-w-5xl w-full p-10  border border-pink-400 rounded-3xl shadow-lg backdrop-blur-lg overflow-hidden  bg-[#FF2492]">
        <div className="relative z-10">
          {/* Latest Videos */}
          <div>
            <h4 className="text-2xl font-semibold mb-6 drop-shadow-sm">
              วิดีโอล่าสุด
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {videos.map((video) => {
                const snippet = video.snippet;
                return (
                  <a
                    key={video.id}
                    href={`https://www.youtube.com/watch?v=${snippet.resourceId.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-2xl  border-pink-400 hover:scale-[1.03] shadow-lg hover:shadow"
                  >
                    <img
                      src={snippet.thumbnails.medium.url}
                      alt={snippet.title}
                      className="w-full aspect-video object-cover  transition "
                    />
                    <div className="p-4">
                      <p className="font-semibold text-sm text-pink-50 group-hover:text-white line-clamp-2">
                        {snippet.title}
                      </p>
                      <p className="text-xs text-pink-200 mt-1">
                        {new Date(snippet.publishedAt).toLocaleDateString(
                          "th-TH"
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
    </section>
  );
}
