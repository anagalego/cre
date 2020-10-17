package dao;

import entidades.Funcionario;

import javax.ejb.Stateless;
import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class FuncionarioDAO {
    @PersistenceContext(unitName = "crePU")
    EntityManager em;

    public List<Funcionario> obterFuncionarioPorUtilizador(String id) {
        return em.createQuery("select f from Funcionario f where f.id = :utilizador", Funcionario.class)
                .setParameter("utilizador", id)
                .getResultList();
    }
}
