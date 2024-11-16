"use client";

import { Calendar, MapPin, Pizza, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EventPromotion() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: Calendar, text: "Networking", number: 1 },
            { icon: MapPin, text: "New Speaker", number: 2 },
            { icon: Pizza, text: "Food Court", number: 3 },
            { icon: Users, text: "Have Fun", number: 4 },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center">
                  <item.icon className="w-10 h-10 text-pink-500" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {item.number}
                </div>
              </div>
              <p className="mt-2 text-blue-800 font-semibold">{item.text}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-pink-500 font-semibold mb-2">WHY JOIN EVENT</h2>
          <h1 className="text-4xl font-bold text-blue-800 mb-6">
            Why You Should
            <br />
            Join Event
          </h1>
          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            Shift your perspective on digital business
          </h3>
          <p className="text-gray-600 mb-4">
            Study in a newly-refreshed campus located in the heart of Berlin,
            Europe s start-up capital. Berlin is a fantastic place to study as
            there are excellent travel.
          </p>
          <p className="text-gray-600 mb-6">
            The process of planning and coordinating the event is usually
            referred to as event planning and which can include budgeting,
            scheduling, site selection, acquiring necessary permits,
            coordinating transportation and parking, arranging for speakers or
            entertainers.
          </p>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full">
            Buy Ticket
          </Button>
        </div>
      </div>
    </div>
  );
}
