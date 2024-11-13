"use client";

import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState("");
  const router = useRouter();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/users/${id}`)
      .then((res) => {
        setName(res.data.data.name);
        setEmail(res.data.data.email);
        setAdmin(res.data.data.admin);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const data = { name, admin, email };

    axios
      .put(`http://localhost:5000/api/v1/users/update/${id}`, data)
      .then((res) => {
        console.log(res);
        router.push("/dashboard/users");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="m-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-white rounded shadow"
      >
        <h2 className="text-lg font-semibold mb-4">Edit User</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Admin
          </label>
          <select
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            value={admin}
            onChange={(e) => setAdmin(e.target.value)}
            required
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditUser;
