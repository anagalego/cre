package dao;



import entidades.Fatura;
import models.FaturarProduto;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class FaturaDAO {

    @PersistenceContext(unitName = "crePU")
    EntityManager em;

    public Fatura faturarProduto(FaturarProduto faturarProduto) {
        Fatura f = new Fatura();
        f.setId(faturarProduto.getId());
        f.setCliente(faturarProduto.getCliente());
        f.setData(faturarProduto.getData());
        em.persist(f);
        em.flush();
        return f;
    }

    public List<Fatura> obterFaturasEquipa() {
        return em.createQuery("select f from Fatura f", Fatura.class)
                .getResultList();
    }

    public Fatura obterFatura(int id) { return em.find(Fatura.class, id); }

}
