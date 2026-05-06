import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import friends from "../assets/data/friends.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBoxArchive, faTrashCan, faVideo, faPhone, faMessage  } from "@fortawesome/free-solid-svg-icons";

const FriendDetails = () => {
  const { id } = useParams();
  const friend = friends.find((f) => f.id === Number(id));

  if (!friend) return <div className="text-center py-20 text-2xl">Friend not found</div>;

  const addTimeline = (type) => {
    const old = JSON.parse(localStorage.getItem("timeline")) || [];
    const entry = {
      id: Date.now(),
      type,
      friendName: friend.name,
      title: `${type} with ${friend.name}`,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    };

    localStorage.setItem("timeline", JSON.stringify([entry, ...old]));
    toast.success(`${type} added to timeline`);
  };

  return (
    <section className="max-w-6xl mx-auto px-5 py-20">
      <div className="grid lg:grid-cols-3 gap-6">
        <div>
          <div className="bg-white shadow-sm rounded-xl p-8 text-center">
            <img src={friend.picture} className="w-24 h-24 rounded-full object-cover mx-auto" />
            <h2 className="text-2xl font-bold mt-4">{friend.name}</h2>
            <p className="inline-block bg-red-500 text-white text-sm px-3 py-1 rounded-full mt-3">
              {friend.status}
            </p>

            <div className="flex justify-center gap-2 mt-3">
              {friend.tags.map((tag) => (
                <span className="bg-green-100 text-[#244D3F] text-xs px-3 py-1 rounded-full" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <p className="italic text-slate-500 mt-5">"{friend.bio}"</p>
            <p className="text-slate-500 mt-2">Email: {friend.email}</p>
          </div>

          <button className="w-full bg-white shadow-sm rounded-lg py-4 mt-4 font-semibold flex justify-center gap-2 cursor-pointer hover:bg-[#244D3F] hover:text-white">
           <FontAwesomeIcon icon={faBell} /> Snooze 2 Weeks
          </button>
          <button className="w-full bg-white shadow-sm rounded-lg py-4 mt-4 font-semibold flex justify-center gap-2 cursor-pointer hover:bg-[#0011ff] hover:text-white">
            <FontAwesomeIcon icon={faBoxArchive} /> Archive
          </button>
          <button className="w-full bg-white shadow-sm rounded-lg py-4 mt-4 font-semibold flex justify-center gap-2 cursor-pointer hover:bg-[#ff0800] hover:text-white">
             <FontAwesomeIcon icon={faTrashCan} />Delete
          </button>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <InfoCard number={friend.days_since_contact} label="Days Since Contact" />
            <InfoCard number={friend.goal} label="Goal (Days)" />
            <InfoCard number={friend.next_due_date} label="Next Due" />
          </div>

          <div className="bg-white shadow-sm rounded-xl p-6 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-[#244D3F]">Relationship Goal</h3>
              <p className="mt-4 text-slate-600">
                Connect every <b>{friend.goal} days</b>
              </p>
            </div>
            <button className="shadow-sm px-5 py-2 rounded-md font-semibold">Edit</button>
          </div>

          <div className="bg-white shadow-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#244D3F] mb-5">Quick Check-In</h3>

            <div className="grid md:grid-cols-3 gap-4">
              <ActionButton icon={<FontAwesomeIcon icon={faPhone} size="2x" />} label="Call" onClick={() => addTimeline("Call")} />
              <ActionButton icon={<FontAwesomeIcon icon={faMessage} size="2x" />}  label="Text" onClick={() => addTimeline("Text")} />
              <ActionButton icon={<FontAwesomeIcon icon={faVideo} size="2x"/>} label="Video" onClick={() => addTimeline("Video")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ number, label }) {
  return (
    <div className="bg-white shadow-sm rounded-xl p-8 text-center">
      <h3 className="text-3xl font-bold text-[#244D3F]">{number}</h3>
      <p className="text-slate-500 mt-2">{label}</p>
    </div>
  );
}

function ActionButton({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-slate-50 shadow-sm rounded-xl py-8 flex flex-col items-center gap-3 hover:bg-[#244D3F] hover:text-white transition cursor-pointer"
    >
      {icon}
      <span className="font-semibold">{label}</span>
    </button>
  );
}

export default FriendDetails;