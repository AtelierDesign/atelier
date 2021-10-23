


export default function Subscribe() {

  return (
  <>
<div className="subscribe">
  <div className="subscribe__inner">
    <div className="subscribe__label">Subscribe</div>
    {/*Email Subscribe*/}
    <div className="relative mx-auto">
      <input
        type="text"
        id="rounded-email"
        className="h-30 rounded-md border-lime flex-1 appearance-none border-2 w-full py-4 px-5 bg-transparent text-gray-700 placeholder-gray shadow-none text-xl focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
        placeholder="Your email"
      />
    </div>
  </div>
</div>

  </>
  );
}
