import {expect, it, describe} from "vitest";
import {calculateUserInput} from "./calculateUserInput.ts";

describe('calculateUserInput', () => {
    it('should be properly calculated user input', () => {
        const result = calculateUserInput([1,2])

        expect(result).toBe(3)
    })

    it('should return 0 if user not provide any input', () => {
        const result = calculateUserInput([])

        expect(result).toBe(0)
    })
})

describe('calculateUserInput', () => {
    it('should return last one element from array', () => {
        const arr = [1,2,3,4]
        const lastElement = arr[arr.length-1]

        expect(lastElement).toBe(4)
    })
})