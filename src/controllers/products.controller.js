import productDAO from '../dao/products.dao.js'

export const getAll = (req, res) => {
    productDAO.getAll()
    .then(products => res.render('../src/views/index.ejs',{products}))
        .catch(err=>res.json({status:"Servidor no disponible"
    }));      
    }    

export const getOne = (req, res) => {
    productDAO.getOne(req.params.barcode)
    .then(product => res.render('../src/views/edit.ejs',{product}))
        .catch(err=>res.json({status:"Servidor no disponible"
    }));
};


export const insertProduct=(req,res)=>{
    console.log(req,res)
    productDAO.insertProduct(req.body)
    .then(result=>{
        if (result) 
        res.redirect('/api/products')
        
    })
    .catch(err=>{
        res.json({
            status: "Server unavailable"
        })
    })
}

export const updateProduct= async (req,res)=>{
    productDAO.updateProduct(req.params.barcode, req.body)
    .then(result=>{
        if (result) 
        res.redirect('/api/products/')
        
    })
       
    .catch(err=>{
        res.json({
            status:"Server Unvailable"
        })
    })
}
 

export const deleteProduct = (req, res) => {
    productDAO.deleteProduct(req.params.bc)
    .then(result=>{
      if(result){
          
          res.redirect('/api/products/')
          
      }else 
          res.json({status:"Servicio no disponible"});
    })
    .catch(erro=>{
        res.json({
          status:"Server unavailable"
        })
      })
  };