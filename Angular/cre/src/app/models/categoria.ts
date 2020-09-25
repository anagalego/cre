export class Categoria {
    id: number;
    categoria: String;
    x: number;
    y: number;
    z: number = 0;
    area: number;

    calcularArea(){
        this.area = this.x * this.y;
    }

    Categoria(id: number, categoria: String, x: number, y: number, z: number){
        this.id = id;
        this.categoria = categoria;
        this.x = x;
        this.y = y;
        this.z = z;
    }
}




    	    