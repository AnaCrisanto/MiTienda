import Product from '../models/products.model.js';


const productDAO = {};

productDAO.getAll = async () => {
    try {
        const products = await Product.find();
        return products;
    } catch (error) {
        console.error('Error al obtener todos los productos:', error);
        throw error;
    }
};

productDAO.mostrarInicio = async () => {
    try {
        const products = await Product.find();
        return products;
    } catch (error) {
        console.error('Error al obtener todos los productos:', error);
        throw error;
    }
};

productDAO.mostrarProductos = async () => {
    try {
        const products = await Product.find();
        return products;
    } catch (error) {
        console.error('Error al obtener todos los productos:', error);
        throw error;
    }
};

productDAO.getOne=async(bc)=>{
    const product=await Product.findOne({barcode:bc});
    return product;
};

productDAO.insertProduct = async (productData) => {
    try {
        const productSaved = new Product(productData);
        await productSaved.save(); 
        return true;
    } catch (error) {
        console.error('Error al insertar un producto:', error);
        throw error;
    }
};


productDAO.updateProduct = async(barcode, product)=>{
    const updateProduct = await Product.findOneAndUpdate({barcode:barcode},product);
    if(updateProduct != null){ 
        return true;
    
    }
    else{
        return false
    } 
    }

productDAO.deleteProduct = async (bc) => {
    try {
        const productDelete = await Product.findOneAndDelete({ barcode: bc });
        if (productDelete != bc) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false; // Manejo de errores: devolver falso si hay un error
    }
};



export default productDAO;