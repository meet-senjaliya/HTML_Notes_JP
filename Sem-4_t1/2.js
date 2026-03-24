/*
Write a code to fetch the values of keys and print a sentance as 
"Hi ! We are students of semester 4 & CSE branch "
*/

const a = {
    "A": "LJU",
    "B":["CSE","IT","CE"],
    "C":[{
        "D":"Hi",
        "E":['are',4,{'f':['semester','We']}]
    }],

    'G':{
        "H":"students",
        "I":["of","!"]
    },

    "j":[{"k":'Python',"L":"branch"},"FSD-2"]
}
console.log(
  a.C[0].D + a.G.I[1] + " " + a.C[0].E[2].f[1] + " " + a.C[0].E[0],
);
