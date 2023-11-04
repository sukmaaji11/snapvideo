import React, { useState } from 'react';
import $ from "jquery";

function VideoForm() {
    const [videoUrl, setVideoUrl] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        });
    };

    return (
        <div className='rounded-lg shadow m-4'>
            <form
                action="http://snapvideo.my.id/server.php"
                method='post'
                onSubmit={handleSubmit}
            >
                <input
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                    type="text"
                    placeholder="Enter Facebook video URL"
                    name='url'
                    id='url'
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                />
                <div className="mt-2 flex items-center justify-center gap-x-6">
                    <button
                        className="rounded-md mb-2 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        type='submit'
                    >
                        Download
                    </button>
                </div>
            </form>
            <h1>{result}</h1>
        </div>
    );
}

export default VideoForm;
