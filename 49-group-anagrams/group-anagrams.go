import (
    "sort"
    "strings"
)

func groupAnagrams(strs []string) [][]string {
    groups := make(map[string][]string)

    for _, s := range strs {
        chars := strings.Split(s, "")
        sort.Strings(chars)
        key := strings.Join(chars, "")

        groups[key] = append(groups[key], s)
    }

    res := make([][]string, 0, len(groups))
    for _, g := range groups {
        res = append(res, g)
    }

    return res
}
