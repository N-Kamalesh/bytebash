import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex flex-col gap-4 items-center justify-center  bg-gradient-to-b from-cyan-900 to-cyan-700 text-cyan-300 h-screen">
      <h1 className="text-5xl font-bold">Uh oh!</h1>
      <h3 className="text-xl text-semibold">
        Looks like you can&apos;t proceed further
      </h3>
      <Link
        to="/"
        className="bg-cyan-50 text-cyan-600 font-bold hover:scale-110 transition-all px-4 py-2 rounded-lg "
      >
        Go Back
      </Link>
    </main>
  );
}

export default NotFound;
