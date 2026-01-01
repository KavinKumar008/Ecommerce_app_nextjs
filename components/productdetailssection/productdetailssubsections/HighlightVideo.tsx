// const videoSource = require("@/public/videos/tvvideo.mp4");
const HighlightVideo = () => {
  return (
    <section className="mt-7 lg:pr-32 lg:pl-32 lg:p-10 md:pr-32 md:pl-32 md:p-10 flex flex-col items-center gap-10">
      <div className="lg:text-3xl md:text-3xl text-xl font-bold">
        <h1>Increadible feature to highlight</h1>
      </div>
      <div>
        <video
          src="/videos/tvvideo.mp4"
          autoPlay
          playsInline
          controls
          className="w-[900px] h-auto rounded-xl"
        />
      </div>
    </section>
  );
};

export default HighlightVideo;
