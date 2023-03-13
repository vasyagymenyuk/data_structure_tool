# Data Structure Tool

There is some examples of usage DataStructureTool

```JavaScript
const DataStructureTool = require('./index')

```

- EXAMPLE FOR structsFromArrayByKey METHOD

```JavaScript
const users = []

for (let i = 0; i < 1000; i++) {
  users.push({ id: i, name: `User ${i}`, branchId: (i % 100) + 3 })
}


const [nameById, branchIdByName, allBranchIds] = DataStructureTool.structsFromArrayByKey({
  arr: users,
  structs: [
    {
      key: 'id',
      valKey: 'name',
      type: 'map'
    },
    {
      key: 'name',
      valKey: 'branchId',
      type: 'map'
    },
    {
      key: 'branchId',
      type: 'set'
    }
  ]
})

console.log(nameById)
console.log(branchIdByName)
console.log(allBranchIds)

```

// ======================================== //

- EXAMPLE FOR mapFromArrayByKey METHOD

```JavaScript
const persById = DataStructureTool.mapFromArrayByKey({
  arr: users,
  key: 'name',
  valKey: 'id'
})

console.log(persById)
```
