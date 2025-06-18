import axios from "axios";

import { API_KEY, CHANNEL_ID } from "@/constants/constants";

export interface PlaylistItem {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: { url: string; width: number; height: number };
      medium: { url: string; width: number; height: number };
      high: { url: string; width: number; height: number };
    };
    channelTitle: string;
    defaultLanguage?: string;
    localized: {
      title: string;
      description: string;
    };
  };
  status: {
    privacyStatus: string;
  };
  contentDetails: {
    itemCount: number;
  };
}

export interface PlaylistVideoItem {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: { url: string; width: number; height: number };
      medium: { url: string; width: number; height: number };
      high: { url: string; width: number; height: number };
      standard?: { url: string; width: number; height: number };
      maxres?: { url: string; width: number; height: number };
    };
    channelTitle: string;
    playlistId: string;
    position: number;
    resourceId: {
      kind: string;
      videoId: string;
    };
  };
}

// ดึงรายการ Playlist ทั้งหมดของช่อง
export const getChannelPlaylists = async (
  maxResults: number = 25,
): Promise<PlaylistItem[]> => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/playlists",
      {
        params: {
          part: "snippet,status,contentDetails",
          channelId: CHANNEL_ID,
          maxResults,
          key: API_KEY,
        },
      },
    );

    return response.data.items || [];
  } catch {
    throw new Error("ไม่สามารถโหลดรายการเพลย์ลิสต์ได้");
  }
};

// ดึงข้อมูล Playlist เฉพาะ ID
export const getPlaylistById = async (
  playlistId: string,
): Promise<PlaylistItem | null> => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/playlists",
      {
        params: {
          part: "snippet,status,contentDetails",
          id: playlistId,
          key: API_KEY,
        },
      },
    );

    return response.data.items?.[0] || null;
  } catch {
    throw new Error("ไม่สามารถโหลดเพลย์ลิสต์ได้");
  }
};

// ดึงวิดีโอในเพลย์ลิสต์
export const getPlaylistVideos = async (
  playlistId: string,
  maxResults: number = 50,
): Promise<PlaylistVideoItem[]> => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/playlistItems",
      {
        params: {
          part: "snippet",
          playlistId,
          maxResults,
          key: API_KEY,
        },
      },
    );

    return response.data.items || [];
  } catch {
    throw new Error("ไม่สามารถโหลดวิดีโอในเพลย์ลิสต์ได้");
  }
};

// ดึงวิดีโอในเพลย์ลิสต์แบบแบ่งหน้า (Pagination)
export const getPlaylistVideosWithPagination = async (
  playlistId: string,
  pageToken?: string,
  maxResults: number = 50,
) => {
  try {
    const params: any = {
      part: "snippet",
      playlistId,
      maxResults,
      key: API_KEY,
    };

    if (pageToken) {
      params.pageToken = pageToken;
    }

    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/playlistItems",
      { params },
    );

    return {
      items: response.data.items || [],
      nextPageToken: response.data.nextPageToken,
      prevPageToken: response.data.prevPageToken,
      totalResults: response.data.pageInfo?.totalResults || 0,
      resultsPerPage: response.data.pageInfo?.resultsPerPage || 0,
    };
  } catch {
    throw new Error("ไม่สามารถโหลดวิดีโอในเพลย์ลิสต์ได้");
  }
};

// ค้นหาเพลย์ลิสต์ในช่อง
export const searchChannelPlaylists = async (
  query: string,
  maxResults: number = 10,
): Promise<PlaylistItem[]> => {
  try {
    // ดึงเพลย์ลิสต์ทั้งหมดก่อน
    const allPlaylists = await getChannelPlaylists(50);

    // กรองตามคำค้นหา
    const filteredPlaylists = allPlaylists.filter(
      (playlist) =>
        playlist.snippet.title.toLowerCase().includes(query.toLowerCase()) ||
        playlist.snippet.description
          .toLowerCase()
          .includes(query.toLowerCase()),
    );

    return filteredPlaylists.slice(0, maxResults);
  } catch {
    throw new Error("ไม่สามารถค้นหาเพลย์ลิสต์ได้");
  }
};

// ดึงข้อมูลเพลย์ลิสต์พร้อมวิดีโอ
export const getPlaylistWithVideos = async (
  playlistId: string,
  maxVideos: number = 50,
) => {
  try {
    const [playlistInfo, videos] = await Promise.all([
      getPlaylistById(playlistId),
      getPlaylistVideos(playlistId, maxVideos),
    ]);

    return {
      playlist: playlistInfo,
      videos,
      totalVideos: videos.length,
    };
  } catch {
    throw new Error("ไม่สามารถโหลดเพลย์ลิสต์และวิดีโอได้");
  }
};

// ดึงเพลย์ลิสต์ที่มีการอัปเดตล่าสุด
export const getRecentlyUpdatedPlaylists = async (maxResults: number = 10) => {
  try {
    const playlists = await getChannelPlaylists(50);

    // เรียงตามวันที่อัปเดตล่าสุด
    const sortedPlaylists = playlists.sort(
      (a, b) =>
        new Date(b.snippet.publishedAt).getTime() -
        new Date(a.snippet.publishedAt).getTime(),
    );

    return sortedPlaylists.slice(0, maxResults);
  } catch {
    throw new Error("ไม่สามารถโหลดเพลย์ลิสต์ที่อัปเดตล่าสุดได้");
  }
};

// ดึงสถิติของเพลย์ลิสต์
export const getPlaylistStats = async (playlistId: string) => {
  try {
    const [playlistInfo, videos] = await Promise.all([
      getPlaylistById(playlistId),
      getPlaylistVideos(playlistId, 999), // ดึงทั้งหมด
    ]);

    const totalDuration = videos.length; // จำนวนวิดีโอ
    const createdDate = playlistInfo?.snippet.publishedAt;

    return {
      playlistTitle: playlistInfo?.snippet.title,
      totalVideos: totalDuration,
      createdDate,
      description: playlistInfo?.snippet.description,
      privacyStatus: playlistInfo?.status.privacyStatus,
    };
  } catch {
    throw new Error("ไม่สามารถโหลดสถิติเพลย์ลิสต์ได้");
  }
};
