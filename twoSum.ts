
// IMPORTANT MAP CANNOT BE THE SAME KEYS IT ONLY 1 KEY

function twoSum(nums: number[], target: number): number[] {
    // Store numbers and their indices for quick lookup
    const dataValue = new Map<number, number>();

    for (let x = 0; x < nums.length; x++) {
        // Calculate the complement needed to reach the target
        const data = target - nums[x]

        if (dataValue.has(data)) {
            // If complement exists, return the pair of indices
            return [Number(dataValue.get(data)), x]
        }

        // Store current number and its index in the map
        dataValue.set(nums[x], x)
    }

    return [];
};

// MY CODE
function advancedTwoSum(nums: number[], target: number): number[][] {
    const dataValue = new Map<number, number>();

    const resultArray: number[][] = []

    for (let x = 0; x < nums.length; x++) {
        const data = target - nums[x]

        if (Array.from(dataValue.values()).includes(data)) {
            const allEqual: number[][] = []

            dataValue.forEach((value, key) => {
                if (value === data) {
                    allEqual.push([key, x])
                }
            })

            resultArray.push(...allEqual)
        }

        dataValue.set(x, nums[x])
    }

    return resultArray
}

// CHATGPT CODE
function advancedTwoSumAI(nums: number[], target: number): number[][] {
    const map = new Map<number, number[]>(); // number -> list of indices
    const result: number[][] = [];

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // If we already have the complement stored, create pairs
        if (map.has(complement)) {
            for (const index of map.get(complement)!) {
                result.push([index, i]);
            }
        }

        // Store current number and its index
        if (!map.has(nums[i])) {
            map.set(nums[i], []);
        }
        map.get(nums[i])!.push(i);
    }

    return result;
}


// Normal twoSum
// console.log(twoSum([8, 7, 2, 15], 9))

// Advanced twoSum
console.log(advancedTwoSum([1, 1, 8, 1], 9))
console.log(advancedTwoSumAI([1, 1, 8, 1], 9))
