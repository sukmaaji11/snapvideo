import React, { useState } from "react";
import $, { data } from "jquery";

const VideoForm = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [responseObj, setResponseObj] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  function getUrl(url) {
    return encodeURIComponent(url);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (videoUrl.length === 0) {
      alert("Empty Url");
      return;
    }
    setIsLoading(true);
    fetchVideo();
  }

  function onChangeHandler(e) {
    setVideoUrl(e.target.value);
  }

  async function fetchVideo() {
    const link = videoUrl;
    const url = "https://facebook17.p.rapidapi.com/api/facebook/links";
    console.log(url);

    const option = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-key": `224674d2edmsh548b9371dad994bp1b29aejsn371b5cc27ed2`,
        "x-rapidapi-host": "facebook17.p.rapidapi.com",
      },
      body: {
        url: link,
      },
    };
    try {
      const response = await fetch(link, option);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="rounded-lg shadow m-4">
      <form action="" className="input-form" onSubmit={handleSubmit}>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type="text"
          placeholder="Enter Facebook video URL"
          onChange={onChangeHandler}
        />
        <div className="mt-2 flex items-center justify-center gap-x-6">
          <button
            className="rounded-md mb-2 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="submit"
          >
            Download
          </button>
        </div>
      </form>
      <h1>{data}</h1>
    </div>
  );
};

export default VideoForm;
