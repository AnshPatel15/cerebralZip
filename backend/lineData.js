const lineChartData = [
  {
    date: "2022-12-13 22:05:00",
    web_sales: 15,
    offline_sales: 14,
  },
  {
    date: "2022-12-13 22:06:00",
    web_sales: 23,
    offline_sales: 21,
  },
  {
    date: "2022-12-13 22:07:00",
    web_sales: 39,
    offline_sales: 35,
  },
  {
    date: "2022-12-13 22:08:00",
    web_sales: 56,
    offline_sales: 49,
  },
  {
    date: "2022-12-13 22:09:00",
    web_sales: 67,
    offline_sales: 60,
  },
  {
    date: "2022-12-13 22:10:00",
    web_sales: 86,
    offline_sales: 78,
  },
  {
    date: "2022-12-13 22:11:00",
    web_sales: 100,
    offline_sales: 90,
  },
  {
    date: "2022-12-13 22:12:00",
    web_sales: 125,
    offline_sales: 100,
  },
  {
    date: "2022-12-13 22:13:00",
    web_sales: 139,
    offline_sales: 109,
  },
  {
    date: "2022-12-13 22:14:00",
    web_sales: 148,
    offline_sales: 117,
  },
  {
    date: "2022-12-13 22:15:00",
    web_sales: 160,
    offline_sales: 127,
  },
  {
    date: "2022-12-13 22:16:00",
    web_sales: 172,
    offline_sales: 138,
  },
  {
    date: "2022-12-13 22:17:00",
    web_sales: 189,
    offline_sales: 149,
  },
  {
    date: "2022-12-13 22:18:00",
    web_sales: 212,
    offline_sales: 162,
  },
  {
    date: "2022-12-13 22:19:00",
    web_sales: 231,
    offline_sales: 170,
  },
  {
    date: "2022-12-13 22:20:00",
    web_sales: 248,
    offline_sales: 176,
  },
  {
    date: "2022-12-13 22:21:00",
    web_sales: 265,
    offline_sales: 186,
  },
  {
    date: "2022-12-13 22:22:00",
    web_sales: 278,
    offline_sales: 195,
  },
  {
    date: "2022-12-13 22:23:00",
    web_sales: 294,
    offline_sales: 207,
  },
  {
    date: "2022-12-13 22:24:00",
    web_sales: 309,
    offline_sales: 219,
  },
  {
    date: "2022-12-13 22:25:00",
    web_sales: 323,
    offline_sales: 228,
  },
  {
    date: "2022-12-13 22:26:00",
    web_sales: 340,
    offline_sales: 240,
  },
  {
    date: "2022-12-13 22:27:00",
    web_sales: 354,
    offline_sales: 252,
  },
  {
    date: "2022-12-13 22:28:00",
    web_sales: 366,
    offline_sales: 261,
  },
  {
    date: "2022-12-13 22:29:00",
    web_sales: 378,
    offline_sales: 272,
  },
  {
    date: "2022-12-13 22:30:00",
    web_sales: 388,
    offline_sales: 279,
  },
  {
    date: "2022-12-13 22:31:00",
    web_sales: 399,
    offline_sales: 287,
  },
  {
    date: "2022-12-13 22:32:00",
    web_sales: 410,
    offline_sales: 296,
  },
  {
    date: "2022-12-13 22:33:00",
    web_sales: 427,
    offline_sales: 311,
  },
  {
    date: "2022-12-13 22:34:00",
    web_sales: 440,
    offline_sales: 321,
  },
  {
    date: "2022-12-13 22:35:00",
    web_sales: 455,
    offline_sales: 333,
  },
  {
    date: "2022-12-13 22:36:00",
    web_sales: 468,
    offline_sales: 341,
  },
  {
    date: "2022-12-13 22:37:00",
    web_sales: 474,
    offline_sales: 346,
  },
  {
    date: "2022-12-13 22:38:00",
    web_sales: 489,
    offline_sales: 359,
  },
  {
    date: "2022-12-13 22:39:00",
    web_sales: 497,
    offline_sales: 366,
  },
  {
    date: "2022-12-13 22:40:00",
    web_sales: 515,
    offline_sales: 383,
  },
  {
    date: "2022-12-13 22:41:00",
    web_sales: 525,
    offline_sales: 390,
  },
  {
    date: "2022-12-13 22:42:00",
    web_sales: 534,
    offline_sales: 398,
  },
  {
    date: "2022-12-13 22:43:00",
    web_sales: 547,
    offline_sales: 410,
  },
  {
    date: "2022-12-13 22:44:00",
    web_sales: 565,
    offline_sales: 423,
  },
  {
    date: "2022-12-13 22:45:00",
    web_sales: 582,
    offline_sales: 436,
  },
  {
    date: "2022-12-13 22:46:00",
    web_sales: 593,
    offline_sales: 444,
  },
  {
    date: "2022-12-13 22:47:00",
    web_sales: 605,
    offline_sales: 451,
  },
  {
    date: "2022-12-13 22:48:00",
    web_sales: 624,
    offline_sales: 464,
  },
  {
    date: "2022-12-13 22:49:00",
    web_sales: 642,
    offline_sales: 477,
  },
  {
    date: "2022-12-13 22:50:00",
    web_sales: 660,
    offline_sales: 486,
  },
  {
    date: "2022-12-13 22:51:00",
    web_sales: 668,
    offline_sales: 492,
  },
  {
    date: "2022-12-13 22:52:00",
    web_sales: 683,
    offline_sales: 500,
  },
  {
    date: "2022-12-13 22:53:00",
    web_sales: 701,
    offline_sales: 516,
  },
  {
    date: "2022-12-13 22:54:00",
    web_sales: 720,
    offline_sales: 531,
  },
  {
    date: "2022-12-13 22:55:00",
    web_sales: 736,
    offline_sales: 543,
  },
  {
    date: "2022-12-13 22:56:00",
    web_sales: 757,
    offline_sales: 557,
  },
  {
    date: "2022-12-13 22:57:00",
    web_sales: 775,
    offline_sales: 571,
  },
  {
    date: "2022-12-13 22:58:00",
    web_sales: 799,
    offline_sales: 590,
  },
  {
    date: "2022-12-13 22:59:00",
    web_sales: 816,
    offline_sales: 599,
  },
  {
    date: "2022-12-13 23:00:00",
    web_sales: 828,
    offline_sales: 606,
  },
  {
    date: "2022-12-13 23:01:00",
    web_sales: 844,
    offline_sales: 618,
  },
  {
    date: "2022-12-13 23:02:00",
    web_sales: 860,
    offline_sales: 627,
  },
  {
    date: "2022-12-13 23:03:00",
    web_sales: 876,
    offline_sales: 635,
  },
  {
    date: "2022-12-13 23:04:00",
    web_sales: 890,
    offline_sales: 645,
  },
  {
    date: "2022-12-13 23:05:00",
    web_sales: 905,
    offline_sales: 655,
  },
  {
    date: "2022-12-13 23:06:00",
    web_sales: 918,
    offline_sales: 666,
  },
  {
    date: "2022-12-13 23:07:00",
    web_sales: 937,
    offline_sales: 678,
  },
  {
    date: "2022-12-13 23:08:00",
    web_sales: 952,
    offline_sales: 686,
  },
  {
    date: "2022-12-13 23:09:00",
    web_sales: 967,
    offline_sales: 699,
  },
  {
    date: "2022-12-13 23:10:00",
    web_sales: 993,
    offline_sales: 717,
  },
  {
    date: "2022-12-13 23:11:00",
    web_sales: 1007,
    offline_sales: 728,
  },
  {
    date: "2022-12-13 23:12:00",
    web_sales: 1021,
    offline_sales: 740,
  },
  {
    date: "2022-12-13 23:13:00",
    web_sales: 1030,
    offline_sales: 747,
  },
  {
    date: "2022-12-13 23:14:00",
    web_sales: 1045,
    offline_sales: 759,
  },
  {
    date: "2022-12-13 23:15:00",
    web_sales: 1058,
    offline_sales: 767,
  },
  {
    date: "2022-12-13 23:16:00",
    web_sales: 1069,
    offline_sales: 773,
  },
  {
    date: "2022-12-13 23:17:00",
    web_sales: 1082,
    offline_sales: 785,
  },
  {
    date: "2022-12-13 23:18:00",
    web_sales: 1094,
    offline_sales: 796,
  },
  {
    date: "2022-12-13 23:19:00",
    web_sales: 1108,
    offline_sales: 804,
  },
  {
    date: "2022-12-13 23:20:00",
    web_sales: 1125,
    offline_sales: 816,
  },
  {
    date: "2022-12-13 23:21:00",
    web_sales: 1146,
    offline_sales: 836,
  },
  {
    date: "2022-12-13 23:22:00",
    web_sales: 1172,
    offline_sales: 859,
  },
  {
    date: "2022-12-13 23:23:00",
    web_sales: 1188,
    offline_sales: 867,
  },
  {
    date: "2022-12-13 23:24:00",
    web_sales: 1202,
    offline_sales: 876,
  },
  {
    date: "2022-12-13 23:25:00",
    web_sales: 1217,
    offline_sales: 885,
  },
  {
    date: "2022-12-13 23:26:00",
    web_sales: 1228,
    offline_sales: 893,
  },
  {
    date: "2022-12-13 23:27:00",
    web_sales: 1242,
    offline_sales: 902,
  },
  {
    date: "2022-12-13 23:28:00",
    web_sales: 1260,
    offline_sales: 915,
  },
  {
    date: "2022-12-13 23:29:00",
    web_sales: 1270,
    offline_sales: 923,
  },
  {
    date: "2022-12-13 23:30:00",
    web_sales: 1284,
    offline_sales: 931,
  },
  {
    date: "2022-12-13 23:31:00",
    web_sales: 1307,
    offline_sales: 945,
  },
  {
    date: "2022-12-13 23:32:00",
    web_sales: 1323,
    offline_sales: 953,
  },
  {
    date: "2022-12-13 23:33:00",
    web_sales: 1334,
    offline_sales: 963,
  },
  {
    date: "2022-12-13 23:34:00",
    web_sales: 1347,
    offline_sales: 970,
  },
  {
    date: "2022-12-13 23:35:00",
    web_sales: 1359,
    offline_sales: 977,
  },
  {
    date: "2022-12-13 23:36:00",
    web_sales: 1371,
    offline_sales: 985,
  },
  {
    date: "2022-12-13 23:37:00",
    web_sales: 1386,
    offline_sales: 994,
  },
  {
    date: "2022-12-13 23:38:00",
    web_sales: 1397,
    offline_sales: 1000,
  },
  {
    date: "2022-12-13 23:39:00",
    web_sales: 1409,
    offline_sales: 1010,
  },
  {
    date: "2022-12-13 23:40:00",
    web_sales: 1428,
    offline_sales: 1023,
  },
  {
    date: "2022-12-13 23:41:00",
    web_sales: 1436,
    offline_sales: 1030,
  },
  {
    date: "2022-12-13 23:42:00",
    web_sales: 1446,
    offline_sales: 1038,
  },
  {
    date: "2022-12-13 23:43:00",
    web_sales: 1457,
    offline_sales: 1043,
  },
  {
    date: "2022-12-13 23:44:00",
    web_sales: 1469,
    offline_sales: 1051,
  },
  {
    date: "2022-12-13 23:45:00",
    web_sales: 1478,
    offline_sales: 1059,
  },
  {
    date: "2022-12-13 23:46:00",
    web_sales: 1490,
    offline_sales: 1071,
  },
  {
    date: "2022-12-13 23:47:00",
    web_sales: 1498,
    offline_sales: 1078,
  },
  {
    date: "2022-12-13 23:48:00",
    web_sales: 1504,
    offline_sales: 1082,
  },
  {
    date: "2022-12-13 23:49:00",
    web_sales: 1520,
    offline_sales: 1096,
  },
  {
    date: "2022-12-13 23:50:00",
    web_sales: 1536,
    offline_sales: 1110,
  },
  {
    date: "2022-12-13 23:51:00",
    web_sales: 1547,
    offline_sales: 1119,
  },
  {
    date: "2022-12-13 23:52:00",
    web_sales: 1558,
    offline_sales: 1127,
  },
  {
    date: "2022-12-13 23:53:00",
    web_sales: 1572,
    offline_sales: 1135,
  },
  {
    date: "2022-12-13 23:54:00",
    web_sales: 1585,
    offline_sales: 1144,
  },
  {
    date: "2022-12-13 23:55:00",
    web_sales: 1603,
    offline_sales: 1155,
  },
  {
    date: "2022-12-13 23:56:00",
    web_sales: 1609,
    offline_sales: 1159,
  },
  {
    date: "2022-12-13 23:57:00",
    web_sales: 1626,
    offline_sales: 1172,
  },
  {
    date: "2022-12-13 23:58:00",
    web_sales: 1645,
    offline_sales: 1183,
  },
  {
    date: "2022-12-13 23:59:00",
    web_sales: 1657,
    offline_sales: 1191,
  },
  {
    date: "2022-12-14 00:00:00",
    web_sales: 1674,
    offline_sales: 1205,
  },
  {
    date: "2022-12-14 00:01:00",
    web_sales: 1687,
    offline_sales: 1214,
  },
  {
    date: "2022-12-14 00:02:00",
    web_sales: 1707,
    offline_sales: 1228,
  },
  {
    date: "2022-12-14 00:03:00",
    web_sales: 1724,
    offline_sales: 1240,
  },
  {
    date: "2022-12-14 00:04:00",
    web_sales: 1742,
    offline_sales: 1254,
  },
  {
    date: "2022-12-14 00:05:00",
    web_sales: 1756,
    offline_sales: 1261,
  },
  {
    date: "2022-12-14 00:06:00",
    web_sales: 1767,
    offline_sales: 1269,
  },
  {
    date: "2022-12-14 00:07:00",
    web_sales: 1773,
    offline_sales: 1272,
  },
  {
    date: "2022-12-14 00:08:00",
    web_sales: 1783,
    offline_sales: 1282,
  },
  {
    date: "2022-12-14 00:09:00",
    web_sales: 1792,
    offline_sales: 1287,
  },
  {
    date: "2022-12-14 00:10:00",
    web_sales: 1810,
    offline_sales: 1300,
  },
  {
    date: "2022-12-14 00:11:00",
    web_sales: 1821,
    offline_sales: 1307,
  },
  {
    date: "2022-12-14 00:12:00",
    web_sales: 1833,
    offline_sales: 1315,
  },
  {
    date: "2022-12-14 00:13:00",
    web_sales: 1842,
    offline_sales: 1321,
  },
  {
    date: "2022-12-14 00:14:00",
    web_sales: 1850,
    offline_sales: 1328,
  },
  {
    date: "2022-12-14 00:15:00",
    web_sales: 1864,
    offline_sales: 1338,
  },
  {
    date: "2022-12-14 00:16:00",
    web_sales: 1888,
    offline_sales: 1354,
  },
  {
    date: "2022-12-14 00:17:00",
    web_sales: 1910,
    offline_sales: 1365,
  },
  {
    date: "2022-12-14 00:18:00",
    web_sales: 1927,
    offline_sales: 1378,
  },
  {
    date: "2022-12-14 00:19:00",
    web_sales: 1943,
    offline_sales: 1388,
  },
  {
    date: "2022-12-14 00:20:00",
    web_sales: 1959,
    offline_sales: 1401,
  },
  {
    date: "2022-12-14 00:21:00",
    web_sales: 1972,
    offline_sales: 1409,
  },
  {
    date: "2022-12-14 00:22:00",
    web_sales: 1981,
    offline_sales: 1416,
  },
  {
    date: "2022-12-14 00:23:00",
    web_sales: 1995,
    offline_sales: 1423,
  },
  {
    date: "2022-12-14 00:24:00",
    web_sales: 2011,
    offline_sales: 1439,
  },
  {
    date: "2022-12-14 00:25:00",
    web_sales: 2028,
    offline_sales: 1451,
  },
  {
    date: "2022-12-14 00:26:00",
    web_sales: 2041,
    offline_sales: 1456,
  },
  {
    date: "2022-12-14 00:27:00",
    web_sales: 2063,
    offline_sales: 1467,
  },
  {
    date: "2022-12-14 00:28:00",
    web_sales: 2076,
    offline_sales: 1476,
  },
  {
    date: "2022-12-14 00:29:00",
    web_sales: 2090,
    offline_sales: 1487,
  },
  {
    date: "2022-12-14 00:30:00",
    web_sales: 2104,
    offline_sales: 1496,
  },
  {
    date: "2022-12-14 00:31:00",
    web_sales: 2116,
    offline_sales: 1501,
  },
  {
    date: "2022-12-14 00:32:00",
    web_sales: 2125,
    offline_sales: 1506,
  },
  {
    date: "2022-12-14 00:33:00",
    web_sales: 2140,
    offline_sales: 1515,
  },
  {
    date: "2022-12-14 00:34:00",
    web_sales: 2151,
    offline_sales: 1524,
  },
  {
    date: "2022-12-14 00:35:00",
    web_sales: 2176,
    offline_sales: 1540,
  },
  {
    date: "2022-12-14 00:36:00",
    web_sales: 2183,
    offline_sales: 1543,
  },
  {
    date: "2022-12-14 00:37:00",
    web_sales: 2206,
    offline_sales: 1555,
  },
  {
    date: "2022-12-14 00:38:00",
    web_sales: 2220,
    offline_sales: 1564,
  },
  {
    date: "2022-12-14 00:39:00",
    web_sales: 2229,
    offline_sales: 1570,
  },
  {
    date: "2022-12-14 00:40:00",
    web_sales: 2246,
    offline_sales: 1581,
  },
  {
    date: "2022-12-14 00:41:00",
    web_sales: 2259,
    offline_sales: 1592,
  },
  {
    date: "2022-12-14 00:42:00",
    web_sales: 2276,
    offline_sales: 1605,
  },
  {
    date: "2022-12-14 00:43:00",
    web_sales: 2296,
    offline_sales: 1619,
  },
  {
    date: "2022-12-14 00:44:00",
    web_sales: 2318,
    offline_sales: 1631,
  },
  {
    date: "2022-12-14 00:45:00",
    web_sales: 2329,
    offline_sales: 1639,
  },
  {
    date: "2022-12-14 00:46:00",
    web_sales: 2334,
    offline_sales: 1643,
  },
  {
    date: "2022-12-14 00:47:00",
    web_sales: 2349,
    offline_sales: 1654,
  },
  {
    date: "2022-12-14 00:48:00",
    web_sales: 2366,
    offline_sales: 1666,
  },
  {
    date: "2022-12-14 00:49:00",
    web_sales: 2382,
    offline_sales: 1677,
  },
  {
    date: "2022-12-14 00:50:00",
    web_sales: 2403,
    offline_sales: 1688,
  },
  {
    date: "2022-12-14 00:51:00",
    web_sales: 2421,
    offline_sales: 1699,
  },
  {
    date: "2022-12-14 00:52:00",
    web_sales: 2435,
    offline_sales: 1706,
  },
  {
    date: "2022-12-14 00:53:00",
    web_sales: 2452,
    offline_sales: 1719,
  },
  {
    date: "2022-12-14 00:54:00",
    web_sales: 2471,
    offline_sales: 1731,
  },
  {
    date: "2022-12-14 00:55:00",
    web_sales: 2497,
    offline_sales: 1744,
  },
  {
    date: "2022-12-14 00:56:00",
    web_sales: 2522,
    offline_sales: 1757,
  },
  {
    date: "2022-12-14 00:57:00",
    web_sales: 2548,
    offline_sales: 1772,
  },
  {
    date: "2022-12-14 00:58:00",
    web_sales: 2569,
    offline_sales: 1783,
  },
  {
    date: "2022-12-14 00:59:00",
    web_sales: 2590,
    offline_sales: 1797,
  },
  {
    date: "2022-12-14 01:00:00",
    web_sales: 2608,
    offline_sales: 1808,
  },
  {
    date: "2022-12-14 01:01:00",
    web_sales: 2626,
    offline_sales: 1818,
  },
  {
    date: "2022-12-14 01:02:00",
    web_sales: 2648,
    offline_sales: 1832,
  },
  {
    date: "2022-12-14 01:03:00",
    web_sales: 2664,
    offline_sales: 1841,
  },
  {
    date: "2022-12-14 01:04:00",
    web_sales: 2676,
    offline_sales: 1846,
  },
  {
    date: "2022-12-14 01:05:00",
    web_sales: 2692,
    offline_sales: 1855,
  },
  {
    date: "2022-12-14 01:06:00",
    web_sales: 2709,
    offline_sales: 1867,
  },
  {
    date: "2022-12-14 01:07:00",
    web_sales: 2726,
    offline_sales: 1880,
  },
  {
    date: "2022-12-14 01:08:00",
    web_sales: 2746,
    offline_sales: 1891,
  },
  {
    date: "2022-12-14 01:09:00",
    web_sales: 2769,
    offline_sales: 1903,
  },
  {
    date: "2022-12-14 01:10:00",
    web_sales: 2795,
    offline_sales: 1923,
  },
  {
    date: "2022-12-14 01:11:00",
    web_sales: 2815,
    offline_sales: 1936,
  },
  {
    date: "2022-12-14 01:12:00",
    web_sales: 2833,
    offline_sales: 1947,
  },
  {
    date: "2022-12-14 01:13:00",
    web_sales: 2842,
    offline_sales: 1955,
  },
  {
    date: "2022-12-14 01:14:00",
    web_sales: 2862,
    offline_sales: 1971,
  },
  {
    date: "2022-12-14 01:15:00",
    web_sales: 2885,
    offline_sales: 1990,
  },
  {
    date: "2022-12-14 01:16:00",
    web_sales: 2903,
    offline_sales: 1999,
  },
  {
    date: "2022-12-14 01:17:00",
    web_sales: 2921,
    offline_sales: 2010,
  },
  {
    date: "2022-12-14 01:18:00",
    web_sales: 2934,
    offline_sales: 2017,
  },
  {
    date: "2022-12-14 01:19:00",
    web_sales: 2945,
    offline_sales: 2024,
  },
  {
    date: "2022-12-14 01:20:00",
    web_sales: 2963,
    offline_sales: 2038,
  },
  {
    date: "2022-12-14 01:21:00",
    web_sales: 2977,
    offline_sales: 2048,
  },
  {
    date: "2022-12-14 01:22:00",
    web_sales: 2993,
    offline_sales: 2060,
  },
  {
    date: "2022-12-14 01:23:00",
    web_sales: 3006,
    offline_sales: 2069,
  },
  {
    date: "2022-12-14 01:24:00",
    web_sales: 3023,
    offline_sales: 2080,
  },
  {
    date: "2022-12-14 01:25:00",
    web_sales: 3031,
    offline_sales: 2083,
  },
  {
    date: "2022-12-14 01:26:00",
    web_sales: 3041,
    offline_sales: 2090,
  },
  {
    date: "2022-12-14 01:27:00",
    web_sales: 3062,
    offline_sales: 2102,
  },
  {
    date: "2022-12-14 01:28:00",
    web_sales: 3081,
    offline_sales: 2111,
  },
  {
    date: "2022-12-14 01:29:00",
    web_sales: 3100,
    offline_sales: 2120,
  },
  {
    date: "2022-12-14 01:30:00",
    web_sales: 3119,
    offline_sales: 2134,
  },
  {
    date: "2022-12-14 01:31:00",
    web_sales: 3144,
    offline_sales: 2147,
  },
  {
    date: "2022-12-14 01:32:00",
    web_sales: 3167,
    offline_sales: 2160,
  },
  {
    date: "2022-12-14 01:33:00",
    web_sales: 3181,
    offline_sales: 2169,
  },
  {
    date: "2022-12-14 01:34:00",
    web_sales: 3196,
    offline_sales: 2179,
  },
  {
    date: "2022-12-14 01:35:00",
    web_sales: 3214,
    offline_sales: 2190,
  },
  {
    date: "2022-12-14 01:36:00",
    web_sales: 3226,
    offline_sales: 2196,
  },
  {
    date: "2022-12-14 01:37:00",
    web_sales: 3245,
    offline_sales: 2205,
  },
  {
    date: "2022-12-14 01:38:00",
    web_sales: 3267,
    offline_sales: 2221,
  },
  {
    date: "2022-12-14 01:39:00",
    web_sales: 3288,
    offline_sales: 2236,
  },
  {
    date: "2022-12-14 01:40:00",
    web_sales: 3303,
    offline_sales: 2244,
  },
  {
    date: "2022-12-14 01:41:00",
    web_sales: 3322,
    offline_sales: 2254,
  },
  {
    date: "2022-12-14 01:42:00",
    web_sales: 3336,
    offline_sales: 2262,
  },
  {
    date: "2022-12-14 01:43:00",
    web_sales: 3355,
    offline_sales: 2273,
  },
  {
    date: "2022-12-14 01:44:00",
    web_sales: 3373,
    offline_sales: 2282,
  },
  {
    date: "2022-12-14 01:45:00",
    web_sales: 3393,
    offline_sales: 2295,
  },
  {
    date: "2022-12-14 01:46:00",
    web_sales: 3404,
    offline_sales: 2300,
  },
  {
    date: "2022-12-14 01:47:00",
    web_sales: 3421,
    offline_sales: 2313,
  },
  {
    date: "2022-12-14 01:48:00",
    web_sales: 3436,
    offline_sales: 2322,
  },
  {
    date: "2022-12-14 01:49:00",
    web_sales: 3451,
    offline_sales: 2330,
  },
  {
    date: "2022-12-14 01:50:00",
    web_sales: 3468,
    offline_sales: 2344,
  },
  {
    date: "2022-12-14 01:51:00",
    web_sales: 3481,
    offline_sales: 2352,
  },
  {
    date: "2022-12-14 01:52:00",
    web_sales: 3495,
    offline_sales: 2362,
  },
  {
    date: "2022-12-14 01:53:00",
    web_sales: 3510,
    offline_sales: 2374,
  },
  {
    date: "2022-12-14 01:54:00",
    web_sales: 3523,
    offline_sales: 2382,
  },
  {
    date: "2022-12-14 01:55:00",
    web_sales: 3542,
    offline_sales: 2387,
  },
  {
    date: "2022-12-14 01:56:00",
    web_sales: 3560,
    offline_sales: 2396,
  },
  {
    date: "2022-12-14 01:57:00",
    web_sales: 3585,
    offline_sales: 2412,
  },
  {
    date: "2022-12-14 01:58:00",
    web_sales: 3613,
    offline_sales: 2429,
  },
  {
    date: "2022-12-14 01:59:00",
    web_sales: 3631,
    offline_sales: 2434,
  },
  {
    date: "2022-12-14 02:00:00",
    web_sales: 3653,
    offline_sales: 2446,
  },
  {
    date: "2022-12-14 02:01:00",
    web_sales: 3669,
    offline_sales: 2456,
  },
  {
    date: "2022-12-14 02:02:00",
    web_sales: 3687,
    offline_sales: 2462,
  },
  {
    date: "2022-12-14 02:03:00",
    web_sales: 3703,
    offline_sales: 2471,
  },
  {
    date: "2022-12-14 02:04:00",
    web_sales: 3723,
    offline_sales: 2483,
  },
  {
    date: "2022-12-14 02:05:00",
    web_sales: 3741,
    offline_sales: 2493,
  },
  {
    date: "2022-12-14 02:06:00",
    web_sales: 3759,
    offline_sales: 2505,
  },
  {
    date: "2022-12-14 02:07:00",
    web_sales: 3780,
    offline_sales: 2521,
  },
  {
    date: "2022-12-14 02:08:00",
    web_sales: 3799,
    offline_sales: 2533,
  },
  {
    date: "2022-12-14 02:09:00",
    web_sales: 3816,
    offline_sales: 2542,
  },
  {
    date: "2022-12-14 02:10:00",
    web_sales: 3839,
    offline_sales: 2561,
  },
  {
    date: "2022-12-14 02:11:00",
    web_sales: 3856,
    offline_sales: 2572,
  },
  {
    date: "2022-12-14 02:12:00",
    web_sales: 3875,
    offline_sales: 2584,
  },
  {
    date: "2022-12-14 02:13:00",
    web_sales: 3894,
    offline_sales: 2594,
  },
  {
    date: "2022-12-14 02:14:00",
    web_sales: 3908,
    offline_sales: 2602,
  },
  {
    date: "2022-12-14 02:15:00",
    web_sales: 3922,
    offline_sales: 2610,
  },
  {
    date: "2022-12-14 02:16:00",
    web_sales: 3940,
    offline_sales: 2621,
  },
  {
    date: "2022-12-14 02:17:00",
    web_sales: 3954,
    offline_sales: 2631,
  },
  {
    date: "2022-12-14 02:18:00",
    web_sales: 3973,
    offline_sales: 2645,
  },
  {
    date: "2022-12-14 02:19:00",
    web_sales: 3991,
    offline_sales: 2658,
  },
  {
    date: "2022-12-14 02:20:00",
    web_sales: 4018,
    offline_sales: 2667,
  },
  {
    date: "2022-12-14 02:21:00",
    web_sales: 4040,
    offline_sales: 2681,
  },
  {
    date: "2022-12-14 02:22:00",
    web_sales: 4050,
    offline_sales: 2688,
  },
  {
    date: "2022-12-14 02:23:00",
    web_sales: 4062,
    offline_sales: 2696,
  },
  {
    date: "2022-12-14 02:24:00",
    web_sales: 4076,
    offline_sales: 2705,
  },
  {
    date: "2022-12-14 02:25:00",
    web_sales: 4093,
    offline_sales: 2716,
  },
  {
    date: "2022-12-14 02:26:00",
    web_sales: 4108,
    offline_sales: 2723,
  },
  {
    date: "2022-12-14 02:27:00",
    web_sales: 4131,
    offline_sales: 2737,
  },
  {
    date: "2022-12-14 02:28:00",
    web_sales: 4144,
    offline_sales: 2746,
  },
  {
    date: "2022-12-14 02:29:00",
    web_sales: 4165,
    offline_sales: 2759,
  },
  {
    date: "2022-12-14 02:30:00",
    web_sales: 4183,
    offline_sales: 2773,
  },
  {
    date: "2022-12-14 02:31:00",
    web_sales: 4207,
    offline_sales: 2786,
  },
  {
    date: "2022-12-14 02:32:00",
    web_sales: 4224,
    offline_sales: 2794,
  },
  {
    date: "2022-12-14 02:33:00",
    web_sales: 4236,
    offline_sales: 2802,
  },
  {
    date: "2022-12-14 02:34:00",
    web_sales: 4262,
    offline_sales: 2817,
  },
  {
    date: "2022-12-14 02:35:00",
    web_sales: 4283,
    offline_sales: 2828,
  },
  {
    date: "2022-12-14 02:36:00",
    web_sales: 4304,
    offline_sales: 2840,
  },
  {
    date: "2022-12-14 02:37:00",
    web_sales: 4321,
    offline_sales: 2849,
  },
  {
    date: "2022-12-14 02:38:00",
    web_sales: 4335,
    offline_sales: 2855,
  },
  {
    date: "2022-12-14 02:39:00",
    web_sales: 4352,
    offline_sales: 2864,
  },
  {
    date: "2022-12-14 02:40:00",
    web_sales: 4365,
    offline_sales: 2870,
  },
  {
    date: "2022-12-14 02:41:00",
    web_sales: 4381,
    offline_sales: 2882,
  },
  {
    date: "2022-12-14 02:42:00",
    web_sales: 4395,
    offline_sales: 2889,
  },
  {
    date: "2022-12-14 02:43:00",
    web_sales: 4419,
    offline_sales: 2905,
  },
  {
    date: "2022-12-14 02:44:00",
    web_sales: 4438,
    offline_sales: 2918,
  },
  {
    date: "2022-12-14 02:45:00",
    web_sales: 4452,
    offline_sales: 2927,
  },
  {
    date: "2022-12-14 02:46:00",
    web_sales: 4467,
    offline_sales: 2932,
  },
  {
    date: "2022-12-14 02:47:00",
    web_sales: 4489,
    offline_sales: 2946,
  },
  {
    date: "2022-12-14 02:48:00",
    web_sales: 4498,
    offline_sales: 2952,
  },
  {
    date: "2022-12-14 02:49:00",
    web_sales: 4511,
    offline_sales: 2959,
  },
  {
    date: "2022-12-14 02:50:00",
    web_sales: 4529,
    offline_sales: 2970,
  },
  {
    date: "2022-12-14 02:51:00",
    web_sales: 4544,
    offline_sales: 2979,
  },
  {
    date: "2022-12-14 02:52:00",
    web_sales: 4559,
    offline_sales: 2988,
  },
  {
    date: "2022-12-14 02:53:00",
    web_sales: 4580,
    offline_sales: 2999,
  },
  {
    date: "2022-12-14 02:54:00",
    web_sales: 4592,
    offline_sales: 3008,
  },
  {
    date: "2022-12-14 02:55:00",
    web_sales: 4602,
    offline_sales: 3015,
  },
  {
    date: "2022-12-14 02:56:00",
    web_sales: 4613,
    offline_sales: 3020,
  },
  {
    date: "2022-12-14 02:57:00",
    web_sales: 4633,
    offline_sales: 3036,
  },
  {
    date: "2022-12-14 02:58:00",
    web_sales: 4646,
    offline_sales: 3044,
  },
  {
    date: "2022-12-14 02:59:00",
    web_sales: 4658,
    offline_sales: 3050,
  },
  {
    date: "2022-12-14 03:00:00",
    web_sales: 4674,
    offline_sales: 3055,
  },
  {
    date: "2022-12-14 03:01:00",
    web_sales: 4685,
    offline_sales: 3064,
  },
  {
    date: "2022-12-14 03:02:00",
    web_sales: 4703,
    offline_sales: 3074,
  },
  {
    date: "2022-12-14 03:03:00",
    web_sales: 4717,
    offline_sales: 3081,
  },
  {
    date: "2022-12-14 03:04:00",
    web_sales: 4731,
    offline_sales: 3089,
  },
  {
    date: "2022-12-14 03:05:00",
    web_sales: 4751,
    offline_sales: 3096,
  },
  {
    date: "2022-12-14 03:06:00",
    web_sales: 4762,
    offline_sales: 3100,
  },
  {
    date: "2022-12-14 03:07:00",
    web_sales: 4782,
    offline_sales: 3116,
  },
  {
    date: "2022-12-14 03:08:00",
    web_sales: 4805,
    offline_sales: 3132,
  },
  {
    date: "2022-12-14 03:09:00",
    web_sales: 4822,
    offline_sales: 3142,
  },
  {
    date: "2022-12-14 03:10:00",
    web_sales: 4834,
    offline_sales: 3152,
  },
  {
    date: "2022-12-14 03:11:00",
    web_sales: 4858,
    offline_sales: 3164,
  },
  {
    date: "2022-12-14 03:12:00",
    web_sales: 4872,
    offline_sales: 3171,
  },
  {
    date: "2022-12-14 03:13:00",
    web_sales: 4895,
    offline_sales: 3183,
  },
  {
    date: "2022-12-14 03:14:00",
    web_sales: 4912,
    offline_sales: 3193,
  },
  {
    date: "2022-12-14 03:15:00",
    web_sales: 4933,
    offline_sales: 3210,
  },
  {
    date: "2022-12-14 03:16:00",
    web_sales: 4948,
    offline_sales: 3217,
  },
  {
    date: "2022-12-14 03:17:00",
    web_sales: 4963,
    offline_sales: 3225,
  },
  {
    date: "2022-12-14 03:18:00",
    web_sales: 4987,
    offline_sales: 3241,
  },
  {
    date: "2022-12-14 03:19:00",
    web_sales: 5007,
    offline_sales: 3247,
  },
  {
    date: "2022-12-14 03:20:00",
    web_sales: 5023,
    offline_sales: 3255,
  },
  {
    date: "2022-12-14 03:21:00",
    web_sales: 5038,
    offline_sales: 3264,
  },
  {
    date: "2022-12-14 03:22:00",
    web_sales: 5055,
    offline_sales: 3270,
  },
  {
    date: "2022-12-14 03:23:00",
    web_sales: 5069,
    offline_sales: 3276,
  },
  {
    date: "2022-12-14 03:24:00",
    web_sales: 5085,
    offline_sales: 3285,
  },
  {
    date: "2022-12-14 03:25:00",
    web_sales: 5097,
    offline_sales: 3294,
  },
  {
    date: "2022-12-14 03:26:00",
    web_sales: 5116,
    offline_sales: 3303,
  },
  {
    date: "2022-12-14 03:27:00",
    web_sales: 5130,
    offline_sales: 3313,
  },
  {
    date: "2022-12-14 03:28:00",
    web_sales: 5153,
    offline_sales: 3329,
  },
  {
    date: "2022-12-14 03:29:00",
    web_sales: 5162,
    offline_sales: 3335,
  },
  {
    date: "2022-12-14 03:30:00",
    web_sales: 5183,
    offline_sales: 3347,
  },
  {
    date: "2022-12-14 03:31:00",
    web_sales: 5196,
    offline_sales: 3353,
  },
  {
    date: "2022-12-14 03:32:00",
    web_sales: 5209,
    offline_sales: 3359,
  },
  {
    date: "2022-12-14 03:33:00",
    web_sales: 5218,
    offline_sales: 3364,
  },
  {
    date: "2022-12-14 03:34:00",
    web_sales: 5228,
    offline_sales: 3372,
  },
  {
    date: "2022-12-14 03:35:00",
    web_sales: 5238,
    offline_sales: 3374,
  },
  {
    date: "2022-12-14 03:36:00",
    web_sales: 5257,
    offline_sales: 3385,
  },
  {
    date: "2022-12-14 03:37:00",
    web_sales: 5278,
    offline_sales: 3396,
  },
  {
    date: "2022-12-14 03:38:00",
    web_sales: 5290,
    offline_sales: 3403,
  },
  {
    date: "2022-12-14 03:39:00",
    web_sales: 5304,
    offline_sales: 3412,
  },
  {
    date: "2022-12-14 03:40:00",
    web_sales: 5311,
    offline_sales: 3417,
  },
  {
    date: "2022-12-14 03:41:00",
    web_sales: 5326,
    offline_sales: 3427,
  },
  {
    date: "2022-12-14 03:42:00",
    web_sales: 5341,
    offline_sales: 3431,
  },
  {
    date: "2022-12-14 03:43:00",
    web_sales: 5358,
    offline_sales: 3443,
  },
  {
    date: "2022-12-14 03:44:00",
    web_sales: 5374,
    offline_sales: 3453,
  },
  {
    date: "2022-12-14 03:45:00",
    web_sales: 5391,
    offline_sales: 3460,
  },
  {
    date: "2022-12-14 03:46:00",
    web_sales: 5403,
    offline_sales: 3469,
  },
  {
    date: "2022-12-14 03:47:00",
    web_sales: 5421,
    offline_sales: 3479,
  },
  {
    date: "2022-12-14 03:48:00",
    web_sales: 5436,
    offline_sales: 3488,
  },
  {
    date: "2022-12-14 03:49:00",
    web_sales: 5446,
    offline_sales: 3493,
  },
  {
    date: "2022-12-14 03:50:00",
    web_sales: 5457,
    offline_sales: 3501,
  },
  {
    date: "2022-12-14 03:51:00",
    web_sales: 5471,
    offline_sales: 3510,
  },
  {
    date: "2022-12-14 03:52:00",
    web_sales: 5483,
    offline_sales: 3518,
  },
  {
    date: "2022-12-14 03:53:00",
    web_sales: 5493,
    offline_sales: 3527,
  },
  {
    date: "2022-12-14 03:54:00",
    web_sales: 5516,
    offline_sales: 3541,
  },
  {
    date: "2022-12-14 03:55:00",
    web_sales: 5528,
    offline_sales: 3549,
  },
  {
    date: "2022-12-14 03:56:00",
    web_sales: 5550,
    offline_sales: 3559,
  },
  {
    date: "2022-12-14 03:57:00",
    web_sales: 5564,
    offline_sales: 3564,
  },
  {
    date: "2022-12-14 03:58:00",
    web_sales: 5579,
    offline_sales: 3570,
  },
  {
    date: "2022-12-14 03:59:00",
    web_sales: 5590,
    offline_sales: 3576,
  },
  {
    date: "2022-12-14 04:00:00",
    web_sales: 5601,
    offline_sales: 3583,
  },
  {
    date: "2022-12-14 04:01:00",
    web_sales: 5616,
    offline_sales: 3593,
  },
  {
    date: "2022-12-14 04:02:00",
    web_sales: 5628,
    offline_sales: 3599,
  },
  {
    date: "2022-12-14 04:03:00",
    web_sales: 5647,
    offline_sales: 3612,
  },
  {
    date: "2022-12-14 04:04:00",
    web_sales: 5668,
    offline_sales: 3621,
  },
  {
    date: "2022-12-14 04:05:00",
    web_sales: 5686,
    offline_sales: 3627,
  },
  {
    date: "2022-12-14 04:06:00",
    web_sales: 5702,
    offline_sales: 3633,
  },
  {
    date: "2022-12-14 04:07:00",
    web_sales: 5713,
    offline_sales: 3639,
  },
  {
    date: "2022-12-14 04:08:00",
    web_sales: 5721,
    offline_sales: 3642,
  },
  {
    date: "2022-12-14 04:09:00",
    web_sales: 5740,
    offline_sales: 3653,
  },
  {
    date: "2022-12-14 04:10:00",
    web_sales: 5761,
    offline_sales: 3661,
  },
  {
    date: "2022-12-14 04:11:00",
    web_sales: 5776,
    offline_sales: 3667,
  },
  {
    date: "2022-12-14 04:12:00",
    web_sales: 5794,
    offline_sales: 3675,
  },
  {
    date: "2022-12-14 04:13:00",
    web_sales: 5809,
    offline_sales: 3682,
  },
  {
    date: "2022-12-14 04:14:00",
    web_sales: 5820,
    offline_sales: 3689,
  },
  {
    date: "2022-12-14 04:15:00",
    web_sales: 5834,
    offline_sales: 3695,
  },
  {
    date: "2022-12-14 04:16:00",
    web_sales: 5850,
    offline_sales: 3703,
  },
  {
    date: "2022-12-14 04:17:00",
    web_sales: 5875,
    offline_sales: 3711,
  },
  {
    date: "2022-12-14 04:18:00",
    web_sales: 5891,
    offline_sales: 3719,
  },
  {
    date: "2022-12-14 04:19:00",
    web_sales: 5905,
    offline_sales: 3732,
  },
  {
    date: "2022-12-14 04:20:00",
    web_sales: 5921,
    offline_sales: 3741,
  },
  {
    date: "2022-12-14 04:21:00",
    web_sales: 5938,
    offline_sales: 3752,
  },
  {
    date: "2022-12-14 04:22:00",
    web_sales: 5955,
    offline_sales: 3761,
  },
  {
    date: "2022-12-14 04:23:00",
    web_sales: 5969,
    offline_sales: 3769,
  },
  {
    date: "2022-12-14 04:24:00",
    web_sales: 5977,
    offline_sales: 3774,
  },
  {
    date: "2022-12-14 04:25:00",
    web_sales: 5990,
    offline_sales: 3782,
  },
  {
    date: "2022-12-14 04:26:00",
    web_sales: 6003,
    offline_sales: 3786,
  },
  {
    date: "2022-12-14 04:27:00",
    web_sales: 6015,
    offline_sales: 3793,
  },
  {
    date: "2022-12-14 04:28:00",
    web_sales: 6026,
    offline_sales: 3798,
  },
  {
    date: "2022-12-14 04:29:00",
    web_sales: 6043,
    offline_sales: 3807,
  },
  {
    date: "2022-12-14 04:30:00",
    web_sales: 6055,
    offline_sales: 3813,
  },
  {
    date: "2022-12-14 04:31:00",
    web_sales: 6063,
    offline_sales: 3815,
  },
  {
    date: "2022-12-14 04:32:00",
    web_sales: 6069,
    offline_sales: 3819,
  },
  {
    date: "2022-12-14 04:33:00",
    web_sales: 6081,
    offline_sales: 3825,
  },
  {
    date: "2022-12-14 04:34:00",
    web_sales: 6089,
    offline_sales: 3826,
  },
  {
    date: "2022-12-14 04:35:00",
    web_sales: 6105,
    offline_sales: 3837,
  },
  {
    date: "2022-12-14 04:36:00",
    web_sales: 6120,
    offline_sales: 3845,
  },
  {
    date: "2022-12-14 04:37:00",
    web_sales: 6132,
    offline_sales: 3854,
  },
  {
    date: "2022-12-14 04:38:00",
    web_sales: 6147,
    offline_sales: 3859,
  },
  {
    date: "2022-12-14 04:39:00",
    web_sales: 6164,
    offline_sales: 3871,
  },
  {
    date: "2022-12-14 04:40:00",
    web_sales: 6174,
    offline_sales: 3879,
  },
  {
    date: "2022-12-14 04:41:00",
    web_sales: 6190,
    offline_sales: 3890,
  },
  {
    date: "2022-12-14 04:42:00",
    web_sales: 6200,
    offline_sales: 3897,
  },
  {
    date: "2022-12-14 04:43:00",
    web_sales: 6218,
    offline_sales: 3907,
  },
  {
    date: "2022-12-14 04:44:00",
    web_sales: 6235,
    offline_sales: 3916,
  },
  {
    date: "2022-12-14 04:45:00",
    web_sales: 6241,
    offline_sales: 3919,
  },
  {
    date: "2022-12-14 04:46:00",
    web_sales: 6252,
    offline_sales: 3922,
  },
  {
    date: "2022-12-14 04:47:00",
    web_sales: 6264,
    offline_sales: 3928,
  },
  {
    date: "2022-12-14 04:48:00",
    web_sales: 6282,
    offline_sales: 3937,
  },
  {
    date: "2022-12-14 04:49:00",
    web_sales: 6295,
    offline_sales: 3945,
  },
  {
    date: "2022-12-14 04:50:00",
    web_sales: 6308,
    offline_sales: 3948,
  },
  {
    date: "2022-12-14 04:51:00",
    web_sales: 6321,
    offline_sales: 3956,
  },
  {
    date: "2022-12-14 04:52:00",
    web_sales: 6336,
    offline_sales: 3966,
  },
  {
    date: "2022-12-14 04:53:00",
    web_sales: 6344,
    offline_sales: 3971,
  },
  {
    date: "2022-12-14 04:54:00",
    web_sales: 6363,
    offline_sales: 3981,
  },
  {
    date: "2022-12-14 04:55:00",
    web_sales: 6371,
    offline_sales: 3986,
  },
  {
    date: "2022-12-14 04:56:00",
    web_sales: 6383,
    offline_sales: 3992,
  },
  {
    date: "2022-12-14 04:57:00",
    web_sales: 6397,
    offline_sales: 3999,
  },
  {
    date: "2022-12-14 04:58:00",
    web_sales: 6405,
    offline_sales: 4004,
  },
  {
    date: "2022-12-14 04:59:00",
    web_sales: 6419,
    offline_sales: 4011,
  },
  {
    date: "2022-12-14 05:00:00",
    web_sales: 6428,
    offline_sales: 4019,
  },
  {
    date: "2022-12-14 05:01:00",
    web_sales: 6441,
    offline_sales: 4026,
  },
  {
    date: "2022-12-14 05:02:00",
    web_sales: 6451,
    offline_sales: 4032,
  },
  {
    date: "2022-12-14 05:03:00",
    web_sales: 6465,
    offline_sales: 4038,
  },
  {
    date: "2022-12-14 05:04:00",
    web_sales: 6474,
    offline_sales: 4043,
  },
  {
    date: "2022-12-14 05:05:00",
    web_sales: 6489,
    offline_sales: 4050,
  },
  {
    date: "2022-12-14 05:06:00",
    web_sales: 6503,
    offline_sales: 4060,
  },
  {
    date: "2022-12-14 05:07:00",
    web_sales: 6513,
    offline_sales: 4065,
  },
  {
    date: "2022-12-14 05:08:00",
    web_sales: 6521,
    offline_sales: 4067,
  },
  {
    date: "2022-12-14 05:09:00",
    web_sales: 6530,
    offline_sales: 4074,
  },
  {
    date: "2022-12-14 05:10:00",
    web_sales: 6542,
    offline_sales: 4081,
  },
  {
    date: "2022-12-14 05:11:00",
    web_sales: 6547,
    offline_sales: 4085,
  },
  {
    date: "2022-12-14 05:12:00",
    web_sales: 6556,
    offline_sales: 4091,
  },
  {
    date: "2022-12-14 05:13:00",
    web_sales: 6565,
    offline_sales: 4094,
  },
  {
    date: "2022-12-14 05:14:00",
    web_sales: 6572,
    offline_sales: 4099,
  },
  {
    date: "2022-12-14 05:15:00",
    web_sales: 6587,
    offline_sales: 4107,
  },
  {
    date: "2022-12-14 05:16:00",
    web_sales: 6599,
    offline_sales: 4117,
  },
  {
    date: "2022-12-14 05:17:00",
    web_sales: 6611,
    offline_sales: 4126,
  },
  {
    date: "2022-12-14 05:18:00",
    web_sales: 6614,
    offline_sales: 4127,
  },
  {
    date: "2022-12-14 05:19:00",
    web_sales: 6619,
    offline_sales: 4130,
  },
  {
    date: "2022-12-14 05:20:00",
    web_sales: 6626,
    offline_sales: 4135,
  },
  {
    date: "2022-12-14 05:21:00",
    web_sales: 6638,
    offline_sales: 4144,
  },
  {
    date: "2022-12-14 05:22:00",
    web_sales: 6648,
    offline_sales: 4151,
  },
  {
    date: "2022-12-14 05:23:00",
    web_sales: 6656,
    offline_sales: 4156,
  },
  {
    date: "2022-12-14 05:24:00",
    web_sales: 6667,
    offline_sales: 4162,
  },
  {
    date: "2022-12-14 05:25:00",
    web_sales: 6678,
    offline_sales: 4166,
  },
  {
    date: "2022-12-14 05:26:00",
    web_sales: 6690,
    offline_sales: 4174,
  },
  {
    date: "2022-12-14 05:27:00",
    web_sales: 6707,
    offline_sales: 4184,
  },
  {
    date: "2022-12-14 05:28:00",
    web_sales: 6721,
    offline_sales: 4190,
  },
  {
    date: "2022-12-14 05:29:00",
    web_sales: 6730,
    offline_sales: 4195,
  },
  {
    date: "2022-12-14 05:30:00",
    web_sales: 6745,
    offline_sales: 4202,
  },
  {
    date: "2022-12-14 05:31:00",
    web_sales: 6767,
    offline_sales: 4216,
  },
  {
    date: "2022-12-14 05:32:00",
    web_sales: 6786,
    offline_sales: 4228,
  },
  {
    date: "2022-12-14 05:33:00",
    web_sales: 6801,
    offline_sales: 4238,
  },
  {
    date: "2022-12-14 05:34:00",
    web_sales: 6812,
    offline_sales: 4243,
  },
  {
    date: "2022-12-14 05:35:00",
    web_sales: 6824,
    offline_sales: 4249,
  },
  {
    date: "2022-12-14 05:36:00",
    web_sales: 6840,
    offline_sales: 4257,
  },
  {
    date: "2022-12-14 05:37:00",
    web_sales: 6861,
    offline_sales: 4265,
  },
  {
    date: "2022-12-14 05:38:00",
    web_sales: 6882,
    offline_sales: 4275,
  },
  {
    date: "2022-12-14 05:39:00",
    web_sales: 6901,
    offline_sales: 4291,
  },
  {
    date: "2022-12-14 05:40:00",
    web_sales: 6916,
    offline_sales: 4295,
  },
  {
    date: "2022-12-14 05:41:00",
    web_sales: 6930,
    offline_sales: 4300,
  },
  {
    date: "2022-12-14 05:42:00",
    web_sales: 6943,
    offline_sales: 4301,
  },
  {
    date: "2022-12-14 05:43:00",
    web_sales: 6958,
    offline_sales: 4311,
  },
  {
    date: "2022-12-14 05:44:00",
    web_sales: 6972,
    offline_sales: 4318,
  },
  {
    date: "2022-12-14 05:45:00",
    web_sales: 6982,
    offline_sales: 4321,
  },
  {
    date: "2022-12-14 05:46:00",
    web_sales: 6998,
    offline_sales: 4327,
  },
  {
    date: "2022-12-14 05:47:00",
    web_sales: 7009,
    offline_sales: 4333,
  },
  {
    date: "2022-12-14 05:48:00",
    web_sales: 7016,
    offline_sales: 4339,
  },
  {
    date: "2022-12-14 05:49:00",
    web_sales: 7026,
    offline_sales: 4345,
  },
  {
    date: "2022-12-14 05:50:00",
    web_sales: 7043,
    offline_sales: 4353,
  },
  {
    date: "2022-12-14 05:51:00",
    web_sales: 7053,
    offline_sales: 4359,
  },
  {
    date: "2022-12-14 05:52:00",
    web_sales: 7065,
    offline_sales: 4367,
  },
  {
    date: "2022-12-14 05:53:00",
    web_sales: 7073,
    offline_sales: 4370,
  },
  {
    date: "2022-12-14 05:54:00",
    web_sales: 7083,
    offline_sales: 4373,
  },
  {
    date: "2022-12-14 05:55:00",
    web_sales: 7088,
    offline_sales: 4377,
  },
  {
    date: "2022-12-14 05:56:00",
    web_sales: 7101,
    offline_sales: 4387,
  },
  {
    date: "2022-12-14 05:57:00",
    web_sales: 7105,
    offline_sales: 4391,
  },
  {
    date: "2022-12-14 05:58:00",
    web_sales: 7119,
    offline_sales: 4400,
  },
  {
    date: "2022-12-14 05:59:00",
    web_sales: 7130,
    offline_sales: 4408,
  },
  {
    date: "2022-12-14 06:00:00",
    web_sales: 7139,
    offline_sales: 4411,
  },
  {
    date: "2022-12-14 06:01:00",
    web_sales: 7149,
    offline_sales: 4417,
  },
  {
    date: "2022-12-14 06:02:00",
    web_sales: 7157,
    offline_sales: 4421,
  },
  {
    date: "2022-12-14 06:03:00",
    web_sales: 7166,
    offline_sales: 4426,
  },
  {
    date: "2022-12-14 06:04:00",
    web_sales: 7173,
    offline_sales: 4431,
  },
  {
    date: "2022-12-14 06:05:00",
    web_sales: 7180,
    offline_sales: 4433,
  },
  {
    date: "2022-12-14 06:06:00",
    web_sales: 7188,
    offline_sales: 4437,
  },
  {
    date: "2022-12-14 06:07:00",
    web_sales: 7194,
    offline_sales: 4442,
  },
  {
    date: "2022-12-14 06:08:00",
    web_sales: 7199,
    offline_sales: 4445,
  },
  {
    date: "2022-12-14 06:09:00",
    web_sales: 7207,
    offline_sales: 4448,
  },
  {
    date: "2022-12-14 06:10:00",
    web_sales: 7212,
    offline_sales: 4451,
  },
  {
    date: "2022-12-14 06:11:00",
    web_sales: 7221,
    offline_sales: 4457,
  },
  {
    date: "2022-12-14 06:12:00",
    web_sales: 7230,
    offline_sales: 4459,
  },
  {
    date: "2022-12-14 06:13:00",
    web_sales: 7235,
    offline_sales: 4459,
  },
  {
    date: "2022-12-14 06:14:00",
    web_sales: 7240,
    offline_sales: 4462,
  },
  {
    date: "2022-12-14 06:15:00",
    web_sales: 7249,
    offline_sales: 4469,
  },
  {
    date: "2022-12-14 06:16:00",
    web_sales: 7257,
    offline_sales: 4472,
  },
  {
    date: "2022-12-14 06:17:00",
    web_sales: 7260,
    offline_sales: 4474,
  },
  {
    date: "2022-12-14 06:18:00",
    web_sales: 7267,
    offline_sales: 4477,
  },
  {
    date: "2022-12-14 06:19:00",
    web_sales: 7274,
    offline_sales: 4481,
  },
  {
    date: "2022-12-14 06:20:00",
    web_sales: 7286,
    offline_sales: 4490,
  },
  {
    date: "2022-12-14 06:21:00",
    web_sales: 7290,
    offline_sales: 4491,
  },
  {
    date: "2022-12-14 06:22:00",
    web_sales: 7296,
    offline_sales: 4495,
  },
  {
    date: "2022-12-14 06:23:00",
    web_sales: 7306,
    offline_sales: 4500,
  },
  {
    date: "2022-12-14 06:24:00",
    web_sales: 7313,
    offline_sales: 4504,
  },
  {
    date: "2022-12-14 06:25:00",
    web_sales: 7321,
    offline_sales: 4508,
  },
  {
    date: "2022-12-14 06:26:00",
    web_sales: 7326,
    offline_sales: 4510,
  },
  {
    date: "2022-12-14 06:27:00",
    web_sales: 7328,
    offline_sales: 4511,
  },
  {
    date: "2022-12-14 06:28:00",
    web_sales: 7332,
    offline_sales: 4514,
  },
  {
    date: "2022-12-14 06:29:00",
    web_sales: 7341,
    offline_sales: 4518,
  },
  {
    date: "2022-12-14 06:30:00",
    web_sales: 7346,
    offline_sales: 4520,
  },
  {
    date: "2022-12-14 06:31:00",
    web_sales: 7350,
    offline_sales: 4521,
  },
  {
    date: "2022-12-14 06:32:00",
    web_sales: 7354,
    offline_sales: 4524,
  },
  {
    date: "2022-12-14 06:33:00",
    web_sales: 7356,
    offline_sales: 4526,
  },
  {
    date: "2022-12-14 06:34:00",
    web_sales: 7364,
    offline_sales: 4531,
  },
  {
    date: "2022-12-14 06:35:00",
    web_sales: 7368,
    offline_sales: 4532,
  },
  {
    date: "2022-12-14 06:36:00",
    web_sales: 7373,
    offline_sales: 4534,
  },
  {
    date: "2022-12-14 06:37:00",
    web_sales: 7380,
    offline_sales: 4536,
  },
  {
    date: "2022-12-14 06:38:00",
    web_sales: 7387,
    offline_sales: 4539,
  },
  {
    date: "2022-12-14 06:39:00",
    web_sales: 7392,
    offline_sales: 4541,
  },
  {
    date: "2022-12-14 06:40:00",
    web_sales: 7400,
    offline_sales: 4545,
  },
  {
    date: "2022-12-14 06:41:00",
    web_sales: 7403,
    offline_sales: 4548,
  },
  {
    date: "2022-12-14 06:42:00",
    web_sales: 7406,
    offline_sales: 4550,
  },
  {
    date: "2022-12-14 06:43:00",
    web_sales: 7409,
    offline_sales: 4552,
  },
  {
    date: "2022-12-14 06:44:00",
    web_sales: 7414,
    offline_sales: 4553,
  },
  {
    date: "2022-12-14 06:45:00",
    web_sales: 7416,
    offline_sales: 4553,
  },
  {
    date: "2022-12-14 06:46:00",
    web_sales: 7421,
    offline_sales: 4556,
  },
  {
    date: "2022-12-14 06:47:00",
    web_sales: 7428,
    offline_sales: 4560,
  },
  {
    date: "2022-12-14 06:48:00",
    web_sales: 7437,
    offline_sales: 4565,
  },
  {
    date: "2022-12-14 06:49:00",
    web_sales: 7440,
    offline_sales: 4566,
  },
  {
    date: "2022-12-14 06:50:00",
    web_sales: 7445,
    offline_sales: 4570,
  },
  {
    date: "2022-12-14 06:51:00",
    web_sales: 7455,
    offline_sales: 4579,
  },
  {
    date: "2022-12-14 06:52:00",
    web_sales: 7462,
    offline_sales: 4584,
  },
  {
    date: "2022-12-14 06:53:00",
    web_sales: 7466,
    offline_sales: 4586,
  },
  {
    date: "2022-12-14 06:54:00",
    web_sales: 7478,
    offline_sales: 4595,
  },
  {
    date: "2022-12-14 06:55:00",
    web_sales: 7482,
    offline_sales: 4599,
  },
  {
    date: "2022-12-14 06:56:00",
    web_sales: 7485,
    offline_sales: 4601,
  },
  {
    date: "2022-12-14 06:57:00",
    web_sales: 7491,
    offline_sales: 4604,
  },
  {
    date: "2022-12-14 06:58:00",
    web_sales: 7497,
    offline_sales: 4607,
  },
  {
    date: "2022-12-14 06:59:00",
    web_sales: 7498,
    offline_sales: 4608,
  },
  {
    date: "2022-12-14 07:00:00",
    web_sales: 7502,
    offline_sales: 4609,
  },
  {
    date: "2022-12-14 07:01:00",
    web_sales: 7511,
    offline_sales: 4613,
  },
  {
    date: "2022-12-14 07:02:00",
    web_sales: 7518,
    offline_sales: 4616,
  },
  {
    date: "2022-12-14 07:03:00",
    web_sales: 7523,
    offline_sales: 4618,
  },
  {
    date: "2022-12-14 07:04:00",
    web_sales: 7526,
    offline_sales: 4620,
  },
];

export default lineChartData;
