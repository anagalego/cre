package cliente;

import java.util.ArrayList;
import java.util.List;

import encomenda.Encomenda;

public class Cliente {
	
	private static int refCounter;
	private int refCliente;
	
	private String nomeCliente = "Sem nome";
	private int nif = 000000000;
	private String moradaFiscal;
	private String email = "Sem e-mail";
	private int contacto = 000000000;

	
	private static List<Cliente> listaClientes = new ArrayList<>();
	private List<Encomenda> listaEncomendasCliente = new ArrayList<>();
	
	
	public Cliente(String nomeCliente, int nif, String moradaFiscal, String email, int contacto) {
		this.nomeCliente = nomeCliente;
		this.nif= nif;
		this.moradaFiscal = moradaFiscal;
		this.email = email;
		this.contacto = contacto;
		
		refCounter += 1;
		refCliente = refCounter;
		
		listaClientes.add(this);
	}
		
	
	
	//ADICIONAR ENCOMENDA
	public void adicionarEncomenda(Encomenda encomenda) {
		encomenda.setCliente(this);
		listaEncomendasCliente.add(encomenda);
	}
	
	//REMOVER ENCOMENDA
	public void removerEncomenda(Encomenda encomenda) {
		listaEncomendasCliente.remove(encomenda);
	}
	
	
	
	/////
	
	@Override
	
	public String toString() {
		return "\n" + "CLIENTE  " + this.getRefCliente() + "  " + this.getNomeCliente();
	}
	
	
	
	
	/////
	

	public int getRefCliente() {
		return refCliente;
	}
	
	public String getNomeCliente() {
		return nomeCliente;
	}
	
	public int getNif() {
		return nif;
	}
	
	public String getMoradaFiscal() {
		return moradaFiscal;
	}
	
	public String getEmail() {
		return email;
	}
	
	public int getContacto() {
		return contacto;
	}
	
	public List<Cliente> getListaClientes() {
		return listaClientes;
	}
	
	public List<Encomenda> getListaEncomendasCliente() {
		return listaEncomendasCliente;
	}
	
	
}
