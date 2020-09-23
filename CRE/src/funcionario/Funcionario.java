package funcionario;

import java.util.ArrayList;
import java.util.List;

import encomenda.Encomenda;

public class Funcionario {
	
	private static int refCounter;
	private int refFuncionario;
	
	private String utilizador;
	private String palavra_pass;
	
	private Departamento departamento;
	private String nomeFuncionario;
	
	
	public Funcionario(String utilizador, String palavra_passe, Departamento departamento, String nome) {
		refCounter += 1;
		refFuncionario = refCounter;
		
		this.nomeFuncionario = nome;
		this.departamento = departamento;
	}

	//
	public int getRefFuncionario() {
		return refFuncionario;
	}

	public String getUtilizador() {
		return utilizador;
	}

	public void setUtilizador(String utilizador) {
		this.utilizador = utilizador;
	}

	public String getPalavra_pass() {
		return palavra_pass;
	}

	public void setPalavra_pass(String palavra_pass) {
		this.palavra_pass = palavra_pass;
	}

	public Departamento getDepartamento() {
		return departamento;
	}

	public void setDepartamento(Departamento departamento) {
		this.departamento = departamento;
	}

	public String getNomeFuncionario() {
		return nomeFuncionario;
	}

	public void setNomeFuncionario(String nomeFuncionario) {
		this.nomeFuncionario = nomeFuncionario;
	}
}
