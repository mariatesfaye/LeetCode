class Solution(object):
    def judgePoint24(self, cards):
        """
        :type cards: List[int]
        :rtype: bool
        """
        def solve(numbers):
            if len(numbers) == 1:
                # Check if the final number is close to 24 (within 0.0001 for floating-point precision)
                return abs(numbers[0] - 24.0) < 1e-4
            
            # Try all pairs of numbers
            for i in range(len(numbers)):
                for j in range(i + 1, len(numbers)):
                    a, b = numbers[i], numbers[j]
                    # Create new list excluding the two chosen numbers
                    next_numbers = [numbers[k] for k in range(len(numbers)) if k != i and k != j]
                    
                    # Try all possible operations
                    # Addition: a + b
                    if solve(next_numbers + [a + b]):
                        return True
                    # Subtraction: a - b and b - a
                    if solve(next_numbers + [a - b]) or solve(next_numbers + [b - a]):
                        return True
                    # Multiplication: a * b
                    if solve(next_numbers + [a * b]):
                        return True
                    # Division: a / b and b / a, but only if divisor is not zero
                    if b != 0 and solve(next_numbers + [a / b]):
                        return True
                    if a != 0 and solve(next_numbers + [b / a]):
                        return True
            return False
        
        # Convert cards to float to handle division correctly
        return solve([float(card) for card in cards])