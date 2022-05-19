export default function Card({ content, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer justify-center rounded-lg items-center w-40 h-20 mx-8 p-32 bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-black"
    >
      <p className="p-4">{content}</p>
    </div>
  );
}
