//   Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeTwoSortedLists(l1 : ListNode | null, l2 : ListNode | null) : ListNode | null {
    let dummy = new ListNode(-1);
    let current  = dummy;

    while (l1 !== null  && l2  !== null) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next
        }else {
            current.next = l2;
            l2 = l2.next
        }
        current = current.next
    }

    current.next = l1 !== null ? l1 : l2

    return dummy.next
}

const ll1 = new ListNode(1, new ListNode(2, new ListNode(5)));
const ll2 = new ListNode(1, new ListNode(3, new ListNode(4)))


// console.log(JSON.stringify(mergeTwoSortedLists(ll1, ll2)))



function advanceMergeSortedList (l1 : ListNode | null, l2 : ListNode | null) : ListNode | null {

    let dummy = new ListNode(0)
    let current = dummy;

    const array = [];

    while (l1) {
        array.push(l1.val)
        l1 = l1.next
    }

    while (l2) {
        array.push(l2.val)
        l2 = l2.next
    }

    console.log(array)

    const tobeSort = array.sort((a,b) => a-b)
    console.log(tobeSort,"jalsfj ")

    for(let x of tobeSort) {
        current.next = new ListNode(x);
        current = current.next
    }

    return dummy.next;
}

const al1 = new ListNode(1, new ListNode(2, new ListNode(5)));
const al2 = new ListNode(1, new ListNode(3, new ListNode(4)))


console.log(JSON.stringify(advanceMergeSortedList(al1, al2)))


