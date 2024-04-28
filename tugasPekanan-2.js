// Nomor 1
console.log('**Nomor 1')
const x = parseInt(prompt("Masukkan nilai x:"));

if (x < 0) {
    console.error('Tidak bisa input bilangan negatif')
} else if (x % 2 === 1) {
    console.error('Tidak bisa input bilangan ganjil')
} else {
    const resultNumber1 = Math.sqrt(x)
    
    console.log('Hasilnya adalah: ', resultNumber1)
}

// Nomor 2
console.log('\n**Nomor 2')
let productBin = {
  "requestId": null,
  "data": [
    {
      "id": 100000057465,
      "storageId": 10000008207,
      "code": "A01-01-01-A",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 76,
      "createdTime": "2021-12-21T13:54:48Z",
    },
    {
      "id": 100000057466,
      "storageId": 10000002181,
      "code": "A01-01-01-B",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 71,
      "createdTime": "2021-12-21T13:54:48Z",
    },
    {
      "id": 100000065224,
      "storageId": 10000008884,
      "code": "Tgt00-A-A-01",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 10,
      "createdTime": "2022-02-08T10:35:19Z",
    }
  ],
  "message": "success"
}

let resultNumber2 = 0

productBin.data.forEach((product) => {
    if (product.productCode === 'FBR00040101' && product.productName === 'FloBrand-DressBSPink') {
        resultNumber2 += product.storageId
    }
})

console.log('Hasil quantity dari productCode FBR00040101 (FloBrand-DressBSPink) adalah ', resultNumber2)