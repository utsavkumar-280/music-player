import { v4 as uuidv4 } from "uuid";

function Chillpop() {
  return [
    {
      name: "Fireplace",
      artist: "Sleepy Fish",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/25a182a6a21588b8f7ad5605ba1118a8ea61bdc2-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7976",
      id: uuidv4(),
      color: ["#0E4466", "#77CBDE"],
      active: true,
    },
    {
      name: "Swimming",
      artist: "Sleepy Fish",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/25a182a6a21588b8f7ad5605ba1118a8ea61bdc2-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7993",
      id: uuidv4(),
      color: ["#0E4466", "#77CBDE"],
      active: false,
    },
    {
      name: "Oasis",
      artist: "Makzo",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11768",
      id: uuidv4(),
      color: ["#0C3D88", "#FDB762"],
      active: false,
    },
    {
      name: "Not A Cloud In Sight",
      artist: "Aviino",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10450",
      id: uuidv4(),
      color: ["#04244D", "#F57BB5"],
      active: false,
    },
    {
      name: "Beaver Creek",
      artist: "Middle School, Aso, Aviino",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10076",
      id: uuidv4(),
      color: ["#032028", "#FB933E"],
      active: false,
    },
    {
      name: "Feather",
      artist: "Sleepy Fish",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10027",
      id: uuidv4(),
      color: ["#273A5A", "#F9EEDA"],
      active: false,
    },
  ];
}

export default Chillpop;
