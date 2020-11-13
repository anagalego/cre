package dao;


import entidades.Funcionario;
import entidades.Produto;
import models.CriarFuncionario;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class FuncionarioDAO {
    @PersistenceContext(unitName = "crePU")
    EntityManager em;

    public List<Funcionario> obterFuncionarios() {
        return em.createQuery("select f from Funcionario f", Funcionario.class)
                .getResultList();
    }

    public List<Funcionario> obterFuncionarioPorUtilizador(String id) {
        return em.createQuery("select f from Funcionario f where f.id = :utilizador", Funcionario.class)
                .setParameter("utilizador", id)
                .getResultList();
    }

    public Funcionario obterFuncionario(String id) {
        return em.find(Funcionario.class, id);
    }

    public Funcionario criarFuncionario(CriarFuncionario criarFuncionario) {
        Funcionario f = new Funcionario();
        f.setId(criarFuncionario.getId());
        f.setPalavraPasse(criarFuncionario.getPalavraPasse());
        f.setNome(criarFuncionario.getNome());
        f.setFeminino(criarFuncionario.isFeminino());
        f.setAdmin(criarFuncionario.isAdmin());
        em.persist(f);
        em.flush();
        return f;
    }

    public void eliminarFuncionario(String id){
        Funcionario f = em.find(Funcionario.class, id);
        em.remove(f);
    }

}
