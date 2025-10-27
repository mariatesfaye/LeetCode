SELECT 
    ROUND(
        COUNT(DISTINCT a.player_id) / COUNT(DISTINCT f.player_id),
        2
    ) AS fraction
FROM Activity f
LEFT JOIN Activity a
    ON f.player_id = a.player_id
    AND a.event_date = DATE_ADD(
        (SELECT MIN(event_date) FROM Activity af WHERE af.player_id = f.player_id),
        INTERVAL 1 DAY
    )
WHERE f.event_date = (SELECT MIN(event_date) FROM Activity af WHERE af.player_id = f.player_id);
