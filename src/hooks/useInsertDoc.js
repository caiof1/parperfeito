import { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export const useInsertDoc = (docCollection, textError) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [acess, setAcess] = useState(false);

  const insertDoc = async (data) => {
    setLoading(true);
    try {
      const newOrder = { ...data, createAt: Timestamp.now() };
      await addDoc(collection(db, docCollection), newOrder);
      setAcess(true);
    } catch (error) {
      setError({textError});
    }
    setLoading(false);
  };

  return { insertDoc, loading, error, acess };
};
