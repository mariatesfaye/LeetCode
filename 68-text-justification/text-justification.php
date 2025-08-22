class Solution {

    /**
     * @param String[] $words
     * @param Integer $maxWidth
     * @return String[]
     */
    function fullJustify($words, $maxWidth) {
        $res = [];
        $i = 0;
        $n = count($words);

        while ($i < $n) {
            $lineLen = strlen($words[$i]);
            $j = $i + 1;

            while ($j < $n && ($lineLen + 1 + strlen($words[$j])) <= $maxWidth) {
                $lineLen += 1 + strlen($words[$j]); 
                $j++;
            }

            $lineWords = array_slice($words, $i, $j - $i);
            $numWords = count($lineWords);
            $isLastLine = $j == $n;

            if ($numWords == 1 || $isLastLine) {
                $line = implode(' ', $lineWords);
                $line .= str_repeat(' ', $maxWidth - strlen($line));
            } else {
                $totalChars = array_sum(array_map('strlen', $lineWords));
                $totalSpaces = $maxWidth - $totalChars;
                $spacesBetween = $numWords - 1;

                $evenSpace = intdiv($totalSpaces, $spacesBetween);
                $extraSpace = $totalSpaces % $spacesBetween;

                $line = '';
                for ($k = 0; $k < $spacesBetween; $k++) {
                    $line .= $lineWords[$k];
                    $line .= str_repeat(' ', $evenSpace + ($k < $extraSpace ? 1 : 0));
                }
                $line .= $lineWords[$spacesBetween]; 
            }

            $res[] = $line;
            $i = $j;
        }

        return $res;
    }
}
