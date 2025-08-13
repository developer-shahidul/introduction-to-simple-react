// export default function Todo({ task,isdone }) {
//   return <li>task : {task}</li>;
// }

// condition rendaring 1 :
// export default function Todo({ task, isdone }) {
//   if (isdone === true) {
//     return <li>Finished : {task}</li>;
//   } else {
//     return <li>Work on : {task}</li>;
//   }
// }

// condition rendaring option 2:
// export default function Todo({ task, isdone }) {
//   if (isdone) {
//     return <li>Finished : {task}</li>;
//   }
//   return <li>Work on : {task}</li>;
// }

// condition rendaring option 3: ternary oparetor
// export default function Todo({ task, isdone }) {
//   return (
//     <li>
//       {isdone ? "Finished" : "Work On"} : {task}
//     </li>
//   );
// }

// condition rendaring option 4: &&
// export default function Todo({ task, isdone }) {
//   return (
//     <li>
//       {task} {isdone && ": Done"}
//     </li>
//   );
// }

// condition rendaring option 5: || // akto bekappa
// export default function Todo({ task, isdone }) {
//   return (
//     <li>
//       {task} {isdone || ": Done"}
//     </li>
//   );
// }
// || (OR অপারেটর) মানে: বাম দিকের মান truthy হলে সেটাই রিটার্ন করবে, আর না হলে ডান দিকের মান রিটার্ন করবে।
// যদি isdone truthy হয় (যেমন true, "yes" ইত্যাদি), তাহলে isdone-এর মান দেখাবে।
// যদি isdone falsy হয় (false, null, 0, ""), তাহলে ": Done" দেখাবে।

//
// condition rendaring option 6:
export default function Todo({ task, isdone }) {
  let listItem;
  if (isdone) {
    listItem = <li>Finished : {task}</li>;
  } else {
    listItem = <li>Work on : {task}</li>;
  }
  return listItem;
}
