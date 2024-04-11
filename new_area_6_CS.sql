INSERT INTO `area` (`name`) VALUES ('CS');

-- 1. MOVE USERS TO AREA 6 CES
UPDATE time_tracking_db.user SET areaId = 6 WHERE GAD_ID IN (
'D.PEDROSBASSOLS',
'F.GARCIAVILALTA',
'IONA.MANYOSES',
'JANE.VITA',
'KATHARINAVIOLA.ROSSI',
'LEO.GRIGNE',
'm.buitragoescobar',
'mariana.duarte',
'MERITXELL.SALAS',
'michaela.jelinkova',
'MIGUEL.SAAVEDRA',
'm.argueellovargas',
'n.kokot',
'OLGA.GORCHSNOTIVOLI',
'p.tibrewala',
'stefano.sabatino',
'TERESA.RIBAS'
);

-- 2. TRANSFER TO SARA RODRIGUES BUT KEEP IN AREA 4 CES
UPDATE time_tracking_db.project SET manager_ID = (SELECT ID FROM time_tracking_db.user WHERE GAD_ID = 'sara.rodrigues1') WHERE name IN (
'GF App Champions',
'ITS Apps Distribution',
'ITS WE- App Distribution Tech Support'
);


-- 2. MOVE TO AREA 6 CES AND TRANSFER
UPDATE time_tracking_db.project SET areaId = 6, manager_ID = (SELECT ID FROM time_tracking_db.user WHERE GAD_ID = 'mariana.duarte') WHERE name IN (
'Training',
'CES-Ancilliary-Holidays',
'Illness',
'CES Events',
'Bank Holiday'
) AND areaId = 4 AND manager_ID = (SELECT ID FROM time_tracking_db.user WHERE GAD_ID = 'AMANDA.MARRERO');

UPDATE time_tracking_db.project SET areaId = 6, manager_ID = (SELECT ID FROM time_tracking_db.user WHERE GAD_ID = 'm.argueellovargas') WHERE name IN (
'CX - Mastery Program'
) AND areaId = 4 AND manager_ID = (SELECT ID FROM time_tracking_db.user WHERE GAD_ID = 'AMANDA.MARRERO');

UPDATE time_tracking_db.project SET areaId = 6, manager_ID = (SELECT ID FROM time_tracking_db.user WHERE GAD_ID = 'OLGA.GORCHSNOTIVOLI') WHERE name IN (
'GCO BlueRoom'
) AND areaId = 4 AND manager_ID = (SELECT ID FROM time_tracking_db.user WHERE GAD_ID = 'beatriz.montilla');

-- 3. MOVE TO AREA 6
UPDATE time_tracking_db.project SET areaId = 6 WHERE name IN (
'Admin Tasks',
'BAU Creative Services',
'Brand Architecture BAU',
'Bright Design',
'Creative Services',
'CX - CI workshops',
'CX - Community of Practice',
'CX - Customer Academy ',
'CX - IoT Machinery Breakdown',
'CX Design',
'Managment/Demand',
'SoMe ATC Alerts',
'SoMe ATC Domain Monitoring',
'SoMe ATC Global Accounts',
'SoMe ATC Partner Paid Posts',
'SoMe ATC Team Meetings',
'SoMe ATC Webdesk',
'SoMe SMI Alerts',
'SoMe SMI Business Engagement',
'SoMe SMI Daily Scan - Monitoring',
'SoMe SMI Dashboard developement',
'SoMe SMI GCO Meetings',
'SoMe SMI GCO Projects',
'SoMe SMI Reporting',
'SoMe SMI Sprinklr',
'SoMe SMI Stakeholder Meetings (INT/EXT)',
'SoMe SMI Team Meetings',
'SoMe SMI Workplace FB',
'Urban Gyms',
'VDS Creative Services',
'WCM - News Releases',
'WCM - Newsletters',
'WCM - Results Publication',
'WCM - Team Meetings ',
'WCM - Zurich.com Requests'
) AND areaId = 4;

-- 4. CREATE DUPLICATED PROGRAMS FROM AREA 4 CES FOR NEW AREA 6 CS FOR THOSE PROJECTS THAT HAVE BEEN MOVED
INSERT INTO time_tracking_db.program (name, areaId) VALUES ('CES', 6);
INSERT INTO time_tracking_db.program (name, areaId) VALUES ('CES Ancillary', 6);
INSERT INTO time_tracking_db.program (name, areaId) VALUES ('CES SoMe ATC', 6);
INSERT INTO time_tracking_db.program (name, areaId) VALUES ('CES SoMe SMI', 6);
INSERT INTO time_tracking_db.program (name, areaId) VALUES ('GCO', 6);
INSERT INTO time_tracking_db.program (name, areaId) VALUES ('GTO', 6);

-- 5. CHANGE PROGRAMS REFERENCES TO NEWLY CREATED PROGRAMS FOR MOVED PROJECTS TO AREA 6
UPDATE time_tracking_db.project SET program_ID = (SELECT ID from time_tracking_db.program WHERE name = 'CES' AND areaId = 6) 
WHERE areaId = 6 AND program_ID = (SELECT ID from time_tracking_db.program WHERE name = 'CES' AND areaId = 4);

UPDATE time_tracking_db.project SET program_ID = (SELECT ID from time_tracking_db.program WHERE name = 'CES Ancillary' AND areaId = 6) 
WHERE areaId = 6 AND program_ID = (SELECT ID from time_tracking_db.program WHERE name = 'CES Ancillary' AND areaId = 4);

UPDATE time_tracking_db.project SET program_ID = (SELECT ID from time_tracking_db.program WHERE name = 'CES SoMe ATC' AND areaId = 6) 
WHERE areaId = 6 AND program_ID = (SELECT ID from time_tracking_db.program WHERE name = 'CES SoMe ATC' AND areaId = 4);

UPDATE time_tracking_db.project SET program_ID = (SELECT ID from time_tracking_db.program WHERE name = 'CES SoMe SMI' AND areaId = 6) 
WHERE areaId = 6 AND program_ID = (SELECT ID from time_tracking_db.program WHERE name = 'CES SoMe SMI' AND areaId = 4);

UPDATE time_tracking_db.project SET program_ID = (SELECT ID from time_tracking_db.program WHERE name = 'GCO' AND areaId = 6) 
WHERE areaId = 6 AND program_ID = (SELECT ID from time_tracking_db.program WHERE name = 'GCO' AND areaId = 4);

UPDATE time_tracking_db.project SET program_ID = (SELECT ID from time_tracking_db.program WHERE name = 'GTO' AND areaId = 6) 
WHERE areaId = 6 AND program_ID = (SELECT ID from time_tracking_db.program WHERE name = 'GTO' AND areaId = 4);