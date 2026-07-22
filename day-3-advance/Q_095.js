class LRUCache {
  constructor(limit) {
    this.limit = limit
    this.cache = new Map()
  }
  get(key) {
    if (!this.cache.has(key)) {
      return -1
    }
    const value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, value)
    return value
  }
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    }
    this.cache.set(key, value)
    if (this.cache.size > this.limit) {
      const firstKey = this.cache.keys().next().value
      this.cache.delete(firstKey)
    }
  }
}

const cache = new LRUCache(3)

cache.put(1, "Apple")
cache.put(2, "Banana")
cache.put(3, "Orange")

console.log(cache.cache)
console.log(cache.get(1))
cache.put(4, "Mango")
console.log(cache.cache)