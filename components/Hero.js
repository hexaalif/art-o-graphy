const Hero = ({ headings, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]" />
      <div className="p-5 text-white z-[2] ml-[-10rem] ">
        <h1 className="text-5xl font-bold">{headings}</h1>
        <p className="py-5 text-xl">{message}</p>
        <button className="px-8 py-2 border">hi</button>
      </div>
    </div>
  );
};

export default Hero;
