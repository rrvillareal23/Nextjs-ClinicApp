import React from "react";
import Image from "next/image";

export default function TeamMembers({ members }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {members.map((member, index) => (
        <div key={index} className="rounded-lg shadow-md p-4">
          <div className="rounded-lg overflow-hidden">
            <Image
              src={`/photos/${member.folder}/${member.photo}`}
              alt={`${member.name}`}
              width={200}
              height={200}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold">
              {member.name}, {member.credentials}
            </h3>
            <p className="text-sm">{member.department}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
