export default function Visa() {
  return (
    <div>
      {/* title */}
      <div className="flex justify-between text-gray-600">
        <p className="font-bold ">Your Visa</p>
        <button className="text-sm">See All</button>
      </div>

      {/* card */}
      <div className="overflow-hidden">
        <ul className="py-5 w-[300%] flex gap-5">
          <li className="w-[250px] h-[150px] shadow-lg border rounded-xl bg-gradient-to-r to-cyan-500 from-blue-500"></li>
          <li className="w-[250px] h-[150px] shadow-lg border rounded-xl bg-white"></li>
        </ul>
      </div>
    </div>
  );
}
