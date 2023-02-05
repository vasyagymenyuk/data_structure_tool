# Data Structure Tool

There is some example of usage DataStructureTool

const DataStructureTool = require('./index')

// EXAMPLE FOR structsFromArrayByKey METHOD
```JavaScript
const users = [
  { id: 234, name: 'vasya', branchId: 145 },
  { id: 235, name: 'dima', branchId: 146 }
]

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

const state = {
  user: {
    nameById,
    branchIdByName
  },
  branches: {
    allBranchIds
  }
}

console.log(state.user.nameById)
console.log(state.user.branchIdByName)
console.log(state.branches.allBranchIds)

```

// ======================================== //

EXAMPLE FOR mapFromArrayByKey METHOD

```JavaScript
const persons = [
  { id: 234, name: 'vasya', branchId: 145 },
  { id: 235, name: 'dima', branchId: 146 }
]

const persById = DataStructureTool.mapFromArrayByKey({
  arr: persons,
  key: 'name',
  valKey: 'id'
})

console.log(persById)
```
