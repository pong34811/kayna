// types.ts
export interface Channel {
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

export interface VideoItem {
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

export interface UpcomingLive {
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
