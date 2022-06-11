# Repositorio Aprendiendo JavaScript desde Cero

Toda la información que se esta ocupando para alimentar este repositorio es tomada desde W3school en la rama de estudio JavaScript, cada tema que se abarca se separa en documentos JS por separado junto a un nombre corto y conciso para localizarlo rápidamente, lo nutro día a día ya que con esto estoy aprendiendo por mi cuenta Javascript 🤯  
[W3SCHOOLS - JS](https://www.w3schools.com/js/default.asp)  

# Temario
### 1 - [Variables](https://www.w3schools.com/js/js_variables.asp)  


```javascript
# var referencia para variables globales
{
var nombre = "Steven"; // Funcionara por dentro
}
//Funcionara por fuera de un bloque de código ya que es global


# let referencia para que funcionen con Scope local o global
{
let nombre = "Steven"; // Funcionara por dentro
}
//No funcionara fuera del bloque de codigo ya que se inicializo dentro del bloque


# const referencia para ocupar variables no modificables e igual Scope que let

{
const nombre = "Steven";
}
/* No permite asignar un nuevo valor a variables con const, 
y ocupa el mismo scope que una variable creada con let */
```

### 2 - [Aritmetica](https://www.w3schools.com/js/js_arithmetic.asp) 

```javascript
# Precedencia de operadores ya que si ocupamos una suma dentro de paréntesis se ejecutara primero
//No teniendo en cuenta la precedencia de operadores
console.log(10 + 5 * 2); // 20

//Teniendo en cuenta la precedencia de operadores
console.log((10+5)*2); // 30
```

### 3 - [Operadores Aritmeticos](https://www.w3schools.com/js/js_operators.asp) 

```javascript
# Operadores     #Ejemplo         #Es igual que  

    +=            x += y           x = x + y       Sumar           5 + 5
    -=            x -= y           x = x - y       Restar          5 - 5
    *=            x *= y           x = x * y       Multiplicar     5 * 5
    /=            x /= y           x = x / y       Dividir         5 / 5
    %=            x %= y           x = x % y       Resto, residuo  5 % 5
    **=           x **= y          x = x ** y      Potencia        5 x 5 x 5 x 5 x 5 

# Operadores de comparación

    ==   Igual a
    ===  Igual a con tipo de dato y valor "comparación mas estricta"
    !=   No es igual al valor con el que se esta comparando lo opuesto
    !=== La misma comparación anterior pero validando el tipo de dato
    >    Mayor que
    <    Menor que
    >=   Mayor o igual que
    <=   Menor o igual que
    ?    Operador ternario

# Operadores Logicos

    && Evalúa varias comparaciones ((a && b) >= c)
    || Este operador lógico compara dos expresiones. Si la primera se  
       evalúa como "falsa", la sentencia devolverá el valor de la segunda  
       expresión. Si la primera se evalúa como "verdadera", la sentencia 
       devolverá el valor de la primera expresión.
    ! Convierte true en false y false en true si lo ocupamos, si no es convertible
      a gi





hecho por Steven Lopez 😶‍🌫️
