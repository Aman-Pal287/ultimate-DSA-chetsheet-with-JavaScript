//! Tower Of Hanoi

/**
 * Print steps to solve Tower of Hanoi
 * @param {number} n - Number of disks
 * @param {string} source - Starting poll
 * @param {string} destination - Destination poll
 * @param {string} auxiliary - Auxiliary poll
 */
function towerOfHanoi(n, source, destination, auxiliary) {
    if (n == 1) {
        console.log("Move disk 1 from " + source + " to " + destination)
        return
    }
    towerOfHanoi(n - 1, source, auxiliary, destination)
    console.log("Move Disk " + n + " from " + " to " + destination)
    towerOfHanoi(n - 1, auxiliary, destination, source)
}
