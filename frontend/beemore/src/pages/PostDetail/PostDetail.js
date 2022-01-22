import MainLayout from "../../components/Layout";
import React from "react";
import { useLocation, useParams } from "react-router";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import ScrollIndicator from "../../components/ScrollIndicator";
import { Comment, ListComment } from "../../components/Comment";

export default function PostDetail() {
  //!Axios Connect FrontendBackend - One Post - Connect /post from Post.jsx Link to={`/post/${post._id}`}:
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState({}); //nhập vào và lấy ra
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [authorName, setAuthorName] = useState("");

  const [updateMode, setUpdateMode] = useState(false);

  //hieutm
  const getPostId = path;
  const [comments, setComments] = React.useState([]);
  const setCommentsList = (data) => {
    setComments(data);
  };
  //hieutm

  const PF = "http://localhost:5000/images/";

  const [socket, setSocket] = useState(null);
  const { id } = useParams();

  //!Context API Reducer Action - Xác thực đăng nhập user trong phiên đăng nhập:
  const { state, dispatch, user, author } = useContext(Context);
  console.log(user);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path); // /api/posts/path = /api/posts/:id
      setPost(res.data._doc);
      setTitle(res.data._doc.title);
      setDescription(res.data._doc.description);
      setCategories(res.data._doc.categories);
      setAuthorId(res.data._doc.postedBy);
      setAuthorName(res.data.username);

      console.log(res.data);
    };
    getPost();
  }, [path]);

  //!handleUpdatePost:
  const handleUpdate = async () => {
    try {
      //!Lấy tokenJWT của User:
      const token = localStorage.getItem("token");
      console.log(token);

      await axios.put(`/posts/${post._id}`, {
        // /api/posts/:id
        postedBy: user.user._id,
        title: title,
        categories: categories,
        description: description,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  //!handleDeletePost:
  const handleDelete = async () => {
    try {
      await axios.delete("/posts/" + path); // /api/posts/:id

      window.location.replace("/");

      // console.log(user.access_token)
    } catch (err) {
      console.log(err);
    }
  };

  // Scroll to top of page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <ScrollIndicator>
        <div className="flex flex-row p-10 bg-gray-50">
          <div className="basis-2/3 p-10">
            <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50">
              {/* Post Photo */}
              {PF + post.photo && (
                <img
                  className="object-cover h-60 w-full"
                  src={PF + post.photo}
                />
              )}

              {/* <!--Post Categories--> */}
              <div className="flex items-center justify-start mt-4 mb-4">
                {updateMode ? (
                  <input
                    type="text"
                    value={categories}
                    onChange={(e) => setCategories(e.target.value)}
                  ></input>
                ) : (
                  <Link
                    to={`/?category=${post.categories}`}
                    href="#"
                    className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500"
                  >
                    <div>{post.categories}</div>
                  </Link>
                )}
              </div>

              <div className="mt-2">
                {/* Post Title */}
                {updateMode ? (
                  <input
                    type="text"
                    className="singlePagePostTitleUpdate"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  ></input>
                ) : (
                  <Link
                    to={`/?title=${post.title}`}
                    className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-black-500  hover:underline"
                  >
                    {post.title}
                  </Link>
                )}

                <div className="flex justify-start items-center mt-2">
                  <p className="text-sm text-green-500 font-bold bg-gray-100 rounded-full py-2 px-2 hover:text-red-500">
                    {post.rating}
                  </p>
                  <p className="text-sm text-gray-400 font-bold ml-5">Views</p>
                </div>

                <div className="font-light text-gray-600">
                  <a href="#" className="flex items-center mt-6 mb-6">
                    {/* Post Author picture */}
                    <img
                      src={post.postedBy}
                      alt="avatar"
                      className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block"
                    />

                    {/* Post Author */}
                    <Link to={`/user/${authorId}`} className="link">
                      <small
                        className="font-bold text-gray-700 hover:underline"
                        style={{ fontSize: "30px" }}
                      >
                        {authorName}
                      </small>
                    </Link>

                    {/* Post Icon Update Delete */}
                    {post.postedBy === user?.user._id && (
                      <div className="singlePagePostEdit">
                        <i
                          className="singlePagePostIcon fas fa-edit"
                          onClick={() => setUpdateMode(true)}
                        >
                          {" "}
                          Update
                        </i>
                        <i
                          className="singlePagePostIcon fas fa-trash-alt"
                          onClick={handleDelete}
                        >
                          Delete
                        </i>
                      </div>
                    )}
                  </a>
                </div>
              </div>

              {/* <!--end post header--> */}
              {/* <!--post content--> */}
              <div className="max-w-4xl px-10  mx-auto text-2xl text-gray-700 mt-4 rounded bg-gray-100">
                {/* <!--content body--> */}
                <div>
                  {/* Post Description */}
                  <p className="mt-2 p-8">
                    {updateMode ? (
                      <textarea
                        className="singlePagePostDescriptionUpdate"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    ) : (
                      <p className="singlePagePostDescription">
                        {post.description}
                      </p>
                    )}
                  </p>
                </div>
              </div>

              {/* Button Post */}
              {updateMode ? (
                <button onClick={handleUpdate}> Post </button>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div className="basis-1/3 max-w-4xl px-10 py-16 mx-auto px-0 px-8 mx-auto sm:px-12 xl:px-5">
            {/* <!--form form comments--> */}

            <Comment postId={getPostId} setComment={setCommentsList} />
            <ListComment
              postId={getPostId}
              setComment={setCommentsList}
              getComment={comments}
            />
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
