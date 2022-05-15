import { db } from './dbInitialize';
import { collection, getDocs } from 'firebase/firestore';

  //TODO: Crear la funcionalidad para filtar por colecciones (con un combo box)
  //(☞ﾟヮﾟ)☞
  const productosC = collection(db, 'Productos');
  const getProducts = async () => {
    const productoSP = await getDocs(productosC);
    return  productoSP.docs.map((element) => ({ ...element.data(), id: element.id }))
  };
  
  export { getProducts };