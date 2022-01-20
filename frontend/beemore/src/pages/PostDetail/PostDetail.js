import React from "react";
import MainLayout from "../../components/Layout";
import ScrollIndicator from "../../components/ScrollIndicator";
export default function PostDetail() {
  return (
    <MainLayout>
      <ScrollIndicator>
        <div className="flex flex-row p-10 bg-gray-50">
          <div className="basis-2/3 p-10">
            {/* <!-- component --> */}
            {/* <!--author--> */}
            <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50">
              <img
                className="object-cover h-60 w-full"
                src="https://source.unsplash.com/random/1920x1080"
              />

              {/* <!--post categories--> */}
              <div className="flex items-center justify-start mt-4 mb-4">
                <a
                  href="#"
                  className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500 mr-4"
                >
                  #Django
                </a>
                <a
                  href="#"
                  className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500 mr-4"
                >
                  #Python
                </a>
                <a
                  href="#"
                  className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500"
                >
                  #web development
                </a>
              </div>
              <div className="mt-2">
                {/* <!--post heading--> */}
                <a
                  href="#"
                  className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-black-500  hover:underline"
                >
                  Django Authentication with oauth using facebook,twitter and
                  google
                </a>

                {/* <!--post views--> */}
                <div className="flex justify-start items-center mt-2">
                  <p className="text-sm text-green-500 font-bold bg-gray-100 rounded-full py-2 px-2 hover:text-red-500">
                    3000
                  </p>
                  <p className="text-sm text-gray-400 font-bold ml-5">Views</p>
                </div>

                {/* <!--author avator--> */}
                <div className="font-light text-gray-600">
                  <a href="#" className="flex items-center mt-6 mb-6">
                    <img
                      src="https://avatars.githubusercontent.com/u/71964085?v=4"
                      alt="avatar"
                      className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block"
                    />
                    <h1 className="font-bold text-gray-700 hover:underline">
                      By James Amos
                    </h1>
                  </a>
                </div>
              </div>

              {/* <!--end post header--> */}
              {/* <!--post content--> */}
              <div className="max-w-4xl px-10  mx-auto text-2xl text-gray-700 mt-4 rounded bg-gray-100">
                {/* <!--content body--> */}
                <div>
                  <p
                    className="mt-2 p-8 first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin sit amet euismod eros, ut euismod justo. Praesent
                    elementum vulputate interdum. Integer nec ultrices nisl, at
                    dictum velit. Sed vitae mauris quis metus suscipit placerat.
                    Sed eleifend interdum dictum. Proin nisl odio, dapibus eget
                    dignissim vel, malesuada ut turpis. Praesent condimentum
                    congue massa in vestibulum. Donec justo erat, feugiat at
                    fermentum at, pretium ac ante. Duis et congue dolor.
                    Suspendisse et ultrices leo, a pulvinar diam. Nunc nisi
                    libero, dictum eget ullamcorper condimentum, bibendum vitae
                    orci. Fusce ullamcorper neque ac purus vestibulum accumsan.
                    Fusce in lobortis ipsum. Mauris mollis, massa molestie
                    viverra aliquam, nibh nulla suscipit nibh, at malesuada mi
                    orci eu quam. Suspendisse at tristique tortor. Proin vitae
                    sodales ipsum, eget euismod dui. Nunc non urna lacus. Mauris
                    porttitor fringilla pulvinar. Cras ac quam facilisis,
                    dapibus odio tristique, fringilla felis. Sed faucibus
                    consectetur quam, ac mattis neque interdum quis. Donec
                    laoreet vel lorem id fermentum. Praesent aliquet magna
                    dolor. Pellentesque mattis, ante vitae eleifend auctor, mi
                    dui fermentum nisl, non vulputate nunc urna in augue.
                    Vestibulum porttitor, nunc vitae luctus convallis, ipsum
                    ligula porttitor arcu, a condimentum massa velit feugiat
                    enim. Donec eget quam pharetra, pellentesque est non, dictum
                    justo. Curabitur viverra, turpis at maximus malesuada, nisl
                    odio mattis nisl, sed interdum lectus leo scelerisque nisi.
                    Sed dignissim leo ut lorem maximus ultricies. Aenean
                    vestibulum hendrerit lacinia. In urna mauris, venenatis ut
                    felis sit amet, venenatis aliquet neque. Morbi interdum
                    commodo facilisis. Duis aliquam pharetra rutrum. Mauris
                    ultrices eros id magna mollis vestibulum. Proin in tellus et
                    nisi lacinia vestibulum eu vitae nibh. Etiam magna sapien,
                    luctus eu aliquet id, pretium non magna. Sed rutrum tortor
                    eu magna rhoncus, nec egestas tellus faucibus. Aliquam nulla
                    leo, egestas sed convallis efficitur, mattis a ante. Ut
                    tempus aliquet tincidunt. Phasellus sit amet nunc vitae quam
                    luctus congue nec non ligula. Integer feugiat aliquam nulla,
                    ac eleifend orci porta et. Aliquam facilisis laoreet varius.
                    Vivamus eleifend, dui at mattis bibendum, enim ante suscipit
                    urna, et feugiat sapien nisl at turpis. Aenean velit diam,
                    molestie non eros eu, hendrerit tincidunt nunc. Nunc ipsum
                    nunc, luctus eget massa in, tristique vulputate nisi. Nunc
                    vestibulum sollicitudin nibh sed vehicula. Integer fermentum
                    nibh sit amet est faucibus iaculis. Vestibulum mi eros,
                    commodo sit amet varius a, suscipit ultrices erat. Proin
                    hendrerit sapien vel mauris pretium, at tristique tortor
                    tristique. Sed mattis aliquet ipsum, id tempus tortor
                    aliquam nec. Nam elementum imperdiet elementum. Mauris
                    suscipit odio ut dolor porta, quis pretium augue gravida.
                    Phasellus leo magna, luctus vel massa rhoncus, tincidunt
                    faucibus purus. Nam blandit iaculis massa, mattis
                    ullamcorper sapien venenatis non. Proin aliquet lacinia
                    eros, ac iaculis est fringilla eu. Etiam eu nunc nec dui
                    gravida tincidunt. Ut porta risus a ornare rhoncus. Integer
                    dictum mi a ex varius tincidunt. Etiam vitae ullamcorper
                    neque. Vivamus imperdiet commodo rhoncus. Quisque id rhoncus
                    justo. Donec elementum ornare magna, eu accumsan urna
                    efficitur vitae. Curabitur nec venenatis enim. Curabitur
                    interdum libero quis justo scelerisque, facilisis porttitor
                    lacus bibendum. Integer eu augue lacus. Suspendisse potenti.
                    Curabitur varius nunc lobortis sapien posuere, non aliquam
                    turpis consequat. Curabitur at nisi at ligula posuere
                    tincidunt. Nullam justo metus, lacinia et arcu nec, interdum
                    vestibulum libero.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/3 max-w-4xl px-10 py-16 mx-auto px-0 px-8 mx-auto sm:px-12 xl:px-5">
            {/* <!--form form comments--> */}

            <div class="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
              <div class="flex flex-wrap -mx-3 mb-6">
                <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">
                  Add a new comment
                </h2>
                <div class="w-full px-3 mb-2 mt-2">
                  <textarea
                    class="bg-gray-100 resize-y rounded-md border border-gray-400 leading-normal w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                    name="body"
                    placeholder="Type Your Comment"
                    required
                  ></textarea>
                </div>
                <div class="w-full md:w-full flex items-start px-3">
                  <div class="-mr-1">
                    <input
                      type="submit"
                      class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                      value="Post Comment"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* <!--comments--> */}

            <div className="w-full max-w-xl shadow bg-white rounded-lg px-4 pt-2">
              <ul role="list" class="p-6 divide-y divide-slate-200">
                <li class="flex py-4 first:pt-0 last:pb-0">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://source.unsplash.com/random/481x361"
                    alt=""
                  />
                  <div class="ml-3 overflow-hidden">
                    <p class="text-sm font-medium text-slate-900">Admin</p>
                    <p class="text-sm text-slate-500">
                      This is my dummy comment This is my dummy comment This is
                      my dummy comment
                    </p>
                  </div>
                </li>
                <li class="flex py-4 first:pt-0 last:pb-0">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://source.unsplash.com/random/481x361"
                    alt=""
                  />
                  <div class="ml-3 overflow-hidden">
                    <p class="text-sm font-medium text-slate-900">Admin</p>
                    <p class="text-sm text-slate-500">
                      This is my dummy comment
                    </p>
                  </div>
                </li>
                <li class="flex py-4 first:pt-0 last:pb-0">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://source.unsplash.com/random/481x361"
                    alt=""
                  />
                  <div class="ml-3 overflow-hidden">
                    <p class="text-sm font-medium text-slate-900">Admin</p>
                    <p class="text-sm text-slate-500">
                      This is my dummy comment
                    </p>
                  </div>
                </li>
                <li class="flex py-4 first:pt-0 last:pb-0">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://source.unsplash.com/random/481x361"
                    alt=""
                  />
                  <div class="ml-3 overflow-hidden">
                    <p class="text-sm font-medium text-slate-900">Admin</p>
                    <p class="text-sm text-slate-500">
                      This is my dummy comment
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- component --> */}
        <div className="mt-6 bg-gray-50">
          <div className=" px-10 py-6 mx-auto">
            {/* <!--author--> */}

            {/* <!--related posts--> */}
            <h2 className="text-2xl mt-4 text-gray-500 font-bold text-center">
              Related Posts
            </h2>
            <div className="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
              <div className="grid grid-cols-12 col-span-12 gap-7">
                <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                  <a
                    href="#_"
                    className="block transition duration-200 ease-out transform hover:scale-110"
                  >
                    <img
                      className="object-cover w-full shadow-sm h-full"
                      src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80"
                    />
                  </a>
                  <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                    <div className="bg-indigo-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                      <span>Flask</span>
                    </div>
                    <h2 className="text-base text-gray-500 font-bold sm:text-lg md:text-xl">
                      <a href="#_">
                        Oauth using facebook with flask,mysql,vuejs and tailwind
                        css
                      </a>
                    </h2>
                    {/* <!-- <p className="mt-2 text-sm text-gray-500">Learn how to authenticate users to your application using facebook.</p> --> */}
                  </div>
                </div>

                <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                  <a
                    href="#_"
                    className="block transition duration-200 ease-out transform hover:scale-110"
                  >
                    <img
                      className="object-cover w-full shadow-sm h-full"
                      src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80"
                    />
                  </a>
                  <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                    <div className="bg-red-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                      <span>Django</span>
                    </div>
                    <h2 className="text-base text-gray-500 font-bold sm:text-lg md:text-xl">
                      <a href="#_">
                        Authenticating users with email verification in Django
                        apps
                      </a>
                    </h2>
                    {/* <!-- <p className="mt-2 text-sm text-gray-500">Learn how to authenticate users to your web application by sending secure links to their email box.</p> --> */}
                  </div>
                </div>

                <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                  <a
                    href="#_"
                    className="block transition duration-200 ease-out transform hover:scale-110"
                  >
                    <img
                      className="object-cover w-full shadow-sm h-full"
                      src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80"
                    />
                  </a>
                  <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                    <div className="bg-purple-500 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                      <span>Flask</span>
                    </div>
                    <h2 className="text-base text-gray-500 font-bold sm:text-lg md:text-xl">
                      <a href="#_">
                        Creating user registration and authentication system in
                        flask
                      </a>
                    </h2>
                    {/* <!-- <p className="mt-2 text-sm text-gray-500">Learn how to authenticate users to your application using flask and mysql db.</p> --> */}
                  </div>
                </div>
              </div>
            </div>

            {/* <!--form form comments--> */}
          </div>
        </div>
      </ScrollIndicator>
    </MainLayout>
  );
}
