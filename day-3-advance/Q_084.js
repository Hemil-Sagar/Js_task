const inventory = [
  { name: "potato", type: "vegetables" },
  { name: "fish", type: "meat" },
  { name: "bananas", type: "fruit" },
]

const groupbyType = Object.groupBy(inventory, (item) => item.type)
console.log(groupbyType)
console.log(groupbyType.fruit)