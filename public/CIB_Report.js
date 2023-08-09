// import { useState } from "react";
// //nepali date components
// import Calendar from "@sbmdkl/nepali-datepicker-reactjs";
// import "@sbmdkl/nepali-datepicker-reactjs/dist/index.css";
// import { useEffect } from "react";


// const CIB = () => {

//     const [allData, setallData] = useState([]);
//     const [type, setType] = useState("");
//     const [dob, setdob] = useState("");
//     const [showCal, setshowCal] = useState(false);
//     const [ctzdate, setctzdate] = useState("");
//     const [showctzdate, setshowctzdate] = useState(false);
//     const [comdate, setcomdate] = useState("");
//     const [showcomdate, setshowcomdate] = useState(false);

//     const submit = (e) => {

//     }

//     const handleChange = (e) => {
//         e.preventDefault();
//         console.log(e.target.value);
//         setType(e.target.value);
//     }


//     useEffect(() => {
//         if (dob.length == 10) {
//             // setshowCal(false);
//         }else if(dob.length <2){
//             setshowCal(true);
            
//         }

//         console.log(dob.length);
//     }, [dob])



//     const getData = () => {

//         if (type == "Individual") {
//             setallData([...allData, {
//                 "RequestType": type,
//                 "Name": document.getElementById("name").value,
//                 "CitizenshipNumber": document.getElementById("CitzNo").value,
//                 "FatherName": document.getElementById("FatherName").value,
//                 "CitizenshipIssuedDate": ctzdate,
//                 "CitizenshipIssuedDistrict": document.getElementById("CitzIssDist").value,
//                 "ConsumerDOB": dob,
//                 "PassportNumber": document.getElementById("PassNo").value,
//                 "DrivingLicenseNumber": document.getElementById("DrivingLicenseNumber").value,
//                 "PanNumber": document.getElementById("PanNumber").value,
//                 "VoterID": document.getElementById("VoterID").value
//             }])
//         } else {
//             setallData([...allData, {
//                 "RequestType": type,
//                 "Name": document.getElementById("Insti_name").value,
//                 "PanNumber": document.getElementById("Insti_PanNumber").value,
//                 "CompanyRegAuth": document.getElementById("CompanyRegAuth").value,
//                 "CompanyRegDate": comdate,
//                 "CompanyRegNumber": document.getElementById("CompanyRegNumber").value,
//             }])
//         }
//         setType("");

//         //document.getElementById('my-input');
//     }

//     return (
//         <form className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  content-center">
//             <p className="text-lg text-center"> CIB Black List Search</p>
//             <div className="row-col-1 p-4">
//                 <select onChange={handleChange} name="type" id="type" className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
//                     <option >Search type</option>
//                     <option value="Individual">Individual</option>
//                     <option value="Institution">Institution</option>
//                 </select>
//             </div>
//             {type == "Individual" && <div className="my-2">
//                 <div className="grid md:grid-cols-3 md:gap-6">
//                     <div className="relative z-0 mb-6 w-full group">
//                         <input type="text" name="name" id="name" className="block py-2.5 px-0 h-10 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//                         <label htmlFor="name" className="peer-focus:font-medium absolute h-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1.5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
//                     </div>
//                     <div className="z-10 relative  mb-6 w-full group">

//                        <div className="grid md:grid-cols2">
//                         <div></div>
//                             </div> {showCal ?
//                             <Calendar
//                                 onChange={(bsDate) => { setdob(bsDate?.bsDate); }}
//                                 contenteditable={true}
//                                 className=" border-b-2 border-t-0 border-r-0 border-l-0 px-0 w-full h-10 text-sm text-gray-900"
//                                 theme="blue" /> : <input type="text" name="DOB" id="DOB"
//                                     onChangeCapture={(e) => {

//                                         setdob(e.target.value)
//                                     }}
//                                     className="block py-2.5 px-0 w-full h-10 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                                     defaultValue={dob} required /> 
//                         }
//                         <label htmlFor="DOB" className="peer-focus:font-medium absolute h-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1.5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Consumer DOB</label>
//                     </div>
//                     <div className="relative z-0 mb-6 w-full group">
//                         <input type="text" name="FatherName" id="FatherName" className="block py-2.5 px-0 w-full h-10 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//                         <label htmlFor="FatherName" className="peer-focus:font-medium absolute h-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1.5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Father Name</label>
//                     </div>
//                 </div><div className="grid md:grid-cols-3 md:gap-6">
//                     <div className="relative z-0 mb-6 w-full group">
//                         <input type="text" name="CitzNo" id="CitzNo" className="block py-2.5 px-0 w-full h-10 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//                         <label htmlFor="CitzNo" className="peer-focus:font-medium absolute h-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1.5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Citizenship Number</label>
//                     </div>
//                     <div className="relative z-0 mb-6 w-full group">
//                         <Calendar value="" onChange={(bsDate) => { setctzdate(bsDate?.bsDate) }}
//                             className="block  border-b-2 border-t-0 border-r-0 border-l-0  px-0 w-full h-10 text-sm text-gray-900"
//                             theme="blue" />
//                         {/* <input  type="date" name="CitzIssDate" id="CitzIssDate" className="block py-2.5 px-0 w-full h-10 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required /> */}
//                         <label htmlFor="CitzIssDate" className="peer-focus:font-medium absolute h-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1.5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Citizenship Issued Date</label>
//                     </div>
//                     <div className="relative z-0 mb-6 w-full group">
//                         <input type="text" name="CitzIssDist" id="CitzIssDist" className="block py-2.5 px-0 w-full h-10 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//                         <label htmlFor="CitzIssDist" className="peer-focus:font-medium absolute h-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1.5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Citizenship Issued District</label>
//                     </div>
//                 </div><div className="grid md:grid-cols-4 md:gap-6">
//                     <div className="relative z-0 mb-6 w-full group">
//                         <input type="text" name="PassNo" id="PassNo" className="block py-2.5 px-0 w-full h-10 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//                         <label htmlFor="PassNo" className="peer-focus:font-medium absolute h-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1.5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Passport Number</label>
//                     </div>
//                     <div className="relative z-0 mb-6 w-full group">
//                         <input type="text" name="DrivingLicenseNumber" id="DrivingLicenseNumber" className="block py-2.5 px-0 w-full h-10 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//                         <label htmlFor="DrivingLicenseNumber" className="peer-focus:font-medium absolute h-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1.5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Driving License Number</label>
//                     </div>
//                     <div className="relative z-0 mb-6 w-full group">
//                         <input type="text" name="PanNumber" id="PanNumber" className="block py-2.5 px-0 w-full h-10 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//                         <label htmlFor="PanNumber" className="peer-focus:font-medium absolute h-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1.5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pan Number</label>
//                     </div>
//                     <div className="relative z-0 mb-6 w-full group">
//                         <input type="text" name="VoterID" id="VoterID" className="block py-2.5 px-0 w-full h-10 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//                         <label htmlFor="VoterID" className="peer-focus:font-medium absolute h-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1.5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Voter ID</label>
//                     </div>
//                 </div></div>}
//             {type == "Institution" && <><div className="grid md:grid-cols-2 md:gap-6">
//                 <div className="relative z-0 mb-6 w-full group">
//                     <input type="text" name="Insti_name" id="Insti_name" className="block py-2.5 px-0 w-full h-10 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//                     <label htmlFor="Insti_name" className="peer-focus:font-medium absolute h-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1.5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
//                 </div>
//                 <div className="relative z-0 mb-6 w-full group">
//                     <input type="text" name="Insti_PanNumber" id="Insti_PanNumber" className="block py-2.5 px-0 w-full h-10 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//                     <label htmlFor="Insti_PanNumber" className="peer-focus:font-medium absolute h-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1.5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pan Number</label>
//                 </div>
//             </div>
//                 <div className="grid md:grid-cols-3 md:gap-6">
//                     <div className="relative z-0 mb-6 w-full group">
//                         <input type="text" name="CompanyRegAuth" id="CompanyRegAuth" className="block py-2.5 px-0 w-full h-10 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//                         <label htmlFor="CompanyRegAuth" className="peer-focus:font-medium absolute h-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1.5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Register Authority</label>
//                     </div>
//                     <div className="relative z-0 mb-6 w-full group">
//                         <Calendar
//                             onChange={(bsDate) => { setcomdate(bsDate?.bsDate); }}
//                             contenteditable={true}
//                             className=" border-b-2 border-t-0 border-r-0 border-l-0 px-0 w-full h-10 text-sm text-gray-900"
//                             theme="blue" />
//                         {/* <input type="date" name="CompanyRegDate" id="CompanyRegDate" className="block py-2.5 px-0 w-full h-10 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required /> */}
//                         <label htmlFor="CompanyRegDate" className="peer-focus:font-medium absolute h-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1.5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Register Date</label>
//                     </div>
//                     <div className="relative z-0 mb-6 w-full group">
//                         <input type="text" name="CompanyRegNumber" id="CompanyRegNumber" className="block py-2.5 px-0 w-full h-10 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//                         <label htmlFor="CompanyRegNumber" className="peer-focus:font-medium absolute h-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1.5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Register Number</label>
//                     </div>
//                 </div>
//             </>}
//             <button type="button" onClick={getData} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg h-10 text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ADD</button>
//             {allData.length > 0 && <div className="overflow-x-auto relative">
//                 <table className="w-full h-10 text-sm text-left text-gray-500 dark:text-gray-400">
//                     <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                         <tr>
//                             <th scope="col" className="py-3 px-6">Type</th>
//                             <th scope="col" className="py-3 px-6">Name</th>
//                             <th scope="col" className="py-3 px-6">FatherName</th>
//                             <th scope="col" className="py-3 px-6">Citizenship Number</th>
//                             <th scope="col" className="py-3 px-6">Citizenship Issued Date</th>
//                             <th scope="col" className="py-3 px-6">Citizenship Issued District</th>
//                             <th scope="col" className="py-3 px-6">DOB</th>
//                             <th scope="col" className="py-3 px-6">Passport Number</th>
//                             <th scope="col" className="py-3 px-6">Driving License Number</th>
//                             <th scope="col" className="py-3 px-6">VoterID</th>
//                             <th scope="col" className="py-3 px-6">Pan</th>
//                             <th scope="col" className="py-3 px-6">Company Register Authority</th>
//                             <th scope="col" className="py-3 px-6">Company Register Date</th>
//                             <th scope="col" className="py-3 px-6">Company Register Number</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {allData.map((item, index) => (
//                             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
//                                 <td className="py-4 px-6">{item.RequestType}</td>
//                                 <td className="py-4 px-6">{item.Name}</td>
//                                 <td className="py-4 px-6">{item.FatherName}</td>
//                                 <td className="py-4 px-6">{item.CitizenshipNumber}</td>
//                                 <td className="py-4 px-6">{item.CitizenshipIssuedDate}</td>
//                                 <td className="py-4 px-6">{item.CitizenshipIssuedDistrict}</td>
//                                 <td className="py-4 px-6">{item.ConsumerDOB}</td>
//                                 <td className="py-4 px-6">{item.PassportNumber}</td>
//                                 <td className="py-4 px-6">{item.DrivingLicenseNumber}</td>
//                                 <td className="py-4 px-6">{item.VoterID}</td>
//                                 <td className="py-4 px-6">{item.PanNumber}</td>
//                                 <td className="py-4 px-6">{item.CompanyRegAuth}</td>
//                                 <td className="py-4 px-6">{item.CompanyRegDate}</td>
//                                 <td className="py-4 px-6">{item.CompanyRegNumber}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>}
//             {/* <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg h-10 text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
//         </form>

//     )
// }
// export default CIB;