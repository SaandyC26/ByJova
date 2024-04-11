INSERT INTO `area` (`name`) VALUES ('CT');

UPDATE time_tracking_db.user SET area_id = 5 WHERE GAD_ID IN (
'A.GARROTEMONTES',
'A.JIMENEZSERRANO',
'a.laraorozco',
'a.lopezrubio',
'a.villalobosvazquez',
'albert.renteroroca',
'alessandro.diprima',
'arun.premsahijwani',
'C.PIRAU',
'CARLES.Perez.GASSIO',
'CHRISTIAN.PRADAOSUNA',
'cristian.yustemaroto',
'D.DOSSANTOSGOMES',
'd.kavanagh',
'd.quirosdelbosque',
'david.acostasanchez',
'EDUARDO.CARDELLE',
'EMMA.SERRANOMORENO',
'F.DESTRUELSROSSELLO',
'FELIX.RAMIREZGARCIA',
'GILDO.RONCHI',
'HAMZA.BOULAICH',
'harold.guglia',
'ISAAC.ROSSELL.RIPOLL',
'IVAN.CECILIACORDERO',
'J.BETANCORTROMERO',
'J.SANCHEZMARTINEZ',
'JAUME.ROURADARNE',
'jeroni.molinamellado',
'JOAN.TRAVEGORDILLO',
'JORGE.CLARETMEMBRADO',
'JSCHOOFS',
'JUAN.SERRASBOLEDA',
'L.MUELAVALENZUELA',
'LAURA.RODRIGUEZSILVA',
'lucas.deyarzasancho',
'LUCIA.ROCCA',
'LUIGI.BRIENZA',
'LUIS.GOMEZALONSO',
'LUIS.REYMILLAN',
'M.BENITEZSANCHEZ',
'MARTA.M.VIGATA',
'MIGUEL.DENGRA',
'P.CHIPOLINIJIMENEZ',
'PABLO.MARCOSJIMENEZ',
'R.CARPIOLOPEZ',
'RAFAEL.JIMENEZARCAS',
'raul.alares',
'S.LECUONAGRANADA',
'S.PerezVAZQUEZ',
'SERGIO LECUONA GRANADA',
'SERGIO.DIAZMARCOS',
'SILVIO.PEREZTORRES',
'SUMIT.PATRA1',
'THIRUPATHI.GANGULA',
'Y.MARTINEZCORRAL'
);

UPDATE time_tracking_db.project SET area_id = 5 WHERE name IN (
'AI',
'ALM',
'Application Modernization ',
'Automation - Tools',
'BTS Architecture GUILD',
'CLPQ',
'DevOps CH Migration',
'DevOps CLPQ',
'DevOps Customer Portal',
'DevOps Development - DOCOE',
'DevOps Development - DOCP',
'DevOps Development - FINPO',
'DevOps Development - GTTT',
'DevOps GR',
'DevOps JS',
'DevOps LR',
'DevOps MD',
'DevOps Operations',
'DevOps Operations L1',
'DevOps Operations L2',
'Financial Portal',
'GFSU FIT Atlassian',
'GLAX - RUN (NF)',
'GW PoC in AWS',
'Openshift',
'Power Apps',
'Refresh Manager',
'Xema - Support'
);

UPDATE time_tracking_db.program SET area_id = 5 WHERE name IN (
'App Sup ',
'Development',
'Development Internal Initiatives',
'DevOps',
'Tools'
);

UPDATE time_tracking_db.program SET name = 'OCP' WHERE name = 'App Sup ';
INSERT INTO time_tracking_db.program (`name`, `area_id`) VALUES ('App Support', 1);

-- UPDATE time_tracking_db.project pr SET pr.program_ID = 345 WHERE pr.ID IN (SELECT * FROM (SELECT p.ID FROM time_tracking_db.project p JOIN time_tracking_db.program pm ON p.program_ID = pm.ID WHERE p.areaId = 1 AND pm.areaId = 5 AND pm.name = 'OCP' AND p.status = '1') a);

SELECT * FROM time_tracking_db.project p JOIN time_tracking_db.program pm ON p.program_ID = pm.ID WHERE p.area_id = 1 AND pm.area_id = 5;