import productsModel from '../models/products.model.js';

// Obteniendo los productos
export const getAllProducts = async (_req, res) => {
    try {
        const getProducts = await productsModel.find();
        // validacion ternario
        return getProducts ? res.status(200).json(getProducts) : res.status(404).json({ message: 'No se encontraron productos' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
// Obteniendo el producto por el id
export const getProductId = async (req, res) => {
    try {
        const { id } = req.params;
        const productById = await productsModel.findById(id);
        return productById ? res.status(200).json(productById) : res.status(404).json({ message: `Producto no encontrado` });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
// Creando un producto
export const createProduct = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const productNew = await productsModel.create({ name, description, price });
        return res.status(201).json(productNew);
    } catch (error) {
        return res.status(500).json({ message: `Error al crear el producto: ${error.message}` });
    }
};
// Actualizando un producto por el id
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedById = await productsModel.findByIdAndUpdate(id, req.body, { new: true });
        if (updatedById) {
            return res.status(200).json(updatedById);
        }
        return res.status(404).json({ message: `No se encontró el producto con el ID: ${id}` });
    } catch (error) {
        return res.status(500).json({ message: `Error al actualizar el producto: ${error.message}` });
    }
};
// Eliminando un producto por el id
export const deleteProduct = async (req, res) => {
    try {
        const deleteById = await productsModel.findByIdAndDelete(req.params.id);
        if (deleteById) {
            return res.status(200).json({ message: `Se ha eliminado el producto ${deleteById.name}` });
        }
        return res.status(404).json({ message: 'No se encontró el producto a eliminar' });
    } catch (error) {
        return res.status(500).json({ message: `Error al eliminar el producto: ${error.message}` });
    }
};
