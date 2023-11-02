// Firebase
import { db } from "../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

// Hooks
import { useState } from "react";
import { useInsertDoc } from "./useInsertDoc";


export const useRegisterAuth = () => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [acess, setAcess] = useState(false);

  const { insertDoc } = useInsertDoc(
    "users",
    "Tivemos um problema ao criar o seu perfil"
  );

  const auth = getAuth();

  const register = async (data) => {
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.name,
      });

      const infoUser = {
        uid: user.uid,
        name: user.displayName,
        subName: '',
        email: user.email,
        phone: '',
        orders: [],
        avaliations: [],
        ID: 0,
        address: [],
        cart: []
      }

      insertDoc(infoUser)

      setAcess(true);

    } catch (error) {
      let systemErrorMessage;

      if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
      }

      setLoading(false);
      setError(systemErrorMessage);
    }

    setLoading(false);
  };

  return { register, loading, error, acess };
};
