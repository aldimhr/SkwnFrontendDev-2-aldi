export default function Services() {
  return (
    <div className="py-5">
      <div className="flex justify-between text-gray-600">
        <p className="font-bold ">Services</p>
        <button className="text-sm">See All</button>
      </div>

      <ul className="flex justify-between px-2 mt-2">
        <li>
          <div className="rounded-full bg-gray-300 w-10 h-10"></div>
          <p className="text-xs mt-1 text-center font-medium">Card</p>
        </li>
        <li>
          <div className="rounded-full bg-gray-300 w-10 h-10"></div>
          <p className="text-xs mt-1 text-center font-medium">Finance</p>
        </li>
        <li>
          <div className="rounded-full bg-gray-300 w-10 h-10"></div>
          <p className="text-xs mt-1 text-center font-medium">Top up</p>
        </li>
        <li>
          <div className="rounded-full bg-gray-300 w-10 h-10"></div>
          <p className="text-xs mt-1 text-center font-medium">Help</p>
        </li>
      </ul>
    </div>
  );
}
