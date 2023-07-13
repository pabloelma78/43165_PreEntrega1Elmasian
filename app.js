const alumno1 = "Pablo";
const alumno2 = "Pedro";
const alumno3 = "Tomas";
const alumno4 = "Lorena";
const alumno5 = "Laura";
const alumno6 = "Lia";
const alumno7 = "Emiliano";
const constantes = [alumno1,alumno2,alumno3,alumno4,alumno5,alumno6,alumno7]
console.log("Listado de alumnos que rindieron el examen:")
for (let i=0; i < constantes.length; i++){
    console.log(constantes[i]);
}
let nota1 = prompt("ingrese nota del alumno " + alumno1);
let nota2 = prompt("ingrese nota del alumno " + alumno2);
let nota3 = prompt("ingrese nota del alumno " + alumno3);
let nota4 = prompt("ingrese nota del alumno " + alumno4);
let nota5 = prompt("ingrese nota del alumno " + alumno5);
let nota6 = prompt("ingrese nota del alumno " + alumno6);
let nota7 = prompt("ingrese nota del alumno " + alumno7);

console.log("Los siguientes alumno aprobaron el examen:")
if(nota1>=6){
    console.log(alumno1)
}
if(nota2>=6){
    console.log(alumno2)
}
if(nota3>=6){
    console.log(alumno3)
}
if(nota4>=6){
    console.log(alumno4)
}
if(nota5>=6){
    console.log(alumno5)
}
if(nota6>=6){
    console.log(alumno6)
}
if(nota7>=6){
    console.log(alumno7)
}

function mejoresAlumnos (a,b,c,d,e,f,g){
    let maximo=Math.max(a,b,c,d,e,f,g);
    if(a==maximo){
        console.log(alumno1 + " Nota " + nota1)
    }
    if(b==maximo){
        console.log(alumno2 + " Nota " + nota2)
    }
    if(c==maximo){
        console.log(alumno3 + " Nota " + nota3)
    }
    if(d==maximo){
        console.log(alumno4 + " Nota " + nota4)
    }
    if(e==maximo){
        console.log(alumno5 + " Nota " + nota5)
    }
    if(f==maximo){
        console.log(alumno6 + " Nota " + nota6)
    }
    if(g==maximo){
        console.log(alumno7 + " Nota " + nota7)
    }
}
console.log ("Los alumnos con mejores notas son:")
mejoresAlumnos(nota1,nota2,nota3,nota4,nota5,nota6,nota7);
