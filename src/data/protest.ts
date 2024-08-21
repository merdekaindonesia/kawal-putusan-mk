export const data = [
  {
    id: 1,
    datetime: "2024-08-22T02:00:00Z",
    location: "Yogyakarta, Jawa Tengah",
    detail_location: "Lapangan Parkir Abu Bakar Ali, Malioboro",
    lat: -7.789989412295564,
    long: 110.36746573742012,
    source: "https://x.com/rgantas/status/1826250547625906455",
  },
  {
    id: 2,
    datetime: "2024-08-22T02:00:00Z",
    location: "Surabaya, Jawa Timur",
    detail_location: "Tugu Pahlawan Surabaya",
    lat: -7.245746569659206,
    long: 112.7378519680557,
    source: "https://x.com/thanthowy/status/1826217395557695840",
  },
  {
    id: 3,
    datetime: "2024-08-22T02:00:00Z",
    location: "DKI Jakarta",
    detail_location: "Depan Gedung DPR RI",
    lat: -6.212572659545695,
    long: 106.79754121341553,
    source: "https://x.com/vincentrcrd/status/1826157785928929738",
  },
];

export type IProtestData = (typeof data)[number];