"use strict";

//TEST PRODUCTS
let Aa = {"try":3129312, //debe de eliminar el try 
			//debe de ignorar el uuid, genera uno nuevo
			"uuid":"M1_UU1D_123456", 
			"title":"figura-jett",
			"description":"fifura jettt",
			"imageUrl":"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt5d13d9fb3120d132/62293290ba7f6b684a46badb/2022_Promos_Jett-Statue_Ecomm_image_1.png",
			"unit":"pieza",
			"stock":15,
			"pricePerUnit":10000,
			"category":"figura"};
let Bb = {"title":"estatuilla de phinix",
			"description":"Estatuilla de valorant.",
			"imageUrl":"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt5d46ce7c4eac7ff3/6229324bf26a4b66ea4a0c6f/2022_Promos_Phoenix-Statue_Ecomm_image_1.png",
			"unit":"pieza",
			"stock":15,
			"pricePerUnit":1500,
			"category":"estatuilla"};
let Cc = {"title":"figura-Reyna",
			"description":"figura de valorant",
			"imageUrl":"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt5d46ce7c4eac7ff3/6229324bf26a4b66ea4a0c6f/2022_Promos_Phoenix-Statue_Ecomm_image_1.png",
			"unit":"pieza",
			"stock":15,
			"pricePerUnit":900,
			"category":"figura"};
let Dd = {"title":"Figura-killjoiy",
			"description":"figura valorant",
			"imageUrl":"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt5d46ce7c4eac7ff3/6229324bf26a4b66ea4a0c6f/2022_Promos_Phoenix-Statue_Ecomm_image_1.png",
			"unit":"pieza",
			"stock":15,
			"pricePerUnit":3000,
			"category":"figura"};
let Ee = {"title":"Wingman",
			"description":"peluche de valorant",
			"imageUrl":"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt5d46ce7c4eac7ff3/6229324bf26a4b66ea4a0c6f/2022_Promos_Phoenix-Statue_Ecomm_image_1.png",
			"unit":"pieza",
			"stock":10,
			"pricePerUnit":1000,
			"category":"peluche"};


let catalogo;
let updateUUID;
let deleteUUID;
let UUIDProxy;
let updateProxy;
let ranElem;
let carrito;


//Añadimos 4 productos al catálogo
console.log("Agregamos 4 productos");
createProduct(Aa);
createProduct(Bb);
createProduct(Cc);
createProduct(Dd);
console.table(getProducts());

//Actualizamos un elemento
catalogo = getProducts();
updateUUID = getAleatorioUUID();
// console.log("Update a un producto ",getProductById(updateUUID).title," del catálogo con UUID", updateUUID);
// updateProduct(updateUUID,PrdE);
// console.table(getProducts());

//Eliminamos un elemento
// catalogo = getProducts();
// deleteUUID = getAleatorioUUID();
// console.log("Eliminamos el producto:", getProductById(deleteUUID).title," del catálogo con UUID:", deleteUUID);
// deleteProduct(deleteUUID);
// console.log(getProducts());



//TEST SHOPPING CART
catalogo = getProducts();

//Agregamos 3 elementos de nuestra lista de productos al carrito
carrito = new ShoppingCart;
for (let n=0;n<10;n++){
	UUIDProxy = getAleatorioUUID();
	updateProxy = getProductById(UUIDProxy);
	ranElem = random(1, 10);
	// console.log("Agregamos ", updateProxy.title, "con precio", updateProxy.pricePerUnit,"y", ranElem," elementos. UUID: ",updateProxy.uuid);
	carrito.addItem(UUIDProxy,ranElem);
}
// console.table(carrito.productProxies);

//Actualizamos algun producto del carrito
UUIDProxy = getAleatorioUUID();
updateProxy = getProductById(UUIDProxy);
ranElem = random(1, 10);
// console.log("Actualizamos a ", updateProxy.title,"a", ranElem," elementos. UUID: ",updateProxy.uuid);
carrito.updateItem(UUIDProxy,ranElem);
// console.table(carrito.productProxies);

//eliminamos algun producto del carrito
UUIDProxy = getAleatorioUUID();
updateProxy = getProductById(UUIDProxy);
// console.log("Eliminamos a ", updateProxy.title," del carrito. UUID: ",updateProxy.uuid);
// carrito.removeItem(UUIDProxy);
// console.table(carrito.productProxies);

//calculamos el total del carrito de compras
let total = carrito.calculateTotal();
// console.table("Total: ",total);


