package rest;

import dao.CategoriaDAO;
import dao.CorDAO;
import entidades.Categoria;
import entidades.Cor;
import models.CriarCor;
import models.Resposta;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Stateless
@Path("/cores")
public class CoresRestApi {

    @EJB
    CorDAO corDAO;

    @GET
    @Path("lista")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public List<Cor> obterCores(){
        return corDAO.obterCores();
    }


    @GET
    @Path("id/{pid}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Cor obterCor(@PathParam("pid") String id) {
        return corDAO.obterCor(id);
    }


    @POST
    @Path("criar")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Resposta<Cor> criarCor(CriarCor criarCor) {
        Cor c = corDAO.obterCor(criarCor.getId());
        Resposta r = new Resposta();
        if(c!=null){
            r.setSucesso(false);
            return r;
        }
        Cor cc = corDAO.criarCor(criarCor);
        r.setSucesso(true);
        r.setConteudo(cc);
        return r;
    }


    @DELETE
    @Path("eliminar")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Resposta<Categoria> eliminarCor(String id){
        Cor c = corDAO.obterCor(id);
        corDAO.eliminarCor(id);
        Resposta r = new Resposta();
        if(c==null){
            r.setSucesso(false);
        }
        r.setConteudo(c);
        r.setSucesso(true);
        return r;
    }
}
