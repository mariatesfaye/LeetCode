class Solution {
    public int divide(int dividend, int divisor) {

        int MAX_INT = Integer.MAX_VALUE;
        int MIN_INT = Integer.MIN_VALUE; 

        if (dividend == MIN_INT && divisor == -1) {
            return MAX_INT;
        }

        long absDividend = Math.abs((long) dividend);
        long absDivisor = Math.abs((long) divisor);
        int sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1; 

        long quotient = 0;

        while (absDividend >= absDivisor) {
            long tempDivisor = absDivisor;
            long multiple = 1;

            while (absDividend >= (tempDivisor << 1) && (tempDivisor << 1) > 0) {
                tempDivisor <<= 1;
                multiple <<= 1;   
            }

            absDividend -= tempDivisor;
            quotient += multiple;
        }

        quotient = sign == -1 ? -quotient : quotient;
 
        if (quotient > MAX_INT) {
            return MAX_INT;
        }
        if (quotient < MIN_INT) {
            return MIN_INT;
        }
        
        return (int) quotient;
    }
}