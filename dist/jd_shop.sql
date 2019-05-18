/*
Navicat MySQL Data Transfer

Source Server         : data
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : jd_shop

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2019-05-18 11:52:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `jd_data`
-- ----------------------------
DROP TABLE IF EXISTS `jd_data`;
CREATE TABLE `jd_data` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  `title` varchar(100) NOT NULL,
  `price` float(7,2) NOT NULL,
  `urllist` varchar(999) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jd_data
-- ----------------------------
INSERT INTO `jd_data` VALUES ('1', 'https://img13.360buyimg.com/jdcms/s150x150_jfs/t1/11821/36/13554/133495/5c99cb1bE2f4607a6/645a9314c3ce023e.jpg!q90!cc_170x170.webp', '【送货上楼】中雀麻将机全自动过山车麻将桌餐桌式机麻免推牌调试棋牌家用机麻 灿鸿过山车【全国通用】44-136/144', '2499.00', 'https://img14.360buyimg.com/n0/jfs/t1/11821/36/13554/133495/5c99cb1bE2f4607a6/645a9314c3ce023e.jpg,https://img14.360buyimg.com/n0/jfs/t1/6788/40/9183/46899/5c15a9d8Ea74b0e0a/f0a72c59a8fb0a0c.jpg,https://img14.360buyimg.com/n0/jfs/t1/8372/31/9435/66803/5c15a9d8E54d87dd6/898079aed1ec1faf.jpg,https://img14.360buyimg.com/n0/jfs/t1/15258/5/1705/80021/5c15a9d9E346a6c34/0bc269955d12754d.jpg,https://img14.360buyimg.com/n0/jfs/t1/18737/36/1740/94301/5c15a9d9E6f843c0a/d26e1f480e8c7ccb.jpg');
INSERT INTO `jd_data` VALUES ('2', 'https://img14.360buyimg.com/jdcms/s150x150_jfs/t1/25321/8/14911/158871/5cab05c7E35d31fb4/94c96b95fc1f5bd8.jpg!q90!cc_170x170.webp', '南极人男士袜子男黑色商务休闲舒适棉袜吸湿透气中筒袜10双装 黑色 均码', '59.00', 'https://img14.360buyimg.com/n0/jfs/t1/25321/8/14911/158871/5cab05c7E35d31fb4/94c96b95fc1f5bd8.jpg,https://img14.360buyimg.com/n0/jfs/t1/15270/10/14796/53520/5cab05c6E2ae4dd28/2eecd7f6f768668e.jpg,https://img14.360buyimg.com/n0/jfs/t1/14955/6/14883/115340/5cab05c7Ec738bce1/f1f689dbc034c05d.jpg,https://img14.360buyimg.com/n0/jfs/t1/27079/13/14781/77734/5cab05c7E722b0f13/c6e2f3c986f11500.jpg,https://img14.360buyimg.com/n0/jfs/t1/20339/26/14814/70966/5cab05c7E4e8285bd/d4e65f5069040bce.jpg,https://img14.360buyimg.com/n0/jfs/t1/18937/24/14848/104543/5cab05c7E8ef115aa/9b6f27769bd33ed2.jpg');
INSERT INTO `jd_data` VALUES ('3', 'https://img14.360buyimg.com/jdcms/s150x150_jfs/t1/35352/22/9688/222831/5cd10371E46b817a1/74427a2948e5cebb.jpg!q90!cc_170x170.webp', '【母亲节礼物实用送妈妈】志高（CHIGO）智能按摩椅家用全身零重力多功能加热全自动太空舱电动免安装 X5M黑色豪华版【头部气囊+足底滚轮+蓝牙】', '3980.00', 'https://img14.360buyimg.com/n0/jfs/t1/25586/10/13045/156885/5c9dfaf7E24d8d56a/6a4673f5c02055f1.jpg,https://img14.360buyimg.com/n0/jfs/t1/35451/11/9661/210778/5cd11a7aEd375843f/93a25b0601502e05.jpg,https://img14.360buyimg.com/n0/jfs/t1/25586/10/13045/156885/5c9dfaf7E24d8d56a/6a4673f5c02055f1.jpg,https://img14.360buyimg.com/n0/jfs/t1/24295/39/13069/165909/5c9dfafaEea707c77/860b547be999cf05.jpg,https://img14.360buyimg.com/n0/jfs/t1/18368/40/13248/186271/5c9dfaffE17bd795f/dc96251d6dbf06a7.jpg,https://img14.360buyimg.com/n0/jfs/t1/11858/26/14074/196112/5c9dfafdEa6ba74b6/107853bb2f86d9b7.jpg,https://img14.360buyimg.com/n0/jfs/t1/39158/40/2923/117171/5cc30082Ed4a81278/026c932801894b9e.jpg');
INSERT INTO `jd_data` VALUES ('4', 'https://img12.360buyimg.com/jdcms/s150x150_jfs/t1/31624/11/14623/110411/5cbee9a3E956ab4c4/bd040c6a29865ed7.jpg!q90!cc_170x170.webp', '蒙牛 特仑苏 纯牛奶 250ml*16 礼盒装', '68.90', 'https://img14.360buyimg.com/n0/jfs/t1/31624/11/14623/110411/5cbee9a3E956ab4c4/bd040c6a29865ed7.jpg,https://img14.360buyimg.com/n0/jfs/t1/35071/17/5303/106970/5cbee9a2E9ad9d51a/7e10332a5738f43d.jpg,https://img14.360buyimg.com/n0/jfs/t1/35817/33/5293/69034/5cbee9a3E7271f00d/d4eb0ab3deb94075.jpg,https://img14.360buyimg.com/n0/jfs/t1/31155/19/14687/106970/5cbee9aaE5b9e7229/ac61ea58e32926b0.jpg,https://img14.360buyimg.com/n0/jfs/t1/40314/10/1983/69034/5cbee9abEe96b205c/3f5a4c20ea1d911c.jpg');
INSERT INTO `jd_data` VALUES ('5', 'https://img13.360buyimg.com/jdcms/s150x150_jfs/t28282/177/467752899/85566/deadf01e/5bf4caa6Ndee97598.jpg!q90!cc_170x170.webp', '欧束（OUSHU）致臻魅色丝绒唇膏口红纯色哑光不易掉色 温婉豆沙231# 4g', '98.00', 'https://img14.360buyimg.com/n0/jfs/t28282/177/467752899/85566/deadf01e/5bf4caa6Ndee97598.jpg,https://img14.360buyimg.com/n0/jfs/t26698/333/1910731462/161827/130fb6aa/5bf26ee4N749d60fc.jpg,https://img14.360buyimg.com/n0/jfs/t1/40785/37/3980/250606/5cd0e669Ee90736e2/65f5ba75f1d431db.jpg,https://img14.360buyimg.com/n0/jfs/t26506/308/1955023525/221674/e508c529/5bf2795bN1ec9b31a.jpg,https://img14.360buyimg.com/n0/jfs/t30181/1/433479699/458486/76b46279/5bf2795bNc3d564b0.jpg');
INSERT INTO `jd_data` VALUES ('6', 'https://img14.360buyimg.com/jdcms/s150x150_jfs/t1/36150/7/5085/124510/5cbdf3c0Ebf3e223b/17b0b7fde7c6cbd6.jpg!q90!cc_170x170.webp', '仿小狮子手链情侣手链女学生抖音网红情侣手环脚链女闺蜜手链貔貅巴斯光年手链正品官网火影篮球手环手绳男 黑白情侣一对', '19.90', 'https://img14.360buyimg.com/n0/jfs/t1/36150/7/5085/124510/5cbdf3c0Ebf3e223b/17b0b7fde7c6cbd6.jpg,https://img14.360buyimg.com/n0/jfs/t1/35179/12/2926/120377/5cb70c70E071b3cf1/8f26ec43525d16e8.jpg,https://img14.360buyimg.com/n0/jfs/t1/37751/30/2245/70516/5cb70c78E872292b5/25800d1fde2e122b.jpg,https://img14.360buyimg.com/n0/jfs/t1/36705/10/655/109787/5cb70c81E511c3647/3807793094efa3e6.jpg,https://img14.360buyimg.com/n0/jfs/t1/32509/3/12317/184626/5cb70c75E701427c1/f01e3c0e0208b55c.jpg,https://img14.360buyimg.com/n0/jfs/t1/35751/16/2340/55528/5cb70c73Ebeacb45a/d9d8fa1dca9025b6.jpg');
INSERT INTO `jd_data` VALUES ('7', 'https://img13.360buyimg.com/jdcms/s150x150_jfs/t3916/35/1545028667/200093/2508e430/587c5986N769ebc71.jpg!q90!cc_170x170.webp', '伊利 安慕希希腊风味常温酸奶原味205g*16盒', '59.80', 'https://img14.360buyimg.com/n0/jfs/t3916/35/1545028667/200093/2508e430/587c5986N769ebc71.jpg,https://img14.360buyimg.com/n0/jfs/t1/20530/21/2030/292088/5c189602E312d353a/6b9bbd66904494b5.jpg,https://img14.360buyimg.com/n0/jfs/t1/25877/18/2979/117831/5c21f91bE2d658f2b/50d41a83658879a8.jpg,https://img14.360buyimg.com/n0/jfs/t1/11399/6/3739/189814/5c21f91dEfba6e2a8/a7ccdc94f46460ed.jpg');
INSERT INTO `jd_data` VALUES ('8', 'https://img14.360buyimg.com/jdcms/s150x150_jfs/t1/30894/1/6297/248958/5c8b747cE715ec320/fb6b9f902b8646ba.jpg!q90!cc_170x170.webp', '丸美MARUBI白色之恋套装(洗面奶120g+水120ml+乳100g+眼霜20g）赠（卸妆水200ml+3件套+眼霜3g*3+面膜*3）', '800.00', 'https://img14.360buyimg.com/n0/jfs/t1/30894/1/6297/248958/5c8b747cE715ec320/fb6b9f902b8646ba.jpg,https://img14.360buyimg.com/n0/jfs/t1/17254/34/10978/152309/5c8b7481E747d348c/4a4a7405fec03f55.jpg,https://img14.360buyimg.com/n0/jfs/t1/15635/21/10961/77422/5c8b7484E25a1ca63/dc982ce03cb810da.jpg,https://img14.360buyimg.com/n0/jfs/t1/18125/4/11044/168903/5c8b748bE0f49b1ed/0bc99994f41168fe.jpg,https://img14.360buyimg.com/n0/jfs/t1/30265/38/6128/45897/5c8b748fE1fa45b29/243affaf43e3c581.jpg');
INSERT INTO `jd_data` VALUES ('9', 'https://img14.360buyimg.com/jdcms/s150x150_jfs/t1/20372/29/9521/117563/5c7f6eeaEf46bd447/a6d2b7bc60b7ebdb.jpg!q90!cc_170x170.webp', '【余生饰你】满天星镯子唯美时尚手镯饰品送女友送闺蜜送老婆送妈妈必备佳品 满天星手镯 S-10', '259.00', 'https://img14.360buyimg.com/n0/jfs/t1/20372/29/9521/117563/5c7f6eeaEf46bd447/a6d2b7bc60b7ebdb.jpg,https://img14.360buyimg.com/n0/jfs/t1/15788/32/9509/90051/5c7f6ee9Ebc5860a2/92a97babf2f84500.jpg,https://img14.360buyimg.com/n0/jfs/t1/27975/31/9595/374816/5c7f6ee9Ef93af5a9/80226bc14e4912e3.png,https://img14.360buyimg.com/n0/jfs/t1/10731/16/13036/163496/5c7f6ee9E5dfd4fab/3ee2e298d13abcbf.jpg,https://img14.360buyimg.com/n0/jfs/t1/28398/39/9592/374816/5c7f6ef8Ef4fb9970/0dd7b0db7797a1fe.png');
INSERT INTO `jd_data` VALUES ('10', 'https://img13.360buyimg.com/jdcms/s150x150_jfs/t28207/107/525999090/74424/6d3b350d/5bf64acbN1a504943.jpg!q90!cc_170x170.webp', '欧束（OUSHU）焕活精萃平衡乳清爽控油舒缓补水保湿乳平衡露 100ml', '139.00', 'https://img14.360buyimg.com/n0/jfs/t28207/107/525999090/74424/6d3b350d/5bf64acbN1a504943.jpg,https://img14.360buyimg.com/n0/jfs/t26674/162/2075229419/138619/f6adde5e/5bf64acbN7503d3b6.jpg,https://img14.360buyimg.com/n0/jfs/t26713/228/2055742565/210210/96ea9c71/5bf64acbN74dea410.jpg,https://img14.360buyimg.com/n0/jfs/t30247/295/522424061/135072/59983e4b/5bf64acbN8a81838d.jpg');
