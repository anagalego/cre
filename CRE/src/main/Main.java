package main;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;


public class Main {

	public static void main(String[] args) throws Exception {
		
		getConnection();
		
	}
	
	
	public static Connection getConnection() throws Exception {
		try {
			String driver = "org.h2.Driver";
			String url = "jdbc:h2:tcp://localhost/~/test"; /*   192.168.1.18:8082   */
			String username = "sa";
			String password = "";
			Class.forName(driver);
			
			Connection conn = DriverManager.getConnection(url, username, password);
			System.out.println("A funcionar...");
			
			return conn;
			
		} catch (Exception e) {
			System.out.println(e);
		}
		
		return null;
	}
	
	public static void criarTabela() throws Exception {
		try {
			Connection con = getConnection();
			PreparedStatement create = con.prepareStatement("CREATE TABLE IF NOT EXISTS `FUNCIONARIO` (`FuncionarioID` INT(10), `Utilizador` VARCHAR,`PalavraPasse` VARCHAR, `Departamento` VARCHAR, `Nome` VARCHAR, PRIMARY KEY (`FuncionarioID`);");
			create.executeUpdate();
			
		} catch (Exception e) {
			System.out.println(e);
		} finally { System.out.println("Tabela Criada.");}
	}
		
	public static void criarUtilizador() throws Exception {
		String utilizador = "utilizador";
		String palavra_pass = "palavra_passe";
		try {
		Connection con = getConnection();
		PreparedStatement criado = con.prepareStatement("INSERT INTO FUNCIONARIO (Utilizador, PalavraPasse) VALUES (`" + utilizador + "`,`" + palavra_pass + "`)");
		criado.executeUpdate(); // -- recebe manipulação  
		} catch (Exception e){
			System.out.println(e);
		} finally { System.out.println("Informação atualizada.");}
	}
		
	public static ArrayList<String> pesquisarUtilizador() throws Exception {
		try {
		Connection con = getConnection();
		PreparedStatement statement = con.prepareStatement("SELECT Utilizador, PalavraPasse FROM FUNCIONARIO");
		
		ResultSet resultado = statement.executeQuery(); // -- recebe informação
		
		ArrayList<String> lista = new ArrayList<String>();
		while(resultado.next()) {
			System.out.print(resultado.getString("Utilizador"));
			System.out.print(" ");
			System.out.println(resultado.getString("PalavraPasse"));
			
			lista.add(resultado.getString("Utilizador"));
		}
		System.out.println("Todos os utilizadores foram selecionados.");
		
		return lista;

		} catch (Exception e){
			System.out.println(e);
			return null; } 
	}
}

