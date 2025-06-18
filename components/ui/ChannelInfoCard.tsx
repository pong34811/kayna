import { Card, Spinner } from "@heroui/react";
import { EyeIcon, UsersIcon, VideoIcon } from "lucide-react";
import { Channel } from "./types";

interface ChannelInfoCardProps {
  channel: Channel | null;
  loading: boolean;
  error: string | null;
}

export default function ChannelInfoCard({ channel, loading, error }: ChannelInfoCardProps) {
  return (
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
  );
}