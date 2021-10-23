


export default function Subscribe() {

  return (
  <>
<div className="subscribe">
  <div className="subscribe__inner">
    <div className="subscribe__label">
    <h1>Subscribe</h1>
    </div>
    {/*Email Subscribe*/}
    <div className="relative mx-auto">
      <input
        type="text"
        id="rounded-email"
        className="h-30 rounded-md border-lime flex-1 appearance-none border-2 w-full py-4 px-5 bg-transparent text-gray-700 placeholder-gray shadow-none text-xl focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
        placeholder="Your email"
      />
      <button className="bg-gray-300 border-2 border-gray-400 hover:bg-gray-600 text-white font-bold w-full mt-3 py-2 px-4 rounded-sm">
        Submit
        </button>
    </div>
  </div>
</div>

  </>
  );
}
