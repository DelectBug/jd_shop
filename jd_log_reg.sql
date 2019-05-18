/*
Navicat MySQL Data Transfer

Source Server         : data
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : jd_log_reg

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2019-05-18 11:53:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `jduser`
-- ----------------------------
DROP TABLE IF EXISTS `jduser`;
CREATE TABLE `jduser` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `tel` varchar(11) NOT NULL,
  `password` varchar(40) NOT NULL,
  `email` varchar(99) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jduser
-- ----------------------------
INSERT INTO `jduser` VALUES ('17', '你好我是', '13746655711', '2c6fa0456614bef70dffeae418a73801', '470114624@qq.com', '2019-05-16 22:00:26');
