import { useEffect, useState } from "react";
import FriendCard from "../components/FriendCard";
import friendsData from "../assets/data/friends.json";
import Loading from "../components/Loading";

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 700);
  }, []);

  const onTrack = friends.filter((f) => f.status === "on-track").length;
  const attention = friends.filter((f) => f.status !== "on-track").length;

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="max-w-6xl mx-auto px-5 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Friends to keep close in your life</h1>
        <p className="text-slate-500 max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <button className="mt-8 bg-[#244D3F] text-white px-6 py-3 rounded-sm font-semibold inline-flex gap-2 items-center hover:bg-green-950">
          + Add a Friend
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-6 my-14">
        <SummaryCard number={friends.length} label="Total Friends" />
        <SummaryCard number={onTrack} label="On Track" />
        <SummaryCard number={attention} label="Need Attention" />
        <SummaryCard number={12} label="Interactions This Month" />
      </div>

      <hr className="mb-8" />

      <h2 className="text-2xl font-bold mb-6">Your Friends</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </section>
  );
}

function SummaryCard({ number, label }) {
  return (
    <div className="bg-white rounded-xl shadow-sm  p-8 text-center">
      <h3 className="text-4xl font-bold text-[#244d3f]">{number}</h3>
      <p className="text-slate-500 mt-2">{label}</p>
    </div>
  );
}

export default Home;