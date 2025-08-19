char* countAndSay(int n) {
    if (n == 1) {
        char* result = (char*)malloc(2 * sizeof(char));
        result[0] = '1';
        result[1] = '\0';
        return result;
    }

    char* prev = countAndSay(n - 1);
    int len = strlen(prev);

    char* result = (char*)malloc((2 * len + 1) * sizeof(char));
    int result_idx = 0;
    int count = 1;
    char current_digit = prev[0];

    for (int i = 1; i < len; i++) {
        if (prev[i] == current_digit) {
            count++;
        } else {
            result[result_idx++] = '0' + count; 
            result[result_idx++] = current_digit;
            current_digit = prev[i];
            count = 1;
        }
    }

    result[result_idx++] = '0' + count;
    result[result_idx++] = current_digit;
    result[result_idx] = '\0';

    free(prev);
    
    return result;
}