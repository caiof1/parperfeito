// Hooks
import { useEffect, useState } from "react";

// Firebase
import { db } from "../firebase/config";
import { collection, query, onSnapshot, where } from "firebase/firestore";

export const useFetchUser = (uid, docCollection) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [documents, setDocuments] = useState([]);


  useEffect(() => {
    const fetchDocuments = async () => {
      setLoading(true);
      try {
        const q = await query(
          collection(db, docCollection),
          where('uid', '==', uid)
        );

        console.log('entrou')

        await onSnapshot(q, (querySnapshot) => {
          setDocuments(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });
      } catch (error) {
        setError("Tivemos um erro ao puxar suas informações");
      }
      setLoading(false);
    };
    fetchDocuments();
  }, [docCollection, uid]);

  return { documents, loading, error };
};
