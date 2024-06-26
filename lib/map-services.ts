interface IMapServices {
  name: string;
  attribution: string;
  url: string;
}

export const mapServices: IMapServices[] = [
  {
    name: "OpenStreetMap",
    attribution:
      '&copy; <a href="http://osm.org/copyright”>OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
  {
    name: "Mapbox",
    attribution:
      "Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>",
    url: `https://api.mapbox.com/styles/v1/peterxavier/clxdki4eb000y01qq3ehh02da/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
  },
];
