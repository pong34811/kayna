// app/api/youtube/live/route.tsx

import { NextResponse } from "next/server";
import axios from "axios";

const API_KEY = "AIzaSyBt0PXH2soaHhqepmlzhcqyvcb-yHloulc";
const CHANNEL_ID = "UCC_P34t35REbiPzbHO_bifA";

const YOUTUBE_API = "https://www.googleapis.com/youtube/v3/search";

async function fetchLivestreams(eventType: "upcoming" | "live" | "completed") {
  const response = await axios.get(YOUTUBE_API, {
    params: {
      part: "snippet",
      channelId: CHANNEL_ID,
      eventType,
      type: "video",
      maxResults: 999,
      key: API_KEY,
    },
  });

  return response.data.items || [];
}

export async function GET() {
  try {
    const [upcoming, live, completed] = await Promise.all([
      fetchLivestreams("upcoming"),
      fetchLivestreams("live"),
      fetchLivestreams("completed"),
    ]);

    return NextResponse.json({
      totalUpcoming: upcoming.length,
      totalLive: live.length,
      totalCompleted: completed.length,
      upcoming,
      live,
      completed,
    });
  } catch {
    return NextResponse.json(
      { error: "ไม่สามารถดึงข้อมูล livestream ได้" },
      { status: 500 },
    );
  }
}
