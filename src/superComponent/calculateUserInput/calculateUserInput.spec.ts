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