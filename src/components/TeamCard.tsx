import { MapPin } from "lucide-react";
import Image from "next/image";

interface TeamCardProps {
    name: string;
    city: string;
    logoUrl: string;
}

export const TeamCard = ({name, city, logoUrl}: TeamCardProps) => {
    return (
      <div className="group rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg">
        <div className="relative h-40 w-full">
          <Image
            src={logoUrl}
            alt={`${name} logo`}
            fill
            className="object-contain p-4"
          />
        </div>
        <div className="p-4 border-t">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div>
            <MapPin className="h-4 w-4 mr-1.5" />
            <span>{city}</span>
          </div>
        </div>
      </div>
    );
}