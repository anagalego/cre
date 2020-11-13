package rest;


import dao.ProdutoDAO;
import entidades.Produto;
import models.CriarProduto;
import models.Resposta;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Stateless
@Path("/produtos")
public class ProdutosRestApi {

    @EJB
    ProdutoDAO produtoDAO;

    @GET
    @Path("equipa")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public List<Produto> obterProdutosEquipa(){
        return produtoDAO.obterProdutosEquipa();
    }


    @GET
    @Path("id/{pid}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Produto obterProduto(@PathParam("pid") String id) {
        return produtoDAO.obterProduto(id);
    }


    @GET
    @Path("funcionario/{funcionario_id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public List<Produto> obterProdutosPorFuncionario(@PathParam("funcionario_id") String id){
        return produtoDAO.obterProdutosPorFuncionario(id);
    }


    @POST
    @Path("criar")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Resposta<Produto> criarProduto(CriarProduto criarProduto) {
        Produto p = produtoDAO.obterProduto(criarProduto.getId());
        Resposta r = new Resposta();
        if(p!=null){
            r.setSucesso(false);
            return r;
        }
        Produto pp = produtoDAO.criarProduto(criarProduto);
        r.setSucesso(true);
        r.setConteudo(pp);
        return r;
    }


    @DELETE
    @Path("eliminar/{produto_id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Resposta<Produto> eliminarProduto(@PathParam("produto_id")String id){
        Produto p = produtoDAO.obterProduto(id);
        produtoDAO.eliminarProduto(id);
        Resposta r = new Resposta();
        if(p==null){
            r.setSucesso(false);
        }
        r.setConteudo(p);
        r.setSucesso(true);
        return r;
    }


    /////////



    @GET
    @Path("faturados")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public List<Produto> obterProdutosFaturados(){
        List<Produto> listaProdutos = produtoDAO.obterProdutosEquipa();
        listaProdutos.removeIf(p -> p.getFatura()==0);
        return listaProdutos;
    }

    @GET
    @Path("faturados/{funcionario_id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public List<Produto> obterProdutosFaturadosPorFuncionario(@PathParam("funcionario_id") String id){
        List<Produto> listaProdutos = produtoDAO.obterProdutosPorFuncionario(id);
        listaProdutos.removeIf(p -> p.getFatura()==0);
        return listaProdutos;
    }

}
