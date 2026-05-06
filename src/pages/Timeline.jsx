import React from 'react';
import { useEffect, useState } from "react";
const defaultTimeline = [];
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhone, faMessage, faVideo, faHandshake, } from "@fortawesome/free-solid-svg-icons";

const Timeline = () => {
    const [filter, setFilter] = useState("All");
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("timeline")) || [];
        setTimeline([...saved, ...defaultTimeline]);
    }, []);

    const filtered =
        filter === "All" ? timeline : timeline.filter((item) => item.type === filter);
    return (
        <section className="max-w-4xl mx-auto px-5 py-16">
            <h1 className="text-5xl font-bold mb-8">Timeline</h1>

            <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-white shadow-sm rounded-lg px-4 py-3 w-full md:w-72 mb-8"
            >
                <option>All</option>
                <option>Call</option>
                <option>Text</option>
                <option>Video</option>
            </select>

            <div className="space-y-4">
                {filtered.map((item) => (
                    <div key={item.id} className="bg-white  shadow-sm rounded-xl p-5 flex gap-4 items-center">
                        <div className="text-green-600"></div>
                        <div>
                            <h3 className="font-bold text-green-700">{getIcon(item.type)} <span className="text-slate-500 font-normal">with {item.friendName}</span>
                            </h3>
                            <p className="text-sm text-slate-500"> {item.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
function getIcon(type) {
    if (type === "Call")
        return <FontAwesomeIcon icon={faPhone} size="" />;

    if (type === "Text")
        return <FontAwesomeIcon icon={faMessage} size="" />;

    if (type === "Video")
        return <FontAwesomeIcon icon={faVideo} size="" />;

    return <FontAwesomeIcon icon={faHandshake} size="" />;
}

export default Timeline;