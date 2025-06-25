import axios from "axios";

import { Channel, VideoItem, UpcomingLive } from "@/constants/types";
import { API_KEY, CHANNEL_ID } from "@/constants/constants";

export interface YouTubeData {
  channel: Channel | null;
  videos: VideoItem[];
  upcomingStreams: UpcomingLive[];
  totalScheduledStreams: number;
  totalLiveStreams: number;
  totalPastStreams: number;
}

// 🔁 ใช้ pagination สำหรับ completed livestreams
const fetchAllCompletedStreams = async (): Promise<any[]> => {
  let allItems: any[] = [];
  let nextPageToken = "";

  try {
    do {
      const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          channelId: CHANNEL_ID,
          eventType: "completed",
          type: "video",
          maxResults: 50,
          pageToken: nextPageToken,
          key: API_KEY,
        },
      });

      allItems.push(...response.data.items);
      nextPageToken = response.data.nextPageToken || "";
    } while (nextPageToken);

    return allItems;
  } catch (error) {
    console.error("ไม่สามารถโหลด completed livestreams ได้:", error);
    return [];
  }
};

export const fetchYouTubeData = async (): Promise<YouTubeData> => {
  try {
    // Fetch channel info
    const channelRes = await axios.get("https://www.googleapis.com/youtube/v3/channels", {
      params: {
        part: "snippet,statistics,contentDetails",
        id: CHANNEL_ID,
        key: API_KEY,
      },
    });

    const channelInfo: Channel = channelRes.data.items[0];
    const uploadsPlaylistId = channelInfo.contentDetails.relatedPlaylists.uploads;

    // Fetch latest videos
    const videosRes = await axios.get("https://www.googleapis.com/youtube/v3/playlistItems", {
      params: {
        part: "snippet",
        maxResults: 3,
        playlistId: uploadsPlaylistId,
        key: API_KEY,
      },
    });

    // Fetch upcoming livestreams
    const upcomingRes = await axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        part: "snippet",
        channelId: CHANNEL_ID,
        eventType: "upcoming",
        type: "video",
        maxResults: 50,
        key: API_KEY,
      },
    });

    // Fetch live streams
    const liveRes = await axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        part: "snippet",
        channelId: CHANNEL_ID,
        eventType: "live",
        type: "video",
        maxResults: 50,
        key: API_KEY,
      },
    });

    // Fetch completed streams with pagination
    const completedItems = await fetchAllCompletedStreams();

    return {
      channel: channelInfo,
      videos: videosRes.data.items,
      upcomingStreams: upcomingRes.data.items || [],
      totalScheduledStreams: upcomingRes.data.items?.length || 0,
      totalLiveStreams: liveRes.data.items?.length || 0,
      totalPastStreams: completedItems.length,
    };
  } catch {
    throw new Error("ไม่สามารถโหลดข้อมูลจาก YouTube API ได้");
  }
};
