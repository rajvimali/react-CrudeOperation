import { useState, useEffect } from "react";
import { Pencil, Trash2 } from "lucide-react";

const Data = () => {
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("formDataList");
    if (savedData) {
      setStoredData(JSON.parse(savedData));
    }
  }, []);

  const handleEdit = (index) => {
    const selected = storedData[index];
    localStorage.setItem("editIndex", index);
    localStorage.setItem("editData", JSON.stringify(selected));
    window.location.href = "/"; // redirect to form
  };

  const handleDelete = (index) => {
    const updatedData = [...storedData];
    updatedData.splice(index, 1);
    setStoredData(updatedData);
    localStorage.setItem("formDataList", JSON.stringify(updatedData));
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Stored Entries</h2>
      {storedData.length > 0 ? (
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">No of Data</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Message</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {storedData.map((entry, index) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{entry.name}</td>
                <td className="border px-4 py-2">{entry.email}</td>
                <td className="border px-4 py-2">{entry.message}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Pencil size={22} />
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-600 hover:text-red-800 ms-4"
                  >
                    <Trash2 size={22} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">No data found.</p>
      )}
    </div>
  );
};

export default Data;
