"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AdminLogic(){
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");

    const router = useRouter();
     
    const handleLogin = (e: React.FormEvent)=>{
        e.preventDefault();
    }
    if(email === 'amnaadnan011@gmail.com'&& password === "amna"){
        localStorage.setItem("isLoggedIn","true");
        router.push("/admin/dashboard");
       
    }else{
        alert("Invalid Email or Password");
    }

    
return(
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Admin Login</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 mb-4 border border-gray-300 rounded"
        value={email}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 mb-4 border border-gray-300 rounded"
        value={password}
      />
      <button
        type="submit"
        className="bg-[#2A254B] text-white px-4 py-2 rounded w-full"
      >
        Login
      </button>
    </form>
  </div>
);
}

// "use client"; 

// import { useRouter } from "next/navigation"; 

// import React, { useState } from "react";

// export default function AdminLogic() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const router = useRouter();

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();



 
//     if (email === "amnaadnan011@gmail.com" && password === "amna") {
//       localStorage.setItem("isLoggedIn", "true");
//       router.push("/admin/dashboard"); 
//     } else {
//       alert("Invalid Email or Password");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
//         <h2 className="text-xl font-bold mb-4">Admin Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-3 mb-4 border border-gray-300 rounded"
//           value={email}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-3 mb-4 border border-gray-300 rounded"
//           value={password}
//           required
//         />
//         <button
//           type="submit"
//           className="bg-[#2A254B] text-white px-4 py-2 rounded w-full"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }
// "use client";

// import { useRouter } from "next/navigation";
// import React, { useState, useEffect } from "react";

// export default function AdminLogic() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const router = useRouter();

//   // ✅ Check login state when component mounts
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const loggedIn = localStorage.getItem("isLoggedIn") === "true";
//       if (loggedIn) {
//         setIsLoggedIn(true);
//       }
//     }
//   }, []);

//   // ✅ Redirect to dashboard if logged in
//   useEffect(() => {
//     if (isLoggedIn) {
//       router.push("/admin/dashboard");
//     }
//   }, [isLoggedIn, router]);

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (email === "amnaadnan011@gmail.com" && password === "amna") {
//       localStorage.setItem("isLoggedIn", "true");
//       setIsLoggedIn(true); // ✅ Redirect will happen via `useEffect`
//     } else {
//       alert("Invalid Email or Password");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
//         <h2 className="text-xl font-bold mb-4">Admin Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-3 mb-4 border border-gray-300 rounded"
//           value={email}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-3 mb-4 border border-gray-300 rounded"
//           value={password}
//           required
//         />
//         <button
//           type="submit"
//           className="bg-[#2A254B] text-white px-4 py-2 rounded w-full"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }
