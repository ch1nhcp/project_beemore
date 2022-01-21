import React from "react";
import { useLocation, useParams } from "react-router";
import { useEffect, useState, useContext } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function About() {
  // const location = useLocation();
  // const path = location.pathname.split("/")[2];

  const { state, dispatch, user } = useContext(Context);
  const [username, setUsername] = useState();
  const [picture, setPicture] = useState();
  const [background, setBackground] = useState();
  const [posts, setPosts] = useState([]);

  const [updateMode, setUpdateMode] = useState(false);

  const PF = "http://localhost:5000/images/";

  // lay param user id
  const params = useParams();

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("/users/" + params.userId);
      setUsername(res.data.username);
      setPicture(res.data.picture);
      setBackground(res.data.background);
      console.log(res);
    };
    const getAllPost = async () => {
      const res = await axios.get("/posts/?postedBy=" + params.userId);
      setPosts(res.data);
    };
    getUser();
    getAllPost();
  }, [params.userId]);

  const handleFollow = async () => {
    await axios.put(
      "http://localhost:5000/api/users/follow?selfId=" +
        user.user._id +
        "&followingId=" +
        params.userId
    );
    //localhost:5000/api/users/follow?selfId= .....&followingId=...

    // let updatedUser = { ...user.user };
    // updatedUser.following.push(params.userId);
    // const action = { type: "CURRENT_USER", payload: updatedUser };
    // dispatch(state, action);
  };

  return (
    <>
      <Navbar />

      <div>
        {/* userModel background */}

        <img
          alt="profile"
          src={PF + background}
          class="object-cover h-60 w-full "
        />

        {/* userModel picture */}
        <div class="flex flex-col items-center justify-center p-4 -mt-16">
          <img
            alt="profil"
            src={PF + picture}
            class="mx-auto object-cover rounded-full border-2 border-white dark:border-gray-800"
            width="150px"
            height="150px"
          />
          <i class="fas fa-edit"></i>

          {/* userModel username */}
          <div class="inline-flex items-center">
            <span class="capitalize font-base text-2xl font-bold my-1 mr-1">
              {username}
            </span>

            <svg
              class="stroke-current stroke-1 text-blue-600 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <div class="rounded-lg w-80 mt-2">
            <div class="flex items-center justify-between text-lg text-gray-600 dark:text-gray-200">
              <p class="flex flex-col">
                Posts
                {/* userModel postsOfUser */}
                <span class="text-black dark:text-white font-bold text-center">
                  {posts.length}
                </span>
              </p>
              <p class="flex flex-col">
                Followers
                {/* userModel followers */}
                <span class="text-black dark:text-white font-bold">455</span>
              </p>
              <p class="flex flex-col">
                Upvote
                {/* userModel rating */}
                <span class="text-black dark:text-white font-bold">28</span>
              </p>
            </div>
          </div>
          <div class="flex items-center justify-between gap-4 mt-6">
            {user.user._id ===
            params.userId ? null : user.user.following.includes(
                params.userId
              ) ? (
              <button
                type="button"
                class="px-4 py-2 text-base border rounded-lg text-white bg-indigo-500 hover:bg-indigo-700 "
              >
                Followed
              </button>
            ) : (
              <button
                type="button"
                class="px-4 py-2 text-base border rounded-lg text-white bg-indigo-500 hover:bg-indigo-700 "
                onClick={handleFollow}
              >
                Follow
              </button>
            )}
          </div>
        </div>
      </div>

      {/* List Post */}

      <section className="bg-coolGray-100 text-coolGray-800">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12"></div>
        {posts.map((item, index) => (
          <div
            className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12"
            key={index}
          >
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                to={"/post/" + item._id}
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-coolGray-50"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 bg-coolGray-500"
                  src={"http://localhost:5000/images/" + item.photo}
                  alt=""
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    {item.title}
                  </h3>
                  <span className="text-xs text-coolGray-600">
                    {item.createdAt}
                  </span>
                  <p>{item.description}</p>
                </div>
              </Link>
            </div>
            <div className="flex justify-center">
              <button className="px-6 py-3 text-sm rounded-md hover:underline bg-coolGray-50 text-coolGray-600">
                {posts.length > 6 && "Load more posts..."}
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
