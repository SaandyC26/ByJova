/* UPPER TO LOWER */

ALTER TABLE time_tracking_db.Area
RENAME TO time_tracking_db.area;

ALTER TABLE time_tracking_db.Closure
RENAME TO time_tracking_db.closure;

ALTER TABLE time_tracking_db.Deputy
RENAME TO time_tracking_db.deputy;

ALTER TABLE time_tracking_db.Period
RENAME TO time_tracking_db.period;

ALTER TABLE time_tracking_db.Program
RENAME TO time_tracking_db.program;

ALTER TABLE time_tracking_db.Project
RENAME TO time_tracking_db.project;

ALTER TABLE time_tracking_db.Provider
RENAME TO time_tracking_db.provider;

ALTER TABLE time_tracking_db.Register
RENAME TO time_tracking_db.register;

ALTER TABLE time_tracking_db.Sow
RENAME TO time_tracking_db.sow;

ALTER TABLE time_tracking_db.Task
RENAME TO time_tracking_db.task;

ALTER TABLE time_tracking_db.Team
RENAME TO time_tracking_db.team;

ALTER TABLE time_tracking_db.User
RENAME TO time_tracking_db.user;

/* LOWER TO UPPER */

ALTER TABLE time_tracking_db.area
RENAME TO time_tracking_db.Area;

ALTER TABLE time_tracking_db.closure
RENAME TO time_tracking_db.Closure;

ALTER TABLE time_tracking_db.deputy
RENAME TO time_tracking_db.Deputy;

ALTER TABLE time_tracking_db.period
RENAME TO time_tracking_db.Period;

ALTER TABLE time_tracking_db.program
RENAME TO time_tracking_db.Program;

ALTER TABLE time_tracking_db.project
RENAME TO time_tracking_db.Project;

ALTER TABLE time_tracking_db.provider
RENAME TO time_tracking_db.Provider;

ALTER TABLE time_tracking_db.register
RENAME TO time_tracking_db.Register;

ALTER TABLE time_tracking_db.sow
RENAME TO time_tracking_db.Sow;

ALTER TABLE time_tracking_db.task
RENAME TO time_tracking_db.Task;

ALTER TABLE time_tracking_db.team
RENAME TO time_tracking_db.Team;

ALTER TABLE time_tracking_db.user
RENAME TO time_tracking_db.User;