const {listaPlatos,about} = require ('../model/data')
const mainController ={
    index:function (req, res){
        res.render('index', {about:about, menu: listaPlatos } )
    },
    detalle: function (req, res){
        let plato= listaPlatos.find((plato) => plato.id == req.params.menuId)
        res.render('detalleMenu', {plato:plato})
    },
}
module.exports= mainController