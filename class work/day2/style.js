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

// function sum(n)
// {
//     let sum=0;
//     for (let i = 1 ; i<= n ; i ++)
//     {
//         sum += i;                                                            /// 4  
//     }
//     console.log(sum);
// }

//   sum(4);
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
// --------------------------------------------------------------------------------------------------------------

// function get(a,b){
//     let cnt=0
//    for(let i=a; i<=b; i++)
//    {
//     if(i%2==0){
//         cnt++;                                                     /// 6 ! ! ! ! ! ! ! ! ! ! ! 
//     }
//    }
//    return cnt;
// }
// console.log(get(-14,-18));

// --------------------------------------------------------------------------------------------------------------