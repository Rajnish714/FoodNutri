import axios from "axios";

function Foodapi({ data, setdata, label }) {
  const apiKey = "11b7e9340c4ed13136e9c3862efb3ad1%09";
  const app_id = "bab8959a";
  const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${app_id}&app_key=${apiKey}&ingr=${data}`;

  axios
    .get(url, {
      headers: {
        Accept: "application/json",
      },
    })
    .then((response) => {
      const updatedFoods = response.data.hints.map((item) => ({
        ...item,
        category: label,
      }));
      return setdata(updatedFoods);
    });
}

export default Foodapi;

// pase this code into Finditem.jsx file
// const apiKey = "11b7e9340c4ed13136e9c3862efb3ad1%09";
// const app_id = "bab8959a";
// const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${app_id}&app_key=${apiKey}&ingr=${data}`;
// useEffect(() => {
//   if (data && label) {
//     axios
//       .get(
//         url,

//         {
//           headers: {
//             Accept: "application/json",
//           },
//         }
//       )
//       .then((response) => {
//         const updatedFoods = response.data.hints.map((item) => ({
//           ...item,
//           category: label,
//         }));
//         setdata(updatedFoods);
//       });
//   }
// }, [data, url, label]);
