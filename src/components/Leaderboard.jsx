// src/components/Leaderboard.jsx
// src/components/Leaderboard.jsx
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"; // ✅ Import only once
import { db } from "../firebase/firebaseConfig";


export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaders = async () => {
      const querySnapshot = await getDocs(collection(db, "leaderboard"));
      const data = querySnapshot.docs.map(doc => doc.data());
      const sorted = data.sort((a, b) => b.totalRaised - a.totalRaised);
      setLeaders(sorted);
    };
    fetchLeaders();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">🏆 Leaderboard</h2>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">#</th>
            <th className="p-2">Intern Name</th>
            <th className="p-2">Total Raised (₹)</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((user, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.totalRaised}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
