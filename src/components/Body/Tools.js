import React from "react";
import VideoForm from "./VideoForm";

function Tools() {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Facebook</h5>
            </a>
            <p className="mb-8 font-normal text-gray">
                "Download and Enjoy Your Favorite Facebook Videos Anytime, Anywhere! 📥📺
            </p>
            <VideoForm />
            <a
                href="#"
                className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Download
            </a>
        </div>
    );
}

export default Tools;