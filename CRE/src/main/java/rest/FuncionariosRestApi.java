package rest;

import dao.FuncionarioDAO;
import entidades.Cor;
import entidades.Funcionario;
import entidades.Produto;
import models.CriarCor;
import models.CriarFuncionario;
import models.LoginRequest;
import models.Resposta;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Stateless
@Path("/funcionarios")
public class FuncionariosRestApi {

    @EJB
    FuncionarioDAO funcionarioDAO;

    @GET
    @Path("lista")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public List<Funcionario> obterFuncionarios(){
        return funcionarioDAO.obterFuncionarios();
    }


    @POST
    @Path("criar")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Resposta<Funcionario> criarFuncionario(CriarFuncionario criarFuncionario) {
        Funcionario f = funcionarioDAO.obterFuncionario(criarFuncionario.getId());
        Resposta r = new Resposta();
        if(f!=null){
            r.setSucesso(false);
            return r;
        }
        Funcionario ff = funcionarioDAO.criarFuncionario(criarFuncionario);
        r.setSucesso(true);
        r.setConteudo(ff);
        return r;
    }


    @DELETE
    @Path("eliminar/{funcionario_id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Resposta<Funcionario> eliminarFuncionario(@PathParam("funcionario_id")String id){
        Funcionario f = funcionarioDAO.obterFuncionario(id);
        funcionarioDAO.eliminarFuncionario(id);
        Resposta r = new Resposta();
        if(f==null){
            r.setSucesso(false);
        }
        r.setConteudo(f);
        r.setSucesso(true);
        return r;
    }

}
