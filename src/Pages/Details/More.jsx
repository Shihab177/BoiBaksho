import axios from "axios";
import React, { use, useRef } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const More = ({ review,onUpdate }) => {
  const {user}=use(AuthContext)
  const inputRef = useRef();
console.log(review)
  const handleEditBtn = () => {
    document.getElementById("my_modal_5").showModal();
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
     const updatedReview = inputRef.current.value;
    document.getElementById("my_modal_5").close();

    axios.patch(`https://boibaksho-server.vercel.app/review/${review?._id}`,{updatedReview},{
      headers: {
              Authorization: `Bearer ${user.accessToken}`
            }
    })
    .then(data=>{
        console.log(data.data)
       if(data.data.modifiedCount){
       
         Swal.fire({
      icon: "success",
      title: "Review updated!",
      showConfirmButton: false,
      timer: 1500,
    });
    
       }
       onUpdate()
    })
    .catch(error=>{
        console.log(error)
    })

    
  };
  const handleDelete = ()=>{
    axios.delete(`https://boibaksho-server.vercel.app/review/${review?._id}`,{
       headers: {
              Authorization: `Bearer ${user.accessToken}`
            }
    })
    .then(data=>{
      console.log(data.data)
     onUpdate()
    })
    .catch(error=>{
      console.log(error)
    })
  }

  return (
    <div className="space-x-2">
      <button className="text-black" onClick={handleEditBtn}>
        <FaEdit size={22} />
      </button>
      <button className="text-red-400" onClick={handleDelete}>
        <MdDelete size={22} />
      </button>

      {/* Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit your Review</h3>
          <form onSubmit={handleSaveEdit} action="">
            <input
              required
              ref={inputRef}
              defaultValue={review?.review_text}
              className="border w-full mt-4 p-2 rounded-sm"
              type="text"
            />

            <div className="modal-action">
              {/* Close Button */}
              <div method="dialog">
                <button className="btn">Close</button>
              </div>

              {/* Update Button */}
              <button type="submit" className="btn btn-primary ml-2">
                Update
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default More;
