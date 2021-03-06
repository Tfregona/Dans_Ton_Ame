export default function Landig() {
  return (
    <div
      className="w-full text-center text-black p-10"
      style={{
        backgroundImage: `url(/img/homepage/homeBanner.jpg)`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="title p-5 py-24 text-[#846363] font-bold">
        <h1 className="text-4xl">
          <span className="letter-title">A</span>
          <span className="letter-title">L</span>
          <span className="letter-title">I</span>
          <span className="letter-title">C</span>
          <span className="letter-title">I</span>
          <span className="letter-title">A</span>

          <span className="letter-title"> </span>

          <span className="letter-title">G</span>
          <span className="letter-title">O</span>
          <span className="letter-title">M</span>
          <span className="letter-title">E</span>
          <span className="letter-title">S</span>
        </h1>
        <h2 className="letter-title text-xl font-bold">Sophrologue</h2>
        <h2 className="letter-title text-xl font-bold">
          Spécialiste du bien être
        </h2>
      </div>
    </div>
  )
}
