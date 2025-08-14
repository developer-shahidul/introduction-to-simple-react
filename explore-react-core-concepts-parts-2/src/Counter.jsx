import { useState } from "react";

//
export default function Counter() {
  const [count, setCount] = useState(0);
  //   console.log(count, setCount);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div style={{ border: "2px solid yellow", borderRadius: "10px" }}>
      <h3>Counter : {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
// useState(0): আমরা useState হুক-কে কল করছি এবং এর প্রাথমিক মান (initial value) হিসেবে 0 দিয়ে দিচ্ছি। অর্থাৎ,
// যখন কম্পোনেন্টটি প্রথমবার লোড হবে, তখন কাউন্টারের মান হবে 0।

// useState যা রিটার্ন করে: এই useState(0) ফাংশনটি দুটি জিনিস সহ একটি অ্যারে (array) রিটার্ন করে:

//     count: প্রথমটি হলো বর্তমান স্টেট ভ্যারিয়েবল (state variable)। এর মধ্যে কাউন্টারের বর্তমান মান (value) জমা থাকে।
// এর প্রাথমিক মান হলো 0।

//     setCount: দ্বিতীয়টি হলো একটি ফাংশন। এই ফাংশনটির একমাত্র কাজ হলো count-এর মান পরিবর্তন (update) করা।

// const [count, setCount] = ...: এটি জাভাস্ক্রিপ্টের "Array Destructuring" সিনট্যাক্স। এর মাধ্যমে আমরা useState থেকে
//  পাওয়া অ্যারের দুটি উপাদানকে দুটি ভিন্ন ভ্যারিয়েবলে ( count এবং setCount ) সহজে রেখে দিচ্ছি।
