"use client";

import Link from "next/link";
import ReusableText from "../atoms/ReusabledText";

export default function WeeklySchedule() {
  const schedule = [
    {
      id: "yoga",
      name: "Yoga (All Levels)",
      time: "7 AM",
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      color: "bg-green-100",
    },
    {
      id: "sound-healing",
      name: "Sound Healing",
      time: "12 PM",
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      color: "bg-slate-200",
    },
  ];

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const times = ["7 AM", "12 PM", "1 PM"];

  return (
    <section className="relative w-full py-16 text-gray-700">
      <div className="max-w-6xl mx-auto">
        <ReusableText className="xl:text-4xl">Weekly Schedule</ReusableText>
        <p className="inline-block text-[8px] md:text-xs lg:text-sm  leading-4 font-light w-full mb-10 rotate-0 scale-100 opacity-100 text-[#343E35]! font-BasisGrotesqueArabicProLight text-center">
          Advanced Booking Is Recommended
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border-t border-[#d9c59d]">
            <thead>
              <tr>
                <th className="w-24"></th>
                {days.map((day) => (
                  <th
                    key={day}
                    className="py-3 text-[#b89b52] font-medium border-l border-[#d9c59d]"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {times.map((time) => (
                <tr key={time} className="border-t border-[#d9c59d]">
                  <td className="text-[#b89b52] font-medium py-4 pr-2 text-right align-top">
                    {time}
                  </td>

                  {days.map((day) => {
                    const match = schedule.find(
                      (item) => item.time === time && item.days.includes(day)
                    );

                    return (
                      <td
                        key={day + time}
                        className="border-l border-[#d9c59d] p-2 text-center align-top"
                      >
                        {match ? (
                          <Link
                            href={`/booking/${match.id}`}
                            className={`block ${match.color} text-gray-800 py-3 px-2 rounded-md hover:opacity-90 transition`}
                          >
                            {match.name}
                          </Link>
                        ) : null}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link href="/" className="flex mx-5 mt-10">
          <span className="text-[8px] md:text-xs lg:text-sm  font-americana text-[#c69c4d] underline hover:no-underline">
            Download PDF
          </span>
        </Link>
      </div>
    </section>
  );
}
