export default function Card({ content }) {
  return (
    <div className="flex justify-center items-center w-40 h-20 mx-8 p-8 bg-gradient-to-r from-purple-500 to-pink-500 rouded-lg ">
      {content}
    </div>
  );
}
