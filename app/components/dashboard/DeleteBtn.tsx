"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

interface ID {
  id: string;
}

const DeleteBtn = ({ id }: ID) => {
  const router = useRouter();

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/api/v1/users/delete/${id}`)
      .then(() => {
        console.log("success");
        router.refresh();
      })
      .catch((err) => console.log(err));
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
    >
      Delete
    </button>
  );
};

export default DeleteBtn;
