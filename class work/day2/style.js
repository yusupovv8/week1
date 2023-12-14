// function check(soat,minut,second)
// {
//     let soatt= soat * 3600 ; 
//     let minutt = minut * 60 ; 
//     let secondd = second
//     if( soatt > minutt && soatt > secondd)
//     {
//         return soat; 
//     }
//     if (minutt > soatt && minutt > secondd)                                      /// 1
//     {
//         return minut ; 
//     }
//     if (secondd > minutt && second > soatt )
//     {
//         return second ; 
//     }
// }
// console.log (check(1, 59, 3598));

// ------------------------------------------------------------------------------------------------------

// function check (n)
// {
//     let three = Math.floor (n % 10) ; 
//     let two = Math.floor (n / 10 % 10) ; 
//     let one = Math.floor (n / 100 % 10) ; 
//     if (one == two || one == three || three == two )
//     {
//         return "true";                                                        /// 2 
//     }    
//     else 
//     {
//         return "false";
//     }
// }
// console.log(check(121));

// -----------------------------------------------------------------------------------------------------------------

// function che(a) {
//     let FirstNumber;
//     let SecondNumber; 
//     FirstNumber = a % 10;                                                    /// 3 
//     SecondNumber = Math.floor(a / 10) % 10;
//     return FirstNumber*10 + SecondNumber < a;
// }
// console.log(che(14));

// ------------------------------------------------------------------------------------------------------------

// function sum(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;                                                            /// 4  
//     }
//     return sum
// }

// console.log(sum(10));;
// --------------------------------------------------------------------------------------------------------------

// function check(a,b,c)
// {
//     if (a == b && a != c )
//     {
//         return "3";
//     }
//     if (a != b && b == c )
//     {                                                                            /// 5
//         return "1";
//     }
//     if (a != b &&a == c )
//     {
//         return 2 ;
//     }
// }
// console.log(check(1,2,1));
// // --------------------------------------------------------------------------------------------------------------

// function all(a,b)
// {
//     let cnt = 0 ; 
//     if (a <= b )
//     {
//         for (let i = a ; i < b ; i ++ )
//         {
//             if (i % 2 == 0 )
//             {
//                 cnt+=i; 
//             }
//         }
//         return cnt ;                                                 /// 6 
//     }
//     else 
//     {
//         for (let i = b ; i <= a ; i ++ )
//         {
//             if (i % 2 == 0 )
//             {
//                 cnt +=i  ; 
//             }
//         }
//         return cnt ; 
//     }
// } 
//     console.log(all(-1, -1 ));

////////////////////////////////////////////////////////////////////////////////////////////////////////

// function all(a,b)
// {
//     let sum = 0 ; 
//     for (let i = 1 ; i <= a ;  i ++ )
//     {                                                                /// 7 
//         sum = sum + Math .pow(i,b) 
//     }
//     return sum ;
// }
// console.log(all(4,3));
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// function all (n )
// {
//     let sum = 0 ; 
//     let minn = - 9999 
//     for (let i = n ; i > 0 ; i /=10)
//     {
//         if ( i% 10 > minn)                                               /// 8 
//         {
//             minn = Math.floor (i % 10)
//         }
//         sum =minn ;
//     }
//     return sum ; 
// }
// console.log(all(1234));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function all(n) {
//     let sum = "" ;
//     for (let i = n; i > 0; i = Math.floor(i / 10)) {
//         sum += i % 10                                                            /// 9 
//     }
//     return sum == n;
// }
// console.log(all(999));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function all(n){
    
//     let num1 = null;
//     let num2 = null;
//     let i = n
//     while(i > 10){
//         num1 = Math.floor(i / 10)
//         num2 = i % 10
//         i = num1 + num2
//     }
//     return i
// }

// console.log(all(666));

function all(n)
{
    
    let sum = 0 ; 
    let sum1 = 0 ; 

    for (let i = n ; i > 0 ;i= Math.floor(i / 10))
    {
        sum = sum + (i % 10) ;
    }
    for (let j = sum ; j > 0 ;j= Math.floor(j / 10))
    {
        sum1 += (j % 10) ;
    }
    return sum1 ; 
}
console.log(all(38));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function all(n)
// {
//     if (n % 1 == 0 && n % n == 0 )
//     {

//     }
    
// }
















