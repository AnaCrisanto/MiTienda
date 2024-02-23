import Clothing from '../models/clothing.model.js';

const clothingDAO = {};

clothingDAO.getAllClothing = async () => {
    try {
        const clothing = await Clothing.find();
        return clothing;
    } catch (error) {
        console.error('Error al obtener toda la ropa:', error);
        throw error;
    }
};

clothingDAO.getOneClothing = async (bc) => {
    const clothing = await Clothing.findOne({ barcode: bc });
    return clothing;
};

clothingDAO.insertClothing = async (clothingData) => {
    try {
        const clothingSaved = new Clothing(clothingData);
        await clothingSaved.save();
        return true;
    } catch (error) {
        console.error('Error al insertar una prenda de ropa:', error);
        throw error;
    }
};

clothingDAO.updateClothing = async (barcode, clothing) => {
    const updatedClothing = await Clothing.findOneAndUpdate({ barcode: barcode }, clothing);
    if (updatedClothing !== null) {
        return true;
    } else {
        return false;
    }
};

clothingDAO.deleteClothing = async (bc) => {
    try {
        const deletedClothing = await Clothing.findOneAndDelete({ barcode: bc });
        if (deletedClothing !== null) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
};

clothingDAO.homeClothing = async () => {
    try {
        const clothing = await Clothing.find();
        return clothing;
    } catch (error) {
        console.error('Error al obtener toda la ropa:', error);
        throw error;
    }
};

clothingDAO.info = async () => {
    try {
        const clothing = await Clothing.find();
        return clothing;
    } catch (error) {
        console.error('Error al obtener toda la ropa:', error);
        throw error;
    }
};

export default clothingDAO;
