package encomenda;

public enum Estado {
	NOVA("Nova"),
	IMPORTANTE("Importante"),
	ATRASADA("Atrasada"),
	ENTREGA("Entrega"),
	PROJETO_ESPECIAL("Projeto Especial"),
	NA("");

	
	private String estado;
	
	private Estado(String estado) {
		this.estado = estado;
	}
	
	public String getEstado() {
		return estado;
	}
}
