import Image from "next/image";
import React from "react";

const websiteLogos = {
  gauntlet:
    "http://cc-client-assets.s3.amazonaws.com/store/gauntletgamesvictoria/7c8176e703db451bad3277bb6d4b8631/medium/Transparent_logo.png",
  houseOfCards: "https://i.ibb.co/qnytc5Q/house-of-cards-logo.png",
  kanatacg: "https://i.ibb.co/hm3qKWc/wizardstower-removebg-preview.png",
  fusion: "https://i.ibb.co/GkKmry9/fusiongaminglogo.png",
  four01: "https://i.ibb.co/h9x3Ksb/401games.png",
  everythinggames:
    "https://cdn.shopify.com/s/files/1/0618/8905/2856/files/Header_76747500-dd40-4d94-8016-a1d21282e094_large.png?v=1650298823",
  magicstronghold:
    "https://magicstronghold-images.s3.amazonaws.com/customizations/logo.png",
  facetoface: "https://i.ibb.co/W2bPWdK/logo-colored-1.png",
  connectiongames: "https://i.ibb.co/Qp1kqrB/connectiongames-inverted.png",
  topdeckhero:
    "https://d1rw89lz12ur5s.cloudfront.net/store/topdeckhero/1fdf9e60cbd911e7aefa7116e0c551f9/large/topdeckhero.png",
  jeux3dragons:
    "https://d1rw89lz12ur5s.cloudfront.net/store/jeux3dragons/ef00baaca6ad43cfb51939c1af74c2c7/large/logo.png",
  sequencegaming: "https://i.ibb.co/C2jXrmD/sequence-no-bg-inverted.png",
  atlas:
    "https://d1rw89lz12ur5s.cloudfront.net/store/atlascollectables/a9e1fed8d2d549cba92c6406b18f8969/large/logo-v2-small-v2.png",
  hairyt:
    "https://cdn.shopify.com/s/files/1/0266/9513/9533/files/hariyt-horizontal-logo.png?v=1615403256",
  gamezilla:
    "https://cdn.shopify.com/s/files/1/0570/6308/0145/files/Screen_Shot_2018-09-07_at_1.02.57_PM_copy_141x.png?v=1626814255",
  exorgames:
    "https://cdn.shopify.com/s/files/1/0467/3083/8169/files/Untitled-2-01.png?v=1613706669",
  gameknight:
    "https://cdn.shopify.com/s/files/1/0367/8204/7276/files/GK-Logo-Full-Text-Below-1-768x603.png?v=1618430878",
  enterthebattlefield: "https://i.ibb.co/hdnH9fY/enterthebattlefield.png",
  manaforce:
    "https://d1rw89lz12ur5s.cloudfront.net/store/manaforce/e58b802e2e334d17aacfbf9954a5400e/large/manaforce%20logo%20attempt%204.png",
  firstplayer:
    "https://d1rw89lz12ur5s.cloudfront.net/store/firstplayer/ab9075a71d2949aa8dd1e032f54cf7d8/large/g901%20medium.png",
  orchardcity:
    "https://d1rw89lz12ur5s.cloudfront.net/store/orchardcitygames/eb6cb32f84b34b5cbb1c025fc41c9821/large/logo_v1.png",
  bordercity:
    "https://i.ibb.co/cvNCbXx/Border-City-Games-Large-85873391-3559-47f7-939a-420461a0033f-201x-removebg-preview.png",
  aethervault:
    "https://d1rw89lz12ur5s.cloudfront.net/store/aethervaultgames/baa99644755e44c2a11d7bc20494e7b0/large/AetherVaultGames.png",
  thecomichunter:
    "https://d1rw89lz12ur5s.cloudfront.net/store/comichunter/77344716f796416590aa7e3ec91af534/large/ComicHunter.png"
};

export default function SearchRow({ cardData }) {
  const handleClick = () => {
    window.open(cardData.link, "_blank");
  };

  return (
    <>
      <>
        <div className="grid grid-cols-12 gap-4 m-1 p-2 hover:backdrop-brightness-75 rounded-md transition-all bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800">
          {/* center content vertically in thje column */}
          <div className="col-span-3 flex justify-center items-center">
            <img
              src={cardData.image}
              alt="card"
              className="w-16 md:w-24 rounded-md"
            />
          </div>
          <div className="col-span-5 mt-2">
            <div className="flex flex-col text-left">
              <div className="text-md font-bold">{cardData.name}</div>
              <div className="text-sm">{cardData.set}</div>
              {/* match cardData.website to it's websiteLogo from the map */}
              <div className="h-8">
              <img
                src={websiteLogos[cardData.website]}
                alt="website logo"
                className="h-8 sm:h-12 object-contain"
              />
              {/* <div className="text-sm">{cardData.website}</div> */}
              </div>
            </div>
          </div>
          <div className="col-span-4 mt-2">
            <div className="flex flex-col items-end">
              <div className="text-lg font-bold">${cardData.price}</div>
              <div className="flex flex-row space-x-2">
                {cardData.foil && (
                  <div className="text-sm font-extrabold text-purple-500">
                    Foil
                  </div>
                )}
                <div className="text-sm font-bold">{cardData.condition}</div>
              </div>
              <button 
              className="transition-all bg-purple-600 hover:bg-purple-700 text-white font-bold p-1 px-2 sm:py-2 sm:px-4 rounded focus:outline-none focus:shadow-outline mt-4 "              onClick={handleClick}>
                Buy
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
