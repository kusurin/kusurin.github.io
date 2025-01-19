var balls_colle = [
    { name: "重新补给", commands: "ddur", class: "固定战略", icon: "./img/icons/General Stratagems/Resupply.svg" },
    { name: "支援", commands: "udrlu", class: "固定战略", icon: "./img/icons/General Stratagems/Reinforce.svg" },
    { name: "SOS", commands: "udru", class: "固定战略", icon: "./img/icons/General Stratagems/SOS Beacon.svg" },
    { name: "地狱火炸弹", commands: "duldurdu", class: "固定战略", icon: "./img/icons/General Stratagems/Hellbomb.svg" },
    { name: "超级地球大炮", commands: "ruud", class: "固定战略", icon: "./img/icons/General Stratagems/SEAF Artillery.svg" },
    { name: "超级地球旗帜", commands: "dudu", class: "固定战略", icon: "./img/icons/General Stratagems/Super Earth Flag.svg" },
    { name: "轨道照明弹", commands: "rrll", class: "固定战略", icon: "./img/icons/General Stratagems/Orbital Illumination Flare.svg" },
    { name: "地震探测器", commands: "uulrdd", class: "固定战略", icon: "./img/icons/General Stratagems/Seismic Probe.svg" },
    { name: "地壳钻机", commands: "ududud", class: "固定战略", icon: "./img/icons/General Stratagems/Tectonic Drill.svg" },
    { name: "暗流体容器", commands: "ulrduu", class: "固定战略", icon: "./img/icons/General Stratagems/Dark Fluid Vessel.svg" },
    { name: "虫巢破坏钻机", commands: "ludrdd", class: "固定战略", icon: "./img/icons/General Stratagems/Hive Breaker Drill.svg" },
    { name: "勘探钻机", commands: "ddlrdd", class: "固定战略", icon: "./img/icons/General Stratagems/Hive Breaker Drill.svg" },
    { name: "上传数据", commands: "lruuu", class: "固定战略", icon: "./img/icons/General Stratagems/Upload Data.svg" },
    { name: "额外补给", commands: "ddur", class: "固定战略", icon: "" },
    { name: "医疗补给", commands: "ldul", class: "固定战略", icon: "" },

    { name: "MG-43 机枪", commands: "dldur", class: "爱国行政中心", icon: "./img/icons/Patriotic Administration Center/Machine Gun.svg" },
    { name: "APW-1 反器材步枪", commands: "dlrud", class: "爱国行政中心", icon: "./img/icons/Patriotic Administration Center/Anti-Materiel Rifle.svg" },
    { name: "M-105 盟友", commands: "dlduul", class: "爱国行政中心", icon: "./img/icons/Patriotic Administration Center/Stalwart.svg" },
    { name: "EAT-17 消耗性反坦克武器", commands: "ddlur", class: "爱国行政中心", icon: "./img/icons/Patriotic Administration Center/Expendable Anti-Tank.svg" },
    { name: "GR-8 无后坐力炮", commands: "dlrrl", class: "爱国行政中心", icon: "./img/icons/Patriotic Administration Center/Recoilless Rifle.svg" },
    { name: "FLAM-40 火焰喷射器", commands: "dludu", class: "爱国行政中心", icon: "./img/icons/Patriotic Administration Center/Flamethrower.svg" },
    { name: "AC-8 机炮", commands: "dlduur", class: "爱国行政中心", icon: "./img/icons/Patriotic Administration Center/Autocannon.svg" },
    { name: "重机枪", commands: "dludd", class: "爱国行政中心", icon: "./img/icons/Patriotic Administration Center/Heavy Machine Gun.svg" },
    { name: "RL-77 空爆火箭发射器", commands: "duulr", class: "爱国行政中心", icon: "./img/icons/Patriotic Administration Center/Airburst Rocket Launcher.svg" },
    { name: "MLS-4X 突击兵", commands: "dldul", class: "爱国行政中心", icon: "./img/icons/Patriotic Administration Center/Commando.svg" },
    { name: "RS-422 磁轨炮", commands: "drdulr", class: "爱国行政中心", icon: "./img/icons/Patriotic Administration Center/Railgun.svg" },
    { name: "FAF-14 飞矛", commands: "ddudd", class: "爱国行政中心", icon: "./img/icons/Patriotic Administration Center/Spear.svg" },
    { name: "StA-X3 W.A.S.P.发射器", commands: "ddudr", class: "爱国行政中心", icon: "./img/icons/Patriotic Administration Center/StA-X3 W.A.S.P. Launcher.svg" },
    { name: "毒刺", commands: "ddluu", class: "爱国行政中心", icon: "" },
    { name: "GL-21 燃烧榴弹发射器", commands: "duluu", class: "爱国行政中心", icon: "" },

    { name: "飞鹰机枪扫射", commands: "urr", class: "机库", icon: "./img/icons/Hangar/Eagle Strafing Run.svg" },
    { name: "飞鹰空袭", commands: "urdr", class: "机库", icon: "./img/icons/Hangar/Eagle Airstrike.svg" },
    { name: "飞鹰集束炸弹", commands: "urddr", class: "机库", icon: "./img/icons/Hangar/Eagle Cluster Bomb.svg" },
    { name: "飞鹰凝固汽油弹空袭", commands: "urdu", class: "机库", icon: "./img/icons/Hangar/Eagle Napalm Airstrike.svg" },
    { name: "LIFT-850 喷射背包", commands: "duudu", class: "机库", icon: "./img/icons/Hangar/Jump Pack.svg" },
    { name: "飞鹰烟雾攻击", commands: "urud", class: "机库", icon: "./img/icons/Hangar/Eagle Smoke Strike.svg" },
    { name: "飞鹰110MM火箭巢", commands: "urul", class: "机库", icon: "./img/icons/Hangar/Eagle 110MM Rocket Pods.svg" },
    { name: "飞鹰500KG炸弹", commands: "urddd", class: "机库", icon: "./img/icons/Hangar/Eagle 500KG Bomb.svg" },
    { name: "M-102 快速侦察载具", commands: "ldrdrdu", class: "机库", icon: "./img/icons/Hangar/Fast Recon Vehicle.svg" },
    { name: "飞鹰重新武装", commands: "uulur", class: "机库", icon: "./img/icons/Hangar/Eagle Rearm.svg" },
    { name: "飞鹰空对空导弹", commands: "uruu", class: "机库", icon: "" },
    { name: "地毯式轰炸", commands: "ururur", class: "机库", icon: "" },

    { name: "轨道精准攻击", commands: "rru", class: "舰桥", icon: "./img/icons/Bridge/Orbital Precision Strike.svg" },
    { name: "轨道毒气攻击", commands: "rrdr", class: "舰桥", icon: "./img/icons/Bridge/Orbital Gas Strike.svg" },
    { name: "轨道电磁冲击波攻击", commands: "rrld", class: "舰桥", icon: "./img/icons/Bridge/Orbital EMS Strike.svg" },
    { name: "轨道烟雾攻击", commands: "rrdu", class: "舰桥", icon: "./img/icons/Bridge/Orbital Smoke Strike.svg" },
    { name: "E/MG-101 重机枪部署支架", commands: "dulrrl", class: "舰桥", icon: "./img/icons/Bridge/HMG Emplacement.svg" },
    { name: "FX-12 防护罩生成中继器", commands: "ddlrlr", class: "舰桥", icon: "./img/icons/Bridge/Shield Generator Relay.svg" },
    { name: "AARC-3 特斯拉塔", commands: "durulr", class: "舰桥", icon: "./img/icons/Bridge/Tesla Tower.svg" },

    { name: "轨道加特林火力网", commands: "rdluu", class: "轨道加农炮", icon: "./img/icons/Orbital Cannons/Orbital Gatling Barrage.svg" },
    { name: "轨道空爆攻击", commands: "rrr", class: "轨道加农炮", icon: "./img/icons/Orbital Cannons/Orbital Airburst Strike.svg" },
    { name: "轨道120MM高爆弹火力网", commands: "rrdlrd", class: "轨道加农炮", icon: "./img/icons/Orbital Cannons/Orbital 120MM HE Barrage.svg" },
    { name: "轨道380MM高爆弹火力网", commands: "rduuldd", class: "轨道加农炮", icon: "./img/icons/Orbital Cannons/Orbital 380MM HE Barrage.svg" },
    { name: "轨道游走火力网", commands: "rdrdrd", class: "轨道加农炮", icon: "./img/icons/Orbital Cannons/Orbital Walking Barrage.svg" },
    { name: "轨道激光炮", commands: "rdurd", class: "轨道加农炮", icon: "./img/icons/Orbital Cannons/Orbital Laser.svg" },
    { name: "轨道凝固汽油弹火力网", commands: "rrdlru", class: "轨道加农炮", icon: "./img/icons/Orbital Cannons/Orbital Napalm Barrage.svg" },
    { name: "轨道炮攻击", commands: "ruddr", class: "轨道加农炮", icon: "./img/icons/Orbital Cannons/Orbital Railcannon Strike.svg" },

    { name: "MD-6 反步兵雷区", commands: "dlur", class: "工程港", icon: "./img/icons/Engineering Bay/Anti-Personnel Minefield.svg" },
    { name: "反坦克地雷", commands: "dluu", class: "工程港", icon: "./img/icons/Engineering Bay/Anti-Tank Mines.svg" },
    { name: "B-1 补给背包", commands: "dlduud", class: "工程港", icon: "./img/icons/Engineering Bay/Supply Pack.svg" },
    { name: "GL-21 榴弹发射器", commands: "dluld", class: "工程港", icon: "./img/icons/Engineering Bay/Grenade Launcher.svg" },
    { name: "LAS-98 激光大炮", commands: "dldul", class: "工程港", icon: "./img/icons/Engineering Bay/Laser Cannon.svg" },
    { name: "MD-14 燃烧地雷", commands: "dlld", class: "工程港", icon: "./img/icons/Engineering Bay/Incendiary Mines.svg" },
    { name: "AX/LAS-5 护卫犬漫游车", commands: "dulurr", class: "工程港", icon: "./img/icons/Engineering Bay/Guard Dog Rover.svg" },
    { name: "SH-20 防弹护盾背包", commands: "dlddul", class: "工程港", icon: "./img/icons/Engineering Bay/Ballistic Shield Backpack.svg" },
    { name: "ARC-3 电弧发射器", commands: "drdull", class: "工程港", icon: "./img/icons/Engineering Bay/Arc Thrower.svg" },
    { name: "LAS-99 类星体加农炮", commands: "ddulr", class: "工程港", icon: "./img/icons/Engineering Bay/Quasar Cannon.svg" },
    { name: "SH-32 防护罩生成包", commands: "dulrlr", class: "工程港", icon: "./img/icons/Engineering Bay/Shield Generator Pack.svg" },
    

    { name: "A/MG-43 哨戒机枪", commands: "durru", class: "机械工坊", icon: "./img/icons/Robotics Workshop/Machine Gun Sentry.svg" },
    { name: "A/G-16 加特林哨戒炮", commands: "durl", class: "机械工坊", icon: "./img/icons/Robotics Workshop/Gatling Sentry.svg" },
    { name: "AM-12 迫击哨戒炮", commands: "durrd", class: "机械工坊", icon: "./img/icons/Robotics Workshop/Mortar Sentry.svg" },
    { name: "AX/AR-3 保护犬", commands: "dulurd", class: "机械工坊", icon: "./img/icons/Robotics Workshop/Guard Dog.svg" },
    { name: "AAC-8 自动哨戒炮", commands: "durulu", class: "机械工坊", icon: "./img/icons/Robotics Workshop/Autocannon Sentry.svg" },
    { name: "A/MLS-4X 火箭哨戒炮", commands: "durrl", class: "机械工坊", icon: "./img/icons/Robotics Workshop/Rocket Sentry.svg" },
    { name: "A/M-23 电磁冲击波迫击哨戒炮", commands: "durdr", class: "机械工坊", icon: "./img/icons/Robotics Workshop/EMS Mortar Sentry.svg" },
    { name: "爱国者外骨骼机甲（EXO44踏步者）", commands: "ldruldd", class: "机械工坊", icon: "./img/icons/Robotics Workshop/Patriot Exosuit.svg" },
    { name: "解放者外骨骼机甲（EXO48黑曜石）", commands: "ldruldu", class: "机械工坊", icon: "./img/icons/Robotics Workshop/Emancipator Exosuit.svg" },
    
    { name: "TX-41 灭菌器", commands: "dludl", class: "化学专家", icon: "./img/icons/Chemical Agents/Sterilizer.svg" },
    { name: "AX/TX-13 “护卫犬”腐息", commands: "duluru", class: "化学专家", icon: "./img/icons/Chemical Agents/Guard Dog Breath.svg" },
    
    { name: "SH-51 定向护盾", commands: "dludl", class: "都市传奇", icon: "./img/icons/Urban Legends/Directional Shield.svg" },
    { name: "A/FLAM-40 火焰喷射哨戒炮", commands: "duluru", class: "都市传奇", icon: "./img/icons/Urban Legends/Flame Sentry.svg" },
    { name: "E/AT-12 反坦克炮台", commands: "duluru", class: "都市传奇", icon: "./img/icons/Urban Legends/Anti-Tank Emplacement.svg" },

    { name: "撕裂者核弹", commands: "rulrdud", class: "其它未上线战备", icon: "" },
    { name: "E/M-105 防御墙", commands: "drr", class: "其它未上线战备", icon: "" },
    { name: "E/GL-6 战壕墙", commands: "dru", class: "其它未上线战备", icon: "" },
    // { name: "Flamethrower Emplacement", commands: "", class: "其它未上线战备", icon: "" },
    { name: "MS-220 导弹发射井", commands: "durdd", class: "其它未上线战备", icon: "" },
    { name: "侦察车", commands: "ldrdr", class: "其它未上线战备", icon: "" },
    { name: "M5 APC 轻型装甲车", commands: "ldrdllr", class: "其它未上线战备", icon: "" },
    { name: "超级地球部队支援", commands: "ldrrdu", class: "其它未上线战备", icon: "" },
    // { name: "meteor-launcher", commands: "", class: "其它未上线战备", icon: "" },
    { name: "医疗背包", commands: "druld", class: "其它未上线战备", icon: "" },
    { name: "位移背包", commands: "dlrdlr", class: "其它未上线战备", icon: "" }]

balls_colle.forEach(function (ball) {
    if (ball.icon == "") {
        ball.icon = "./img/no-resource.svg";
    }
})