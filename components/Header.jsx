export default function Header() {
  return (
    <div className="flex justify-between items-center py-5">
      {/* name */}
      <div>
        <p className="text-sm text-gray-600">Hello!</p>
        <p className="font-bold">Aurellia!</p>
      </div>

      {/* profile */}
      <div className="rounded-full border w-10 h-10 bg-gray-500"></div>
    </div>
  );
}
