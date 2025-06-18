import { Card } from "@heroui/react";
import { VideoIcon, RadioIcon, YoutubeIcon } from "lucide-react";

interface LiveStatsCardProps {
  totalScheduledStreams: number;
  totalLiveStreams: number;
  totalPastStreams: number;
}

export default function LiveStatsCard({
  totalScheduledStreams,
  totalLiveStreams,
  totalPastStreams,
}: LiveStatsCardProps) {
  return (
    <section id="">
      <Card className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-pink-400 bg-[#FF2492]/80 p-10 shadow-lg backdrop-blur-lg transition-all duration-300">
        <div className="relative z-10">
          <h3 className="mb-6 text-2xl font-semibold text-pink-100 drop-shadow">
            สถิติการไลฟ์สด 🎥
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                icon: <VideoIcon className="h-6 w-6 text-pink-200" />,
                label: "สตรีมที่กำลังจะเกิดขึ้น",
                value: totalScheduledStreams,
              },
              {
                icon: <RadioIcon className="h-6 w-6 text-pink-200" />,
                label: "กำลังถ่ายทอดสด",
                value: totalLiveStreams,
              },
              {
                icon: <YoutubeIcon className="h-6 w-6 text-pink-200" />,
                label: "สตรีมที่จบไปแล้ว",
                value: totalPastStreams,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-pink-400 bg-white/10 p-6 text-center shadow-md backdrop-blur-md transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col items-center gap-2">
                  {item.icon}
                  <p className="text-lg font-semibold text-pink-200">
                    {item.label}
                  </p>
                </div>
                <p className="mt-2 text-3xl font-bold text-white">
                  {item.value.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}
