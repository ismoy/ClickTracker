-- MySQL Script generated by MySQL Workbench
-- Wed Sep  1 20:03:44 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema clicktrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `clicktrackerdb` ;

-- -----------------------------------------------------
-- Schema clicktrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `clicktrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `clicktrackerdb` ;

-- -----------------------------------------------------
-- Table `clicktrackerdb`.`tb_interview`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clicktrackerdb`.`tb_interview` ;

CREATE TABLE IF NOT EXISTS `clicktrackerdb`.`tb_interview` (
  `interviewId` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(80) NULL DEFAULT NULL,
  PRIMARY KEY (`interviewId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `clicktrackerdb`.`tb_question`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clicktrackerdb`.`tb_question` ;

CREATE TABLE IF NOT EXISTS `clicktrackerdb`.`tb_question` (
  `questionId` INT NOT NULL AUTO_INCREMENT,
  `question` VARCHAR(45) NULL DEFAULT NULL,
  `answer` VARCHAR(45) NULL DEFAULT NULL,
  `interviewId` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`questionId`),
  INDEX `fk_question_interview_idx` (`interviewId` ASC) ,
  CONSTRAINT `fk_question_interview`
    FOREIGN KEY (`interviewId`)
    REFERENCES `clicktrackerdb`.`tb_interview` (`interviewId`))
ENGINE = InnoDB
AUTO_INCREMENT = 289
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `clicktrackerdb`.`tb_tracker`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clicktrackerdb`.`tb_tracker` ;

CREATE TABLE IF NOT EXISTS `clicktrackerdb`.`tb_tracker` (
  `trackerId` INT NOT NULL AUTO_INCREMENT,
  `button` VARCHAR(45) NULL DEFAULT NULL,
  `value` VARCHAR(45) NULL DEFAULT NULL,
  `screen` VARCHAR(45) NULL DEFAULT NULL,
  `interviewId` VARCHAR(45) NULL DEFAULT NULL,
  `time` DECIMAL(8,2) NULL DEFAULT NULL,
  PRIMARY KEY (`trackerId`),
  INDEX `FK_TRACKER_INTERVIEW_idx` (`interviewId` ASC) ,
  CONSTRAINT `FK_TRACKER_INTERVIEW`
    FOREIGN KEY (`interviewId`)
    REFERENCES `clicktrackerdb`.`tb_interview` (`interviewId`))
ENGINE = InnoDB
AUTO_INCREMENT = 113
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
