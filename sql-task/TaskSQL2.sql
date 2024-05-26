WITH SubdivisionHierarchy AS (
    
    SELECT 
        id, name, parent_id, 0 AS sub_level
    FROM 
        subdivisions
    WHERE 
        id = (SELECT subdivision_id FROM collaborators WHERE id = 710253)
    
    UNION ALL

    SELECT 
        s.id, s.name, s.parent_id, sh.sub_level + 1
    FROM 
        subdivisions s
    INNER JOIN 
        SubdivisionHierarchy sh ON s.parent_id = sh.id
    WHERE 
        s.id NOT IN (100055, 100059)
),
EmployeeDetails AS (
    
    SELECT 
        c.id, c.name, s.name AS sub_name, c.subdivision_id, sh.sub_level
    FROM 
        collaborators c
    INNER JOIN 
        SubdivisionHierarchy sh ON c.subdivision_id = sh.id
    INNER JOIN 
        subdivisions s ON c.subdivision_id = s.id
    WHERE 
        c.age < 40
),
EmployeeCounts AS (
    
    SELECT 
        c.subdivision_id, COUNT(*) AS colls_count
    FROM 
        collaborators c
    GROUP BY 
        c.subdivision_id
)

SELECT 
    ed.id, ed.name, ed.sub_name, ed.subdivision_id AS sub_id, ed.sub_level, ec.colls_count
FROM 
    EmployeeDetails ed
INNER JOIN 
    EmployeeCounts ec ON ed.subdivision_id = ec.subdivision_id
ORDER BY 
    ed.sub_level ASC;

