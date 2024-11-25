import { bots } from "../constant";



export const BotItem = ({ bot, index }) => {
  return (
    <article key={index} className="relative bg-[#262626] rounded-3xl p-14 bot-item">
      <header className="absolute top-4  right-4 left-4 flex justify-between  bg-white bg-opacity-5 rounded-lg py-2 px-4 z-100 font-mono">
        <div className="">
          <h5>Current Bit</h5>
          <p>{bot.current_bit}</p>
        </div>
        <div className="">
          <h5>Ends Inc</h5>
          <p>{bot.endsInc}</p>
        </div>
      </header>
      <div className="bot-container w-[250px] h-[250px] rounded-full bg-gradient-to-r from-[#fd9d02] via-pink-300 to-purple-700 z-4">
        <img
          src={`./${bot.bot_name}.png`}
          alt={`${bot.bot_name}`}
          className="bot-image h-[300px] translate-y-4"
        />
      </div>
      <div className="text-center mt-24">
        <button className="bg-gradient-to-r from-orange-500 to-purple-600 rounded-full  text-xl px-4 py-2 font-lobster">
          Place Bit
        </button>
      </div>
    </article>
  );
};
const BotsFeatures = () => {
  return (
    <div className="mt-24 mb-8">
      <p className="bot-feature-container flex flex-wrap justify-between font-mono font-bold text-4xl ">
        <div className="flex space-x-4">
          <span>Lastest</span>
          <span className="text-red-500">NTF</span>
          <span>Artwork</span>
        </div>
        <a href="#" className="space-y-4 mt-4">
          View all artwork
        </a>
      </p>
      <section className="bots-three justify-center flex md:justify-between  space-x-10 items-center  mt-6 space-y-8 sm:space-y-6 sm:space-x-10 flex-wrap">
        {bots.slice(0, 3).map((bot, index) => (
          <BotItem bot={bot} index={index} />
        ))}
      </section>
    </div>
  );
};

export default BotsFeatures;
