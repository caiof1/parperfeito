// firebase
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

// Hooks
import { useState } from "react";

export const useUpdateDoc = (docCollection) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [acess, setAcess] = useState(false)

  const updateDocs = async (id, data) => {
    setLoading(true);
    try {
      await updateDoc(doc(db, docCollection, id), data);
      console.log("updates")
      setAcess(true)
    } catch (error) {
      setError("Tivemos problemas ao salvar os seus dados");
    }
    setLoading(false);
  };

  return { updateDocs, loading, error, acess};
};
