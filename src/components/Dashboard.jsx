// src/components/Dashboard.jsx
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export default function Dashboard() {
  const [donation, setDonation] = useState(0);
  const name = localStorage.getItem("internName");
  const referralCode = localStorage.getItem("referralCode");

  useEffect(() => {
    const fetchData = async () => {
      if (!name) return;
      const docRef = doc(db, "interns", name);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setDonation(docSnap.data().totalRaised || 0);
      } else {
        setDonation(0); // or set dummy value
      }
    };

    fetchData();
  }, [name]);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Welcome, {name}!</h2>
      <p className="mb-2">Referral Code: <strong>{referralCode}</strong></p>
      <p className="mb-4">Total Donations Raised: ₹{donation}</p>

      <div className="bg-green-100 p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">🎁 Rewards</h3>
        <ul className="list-disc list-inside">
          <li>₹500 – Shoutout on our page</li>
          <li>₹1000 – Digital Certificate</li>
          <li>₹2000 – Gift Hamper</li>
        </ul>
      </div>
    </div>
  );
}
