
class Libro{
    isbn:String;
    titulo:String;
    autor:String;
    editorial:String;
    npaginas:String;

    constructor(isbn:String,titulo:String,autor:String,editorial:String,npaginas:String){
        this.isbn=isbn;
        this.titulo=titulo;
        this.autor=autor;
        this.editorial=editorial;
        this.npaginas=npaginas;
    }
}
let n:number=1;
function addtabla(isbn:String,tit:String,autor:String,edit:String,npag:String){
    let hola:string= "<tr><td>"+n+"</td><td>"+isbn+"</td><td>"+tit+"</td><td>"+autor+"</td><td>"+edit+"</td><td>"+npag+"</td></tr>"
    let ada = document.createElement("tr");
    ada.innerHTML=hola;
    document.getElementById("tablabody")?.appendChild(ada);
    n++;
} 
document.getElementById('submit')?.addEventListener('click',function(e){
    let isbn:String = (document.getElementById("isbn") as HTMLInputElement).value;
    let tit:String = (document.getElementById("titulo") as HTMLInputElement).value;
    let autor:String = (document.getElementById("autor") as HTMLInputElement).value;
    let edit:String = (document.getElementById("editorial") as HTMLInputElement).value;
    let npag:String = (document.getElementById("npaginas") as HTMLInputElement).value;
    addtabla(isbn,tit,autor,edit,npag);
    limpiar();
    e.preventDefault();
});  
function limpiar(){
    (document.getElementById("isbn") as HTMLInputElement).value="";
    (document.getElementById("titulo") as HTMLInputElement).value="";
    (document.getElementById("autor") as HTMLInputElement).value="";
    (document.getElementById("editorial") as HTMLInputElement).value="";
    (document.getElementById("npaginas") as HTMLInputElement).value="";
    (document.getElementById("isbn") as HTMLInputElement).focus();

}