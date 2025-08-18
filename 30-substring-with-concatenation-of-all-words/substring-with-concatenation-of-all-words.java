class Solution {
    public List<Integer> findSubstring(String s, String[] words) {
        List<Integer> result = new ArrayList<>();
        
        // Edge cases
        if (s.isEmpty() || words.length == 0) {
            return result;
        }
        
        int wordLen = words[0].length();
        int numWords = words.length;
        int windowLen = wordLen * numWords;
        
        if (windowLen > s.length()) {
            return result;
        }
        
        // Create frequency map for words
        Map<String, Integer> wordCount = new HashMap<>();
        for (String word : words) {
            wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
        }
        
        // Check each possible offset (0 to wordLen-1)
        for (int offset = 0; offset < wordLen; offset++) {
            // Initialize sliding window
            Map<String, Integer> seen = new HashMap<>();
            int count = 0; // Number of valid words in current window
            int start = offset; // Start of current window
            
            // Slide window by wordLen
            for (int i = offset; i <= s.length() - wordLen; i += wordLen) {
                // Get current word
                String currWord = s.substring(i, i + wordLen);
                
                // Add to seen map
                if (wordCount.containsKey(currWord)) {
                    seen.put(currWord, seen.getOrDefault(currWord, 0) + 1);
                    count++;
                    
                    // Shrink window if it has too many words
                    while (count > numWords || seen.get(currWord) > wordCount.get(currWord)) {
                        String leftWord = s.substring(start, start + wordLen);
                        seen.put(leftWord, seen.get(leftWord) - 1);
                        if (seen.get(leftWord) == 0) {
                            seen.remove(leftWord);
                        }
                        count--;
                        start += wordLen;
                    }
                    
                    // If window has exactly numWords and matches wordCount
                    if (count == numWords && i - start + wordLen == windowLen) {
                        result.add(start);
                    }
                } else {
                    // Invalid word, reset window
                    seen.clear();
                    count = 0;
                    start = i + wordLen;
                }
            }
        }
        
        return result;
    }
}