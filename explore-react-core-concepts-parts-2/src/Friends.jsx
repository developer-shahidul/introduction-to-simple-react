//
import { useEffect, useState } from "react";
import "./Friends.css";
import Friend from "./Friend";

export default function Friends() {
  //api aer 10ta object arrayaer bitore ace
  const [friends, setFriends] = useState([]);

  // React-এ useState হলো একটি Hook যা আমাদের ফাংশনাল কম্পোনেন্টের মধ্যে state পরিচালনা করতে সাহায্য করে।

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  // useEffect হলো React এর Hook, যা তোমাকে side effect করার সুযোগ দেয়।
  // Side effect মানে — এমন কাজ যা সরাসরি component এর render এর মধ্যে না করে, render হবার পর বা নির্দিষ্ট সময় পরে করা হয়।

  // Empty array [] → মানে “এই effect শুধু কম্পোনেন্ট মাউন্ট হওয়ার সময় একবারই রান হবে।”
  // [] = একবার run (mount)
  // [dependency] = যখন dependency change হবে run
  // কোন array না দিলে = প্রতি render এ run

  return (
    <div className="box">
      <h3>Friends : {friends.length}</h3>

      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
}
// 1. state to hold data
// 2. Use effect with dependency array
// 3. Use fetch to load data
// 4. Set loded data to the state
// 5. display data on the component
