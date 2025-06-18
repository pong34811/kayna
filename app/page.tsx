"use client";

import { useEffect, useState } from "react";
import HeroCard from "@/components/ui/HeroCard";
import ChannelInfoCard from "@/components/ui/ChannelInfoCard";
import LatestVideosCard from "@/components/ui/LatestVideosCard";
import LiveStatsCard from "@/components/ui/LiveStatsCard";
import UpcomingStreamsCard from "@/components/ui/UpcomingStreamsCard";
import { fetchYouTubeData, YouTubeData } from "@/services/youtubeService";

export default function Home() {
  const [data, setData] = useState<YouTubeData>({
    channel: null,
    videos: [],
    upcomingStreams: [],
    totalScheduledStreams: 0,
    totalLiveStreams: 0,
    totalPastStreams: 0,
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const youtubeData = await fetchYouTubeData();
        setData(youtubeData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "เกิดข้อผิดพลาด");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-10 bg-transparent p-10 text-white">
      {/* Hero Section */}
      <HeroCard />
      
      {/* Channel Info Card */}
      <ChannelInfoCard 
        channel={data.channel} 
        loading={loading} 
        error={error} 
      />

      {/* Latest Videos Card */}
      <LatestVideosCard videos={data.videos} />

      {/* Live Stats Card */}
      <LiveStatsCard 
        totalScheduledStreams={data.totalScheduledStreams}
        totalLiveStreams={data.totalLiveStreams}
        totalPastStreams={data.totalPastStreams}
      />

      {/* Upcoming Streams Card */}
      <UpcomingStreamsCard upcomingStreams={data.upcomingStreams} />
    </section>
  );
}