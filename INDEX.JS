$(document).ready(function(){

//ajouter li a la bare nav
const myul=document.getElementById('myul')
var new_li=document.createElement('li')
new_li.innerHTML='<a href="">link</a>'   		
myul.appendChild(new_li)
console.log('new_li')

var new_li2=document.createElement('li')
new_li2.innerHTML='<a href="">service</a>'
myul.appendChild(new_li2)

/*const mylist=document.getElementbyI('jf')
const fruitlist=["banane","orange","citron"]
for(var fruit of fritlist){
	var newlistItem=document.createElement('li')
	newListItem.textcontent=fruit
	mylist.appendchild(newListItem)
}

//faire un peu d'animation dans notre page
//on va creer une const qui va recuperer la quantite scrollée
window.addEventListener('scroll',()=>{
	console.log('scroll!')
//recuperer la quantite  scrolleé
	var height=$scroll.val()
	if(height>160 px){
		body.style(background:'pink')

	}
})



*/

//verification que mes champs sont bien remplit

 
 var btn=$('#button')

btn.click(verif)
function verif(){
	var prenom_saisie=$('#prenom').val()
    var nom_saisie=$('#nom').val()
    var mail_saisie=$('#mail').val()
    
    event.preventDefault();
	
	

   	/* for(var index=0;index<myInputs.length;index++)
    {
		if (myInputs[index].value=='')
		{
			myInputs[index].focus();
			myInputs[index].style.background='#E8080';
		    
		}else
		    {  
		    myInputs[index].style.background='white';
	        } 
    } */


//Creer une ligne dans mon tableau
var tr_new= document.createElement('tr')
var td1_new=document.createElement('td')
var td2_new=document.createElement('td')
var td3_new=document.createElement('td')
var td4_new=document.createElement('td')
var td5_new=document.createElement('td')
var td6_new=document.createElement('td')


//RECUPERER MES BOUTONS
/*var nombre_etudiant=

 numero_etudiant.setAttribute()*/

//recuperer id et les boutton de mon tableau
var nombre_id=document.getElementById('my_array').getElementsByTagName('tr').length
console.log(nombre_id)
var supprimer=document.getElementsByClassName('supp')
var modifier=document.getElementsByClassName('modif')

var btn_modif=document.createElement('button')
btn_modif.setAttribute('class',"modif")
btn_modif.innerHTML='modifier'

var btn_supp=document.createElement('button')
btn_supp.setAttribute('class',"supp")
btn_supp.innerHTML='supprimer'




//btn.innerText='modifier'
var ID =document.createTextNode(nombre_id)
console.log(ID)
var prenoms=document.createTextNode(prenom_saisie)
var noms=document.createTextNode(nom_saisie)
var mails=document.createTextNode(mail_saisie)
//var btn_devar=document.createTextNode(supprimer)
//var btn_change=document.createTextNode(modifier)
//td5_new.innerHTML =supprimer.value

console.log(modifier)
//var test6=document.createTextNode("modifier")
//var test5=document.createTextNode("supprimer")

td1_new.appendChild(ID)
td2_new.appendChild(prenoms)
td3_new.appendChild(noms)
td4_new.appendChild(mails)
td5_new.appendChild(btn_supp)
td6_new.appendChild(btn_modif)


tr_new.appendChild(td1_new);
tr_new.appendChild(td2_new);
tr_new.appendChild(td3_new);
tr_new.appendChild(td4_new);
tr_new.appendChild(td5_new);
tr_new.appendChild(td6_new);





//td1_new.createTextNode(numero_etudiant.value)
/*console.log('cc')
td2_new.innerHTML =prenom_saisie.value
td3_new.innerHTML =nom_saisie.value
td4_new.innerHTML =mail_saisie.value
td6_new.innerHTML =modifier.value*/
//td5_new.innerHTML =supprimer.value


var mon_tableau=document.getElementById('my_array')
//ajouter ma ligne a mon tableau
mon_tableau.appendChild(tr_new);
    console.log(mon_tableau) 


//supprimer une ligne


var btn1=$('.supp')
btn1.click(confirmer)
	function confirmer(){
var confirme=prompt('êtes-vous sûr de vouloir supprimer')
var reponse= confirme
}                  
/*if reponse==ok{
	var line=document.getElementById("my_array").this parent
	mon_tableau.pop
	
	}else{break}

*/
//recuperer le boutton modifier 
var btn2=$('.modif')
btn2.click(change) 
function change(){
	//var changer=$
	
}
//verifier si E-mail est valide

var index= 0;
for(var index= 0; index<mon_tableau.length; index++){

	if(mail_saisie=mail_saisie[index]){
		console.log(mail_saisie)

alert('cet E-mail existe deja')
	}
	else{
		return true
	}




}



}

                            })









