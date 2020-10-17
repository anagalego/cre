package rest;

import dao.*;
import entidades.*;
import models.*;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;


@Stateless
@Path("/auth")
public class AuthenticationRestApi {

    @EJB
    FuncionarioDAO funcionarioDAO;

    @EJB
    ProdutoDAO produtoDAO;

    @EJB
    FaturaDAO faturaDAO;

    @GET
    @Path("ping")
    public String ping() {
        return "pong";
    }


    @POST
    @Path("login")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Resposta<Funcionario> login(LoginRequest loginRequest) {
        List<Funcionario> f = funcionarioDAO.obterFuncionarioPorUtilizador(loginRequest.getId());
        if(f.size() == 0 || !f.get(0).getPalavraPasse().equals(loginRequest.getPalavraPasse())) {
            Resposta r = new Resposta();
            r.setSucesso(false);
            return r;
        }
        Funcionario ff = new Funcionario(f.get(0).getId(), f.get(0).getPalavraPasse(), f.get(0).getNome());
        Resposta r = new Resposta();
        r.setSucesso(true);
        r.setConteudo(ff);
        return r;
    }


    @POST
    @Path("criar-produto/{funcionario_id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Resposta<Produto> criarProduto(CriarProduto criarProduto) {
        List<Produto> produtos = produtoDAO.obterProdutosPorFuncionario(criarProduto.getFuncionario());
        Resposta r = new Resposta();
        r.setSucesso(true);
        for (Produto p : produtos) {
            if (p.getId() == criarProduto.getId())
                r.setSucesso(false);
        }

        if (r.isSucesso()) {
            produtoDAO.criarProduto(
                    criarProduto.getId(),
                    criarProduto.getCategoria(),
                    criarProduto.getCor(),
                    criarProduto.getFuncionario(),
                    criarProduto.getData(),
                    criarProduto.getPvp());
            r.setConteudo(new Produto(
                    criarProduto.getId(),
                    criarProduto.getCategoria(),
                    criarProduto.getCor(),
                    criarProduto.getFuncionario(),
                    criarProduto.getData(),
                    criarProduto.getPvp(),
                    0,
                    null,
                    null,
                    false
            ));
        }
        return r;
    }


    @POST
    @Path("criar-fatura/{funcionario_id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Resposta<Produto> faturarProduto(CriarFatura criarFatura) {
        List<Produto> p = produtoDAO.obterProdutosPorId(criarFatura.getId());
        if(criarFatura.getId() == null
                || criarFatura.getFatura() == 0
                || criarFatura.getDatafatura() == null
                || criarFatura.getCliente() == null) {
            Resposta r = new Resposta();
            r.setSucesso(false);
            return r;
        }
        Produto pp = new Produto();
        pp.setId(criarFatura.getId());
        pp.setFatura(criarFatura.getFatura());
        pp.setDatafatura(criarFatura.getDatafatura());
        pp.setCliente(criarFatura.getCliente());
        pp.setFaturado(criarFatura.isFaturado());
        Resposta r = new Resposta();
        r.setSucesso(true);
        r.setConteudo(pp);

        return r;
    }

    @GET
    @Path("{menu}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public List<Produto> obterProdutosEquipa(){
        List<Produto> listaProdutosEquipa = produtoDAO.obterProdutosEquipa();
        return listaProdutosEquipa;
    }

    @GET
    @Path("produtos/{funcionario_id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public List<Produto> obterProdutosPorFuncionario(@PathParam("funcionario_id") String id){
        List<Produto> listaProdutos = produtoDAO.obterProdutosPorFuncionario(id);
        return listaProdutos;
    }








}