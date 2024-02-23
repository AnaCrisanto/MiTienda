import clothingDAO from '../dao/clothing.dao.js';

export const getAllClothing = (req, res) => {
    clothingDAO.getAllClothing()
        .then(products => res.render('../src/views/index.ejs', { products }))
        .catch(err => res.json({ status: "Servidor no disponible" }));
};

export const getOneClothing = (req, res) => {
    clothingDAO.getOneClothing(req.params.barcode)
        .then(product => res.render('../src/views/edit.ejs', { product }))
        .catch(err => res.json({ status: "Servidor no disponible" }));
};

export const insertClothing = (req, res) => {
    clothingDAO.insertClothing(req.body)
        .then(result => {
            if (result) res.redirect('/api/clothing');
        })
        .catch(err => {
            res.json({ status: "Servidor no disponible" });
        });
};

export const updateClothing = (req, res) => {
    clothingDAO.updateClothing(req.params.barcode, req.body)
        .then(result => {
            if (result) res.redirect('/api/clothing/');
        })
        .catch(err => {
            res.json({ status: "Servidor no disponible" });
        });
};

export const deleteClothing = (req, res) => {
    clothingDAO.deleteClothing(req.params.bc)
        .then(result => {
            if (result) {
                res.redirect('/api/clothing/');
            } else {
                res.json({ status: "Servicio no disponible" });
            }
        })
        .catch(erro => {
            console.error(error);
            res.json({ status: "Servidor no disponible" });
        });
};


export const homeClothing = (req, res) => {
    clothingDAO.homeClothing()
        .then(products => res.render('../src/views/inicio.ejs', { products }))
        .catch(err => res.json({ status: "Servidor no disponible" }));
};


export const info = (req, res) => {
    clothingDAO.info()
        .then(products => res.render('../src/views/info.ejs', { products }))
        .catch(err => res.json({ status: "Servidor no disponible" }));
};
