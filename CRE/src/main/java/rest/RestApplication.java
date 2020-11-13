package rest;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;

@ApplicationPath("/api")
public class RestApplication extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        HashSet h = new HashSet<Class<?>>();
        h.add( AuthenticationRestApi.class );
        h.add( ProdutosRestApi.class );
        h.add( FuncionariosRestApi.class );
        h.add( FaturasRestApi.class );
        h.add( CategoriasRestApi.class );
        h.add( CoresRestApi.class );
        return h;
    }

}