"use client";

export default function MapPreview({
  mapCode,
  tileSize,
}: {
  mapCode: string;
  tileSize: number;
}) {
  let _mapCode: string = mapCode;
  const mapData: any[] = [];

  const tileImages = {
    b: "/mapTiles/bush.svg",
    f: "/mapTiles/floor.svg",
    r: "/mapTiles/river.svg",
    w: "/mapTiles/wall.svg",
  };
  const mapWidth = 25;
  const mapHeight = 16;
  //   const tileSize = size / mapWidth;

  //parse the map code into an array of tiles
  let char;
  for (let i = 0; i < mapWidth * mapHeight; i++) {
    char = _mapCode.charAt(i);
    //if its a number make x empty tiles
    if (!Number.isNaN(Number(char))) {
      for (let j = 0; j < Number(char); j++) {
        mapData.push(tileImages.f);
      }
    }
    //if its a letter make a tile of that type
    else {
      mapData.push(tileImages[char as keyof typeof tileImages]);
    }
  }

  return (
    <div
      className="overflow-hidden flex flex-wrap select-none"
      style={{ width: mapWidth * tileSize, height: mapHeight * tileSize }}
    >
      {mapData.map((tileSrc, index) => (
        <img
          className="inline-block"
          key={index}
          src={tileSrc}
          style={{
            width: tileSize,
            height: tileSize,
          }}
        />
      ))}
    </div>
  );
}
