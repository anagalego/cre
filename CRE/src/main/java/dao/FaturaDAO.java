package dao;

import entidades.*;

import javax.ejb.Stateless;
import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class FaturaDAO {
    @PersistenceContext(unitName = "crePU")
    EntityManager em;

    public List<Fatura> obterFaturasPorFuncionario(String funcionario) {
        return em.createQuery("select f from Fatura f where f.funcionario = :utilizador", Fatura.class)
                .setParameter("utilizador", funcionario)
                .getResultList();
    }


}
