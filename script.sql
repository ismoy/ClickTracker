/*
   domingo, 8 de agosto de 20218:36:38
   Usuario: 
   Servidor: DESKTOP-0QR0GE7\JOEL
   Base de datos: ClickTracker
   Aplicación: 
*/

/* Para evitar posibles problemas de pérdida de datos, debe revisar este script detalladamente antes de ejecutarlo fuera del contexto del diseñador de base de datos.*/
BEGIN TRANSACTION
SET QUOTED_IDENTIFIER ON
SET ARITHABORT ON
SET NUMERIC_ROUNDABORT OFF
SET CONCAT_NULL_YIELDS_NULL ON
SET ANSI_NULLS ON
SET ANSI_PADDING ON
SET ANSI_WARNINGS ON
COMMIT
BEGIN TRANSACTION
GO
CREATE TABLE dbo.tb_question
	(
	questionId int NOT NULL,
	question nchar(80) NULL
	)  ON [PRIMARY]
GO
ALTER TABLE dbo.tb_question ADD CONSTRAINT
	PK_tb_question PRIMARY KEY CLUSTERED 
	(
	questionId
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO
ALTER TABLE dbo.tb_question SET (LOCK_ESCALATION = TABLE)
GO
COMMIT
BEGIN TRANSACTION
GO
CREATE TABLE dbo.tb_tracker
	(
	trackerId int NOT NULL,
	button nchar(10) NULL,
	value int NULL,
	questionId int NULL
	)  ON [PRIMARY]
GO
ALTER TABLE dbo.tb_tracker ADD CONSTRAINT
	PK_tb_tracker PRIMARY KEY CLUSTERED 
	(
	trackerId
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO
ALTER TABLE dbo.tb_tracker ADD CONSTRAINT
	FK_tb_tracker_tb_question FOREIGN KEY
	(
	questionId
	) REFERENCES dbo.tb_question
	(
	questionId
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO
ALTER TABLE dbo.tb_tracker SET (LOCK_ESCALATION = TABLE)
GO
COMMIT
BEGIN TRANSACTION
GO
CREATE TABLE dbo.tb_answer
	(
	answerId int NOT NULL,
	answer nchar(20) NULL,
	questionId int NULL
	)  ON [PRIMARY]
GO
ALTER TABLE dbo.tb_answer ADD CONSTRAINT
	PK_tb_answer PRIMARY KEY CLUSTERED 
	(
	answerId
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO
ALTER TABLE dbo.tb_answer ADD CONSTRAINT
	FK_tb_answer_tb_question FOREIGN KEY
	(
	questionId
	) REFERENCES dbo.tb_question
	(
	questionId
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO
ALTER TABLE dbo.tb_answer SET (LOCK_ESCALATION = TABLE)
GO
COMMIT
