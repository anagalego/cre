package rest;

import dao.*;
import entidades.*;
import models.*;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;


@Stateless
@Path("/auth")
public class AuthenticationRestApi {

    @EJB
    FuncionarioDAO funcionarioDAO;


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
        Funcionario ff = new Funcionario(f.get(0).getId(), f.get(0).getPalavraPasse(), f.get(0).getNome(), f.get(0).isFeminino(), f.get(0).isAdmin());
        Resposta r = new Resposta();
        r.setSucesso(true);
        r.setConteudo(ff);
        return r;
    }

    @POST
    @Path("admin")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public boolean confirmarAdmin(LoginRequest loginRequest) {
        return funcionarioDAO.obterFuncionarioPorUtilizador(loginRequest.getId()).get(0).isAdmin();
    }

    @POST
    @Path("feminino")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public boolean confirmarFeminino(LoginRequest loginRequest) {
        return funcionarioDAO.obterFuncionarioPorUtilizador(loginRequest.getId()).get(0).isFeminino();
    }

}