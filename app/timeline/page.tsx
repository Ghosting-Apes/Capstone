"use client"
import NavBar from "../components/NavBar";
import { Timeline, Text, TimelineItem } from '@mantine/core';
import { Chrono } from "react-chrono";

export default function Time() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <Chrono items={[
        {
          title: "November 1650",
          cardTitle: "First Event",
          url: "https://google.com",
          cardSubtitle: "No impact",
          cardDetailedText: "This event happened a long time ago!"
        },
        {
          title: "September 1750",
          cardTitle: "Second Event",
          url: "https://google.com",
          cardSubtitle: "Low impact",
          cardDetailedText: "This event happened closer to our time.."
        },
        {
          title: "February 1850",
          cardTitle: "Third Event",
          url: "https://google.com",
          cardSubtitle: "Medium impact",
          cardDetailedText: "This event was pretty recent..."
        },
        {
          title: "April 2025",
          cardTitle: "Fourth Event",
          url: "https://google.com",
          cardSubtitle: "High impact",
          cardDetailedText: "This happened today!"
        }
      ]}
      mode="VERTICAL_ALTERNATING" />
    </div>
  );
}
