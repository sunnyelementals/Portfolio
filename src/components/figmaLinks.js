const figmaLinks = [
  "https://www.figma.com/design/nKsW3g1GybEY6MP04cfPyb/Web-design?node-id=0-1&t=XR44MyC4NKxpvu5f-1",
  "https://www.figma.com/design/nKsW3g1GybEY6MP04cfPyb/Web-design?node-id=16-2&t=XR44MyC4NKxpvu5f-1",
  "https://www.figma.com/design/zc0qUliEvCpMKiEaTrEZHf/Portfolio?node-id=0-1&t=tlnuJqQny79OHAi9-1",
  "https://www.figma.com/design/6IJR9Msz9ou1RgoRKylvhn/Web-site?node-id=0-1&t=qELIW58bHi2d3JaR-1",
  "https://www.figma.com/design/2alveromLuCBjmLet4vXz6/Chat-app?node-id=161-829&t=79UX4xCmqWDjR8X9-1",
  "https://www.figma.com/design/vwvIePjvFpdybJBaGd8gYa/Palmkart-app?node-id=0-1&t=xwGl9LWowQ3AsEc6-1",

  "https://www.figma.com/design/Tibo8PwdUOUkIKchTUi6dm/OnlineShop-app?node-id=0-1&t=Mp1pzHrb9eH5efkd-1",
  "https://www.figma.com/design/tPM3CXlYKmcG4ezQtacsFW/whitepace-website?node-id=0-1&t=R5T7kWBk2PynUod7-1",
  "https://www.figma.com/proto/Tibo8PwdUOUkIKchTUi6dm/OnlineShop-app?page-id=0%3A1&node-id=1-3&t=9Ual1en13z9r2Hfs-1",
  "https://www.figma.com/proto/HluP68H93h6Ddr9IESRSX7/SOLAR-SYSTEM-app?page-id=0%3A1&node-id=4-28&t=iITrWBjYCh4cKglg-1",
  "https://www.figma.com/proto/gWScSgCyWyAT19w8mq0Kgo/Hospital-app?page-id=0%3A1&node-id=1-2&t=NZzgzvMDkedRNQNm-1",

  "https://www.figma.com/proto/ViQ3Yngcf549hDwe5clTNi/Hive-app?page-id=0%3A1&node-id=1-2&t=IE0ywrxrhwjGkM2K-1",
  "https://www.figma.com/proto/C4M7C0PoX22EDMdQppIvi1/User-app?page-id=0%3A1&node-id=16-41&t=z59a0qPYhsyYvWjS-1",
  "https://www.figma.com/proto/seu1HjozfZILmgam6Wc6Be/Financial-app?page-id=0%3A1&node-id=1-5&t=CyejBjIAFIuSsSrh-1",
  "https://www.figma.com/proto/x5YYSgtjcu4jeEUJnszogu/AI-app?page-id=0%3A1&node-id=18-42&t=qOzVWNHfSkGI155J-1",
  "https://www.figma.com/proto/p1LujQsfUU5m3BY7SqWA1S/Photo-storage-and-management-app?page-id=0%3A1&node-id=14-55&t=YxkOM2tdlEJh79Qc-1",

  "https://www.figma.com/proto/mhOJ9lmg7X0tk5oz3ZrbOr/Sd-app?page-id=0%3A1&node-id=55-3061&scaling=scale-down&content-scaling=fixed&t=tPBcIn5srq4XwNCk-1",
  "https://www.figma.com/proto/p0d4UXFgjQQNJ9oSBLcrAy/Song-app?page-id=0%3A1&node-id=1-2&t=yf7rm9TPpacwHvxh-1",
  "https://www.figma.com/proto/hMJ4XSOZsAyBfgTmj0D0yP/Game-app?page-id=0%3A1&node-id=11-2&scaling=scale-down&content-scaling=fixed&t=BBa7pSzOwhngC2aM-1",
  "https://www.figma.com/proto/QfOjIi0Vmb7BdoGA4GIJYJ/Game-app?page-id=0%3A1&node-id=2-2&t=McGiX5SqeXC9dlWC-1",
  "https://www.figma.com/proto/pyqBP98bqTgSheb6taG3YE/foodsmile-app?page-id=0%3A1&node-id=120-17&t=KjOlxRG4ni3AOBR9-1",

  "https://www.figma.com/proto/wS1t0EfofjD4rqT9gVAXCF/Figma-mobile-Design?page-id=9%3A4&node-id=43-60&starting-point-node-id=9%3A5&t=UC57uKqMzrNwv7KQ-1",
  "https://www.figma.com/proto/Haup4h7JCn6PMzQzrrOli6/mobile-walkthrough--Community-?page-id=0%3A1&node-id=1-5626&scaling=scale-down&content-scaling=fixed&t=g1TvdWbTlrPnJv49-1",
  "https://www.figma.com/proto/86bBkR5RMyLPDUytE8icSE/Task1?page-id=0%3A1&node-id=27-92&t=wxCykhQdodsxAJue-1",
  "https://www.figma.com/proto/vwvIePjvFpdybJBaGd8gYa/Palmkart-app?page-id=0%3A1&node-id=1-236&scaling=scale-down&content-scaling=fixed&t=0F1I579N7uPhnZrO-1",
  "https://www.figma.com/design/KW3Xxkj4qGUwfVax720zVD/Neumorphic-weather-app?node-id=0-1&t=zR1FmmKrgnGrgK6t-1",
  "https://www.linkedin.com/posts/mansi-joshi-97b443259_appdesign-ux-ui-activity-7220361916852891648-oFze?utm_source=share&utm_medium=member_android&rcm=ACoAAD-aXa8B9nqrsofDIo6-uGDI6btx1LMfu8o",
  "https://www.figma.com/proto/Ks33zMiKg2AFQnGUIxiPdr/task?page-id=0%3A1&node-id=8-379&viewport=766%2C630%2C0.57&t=xhKNPixcKpwyTFGz-1&scaling=scale-down&content-scaling=fixed",
  "https://www.figma.com/design/ViQ3Yngcf549hDwe5clTNi/Hive-app?node-id=0-1&t=UlZ8R3mgATZOuxU5-1",
  "https://www.figma.com/design/pyqBP98bqTgSheb6taG3YE/foodsmile-app?node-id=0-1&t=wpSG8Iw9bfqCUBxa-1",
  "https://www.figma.com/design/KW3Xxkj4qGUwfVax720zVD/Neumorphic-weather-app?node-id=0-1&t=zR1FmmKrgnGrgK6t-1",
];

export default figmaLinks;
