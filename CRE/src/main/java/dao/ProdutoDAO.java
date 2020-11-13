package dao;

import entidades.Produto;
import models.CriarProduto;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class ProdutoDAO {


    @PersistenceContext(unitName = "crePU")
    EntityManager em;

    public List<Produto> obterProdutosEquipa() {
        return em.createQuery("select p from Produto p", Produto.class)
                .getResultList();
    }


    public List<Produto> obterProdutosPorFuncionario(String funcionario) {
        return em.createQuery("select p from Produto p where p.funcionario = :funcionario", Produto.class)
                .setParameter("funcionario", funcionario)
                .getResultList();
    }

    public Produto obterProduto(String id) { return em.find(Produto.class, id); }

    public Produto criarProduto(CriarProduto criarProduto) {
        Produto p = new Produto();
        p.setId(criarProduto.getId());
        p.setCategoria(criarProduto.getCategoria());
        p.setCor(criarProduto.getCor());
        p.setData(criarProduto.getData());
        p.setFuncionario(criarProduto.getFuncionario());
        p.setQuantidade(criarProduto.getQuantidade());
        em.persist(p);
        em.flush();
        return p;
    }


    public void faturarProduto(String id, int fatura) {
        Produto p = obterProduto(id);
        p.setFatura(fatura);
        em.persist(p);
        em.flush();
    }

    public void eliminarProduto(String id){
        Produto p = em.find(Produto.class, id);
        em.remove(p);
    }




}































