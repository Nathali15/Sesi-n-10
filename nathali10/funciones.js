function mostrarValores(){

    let nombre = "Nathali";
    let edad = 26;
    let esEstudiante = true;
    document.write("Nombre: ", nombre, "<br>");
    document.write("Edad: ", edad, "<br>");
    document.write("Es estudiante: ", esEstudiante, "<br><br>");
    
    nombre = "Anibal";
    edad = 30;
    esEstudiante = false;
    document.write("Nombre: ", nombre, "<br>");
    document.write("Edad: ", edad, "<br>");
    document.write("Es estudiante: ", esEstudiante, "<br><br>");
    }

    function operacionesMatematicas() {
        let a = 10;
        let b = 5;
        suma = a+b;
        resta = a-b;
        multiplicacion = a*b;
        division =  a/b;
        document.write("Suma: ",suma, "<br>");
        document.write("Resta: ",resta, "<br>");
        document.write("Multiplicacion: ",multiplicacion, "<br>");
        document.write("División: ",division, "<br>");

        document.write("A es mayor que B: ", (a>b),"<br>");
        document.write("A es menor que B: ", (a<b),"<br>");
        document.write("A es igual a B: ", (a==b),"<br>");
        document.write("A es igual o mayor a B: ", (a>=b),"<br>");
        document.write("A es igual o menor a B= ", (a<=b),"<br>");
        document.write("A es diferente a B: ", (a!=b),"<br>");
    }
    
    function verificarConduccion(){
        let esMayorEdad= true;
        let tieneLicencia= true;
        if (esMayorEdad&&tieneLicencia){
            document.write("Puede conducir")
        }else {
            document.write("No puede conducir")
        }
    }