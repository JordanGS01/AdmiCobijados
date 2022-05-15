import { Link,
    useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./product.css";
import { Publish } from "@material-ui/icons";
import { getProducts } from "../../FireStore/data";

/*
Categorias:
1:Camisas
2:Camiseta para niño
3:Pantalonetas
4:blusas
5:jogger
6:pantalones
*/
export default function Product() {
const params = useParams();
const [productD, setProductD] = useState({
       id: "",
       cantidad: 0,
       categoria: "",
       descripcion: "",
       img: "",
       marca: "",
       nombre: "",
       precio: 0,
       talla: "",
})

async function fetchProductData(){                
   const variable = await getProducts()
   const selectProduct = variable.find(producto => producto.id === params.productId) 
   setProductD(selectProduct)    
}


useEffect(() => {
   fetchProductData()              
}, [])

return (
<div className="product">      
 <div className="productBottom">
     <form className="productForm">
         <div className="productFormLeft">
               <label>ID</label>
             <input disabled type="text" placeholder= {productD.id}/>
             <label>Nombre</label>
             <input type="text" placeholder={productD.nombre}/>
             <label>Marca</label>
             <input type="text" placeholder={productD.marca} />
             <label>Descripcion</label>
             <input type="text" placeholder={productD.descripcion} />
             <label>Talla</label>
             <input type="text" placeholder={productD.talla} />
             <label>Precio</label>
             <input type="text" placeholder={productD.precio} />
             <label>Img</label>
             <input style= {{width:'250px'}} type="text" placeholder={productD.img} />
             <label>Categoria</label>
             <input type="text" placeholder={productD.categoria} />
             <label>Cantidad</label>
             <input type="text" placeholder={productD.cantidad} />

             <button className="productButton">Actualizar</button>
       
         </div>

         <div className="productFormRight">
             <div className="productUpload">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvUfSp5ZBUsr-bmPWz9b7sZHlL9Z5X0DEQ8hAyv7VTiY6Jr35BVwfCpPUcRxkO6ofKpWI&usqp=CAU" alt="" className="productUploadImg" />
                 <label for="file">
                     <Publish/>
                 </label>
                 <input type="file" id="file" style={{display:"none"}} />
             </div>
         </div>
     </form>
 </div>
</div>
);
}
