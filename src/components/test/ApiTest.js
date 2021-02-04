// import React, { useEffect, useState } from "react";
// import { Credentials } from "../Credentials";
// import axios from "axios";

// const ApiTest = () => {
//   const spotify = Credentials();

//   console.log("RENDERING APP.JS");

//   const [token, setToken] = useState("");
//   const [test, setTest] = useState({ testFirstValue: "", testSecondValue: "" });

//   useEffect(() => {
//     // tokenを発行し、権限を付与
//     // 付与されたTokenをuseStateのtokenに代入し、値を保持
//     axios("https://accounts.spotify.com/api/token", {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         Authorization:
//           "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
//       },
//       data: "grant_type=client_credentials",
//       method: "POST",
//     }).then((tokenResponse) => {
//       console.log(tokenResponse.data.access_token);
//       setToken(tokenResponse.data.access_token);

//       // / 付与されたtokenを使い、アーティストにアクセス
//       axios("https://api.spotify.com/v1/search", {
//         params: {
//           query: 'queryString',
//           type: 'artist',
//           limit: 50,
//         },
//         headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
//       }).then((testReaponse) => {
//         setTest({
//           testFirstValue: testReaponse.data.image,
//           testSecondValue: testReaponse.data.items,
//         });
//       });
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   console.log(test);
//   return (
//     <div>
//       <h2>{test.artistsName}</h2>
//       <h2>{test.artistsId}</h2>
//     </div>
//   );
// };

// export default ApiTest;
