export interface Runway {
  leIdent: string; heIdent: string;
  le: [number, number]; he: [number, number];
  widthFt: number;
}
export interface Airport {
  icao: string; name: string; runways: Runway[];
}
export const YMML: Airport = {
  icao: "YMML", name: "Melbourne",
  runways: [
    { leIdent: "16", heIdent: "34", le: [-37.673, 144.843], he: [-37.723, 144.853], widthFt: 197 },
    { leIdent: "27", heIdent: "09", le: [-37.674, 144.854], he: [-37.676, 144.816], widthFt: 148 },
    { leIdent: "17", heIdent: "35", le: [-37.654, 144.843], he: [-37.690, 144.848], widthFt: 148 },
  ],
};
export const AIRPORTS: Airport[] = [YMML];
