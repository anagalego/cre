package rest;

import dao.FaturaDAO;
import dao.ProdutoDAO;
import entidades.Fatura;
import entidades.Produto;
import models.FaturarProduto;
import models.Resposta;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;

@Stateless
@Path("/faturas")
public class FaturasRestApi {

    @EJB
    FaturaDAO faturaDAO;

    @EJB
    ProdutoDAO produtoDAO;

    @POST
    @Path("criar")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Resposta<Fatura> faturarProduto(FaturarProduto faturarProduto) {
        Produto p = produtoDAO.obterProduto(faturarProduto.getIdProduto());
        Fatura f = faturaDAO.obterFatura(faturarProduto.getId());
        Resposta r = new Resposta();
        if(p.getFatura()!=0 || f!=null){
            r.setSucesso(false);
            return r;
        }
        produtoDAO.faturarProduto(faturarProduto.getIdProduto(), faturarProduto.getId());
        Fatura ff = faturaDAO.faturarProduto(faturarProduto);
        r.setSucesso(true);
        r.setConteudo(ff);
        return r;
    }

    @GET
    @Path("equipa")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public List<Fatura> obterFaturasEquipa(){
        return faturaDAO.obterFaturasEquipa();
    }

    @GET
    @Path("funcionario/{funcionario_id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public List<Fatura> obterFaturasPorFuncionario(@PathParam("funcionario_id") String funcionario){
        List<Produto> listaProdutos = produtoDAO.obterProdutosPorFuncionario(funcionario);
        listaProdutos.removeIf(p -> p.getFatura()==0);

        List<Fatura> listaFaturas = new ArrayList<>();

        for (Produto p : listaProdutos){
            listaFaturas.add(faturaDAO.obterFatura(p.getFatura()));
        }
        return listaFaturas;
    }

}























