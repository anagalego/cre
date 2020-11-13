package dao;

import entidades.Cor;
import entidades.Produto;
import models.CriarCor;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class CorDAO {

    @PersistenceContext(unitName = "crePU")
    EntityManager em;

    public List<Cor> obterCores() {
        return em.createQuery("select c from Cor c", Cor.class)
                .getResultList();
    }
    public Cor obterCor(String id) {
        return em.find(Cor.class, id);
    }

    public Cor criarCor(CriarCor criarCor) {
        Cor c = new Cor();
        c.setId(criarCor.getId());
        c.setNome(criarCor.getNome());
        c.setHex(criarCor.getHex());
        em.persist(c);
        em.flush();
        return c;
    }

    public void eliminarCor(String id){
        Cor c = em.find(Cor.class, id);
        em.remove(c);
    }

}
