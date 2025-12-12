var MyHashSet = function() {
    this.size = 1009;
    this.buckets = Array.from({ length: this.size }, () => []);
};

MyHashSet.prototype._hash = function(key) {
    return key % this.size;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    const idx = this._hash(key);
    const bucket = this.buckets[idx];

    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i] === key) return;
    }

    bucket.push(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const idx = this._hash(key);
    const bucket = this.buckets[idx];

    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i] === key) {
            bucket.splice(i, 1);
            return;
        }
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    const idx = this._hash(key);
    const bucket = this.buckets[idx];

    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i] === key) return true;
    }
    return false;
};
