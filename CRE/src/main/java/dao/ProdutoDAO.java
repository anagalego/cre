package dao;

import entidades.Categoria;
import entidades.Funcionario;
import entidades.Produto;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class ProdutoDAO {
    @PersistenceContext(unitName = "crePU")
    EntityManager em;

    public List<Produto> obterProdutosPorFuncionario(String funcionario) {
        return em.createQuery("select p from Produto p where p.funcionario = :funcionario", Produto.class)
                .setParameter("funcionario", funcionario)
                .getResultList();
    }

    public List<Produto> obterProdutosEquipa() {
        return em.createQuery("select p from Produto p", Produto.class)
                .getResultList();
    }

    public List<Produto> obterProdutosPorId(String id) {
        return em.createQuery("select p from Produto p where p.id = :id", Produto.class)
                .setParameter("id", id)
                .getResultList();
    }

    public void criarProduto(String id, String categoria, String cor, String funcionario, String data, float pvp) {
        int executeUpdate = em.createNativeQuery("insert into produto(id, categoria, cor, funcionario, data, pvp) values('" + id + "', '" + categoria + "', '" + cor + "', '" + funcionario + "', '" + data + "'," + pvp + ")")
                .executeUpdate();
    }

    public void faturarProduto(String id, int fatura, String datafatura, String cliente) {
        int executeUpdate = em.createNativeQuery("insert into produto(fatura, datafatura, cliente, faturado) values(" + fatura + ", '" + datafatura + "', '," + cliente + "'," + true + ") where id =" + id)
                .executeUpdate();
    }

}