import firebase from "./firebase";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
  remove,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
import ToastifySuccess from "./toastfy";

export const addData = (values) => {
  // Create a new post reference with an auto-generated id
  const db = getDatabase(firebase);
  const postListRef = ref(db, "contacts");
  const newPostRef = push(postListRef);
  set(newPostRef, {
    userName: values.userName,
    phone: values.phone,
    gender: values.gender,
  });
};

export const GetUser = () => {
  const [contactList, setContactList] = useState();
  useEffect(() => {
    const db = getDatabase();
    const userRef = ref(db, "contacts");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const baglantiArray = [];

      for (let id in data) {
        baglantiArray.push({ id, ...data[id] });
      }
      setContactList(baglantiArray);
    });
  }, []);
  return { contactList };
};

export const DeleteData = (id) => {
  const db = getDatabase();
  remove(ref(db, "contacts/" + id));
  ToastifySuccess("Veri Silindi");
};

export const EditUser = (values) => {
  const db = getDatabase();
  const updates = {};
  updates["contacts/" + values.id] = values;
  return update(ref(db), updates);
};
