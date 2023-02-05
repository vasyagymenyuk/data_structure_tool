const { DataStructureTool } = require('./index')

const users = [
  { id: 234, name: 'vasya', branchId: 145 },
  { id: 235, name: 'dima', branchId: 146 }
]

// EXAMPLE FOR structsFromArrayByKey METHOD
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

// ======================================== //