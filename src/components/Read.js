
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { deleteUser, showUser } from "../features/userDetailSlice";
// import CustomModal from "./CustomModal";

// const Read = () => {
//   const dispatch = useDispatch();
//   const [id, setId] = useState();
//   const [radioData, setRadioData] = useState("");
//   const [showPopup, setShowPopup] = useState(false);
//   const { users, loading, searchData } = useSelector((state) => state.app);
//   useEffect(() => {
//     dispatch(showUser());
//   }, []);

//   if (loading) {
//     return <h2>Loading...</h2>;
// }
//   return (
//     <div>
//       {showPopup && (
//         <CustomModal
//           id={id}
//           showPopup={showPopup}
//           setShowPopup={setShowPopup}
//         />
//       )}
//       <h2>All Data</h2>

//       {/* Radio Buttons */}
//       <div className="mb-3 ">
//         <input
//           className="form-check-input"
//           name="gender"
//           checked={radioData === ""}
//           type="radio"
//           onChange={() => setRadioData("")}
//         />
//         <label className="form-check-label mx-2">All</label>
//         <input
//           className="form-check-input"
//           name="gender"
//           checked={radioData === "Male"}
//           value="Male"
//           type="radio"
//           onChange={(e) => setRadioData(e.target.value)}
//         />
//         <label className="form-check-label mx-2">Male</label>
//         <input
//           className="form-check-input"
//           name="gender"
//           value="Female"
//           checked={radioData === "Female"}
//           type="radio"
//           onChange={(e) => setRadioData(e.target.value)}
//         />
//         <label className="form-check-label mx-2">Female</label>
//       </div>

//       {/* Data Table */}
//       <table className="table table-bordered w-[70%] mx-auto Class mt-0

// text-center">
//         <thead>
//           <tr>
//             <th>Sno</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Gender</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users &&
//             users
//               .filter((ele) => {
//                 if (searchData.length === 0) {
//                   return ele;
//                 } else {
//                   return ele.name
//                     .toLowerCase()
//                     .includes(searchData.toLowerCase());
//                 }
//               })
//               .filter((ele) => {
//                 if (radioData === "Male") {
//                   return ele.gender === radioData;
//                 } else if (radioData === "Female") {
//                   return ele.gender === radioData;
//                 } else return ele;
//               })
//               .map((ele, index) => (
//                 <tr key={ele.id}>
//                   <td>{index + 1}</td>
//                   <td>{ele.name}</td>
//                   <td>{ele.email}</td>
//                   <td>{ele.gender}</td>
//                   <td>
//                     <button
//                       className="btn btn-primary btn-sm me-2"
//                       onClick={() => [setId(ele.id), setShowPopup(true)]}
//                     >
//                       View
//                     </button>
//                     <Link
//                       to={`/edit/${ele.id}`}
//                       className="btn btn-secondary btn-sm me-2"
//                     >
//                       Edit
//                     </Link>
//                     <button
//                       className="btn btn-danger btn-sm"
//                       onClick={() => dispatch(deleteUser(ele.id))}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Read;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, showUser } from "../features/userDetailSlice";
import CustomModal from "./CustomModal";
const Read = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [radioData, setRadioData] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const { users, loading, searchData } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {showPopup && (
        <CustomModal
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      <h2>All Data</h2>

      {/* Radio Buttons */}
      <div className="mb-3">
        <input
          className="form-check-input"
          name="gender"
          checked={radioData === ""}
          type="radio"
          onChange={() => setRadioData("")}
        />
        <label className="form-check-label mx-2">All</label>
        <input
          className="form-check-input"
          name="gender"
          checked={radioData === "Male"}
          value="Male"
          type="radio"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label mx-2">Male</label>
        <input
          className="form-check-input"
          name="gender"
          value="Female"
          checked={radioData === "Female"}
          type="radio"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label mx-2">Female</label>
      </div>
      {/* Data Table */}
      <div className="overflow-x-auto">
        <table className="table table-bordered w-full sm:w-3/4 lg:w-2/3 mx-auto mt-4 text-center">
          <thead>
            <tr >
              <th>Sno</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users
                .filter((ele) => {
                  // Ensure searchData is defined before using .length
                  if (searchData && searchData.length > 0) {
                    return ele.name
                      .toLowerCase()
                      .includes(searchData.toLowerCase());
                  }
                  return true; // if searchData is empty or undefined, show all
                })
                .filter((ele) => {
                  if (radioData === "Male") {
                    return ele.gender === radioData;
                  } else if (radioData === "Female") {
                    return ele.gender === radioData;
                  }
                  return true; // Show all if no gender filter is applied
                })
                .map((ele, index) => (
                  <tr key={ele.id}>
                    <td>{index + 1}</td>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                    <td>{ele.gender}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => [setId(ele.id), setShowPopup(true)]}
                      >
                        View
                      </button>
                      <Link
                        to={`/edit/${ele.id}`}
                        className="btn btn-secondary btn-sm me-2"
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => dispatch(deleteUser(ele.id))}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Read;
