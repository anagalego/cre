package rest;

import dao.CategoriaDAO;
import entidades.Categoria;
import entidades.Produto;
import models.CriarCategoria;
import models.Resposta;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Stateless
@Path("/categorias")
public class CategoriasRestApi {

    @EJB
    CategoriaDAO categoriaDAO;

    @GET
    @Path("lista")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public List<Categoria> obterCategorias(){
        return categoriaDAO.obterCategorias();
    }


    @GET
    @Path("id/{pid}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Categoria obterCategoria(@PathParam("pid") String id) {
        return categoriaDAO.obterCategoria(id);
    }


    @POST
    @Path("criar")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Resposta<Categoria> criarCategoria(CriarCategoria criarCategoria) {
        Categoria c = categoriaDAO.obterCategoria(criarCategoria.getId());
        Resposta r = new Resposta();
        if(c!=null){
            r.setSucesso(false);
            return r;
        }
        Categoria cc = categoriaDAO.criarCategoria(criarCategoria);
        r.setSucesso(true);
        r.setConteudo(cc);
        return r;
    }

    @DELETE
    @Path("eliminar")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Resposta<Categoria> eliminarCategoria(String id){
        Categoria c = categoriaDAO.obterCategoria(id);
        categoriaDAO.eliminarCategoria(id);
        Resposta r = new Resposta();
        if(c==null){
            r.setSucesso(false);
        }
        r.setConteudo(c);
        r.setSucesso(true);
        return r;
    }


}
