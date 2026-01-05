class Solution(object):
    def accountsMerge(self, accounts):
        parent = {}
        email_to_name = {}
        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]

        def union(x, y):
            parent[find(x)] = find(y)
        for account in accounts:
            name = account[0]
            for email in account[1:]:
                parent.setdefault(email, email)
                email_to_name[email] = name
            for email in account[2:]:
                union(account[1], email)
        groups = {}
        for email in parent:
            root = find(email)
            groups.setdefault(root, []).append(email)
        res = []
        for root, emails in groups.items():
            res.append([email_to_name[root]] + sorted(emails))

        return res
