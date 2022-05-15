import { collection, getDocs } from 'firebase/firestore'
import { db } from './FireStore/dbInitialize';

export const userData = [
    {
      name: "Jan",
      "Active User": 4000,
    },
    {
      name: "Feb",
      "Active User": 3000,
    },
    {
      name: "Mar",
      "Active User": 5000,
    },
    {
      name: "Apr",
      "Active User": 4000,
    },
    {
      name: "May",
      "Active User": 3000,
    },
    {
      name: "Jun",
      "Active User": 2000,
    },
    {
      name: "Jul",
      "Active User": 4000,
    },
    {
      name: "Agu",
      "Active User": 3000,
    },
    {
      name: "Sep",
      "Active User": 4000,
    },
    {
      name: "Oct",
      "Active User": 1000,
    },
    {
      name: "Nov",
      "Active User": 4000,
    },
    {
      name: "Dec",
      "Active User": 3000,
    },
];

export const productData = [
  {
    name: "Jan",
    "Sales": 4000,
  },
  {
    name: "Feb",
    "Sales": 3000,
  },
  {
    name: "Mar",
    "Sales": 5000,
  },
];

export const userRows = [
  {
    id: 1,
    username: "Raquel",
    avatar:
      "https://1tb.favim.com/preview/6/689/6894/68945/6894559.jpg",
    email: "raquel@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 2,
    username: "Sergio",
    avatar:
      "https://i.pinimg.com/236x/5b/cb/49/5bcb49ec9199a479e43d79d95f014ed5--male-faces-julius.jpg",
    email: "sergio@gmail.com",
    status: "active",
    transaction: "$80.00",
  },
  {
    id: 3,
    username: "Maria",
    avatar:
      "https://i.pinimg.com/originals/2a/91/b4/2a91b46828cf71cd9189285b860428ae.jpg",
    email: "mari@gmail.com",
    status: "active",
    transaction: "$10.00",
  },
  {
    id: 4,
    username: "Paulina",
    avatar:
      "https://i.pinimg.com/564x/b4/62/b3/b462b3eccf9b093003376eea8857a7d2.jpg",
    email: "pau@gmail.com",
    status: "active",
    transaction: "$200.00",
  },
  {
    id: 5,
    username: "Jorge",
    avatar:
      "https://i.pinimg.com/564x/07/77/96/0777960ab196dd61307fe102e55ef6f7.jpg",
    email: "jorge@gmail.com",
    status: "active",
    transaction: "$150.00",
  },
  {
    id: 6,
    username: "Jose",
    avatar:
      "https://i.pinimg.com/474x/6f/6a/d8/6f6ad850a31e051d40d309f675df27e2.jpg",
    email: "jose@gmail.com",
    status: "active",
    transaction: "$60.00",
  },
  {
    id: 7,
    username: "Francisco",
    avatar:
      "https://i.pinimg.com/236x/24/48/d1/2448d1c98e7811280d8954a8285cd488.jpg",
    email: "fran@gmail.com",
    status: "active",
    transaction: "$15.00",
  },
  {
    id: 8,
    username: "Melisa",
    avatar:
      "https://i.pinimg.com/236x/3d/61/1d/3d611d0d367b10af30bf49de40aec3d5.jpg",
    email: "melisa@gmail.com",
    status: "active",
    transaction: "$200.00",
  },
];

//////////////////////////////////////////////////////
/*async function obtenerDatos(colectionName) {  
  const colRef = collection(db, colectionName);
  const collectionSnapshot = await getDocs(colRef);
  const dataList = collectionSnapshot.docs.map(doc => doc.data());
  return dataList;
}*/


//export const productRows = [];
//////////////////////////////////////////////////////

