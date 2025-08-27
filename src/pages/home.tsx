const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <img
          src="https://reva-stay-find.vercel.app/assets/hero-chalet-Cq3Xnm44.jpg"
          alt="Luxury Jordanian villa"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Discover Your Perfect
            <span className="text-blue-600"> Jordanian Retreat</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10">
            Experience luxury villas across Jordan's stunning landscapes. From Amman's hills to Wadi Rum's desert.
          </p>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Amman Villa */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://reva-stay-find.vercel.app/assets/chalet-1-lTvS_Tuq.jpg"
                alt="Amman Hills Villa"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">Amman Hills Villa</h3>
                  <span className="text-lg font-semibold">175 JD/night</span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-yellow-500">
                  ⭐ 4.9 (127)
                </div>
                <p className="text-gray-600 mt-2">Amman, Jordan</p>
                <p className="text-sm text-gray-500 mt-2">Up to 6 guests</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">WiFi</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Parking</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">City Views</span>
                </div>
              </div>
            </div>

            {/* Dead Sea Retreat */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://reva-stay-find.vercel.app/assets/chalet-2-BC__ZPkh.jpg"
                alt="Dead Sea Luxury Retreat"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">Dead Sea Luxury Retreat</h3>
                  <span className="text-lg font-semibold">295 JD/night</span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-yellow-500">
                  ⭐ 4.8 (89)
                </div>
                <p className="text-gray-600 mt-2">Dead Sea, Jordan</p>
                <p className="text-sm text-gray-500 mt-2">Up to 8 guests</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">WiFi</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Parking</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Sea View</span>
                </div>
              </div>
            </div>

            {/* Wadi Rum Lodge */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://reva-stay-find.vercel.app/assets/chalet-3-MD3m5EYd.jpg"
                alt="Wadi Rum Desert Lodge"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">Wadi Rum Desert Lodge</h3>
                  <span className="text-lg font-semibold">125 JD/night</span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-yellow-500">
                  ⭐ 4.7 (156)
                </div>
                <p className="text-gray-600 mt-2">Wadi Rum, Jordan</p>
                <p className="text-sm text-gray-500 mt-2">Up to 4 guests</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">WiFi</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Desert Views</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Stargazing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
