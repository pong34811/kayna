"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Spinner } from "@heroui/react";
import { EyeIcon, UsersIcon, VideoIcon } from "lucide-react";
const API_KEY = "AIzaSyCxc3tHMJAkrJJ1KL9beLdYPK3EdG5JMO0";
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

interface UpcomingLive {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      medium: { url: string };
    };
    scheduledStartTime?: string;
    publishedAt: string;
  };
}


function aboutsection() {
  const [channel, setChannel] = useState<Channel | null>(null);
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [upcomingStreams, setUpcomingStreams] = useState<UpcomingLive[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [totalScheduledStreams, setTotalScheduledStreams] = useState(0);
  const [totalLiveStreams, setTotalLiveStreams] = useState(0);
  const [totalPastStreams, setTotalPastStreams] = useState(0);

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
        // Fetch upcoming livestreams
        const upcomingRes = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              channelId: CHANNEL_ID,
              eventType: "upcoming",
              type: "video",
              maxResults: 50,
              key: API_KEY,
            },
          }
        );
        setUpcomingStreams(upcomingRes.data.items || []);
        setTotalScheduledStreams(upcomingRes.data.items?.length || 0);

        // Fetch currently live livestreams
        const liveRes = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              channelId: CHANNEL_ID,
              eventType: "live",
              type: "video",
              maxResults: 999,
              key: API_KEY,
            },
          }
        );
        setTotalLiveStreams(liveRes.data.items?.length || 0);

        // Fetch past livestreams
        const completedRes = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              channelId: CHANNEL_ID,
              eventType: "completed",
              type: "video",
              maxResults: 50,
              key: API_KEY,
            },
          }
        );
        setTotalPastStreams(completedRes.data.items?.length || 0);

        setVideos(videosRes.data.items);
        setError(null);
      } catch {
        setError("ไม่สามารถโหลดข้อมูลจาก YouTube API ได้");
      } finally {
        setLoading(false);
      }
    };

    fetchChannelData();
  }, []);

  return (
    <section>
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
                {[
                  {
                    icon: <UsersIcon className="h-6 w-6 text-pink-200" />,
                    label: "Subscribers",
                    value: channel.statistics.subscriberCount,
                  },
                  {
                    icon: <EyeIcon className="h-6 w-6 text-pink-200" />,
                    label: "Views",
                    value: channel.statistics.viewCount,
                  },
                  {
                    icon: <VideoIcon className="h-6 w-6 text-pink-200" />,
                    label: "Videos",
                    value: channel.statistics.videoCount,
                  },
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
    </section>
  );
}

export default aboutsection;
