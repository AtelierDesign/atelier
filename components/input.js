import bootstrap from 'https://cdn.skypack.dev/bootstrap';

export default function Input() {
  return (
<>
  <div className="des__container_md">

      </div>
      {/*Email Subscribe*/}
      <div className="relative mx-auto">
        <input
          type="text"
          id="rounded-email"
          className="h-30 rounded-sm border-lime flex-1 appearance-none border-2 w-full py-2 px-5 bg-transparent text-gray-600 placeholder-gray-300 shadow-none text-xl"
          placeholder="Email address"
        />
        <button
          className="bg-charcoal rounded-xs border-0 hover:bg-gray-600 text-white w-full mt-3 py-1 px-4">
          Submit
        </button>
      </div>
    </div>
  </div>
</>

  );
}
