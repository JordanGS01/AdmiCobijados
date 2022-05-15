import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getDocs, collection, addDoc, query, where} from "firebase/firestore"

//TODO: IMPORTANTISIMO, MOVER ESTOS DATOS A UN .env
const firebaseConfig = {
    apiKey: "AIzaSyC1iygW2-djjCIlQJbx_TJ6QBsFccCPbDc",
    authDomain: "cobijado-fcf04.firebaseapp.com",
    projectId: "cobijado-fcf04",
    storageBucket: "cobijado-fcf04.appspot.com",
    messagingSenderId: "894604991829",
    appId: "1:894604991829:web:527735e0893707b59d23dc",
    measurementId: "G-VXGN84327X"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function insertNewProduct(product,coleccion){
  try {
    const docRef = collection(db,coleccion);
    await addDoc(docRef,product);
    //return answer;
  } catch (error) {
    console.error(error);
  }
}

//ToDo: Modificar esta funcion para que funcione correctamente
export async function getDocWithQuery(setProductD,col,firstElement,op,secondElement){
  try {    
    const colRef = collection(db,col)
    const q = query(colRef, where(firstElement, op, secondElement));
    const querySnapshot = await getDocs(q);    
    const data = querySnapshot.docs.map(doc => doc.data());
    //console.log(data[0])
    //setProductD(data[0])
    setProductD({...data[0]})
    //return data;
  } catch (error) {
    console.error(error);
  }
}


//(☞ﾟヮﾟ)☞   
const getElements = async (col) => {
  const productosC = collection(db, col);
  const productoSP = await getDocs(productosC);
  return  productoSP.docs.map((element) => ({ ...element.data(), id: element.id }))
};

export { getElements };

export { db };