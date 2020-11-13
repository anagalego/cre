package dao;

import entidades.Categoria;
import entidades.Produto;
import models.CriarCategoria;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class CategoriaDAO {


    @PersistenceContext(unitName = "crePU")
    EntityManager em;

    public List<Categoria> obterCategorias() {
        return em.createQuery("select c from Categoria c", Categoria.class)
                .getResultList();
    }
    public Categoria obterCategoria(String id) {
        return em.find(Categoria.class, id);
    }

    public Categoria criarCategoria(CriarCategoria criarCategoria) {
        Categoria c = new Categoria();
        c.setId(criarCategoria.getId());
        c.setNome(criarCategoria.getNome());
        c.setX(criarCategoria.getX());
        c.setY(criarCategoria.getY());
        c.setZ(criarCategoria.getZ());
        c.setPvp(criarCategoria.getPvp());
        em.persist(c);
        em.flush();
        return c;
    }

    public void eliminarCategoria(String id){
        Categoria c = em.find(Categoria.class, id);
        em.remove(c);
    }
}
