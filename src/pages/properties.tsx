const Properties = () => {
  return (
    <div className="pt-20 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">All Properties</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* كرر نفس البطاقات من Home.tsx أو أضف المزيد */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://reva-stay-find.vercel.app/assets/chalet-1-lTvS_Tuq.jpg"
              alt="Amman Hills Villa"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">Amman Hills Villa</h3>
              <p className="text-gray-600">Amman, Jordan</p>
              <p className="font-semibold text-lg mt-2">175 JD/night</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://reva-stay-find.vercel.app/assets/chalet-2-BC__ZPkh.jpg"
              alt="Dead Sea Luxury Retreat"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">Dead Sea Luxury Retreat</h3>
              <p className="text-gray-600">Dead Sea, Jordan</p>
              <p className="font-semibold text-lg mt-2">295 JD/night</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://reva-stay-find.vercel.app/assets/chalet-3-MD3m5EYd.jpg"
              alt="Wadi Rum Desert Lodge"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">Wadi Rum Desert Lodge</h3>
              <p className="text-gray-600">Wadi Rum, Jordan</p>
              <p className="font-semibold text-lg mt-2">125 JD/night</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
