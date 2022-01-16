export default function News() {
  return (
    <>
      <div className="max-w-screen-xl p-5 mx-auto bg-coolGray-100 text-coolGray-800">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-coolGray-500"
            style='background-image: url("https://source.unsplash.com/random/240x320");'
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-coolGray-900 to-coolGray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                href="#"
                className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-coolGray-100 bgundefined"
              >
                Politics
              </a>
              <div className="flex flex-col justify-start text-center text-coolGray-100">
                <span className="text-3xl font-semibold leading-none tracking-wide">
                  04
                </span>
                <span className="leading-none uppercase">Aug</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                href="#"
                className="font-medium text-md hover:underline text-coolGray-100"
              >
                {" "}
                Autem sunt tempora mollitia magnam non voluptates
              </a>
            </h2>
          </div>
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-coolGray-500"
            style='background-image: url("https://source.unsplash.com/random/241x320");'
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-coolGray-900 to-coolGray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                href="#"
                className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-coolGray-100 bgundefined"
              >
                Health
              </a>
              <div className="flex flex-col justify-start text-center text-coolGray-100">
                <span className="text-3xl font-semibold leading-none tracking-wide">
                  01
                </span>
                <span className="leading-none uppercase">Aug</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                href="#"
                className="font-medium text-md hover:underline text-coolGray-100"
              >
                Inventore reiciendis aliquam excepturi
              </a>
            </h2>
          </div>
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-coolGray-500"
            style='background-image: url("https://source.unsplash.com/random/242x320");'
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-coolGray-900 to-coolGray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                href="#"
                className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-coolGray-100 bgundefined"
              >
                Science
              </a>
              <div className="flex flex-col justify-start text-center text-coolGray-100">
                <span className="text-3xl font-semibold leading-none tracking-wide">
                  28
                </span>
                <span className="leading-none uppercase">Jul</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                href="#"
                className="font-medium text-md hover:underline text-coolGray-100"
              >
                Officiis mollitia dignissimos commodi optio vero animi
              </a>
            </h2>
          </div>
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-coolGray-500"
            style='background-image: url("https://source.unsplash.com/random/243x320");'
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-coolGray-900 to-coolGray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                href="#"
                className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-coolGray-100 bgundefined"
              >
                Sports
              </a>
              <div className="flex flex-col justify-start text-center text-coolGray-100">
                <span className="text-3xl font-semibold leading-none tracking-wide">
                  19
                </span>
                <span className="leading-none uppercase">Jul</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                href="#"
                className="font-medium text-md hover:underline text-coolGray-100"
              >
                Doloribus sit illo necessitatibus architecto exercitationem enim
              </a>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
