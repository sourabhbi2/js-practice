 console.log(null > 0)
 console.log(null == 0) // equality check works differently than comparision
 console.log(null >= 0) // output -> true -> because in js comparisons convert null to a number, treated it as 0.
 
 // ===
 console.log("2" === 2) // === strict check so output -> false

 //undefined
 console.log(undefined == 0)
 console.log(undefined > 0)
 console.log(undefined >= 0)