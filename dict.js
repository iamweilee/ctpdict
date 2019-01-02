'use strict';

// 交易所属性类型
exports.ExchangePropertyType = {
  // 正常
  Normal: '0',
  // 根据成交生成报单
  GenOrderByTrade: '1',
};

// 证件类型类型
exports.IdCardTypeType = {
  // 组织机构代码
  EID: '0',
  // 中国公民身份证
  IDCard: '1',
  // 军官证
  OfficerIDCard: '2',
  // 警官证
  PoliceIDCard: '3',
  // 士兵证
  SoldierIDCard: '4',
  // 户口簿
  HouseholdRegister: '5',
  // 护照
  Passport: '6',
  // 台胞证
  TaiwanCompatriotIDCard: '7',
  // 回乡证
  HomeComingCard: '8',
  // 营业执照号
  LicenseNo: '9',
  // 税务登记号当地纳税ID
  TaxNo: 'A',
  // 港澳居民来往内地通行证
  HMMainlandTravelPermit: 'B',
  // 台湾居民来往大陆通行证
  TwMainlandTravelPermit: 'C',
  // 驾照
  DrivingLicense: 'D',
  // 当地社保ID
  SocialID: 'F',
  // 当地身份证
  LocalID: 'G',
  // 商业登记证
  BusinessRegistration: 'H',
  // 港澳永久性居民身份证
  HKMCIDCard: 'I',
  // 人行开户许可证
  AccountsPermits: 'J',
  // 其他证件
  OtherCard: 'x',
};

// 投资者范围类型
exports.InvestorRangeType = {
  // 所有
  All: '1',
  // 投资者组
  Group: '2',
  // 单一投资者
  Single: '3',
};

// 投资者范围类型
exports.DepartmentRangeType = {
  // 所有
  All: '1',
  // 组织架构
  Group: '2',
  // 单一投资者
  Single: '3',
};

// 数据同步状态类型
exports.DataSyncStatusType = {
  // 未同步
  Asynchronous: '1',
  // 同步中
  Synchronizing: '2',
  // 已同步
  Synchronized: '3',
};

// 经纪公司数据同步状态类型
exports.BrokerDataSyncStatusType = {
  // 已同步
  Synchronized: '1',
  // 同步中
  Synchronizing: '2',
};

// 交易所连接状态类型
exports.ExchangeConnectStatusType = {
  // 没有任何连接
  NoConnection: '1',
  // 已经发出合约查询请求
  QryInstrumentSent: '2',
  // 已经获取信息
  GotInformation: '9',
};

// 交易所交易员连接状态类型
exports.TraderConnectStatusType = {
  // 没有任何连接
  NotConnected: '1',
  // 已经连接
  Connected: '2',
  // 已经发出合约查询请求
  QryInstrumentSent: '3',
  // 订阅私有流
  SubPrivateFlow: '4',
};

// 功能代码类型
exports.FunctionCodeType = {
  // 数据异步化
  DataAsync: '1',
  // 强制用户登出
  ForceUserLogout: '2',
  // 变更管理用户口令
  UserPasswordUpdate: '3',
  // 变更经纪公司口令
  BrokerPasswordUpdate: '4',
  // 变更投资者口令
  InvestorPasswordUpdate: '5',
  // 报单插入
  OrderInsert: '6',
  // 报单操作
  OrderAction: '7',
  // 同步系统数据
  SyncSystemData: '8',
  // 同步经纪公司数据
  SyncBrokerData: '9',
  // 批量同步经纪公司数据
  BachSyncBrokerData: 'A',
  // 超级查询
  SuperQuery: 'B',
  // 预埋报单插入
  ParkedOrderInsert: 'C',
  // 预埋报单操作
  ParkedOrderAction: 'D',
  // 同步动态令牌
  SyncOTP: 'E',
  // 删除未知单
  DeleteOrder: 'F',
};

// 经纪公司功能代码类型
exports.BrokerFunctionCodeType = {
  // 强制用户登出
  ForceUserLogout: '1',
  // 变更用户口令
  UserPasswordUpdate: '2',
  // 同步经纪公司数据
  SyncBrokerData: '3',
  // 批量同步经纪公司数据
  BachSyncBrokerData: '4',
  // 报单插入
  OrderInsert: '5',
  // 报单操作
  OrderAction: '6',
  // 全部查询
  AllQuery: '7',
  // 系统功能：登入登出修改密码等
  log: 'a',
  // 基本查询：查询基础数据，如合约，交易所等常量
  BaseQry: 'b',
  // 交易查询：如查成交，委托
  TradeQry: 'c',
  // 交易功能：报单，撤单
  Trade: 'd',
  // 银期转账
  Virement: 'e',
  // 风险监控
  Risk: 'f',
  // 查询管理：查询会话，踢人等
  Session: 'g',
  // 风控通知控制
  RiskNoticeCtl: 'h',
  // 风控通知发送
  RiskNotice: 'i',
  // 察看经纪公司资金权限
  BrokerDeposit: 'j',
  // 资金查询
  QueryFund: 'k',
  // 报单查询
  QueryOrder: 'l',
  // 成交查询
  QueryTrade: 'm',
  // 持仓查询
  QueryPosition: 'n',
  // 行情查询
  QueryMarketData: 'o',
  // 用户事件查询
  QueryUserEvent: 'p',
  // 风险通知查询
  QueryRiskNotify: 'q',
  // 出入金查询
  QueryFundChange: 'r',
  // 投资者信息查询
  QueryInvestor: 's',
  // 交易编码查询
  QueryTradingCode: 't',
  // 强平
  ForceClose: 'u',
  // 压力测试
  PressTest: 'v',
  // 权益反算
  RemainCalc: 'w',
  // 净持仓保证金指标
  NetPositionInd: 'x',
  // 风险预算
  RiskPredict: 'y',
  // 数据导出
  DataExport: 'z',
  // 风控指标设置
  RiskTargetSetup: 'A',
  // 行情预警
  MarketDataWarn: 'B',
  // 业务通知查询
  QryBizNotice: 'C',
  // 业务通知模板设置
  CfgBizNotice: 'D',
  // 同步动态令牌
  SyncOTP: 'E',
  // 发送业务通知
  SendBizNotice: 'F',
  // 风险级别标准设置
  CfgRiskLevelStd: 'G',
  // 交易终端应急功能
  TbCommand: 'H',
  // 删除未知单
  DeleteOrder: 'J',
  // 预埋报单插入
  ParkedOrderInsert: 'K',
  // 预埋报单操作
  ParkedOrderAction: 'L',
  // 资金不够仍允许行权
  ExecOrderNoCheck: 'M',
  // 指定
  Designate: 'N',
  // 证券处置
  StockDisposal: 'O',
  // 席位资金预警
  BrokerDepositWarn: 'Q',
  // 备兑不足预警
  CoverWarn: 'S',
  // 行权试算
  PreExecOrder: 'T',
  // 行权交收风险
  ExecOrderRisk: 'P',
  // 持仓限额预警
  PosiLimitWarn: 'U',
  // 持仓限额查询
  QryPosiLimit: 'V',
  // 银期签到签退
  FBSign: 'W',
  // 银期签约解约
  FBAccount: 'X',
};

// 报单操作状态类型
exports.OrderActionStatusType = {
  // 已经提交
  Submitted: 'a',
  // 已经接受
  Accepted: 'b',
  // 已经被拒绝
  Rejected: 'c',
};

// 报单状态类型
exports.OrderStatusType = {
  // 全部成交
  AllTraded: '0',
  // 部分成交还在队列中
  PartTradedQueueing: '1',
  // 部分成交不在队列中
  PartTradedNotQueueing: '2',
  // 未成交还在队列中
  NoTradeQueueing: '3',
  // 未成交不在队列中
  NoTradeNotQueueing: '4',
  // 撤单
  Canceled: '5',
  // 未知
  Unknown: 'a',
  // 尚未触发
  NotTouched: 'b',
  // 已触发
  Touched: 'c',
};

// 报单提交状态类型
exports.OrderSubmitStatusType = {
  // 已经提交
  InsertSubmitted: '0',
  // 撤单已经提交
  CancelSubmitted: '1',
  // 修改已经提交
  ModifySubmitted: '2',
  // 已经接受
  Accepted: '3',
  // 报单已经被拒绝
  InsertRejected: '4',
  // 撤单已经被拒绝
  CancelRejected: '5',
  // 改单已经被拒绝
  ModifyRejected: '6',
};

// 持仓日期类型
exports.PositionDateType = {
  // 今日持仓
  Today: '1',
  // 历史持仓
  History: '2',
};

// 持仓日期类型类型
exports.PositionDateTypeType = {
  // 使用历史持仓
  UseHistory: '1',
  // 不使用历史持仓
  NoUseHistory: '2',
};

// 交易角色类型
exports.TradingRoleType = {
  // 代理
  Broker: '1',
  // 自营
  Host: '2',
  // 做市商
  Maker: '3',
};

// 产品类型类型
exports.ProductClassType = {
  // 期货
  Futures: '1',
  // 期货期权
  Options: '2',
  // 组合
  Combination: '3',
  // 即期
  Spot: '4',
  // 期转现
  EFP: '5',
  // 现货期权
  SpotOption: '6',
};

// 合约生命周期状态类型
exports.InstLifePhaseType = {
  // 未上市
  NotStart: '0',
  // 上市
  Started: '1',
  // 停牌
  Pause: '2',
  // 到期
  Expired: '3',
};

// 买卖方向类型
exports.DirectionType = {
  // 买
  Buy: '0',
  // 卖
  Sell: '1',
};

// 持仓类型类型
exports.PositionTypeType = {
  // 净持仓
  Net: '1',
  // 综合持仓
  Gross: '2',
};

// 持仓多空方向类型
exports.PosiDirectionType = {
  // 净
  Net: '1',
  // 多头
  Long: '2',
  // 空头
  Short: '3',
};

// 系统结算状态类型
exports.SysSettlementStatusType = {
  // 不活跃
  NonActive: '1',
  // 启动
  Startup: '2',
  // 操作
  Operating: '3',
  // 结算
  Settlement: '4',
  // 结算完成
  SettlementFinished: '5',
};

// 费率属性类型
exports.RatioAttrType = {
  // 交易费率
  Trade: '0',
  // 结算费率
  Settlement: '1',
};

// 投机套保标志类型
exports.HedgeFlagType = {
  // 投机
  Speculation: '1',
  // 套利
  Arbitrage: '2',
  // 套保
  Hedge: '3',
  // 做市商
  MarketMaker: '5',
};

// 投机套保标志类型
exports.BillHedgeFlagType = {
  // 投机
  Speculation: '1',
  // 套利
  Arbitrage: '2',
  // 套保
  Hedge: '3',
};

// 交易编码类型类型
exports.ClientIDTypeType = {
  // 投机
  Speculation: '1',
  // 套利
  Arbitrage: '2',
  // 套保
  Hedge: '3',
  // 做市商
  MarketMaker: '5',
};

// 报单价格条件类型
exports.OrderPriceTypeType = {
  // 任意价
  AnyPrice: '1',
  // 限价
  LimitPrice: '2',
  // 最优价
  BestPrice: '3',
  // 最新价
  LastPrice: '4',
  // 最新价浮动上浮1个ticks
  LastPricePlusOneTicks: '5',
  // 最新价浮动上浮2个ticks
  LastPricePlusTwoTicks: '6',
  // 最新价浮动上浮3个ticks
  LastPricePlusThreeTicks: '7',
  // 卖一价
  AskPrice1: '8',
  // 卖一价浮动上浮1个ticks
  AskPrice1PlusOneTicks: '9',
  // 卖一价浮动上浮2个ticks
  AskPrice1PlusTwoTicks: 'A',
  // 卖一价浮动上浮3个ticks
  AskPrice1PlusThreeTicks: 'B',
  // 买一价
  BidPrice1: 'C',
  // 买一价浮动上浮1个ticks
  BidPrice1PlusOneTicks: 'D',
  // 买一价浮动上浮2个ticks
  BidPrice1PlusTwoTicks: 'E',
  // 买一价浮动上浮3个ticks
  BidPrice1PlusThreeTicks: 'F',
  // 五档价
  FiveLevelPrice: 'G',
};

// 开平标志类型
exports.OffsetFlagType = {
  // 开仓
  Open: '0',
  // 平仓
  Close: '1',
  // 强平
  ForceClose: '2',
  // 平今
  CloseToday: '3',
  // 平昨
  CloseYesterday: '4',
  // 强减
  ForceOff: '5',
  // 本地强平
  LocalForceClose: '6',
};

// 强平原因类型
exports.ForceCloseReasonType = {
  // 非强平
  NotForceClose: '0',
  // 资金不足
  LackDeposit: '1',
  // 客户超仓
  ClientOverPositionLimit: '2',
  // 会员超仓
  MemberOverPositionLimit: '3',
  // 持仓非整数倍
  NotMultiple: '4',
  // 违规
  Violation: '5',
  // 其它
  Other: '6',
  // 自然人临近交割
  PersonDeliv: '7',
};

// 报单类型类型
exports.OrderTypeType = {
  // 正常
  Normal: '0',
  // 报价衍生
  DeriveFromQuote: '1',
  // 组合衍生
  DeriveFromCombination: '2',
  // 组合报单
  Combination: '3',
  // 条件单
  ConditionalOrder: '4',
  // 互换单
  Swap: '5',
};

// 有效期类型类型
exports.TimeConditionType = {
  // 立即完成，否则撤销
  IOC: '1',
  // 本节有效
  GFS: '2',
  // 当日有效
  GFD: '3',
  // 指定日期前有效
  GTD: '4',
  // 撤销前有效
  GTC: '5',
  // 集合竞价有效
  GFA: '6',
};

// 成交量类型类型
exports.VolumeConditionType = {
  // 任何数量
  AV: '1',
  // 最小数量
  MV: '2',
  // 全部数量
  CV: '3',
};

// 触发条件类型
exports.ContingentConditionType = {
  // 立即
  Immediately: '1',
  // 止损
  Touch: '2',
  // 止赢
  TouchProfit: '3',
  // 预埋单
  ParkedOrder: '4',
  // 最新价大于条件价
  LastPriceGreaterThanStopPrice: '5',
  // 最新价大于等于条件价
  LastPriceGreaterEqualStopPrice: '6',
  // 最新价小于条件价
  LastPriceLesserThanStopPrice: '7',
  // 最新价小于等于条件价
  LastPriceLesserEqualStopPrice: '8',
  // 卖一价大于条件价
  AskPriceGreaterThanStopPrice: '9',
  // 卖一价大于等于条件价
  AskPriceGreaterEqualStopPrice: 'A',
  // 卖一价小于条件价
  AskPriceLesserThanStopPrice: 'B',
  // 卖一价小于等于条件价
  AskPriceLesserEqualStopPrice: 'C',
  // 买一价大于条件价
  BidPriceGreaterThanStopPrice: 'D',
  // 买一价大于等于条件价
  BidPriceGreaterEqualStopPrice: 'E',
  // 买一价小于条件价
  BidPriceLesserThanStopPrice: 'F',
  // 买一价小于等于条件价
  BidPriceLesserEqualStopPrice: 'H',
};

// 操作标志类型
exports.ActionFlagType = {
  // 删除
  Delete: '0',
  // 修改
  Modify: '3',
};

// 交易权限类型
exports.TradingRightType = {
  // 可以交易
  Allow: '0',
  // 只能平仓
  CloseOnly: '1',
  // 不能交易
  Forbidden: '2',
};

// 报单来源类型
exports.OrderSourceType = {
  // 来自参与者
  Participant: '0',
  // 来自管理员
  Administrator: '1',
};

// 成交类型类型
exports.TradeTypeType = {
  // 组合持仓拆分为单一持仓,初始化不应包含该类型的持仓
  SplitCombination: '#',
  // 普通成交
  Common: '0',
  // 期权执行
  OptionsExecution: '1',
  // OTC成交
  OTC: '2',
  // 期转现衍生成交
  EFPDerived: '3',
  // 组合衍生成交
  CombinationDerived: '4',
};

// 成交价来源类型
exports.PriceSourceType = {
  // 前成交价
  LastPrice: '0',
  // 买委托价
  Buy: '1',
  // 卖委托价
  Sell: '2',
};

// 合约交易状态类型
exports.InstrumentStatusType = {
  // 开盘前
  BeforeTrading: '0',
  // 非交易
  NoTrading: '1',
  // 连续交易
  Continous: '2',
  // 集合竞价报单
  AuctionOrdering: '3',
  // 集合竞价价格平衡
  AuctionBalance: '4',
  // 集合竞价撮合
  AuctionMatch: '5',
  // 收盘
  Closed: '6',
};

// 品种进入交易状态原因类型
exports.InstStatusEnterReasonType = {
  // 自动切换
  Automatic: '1',
  // 手动切换
  Manual: '2',
  // 熔断
  Fuse: '3',
};

// 处理状态类型
exports.BatchStatusType = {
  // 未上传
  NoUpload: '1',
  // 已上传
  Uploaded: '2',
  // 审核失败
  Failed: '3',
};

// 按品种返还方式类型
exports.ReturnStyleType = {
  // 按所有品种
  All: '1',
  // 按品种
  ByProduct: '2',
};

// 返还模式类型
exports.ReturnPatternType = {
  // 按成交手数
  ByVolume: '1',
  // 按留存手续费
  ByFeeOnHand: '2',
};

// 返还级别类型
exports.ReturnLevelType = {
  // 级别1
  Level1: '1',
  // 级别2
  Level2: '2',
  // 级别3
  Level3: '3',
  // 级别4
  Level4: '4',
  // 级别5
  Level5: '5',
  // 级别6
  Level6: '6',
  // 级别7
  Level7: '7',
  // 级别8
  Level8: '8',
  // 级别9
  Level9: '9',
};

// 返还标准类型
exports.ReturnStandardType = {
  // 分阶段返还
  ByPeriod: '1',
  // 按某一标准
  ByStandard: '2',
};

// 质押类型类型
exports.MortgageTypeType = {
  // 质出
  Out: '0',
  // 质入
  In: '1',
};

// 投资者结算参数代码类型
exports.InvestorSettlementParamIDType = {
  // 质押比例
  MortgageRatio: '4',
  // 保证金算法
  MarginWay: '5',
  // 结算单结存是否包含质押
  BillDeposit: '9',
};

// 交易所结算参数代码类型
exports.ExchangeSettlementParamIDType = {
  // 质押比例
  MortgageRatio: '1',
  // 分项资金导入项
  OtherFundItem: '2',
  // 分项资金入交易所出入金
  OtherFundImport: '3',
  // 中金所开户最低可用金额
  CFFEXMinPrepa: '6',
  // 郑商所结算方式
  CZCESettlementType: '7',
  // 交易所交割手续费收取方式
  ExchDelivFeeMode: '9',
  // 投资者交割手续费收取方式
  DelivFeeMode: '0',
  // 郑商所组合持仓保证金收取方式
  CZCEComMarginType: 'A',
  // 大商所套利保证金是否优惠
  DceComMarginType: 'B',
  // 虚值期权保证金优惠比率
  OptOutDisCountRate: 'a',
  // 最低保障系数
  OptMiniGuarantee: 'b',
};

// 系统参数代码类型
exports.SystemParamIDType = {
  // 投资者代码最小长度
  InvestorIDMinLength: '1',
  // 投资者帐号代码最小长度
  AccountIDMinLength: '2',
  // 投资者开户默认登录权限
  UserRightLogon: '3',
  // 投资者交易结算单成交汇总方式
  SettlementBillTrade: '4',
  // 统一开户更新交易编码方式
  TradingCode: '5',
  // 结算是否判断存在未复核的出入金和分项资金
  CheckFund: '6',
  // 是否启用手续费模板数据权限
  CommModelRight: '7',
  // 是否启用保证金率模板数据权限
  MarginModelRight: '9',
  // 是否规范用户才能激活
  IsStandardActive: '8',
  // 上传的交易所结算文件路径
  UploadSettlementFile: 'U',
  // 上报保证金监控中心文件路径
  DownloadCSRCFile: 'D',
  // 生成的结算单文件路径
  SettlementBillFile: 'S',
  // 证监会文件标识
  CSRCOthersFile: 'C',
  // 投资者照片路径
  InvestorPhoto: 'P',
  // 全结经纪公司上传文件路径
  CSRCData: 'R',
  // 开户密码录入方式
  InvestorPwdModel: 'I',
  // 投资者中金所结算文件下载路径
  CFFEXInvestorSettleFile: 'F',
  // 投资者代码编码方式
  InvestorIDType: 'a',
  // 休眠户最高权益
  FreezeMaxReMain: 'r',
  // 手续费相关操作实时上场开关
  IsSync: 'A',
  // 解除开仓权限限制
  RelieveOpenLimit: 'O',
  // 是否规范用户才能休眠
  IsStandardFreeze: 'X',
  // 郑商所是否开放所有品种套保交易
  CZCENormalProductHedge: 'B',
};

// 交易系统参数代码类型
exports.TradeParamIDType = {
  // 系统加密算法
  EncryptionStandard: 'E',
  // 系统风险算法
  RiskMode: 'R',
  // 系统风险算法是否全局 0-否 1-是
  RiskModeGlobal: 'G',
  // 密码加密算法
  modeEncode: 'P',
  // 价格小数位数参数
  tickMode: 'T',
  // 用户最大会话数
  SingleUserSessionMaxNum: 'S',
  // 最大连续登录失败数
  LoginFailMaxNum: 'L',
  // 是否强制认证
  IsAuthForce: 'A',
  // 是否冻结证券持仓
  IsPosiFreeze: 'F',
  // 是否限仓
  IsPosiLimit: 'M',
  // 郑商所询价时间间隔
  ForQuoteTimeInterval: 'Q',
  // 是否期货限仓
  IsFuturePosiLimit: 'B',
  // 是否期货下单频率限制
  IsFutureOrderFreq: 'C',
  // 行权冻结是否计算盈利
  IsExecOrderProfit: 'H',
  // 银期开户是否验证开户银行卡号是否是预留银行账户
  IsCheckBankAcc: 'I',
  // 弱密码最后修改日期
  PasswordDeadLine: 'J',
  // 强密码校验
  IsStrongPassword: 'K',
  // 自有资金质押比
  BalanceMorgage: 'a',
  // 最小密码长度
  MinPwdLen: 'O',
  // IP当日最大登陆失败次数
  LoginFailMaxNumForIP: 'U',
  // 密码有效期
  PasswordPeriod: 'V',
};

// 文件标识类型
exports.FileIDType = {
  // 资金数据
  SettlementFund: 'F',
  // 成交数据
  Trade: 'T',
  // 投资者持仓数据
  InvestorPosition: 'P',
  // 投资者分项资金数据
  SubEntryFund: 'O',
  // 组合持仓数据
  CZCECombinationPos: 'C',
  // 上报保证金监控中心数据
  CSRCData: 'R',
  // 郑商所平仓了结数据
  CZCEClose: 'L',
  // 郑商所非平仓了结数据
  CZCENoClose: 'N',
  // 持仓明细数据
  PositionDtl: 'D',
  // 期权执行文件
  OptionStrike: 'S',
  // 结算价比对文件
  SettlementPriceComparison: 'M',
  // 上期所非持仓变动明细
  NonTradePosChange: 'B',
};

// 文件上传类型类型
exports.FileTypeType = {
  // 结算
  Settlement: '0',
  // 核对
  Check: '1',
};

// 文件格式类型
exports.FileFormatType = {
  // 文本文件(.txt)
  Txt: '0',
  // 压缩文件(.zip)
  Zip: '1',
  // DBF文件(.dbf)
  DBF: '2',
};

// 文件状态类型
exports.FileUploadStatusType = {
  // 上传成功
  SucceedUpload: '1',
  // 上传失败
  FailedUpload: '2',
  // 导入成功
  SucceedLoad: '3',
  // 导入部分成功
  PartSucceedLoad: '4',
  // 导入失败
  FailedLoad: '5',
};

// 移仓方向类型
exports.TransferDirectionType = {
  // 移出
  Out: '0',
  // 移入
  In: '1',
};

// 特殊的创建规则类型
exports.SpecialCreateRuleType = {
  // 没有特殊创建规则
  NoSpecialRule: '0',
  // 不包含春节
  NoSpringFestival: '1',
};

// 挂牌基准价类型类型
exports.BasisPriceTypeType = {
  // 上一合约结算价
  LastSettlement: '1',
  // 上一合约收盘价
  LaseClose: '2',
};

// 产品生命周期状态类型
exports.ProductLifePhaseType = {
  // 活跃
  Active: '1',
  // 不活跃
  NonActive: '2',
  // 注销
  Canceled: '3',
};

// 交割方式类型
exports.DeliveryModeType = {
  // 现金交割
  CashDeliv: '1',
  // 实物交割
  CommodityDeliv: '2',
};

// 出入金类型类型
exports.FundIOTypeType = {
  // 出入金
  FundIO: '1',
  // 银期转帐
  Transfer: '2',
  // 银期换汇
  SwapCurrency: '3',
};

// 资金类型类型
exports.FundTypeType = {
  // 银行存款
  Deposite: '1',
  // 分项资金
  ItemFund: '2',
  // 公司调整
  Company: '3',
  // 资金内转
  InnerTransfer: '4',
};

// 出入金方向类型
exports.FundDirectionType = {
  // 入金
  In: '1',
  // 出金
  Out: '2',
};

// 资金状态类型
exports.FundStatusType = {
  // 已录入
  Record: '1',
  // 已复核
  Check: '2',
  // 已冲销
  Charge: '3',
};

// 发布状态类型
exports.PublishStatusType = {
  // 未发布
  None: '1',
  // 正在发布
  Publishing: '2',
  // 已发布
  Published: '3',
};

// 系统状态类型
exports.SystemStatusType = {
  // 不活跃
  NonActive: '1',
  // 启动
  Startup: '2',
  // 交易开始初始化
  Initialize: '3',
  // 交易完成初始化
  Initialized: '4',
  // 收市开始
  Close: '5',
  // 收市完成
  Closed: '6',
  // 结算
  Settlement: '7',
};

// 结算状态类型
exports.SettlementStatusType = {
  // 初始
  Initialize: '0',
  // 结算中
  Settlementing: '1',
  // 已结算
  Settlemented: '2',
  // 结算完成
  Finished: '3',
};

// 投资者类型类型
exports.InvestorTypeType = {
  // 自然人
  Person: '0',
  // 法人
  Company: '1',
  // 投资基金
  Fund: '2',
  // 特殊法人
  SpecialOrgan: '3',
  // 资管户
  Asset: '4',
};

// 经纪公司类型类型
exports.BrokerTypeType = {
  // 交易会员
  Trade: '0',
  // 交易结算会员
  TradeSettle: '1',
};

// 风险等级类型
exports.RiskLevelType = {
  // 低风险客户
  Low: '1',
  // 普通客户
  Normal: '2',
  // 关注客户
  Focus: '3',
  // 风险客户
  Risk: '4',
};

// 手续费收取方式类型
exports.FeeAcceptStyleType = {
  // 按交易收取
  ByTrade: '1',
  // 按交割收取
  ByDeliv: '2',
  // 不收
  None: '3',
  // 按指定手续费收取
  FixFee: '4',
};

// 密码类型类型
exports.PasswordTypeType = {
  // 交易密码
  Trade: '1',
  // 资金密码
  Account: '2',
};

// 盈亏算法类型
exports.AlgorithmType = {
  // 浮盈浮亏都计算
  All: '1',
  // 浮盈不计，浮亏计
  OnlyLost: '2',
  // 浮盈计，浮亏不计
  OnlyGain: '3',
  // 浮盈浮亏都不计算
  None: '4',
};

// 是否包含平仓盈利类型
exports.IncludeCloseProfitType = {
  // 包含平仓盈利
  Include: '0',
  // 不包含平仓盈利
  NotInclude: '2',
};

// 是否受可提比例限制类型
exports.AllWithoutTradeType = {
  // 无仓无成交不受可提比例限制
  Enable: '0',
  // 受可提比例限制
  Disable: '2',
  // 无仓不受可提比例限制
  NoHoldEnable: '3',
};

// 资金密码核对标志类型
exports.FuturePwdFlagType = {
  // 不核对
  UnCheck: '0',
  // 核对
  Check: '1',
};

// 银期转账类型类型
exports.TransferTypeType = {
  // 银行转期货
  BankToFuture: '0',
  // 期货转银行
  FutureToBank: '1',
};

// 转账有效标志类型
exports.TransferValidFlagType = {
  // 无效或失败
  Invalid: '0',
  // 有效
  Valid: '1',
  // 冲正
  Reverse: '2',
};

// 事由类型
exports.ReasonType = {
  // 错单
  CD: '0',
  // 资金在途
  ZT: '1',
  // 其它
  QT: '2',
};

// 性别类型
exports.SexType = {
  // 未知
  None: '0',
  // 男
  Man: '1',
  // 女
  Woman: '2',
};

// 用户类型类型
exports.UserTypeType = {
  // 投资者
  Investor: '0',
  // 操作员
  Operator: '1',
  // 管理员
  SuperUser: '2',
};

// 费率类型类型
exports.RateTypeType = {
  // 保证金率
  MarginRate: '2',
};

// 通知类型类型
exports.NoteTypeType = {
  // 交易结算单
  TradeSettleBill: '1',
  // 交易结算月报
  TradeSettleMonth: '2',
  // 追加保证金通知书
  CallMarginNotes: '3',
  // 强行平仓通知书
  ForceCloseNotes: '4',
  // 成交通知书
  TradeNotes: '5',
  // 交割通知书
  DelivNotes: '6',
};

// 结算单方式类型
exports.SettlementStyleType = {
  // 逐日盯市
  Day: '1',
  // 逐笔对冲
  Volume: '2',
};

// 结算单类型类型
exports.SettlementBillTypeType = {
  // 日报
  Day: '0',
  // 月报
  Month: '1',
};

// 客户权限类型类型
exports.UserRightTypeType = {
  // 登录
  Logon: '1',
  // 银期转帐
  Transfer: '2',
  // 邮寄结算单
  EMail: '3',
  // 传真结算单
  Fax: '4',
  // 条件单
  ConditionOrder: '5',
};

// 保证金价格类型类型
exports.MarginPriceTypeType = {
  // 昨结算价
  PreSettlementPrice: '1',
  // 最新价
  SettlementPrice: '2',
  // 成交均价
  AveragePrice: '3',
  // 开仓价
  OpenPrice: '4',
};

// 结算单生成状态类型
exports.BillGenStatusType = {
  // 未生成
  None: '0',
  // 生成中
  NoGenerated: '1',
  // 已生成
  Generated: '2',
};

// 算法类型类型
exports.AlgoTypeType = {
  // 持仓处理算法
  HandlePositionAlgo: '1',
  // 寻找保证金率算法
  FindMarginRateAlgo: '2',
};

// 持仓处理算法编号类型
exports.HandlePositionAlgoIDType = {
  // 基本
  Base: '1',
  // 大连商品交易所
  DCE: '2',
  // 郑州商品交易所
  CZCE: '3',
};

// 寻找保证金率算法编号类型
exports.FindMarginRateAlgoIDType = {
  // 基本
  Base: '1',
  // 大连商品交易所
  DCE: '2',
  // 郑州商品交易所
  CZCE: '3',
};

// 资金处理算法编号类型
exports.HandleTradingAccountAlgoIDType = {
  // 基本
  Base: '1',
  // 大连商品交易所
  DCE: '2',
  // 郑州商品交易所
  CZCE: '3',
};

// 联系人类型类型
exports.PersonTypeType = {
  // 指定下单人
  Order: '1',
  // 开户授权人
  Open: '2',
  // 资金调拨人
  Fund: '3',
  // 结算单确认人
  Settlement: '4',
  // 法人
  Company: '5',
  // 法人代表
  Corporation: '6',
  // 投资者联系人
  LinkMan: '7',
  // 分户管理资产负责人
  Ledger: '8',
  // 托（保）管人
  Trustee: '9',
  // 托（保）管机构法人代表
  TrusteeCorporation: 'A',
  // 托（保）管机构开户授权人
  TrusteeOpen: 'B',
  // 托（保）管机构联系人
  TrusteeContact: 'C',
  // 境外自然人参考证件
  ForeignerRefer: 'D',
  // 法人代表参考证件
  CorporationRefer: 'E',
};

// 查询范围类型
exports.QueryInvestorRangeType = {
  // 所有
  All: '1',
  // 查询分类
  Group: '2',
  // 单一投资者
  Single: '3',
};

// 投资者风险状态类型
exports.InvestorRiskStatusType = {
  // 正常
  Normal: '1',
  // 警告
  Warn: '2',
  // 追保
  Call: '3',
  // 强平
  Force: '4',
  // 异常
  Exception: '5',
};

// 用户事件类型类型
exports.UserEventTypeType = {
  // 登录
  Login: '1',
  // 登出
  Logout: '2',
  // 交易成功
  Trading: '3',
  // 交易失败
  TradingError: '4',
  // 修改密码
  UpdatePassword: '5',
  // 客户端认证
  Authenticate: '6',
  // 其他
  Other: '9',
};

// 平仓方式类型
exports.CloseStyleType = {
  // 先开先平
  Close: '0',
  // 先平今再平昨
  CloseToday: '1',
};

// 预埋单状态类型
exports.ParkedOrderStatusType = {
  // 未发送
  NotSend: '1',
  // 已发送
  Send: '2',
  // 已删除
  Deleted: '3',
};

// 处理状态类型
exports.VirDealStatusType = {
  // 正在处理
  Dealing: '1',
  // 处理成功
  DeaclSucceed: '2',
};

// 原有系统代码类型
exports.OrgSystemIDType = {
  // 综合交易平台
  Standard: '0',
  // 易盛系统
  ESunny: '1',
  // 金仕达V6系统
  KingStarV6: '2',
};

// 交易状态类型
exports.VirTradeStatusType = {
  // 正常处理中
  NaturalDeal: '0',
  // 成功结束
  SucceedEnd: '1',
  // 失败结束
  FailedEND: '2',
  // 异常中
  Exception: '3',
  // 已人工异常处理
  ManualDeal: '4',
  // 通讯异常 ，请人工处理
  MesException: '5',
  // 系统出错，请人工处理
  SysException: '6',
};

// 银行帐户类型类型
exports.VirBankAccTypeType = {
  // 存折
  BankBook: '1',
  // 储蓄卡
  BankCard: '2',
  // 信用卡
  CreditCard: '3',
};

// 银行帐户类型类型
exports.VirementStatusType = {
  // 正常
  Natural: '0',
  // 销户
  Canceled: '9',
};

// 有效标志类型
exports.VirementAvailAbilityType = {
  // 未确认
  NoAvailAbility: '0',
  // 有效
  AvailAbility: '1',
  // 冲正
  Repeal: '2',
};

// 交易代码类型
exports.VirementTradeCodeType = {
  // 银行发起银行资金转期货
  BankBankToFuture: '102001',
  // 银行发起期货资金转银行
  BankFutureToBank: '102002',
  // 期货发起银行资金转期货
  FutureBankToFuture: '202001',
  // 期货发起期货资金转银行
  FutureFutureToBank: '202002',
};

// Aml生成方式类型
exports.AMLGenStatusType = {
  // 程序生成
  Program: '0',
  // 人工生成
  HandWork: '1',
};

// 动态密钥类别(保证金监管)类型
exports.CFMMCKeyKindType = {
  // 主动请求更新
  REQUEST: 'R',
  // CFMMC自动更新
  AUTO: 'A',
  // CFMMC手动更新
  MANUAL: 'M',
};

// 证件类型类型
exports.CertificationTypeType = {
  // 身份证
  IDCard: '0',
  // 护照
  Passport: '1',
  // 军官证
  OfficerIDCard: '2',
  // 士兵证
  SoldierIDCard: '3',
  // 回乡证
  HomeComingCard: '4',
  // 户口簿
  HouseholdRegister: '5',
  // 营业执照号
  LicenseNo: '6',
  // 组织机构代码证
  InstitutionCodeCard: '7',
  // 临时营业执照号
  TempLicenseNo: '8',
  // 民办非企业登记证书
  NoEnterpriseLicenseNo: '9',
  // 其他证件
  OtherCard: 'x',
  // 主管部门批文
  SuperDepAgree: 'a',
};

// 文件业务功能类型
exports.FileBusinessCodeType = {
  // 其他
  Others: '0',
  // 转账交易明细对账
  TransferDetails: '1',
  // 客户账户状态对账
  CustAccStatus: '2',
  // 账户类交易明细对账
  AccountTradeDetails: '3',
  // 期货账户信息变更明细对账
  FutureAccountChangeInfoDetails: '4',
  // 客户资金台账余额明细对账
  CustMoneyDetail: '5',
  // 客户销户结息明细对账
  CustCancelAccountInfo: '6',
  // 客户资金余额对账结果
  CustMoneyResult: '7',
  // 其它对账异常结果文件
  OthersExceptionResult: '8',
  // 客户结息净额明细
  CustInterestNetMoneyDetails: '9',
  // 客户资金交收明细
  CustMoneySendAndReceiveDetails: 'a',
  // 法人存管银行资金交收汇总
  CorporationMoneyTotal: 'b',
  // 主体间资金交收汇总
  MainbodyMoneyTotal: 'c',
  // 总分平衡监管数据
  MainPartMonitorData: 'd',
  // 存管银行备付金余额
  PreparationMoney: 'e',
  // 协办存管银行资金监管数据
  BankMoneyMonitorData: 'f',
};

// 汇钞标志类型
exports.CashExchangeCodeType = {
  // 汇
  Exchange: '1',
  // 钞
  Cash: '2',
};

// 是或否标识类型
exports.YesNoIndicatorType = {
  // 是
  Yes: '0',
  // 否
  No: '1',
};

// 余额类型类型
exports.BanlanceTypeType = {
  // 当前余额
  CurrentMoney: '0',
  // 可用余额
  UsableMoney: '1',
  // 可取余额
  FetchableMoney: '2',
  // 冻结余额
  FreezeMoney: '3',
};

// 性别类型
exports.GenderType = {
  // 未知状态
  Unknown: '0',
  // 男
  Male: '1',
  // 女
  Female: '2',
};

// 费用支付标志类型
exports.FeePayFlagType = {
  // 由受益方支付费用
  BEN: '0',
  // 由发送方支付费用
  OUR: '1',
  // 由发送方支付发起的费用，受益方支付接受的费用
  SHA: '2',
};

// 密钥类型类型
exports.PassWordKeyTypeType = {
  // 交换密钥
  ExchangeKey: '0',
  // 密码密钥
  PassWordKey: '1',
  // MAC密钥
  MACKey: '2',
  // 报文密钥
  MessageKey: '3',
};

// 密码类型类型
exports.FBTPassWordTypeType = {
  // 查询
  Query: '0',
  // 取款
  Fetch: '1',
  // 转帐
  Transfer: '2',
  // 交易
  Trade: '3',
};

// 加密方式类型
exports.FBTEncryModeType = {
  // 不加密
  NoEncry: '0',
};

// 银行冲正标志类型
exports.BankRepealFlagType = {
  // 银行无需自动冲正
  BankNotNeedRepeal: '0',
  // 银行待自动冲正
  BankWaitingRepeal: '1',
  // 银行已自动冲正
  BankBeenRepealed: '2',
};

// 期商冲正标志类型
exports.BrokerRepealFlagType = {
  // 期商无需自动冲正
  BrokerNotNeedRepeal: '0',
  // 期商待自动冲正
  BrokerWaitingRepeal: '1',
  // 期商已自动冲正
  BrokerBeenRepealed: '2',
};

// 机构类别类型
exports.InstitutionTypeType = {
  // 银行
  Bank: '0',
  // 期商
  Future: '1',
  // 券商
  Store: '2',
};

// 最后分片标志类型
exports.LastFragmentType = {
  // 是最后分片
  Yes: '0',
  // 不是最后分片
  No: '1',
};

// 银行账户状态类型
exports.BankAccStatusType = {
  // 正常
  Normal: '0',
  // 冻结
  Freeze: '1',
  // 挂失
  ReportLoss: '2',
};

// 资金账户状态类型
exports.MoneyAccountStatusType = {
  // 正常
  Normal: '0',
  // 销户
  Cancel: '1',
};

// 存管状态类型
exports.ManageStatusType = {
  // 指定存管
  Point: '0',
  // 预指定
  PrePoint: '1',
  // 撤销指定
  CancelPoint: '2',
};

// 应用系统类型类型
exports.SystemTypeType = {
  // 银期转帐
  FutureBankTransfer: '0',
  // 银证转帐
  StockBankTransfer: '1',
  // 第三方存管
  TheThirdPartStore: '2',
};

// 银期转帐划转结果标志类型
exports.TxnEndFlagType = {
  // 正常处理中
  NormalProcessing: '0',
  // 成功结束
  Success: '1',
  // 失败结束
  Failed: '2',
  // 异常中
  Abnormal: '3',
  // 已人工异常处理
  ManualProcessedForException: '4',
  // 通讯异常 ，请人工处理
  CommuFailedNeedManualProcess: '5',
  // 系统出错，请人工处理
  SysErrorNeedManualProcess: '6',
};

// 银期转帐服务处理状态类型
exports.ProcessStatusType = {
  // 未处理
  NotProcess: '0',
  // 开始处理
  StartProcess: '1',
  // 处理完成
  Finished: '2',
};

// 客户类型类型
exports.CustTypeType = {
  // 自然人
  Person: '0',
  // 机构户
  Institution: '1',
};

// 银期转帐方向类型
exports.FBTTransferDirectionType = {
  // 入金，银行转期货
  FromBankToFuture: '1',
  // 出金，期货转银行
  FromFutureToBank: '2',
};

// 开销户类别类型
exports.OpenOrDestroyType = {
  // 开户
  Open: '1',
  // 销户
  Destroy: '0',
};

// 有效标志类型
exports.AvailabilityFlagType = {
  // 未确认
  Invalid: '0',
  // 有效
  Valid: '1',
  // 冲正
  Repeal: '2',
};

// 机构类型类型
exports.OrganTypeType = {
  // 银行代理
  Bank: '1',
  // 交易前置
  Future: '2',
  // 银期转帐平台管理
  PlateForm: '9',
};

// 机构级别类型
exports.OrganLevelType = {
  // 银行总行或期商总部
  HeadQuarters: '1',
  // 银行分中心或期货公司营业部
  Branch: '2',
};

// 协议类型类型
exports.ProtocalIDType = {
  // 期商协议
  FutureProtocal: '0',
  // 工行协议
  ICBCProtocal: '1',
  // 农行协议
  ABCProtocal: '2',
  // 中国银行协议
  CBCProtocal: '3',
  // 建行协议
  CCBProtocal: '4',
  // 交行协议
  BOCOMProtocal: '5',
  // 银期转帐平台协议
  FBTPlateFormProtocal: 'X',
};

// 套接字连接方式类型
exports.ConnectModeType = {
  // 短连接
  ShortConnect: '0',
  // 长连接
  LongConnect: '1',
};

// 套接字通信方式类型
exports.SyncModeType = {
  // 异步
  ASync: '0',
  // 同步
  Sync: '1',
};

// 银行帐号类型类型
exports.BankAccTypeType = {
  // 银行存折
  BankBook: '1',
  // 储蓄卡
  SavingCard: '2',
  // 信用卡
  CreditCard: '3',
};

// 期货公司帐号类型类型
exports.FutureAccTypeType = {
  // 银行存折
  BankBook: '1',
  // 储蓄卡
  SavingCard: '2',
  // 信用卡
  CreditCard: '3',
};

// 接入机构状态类型
exports.OrganStatusType = {
  // 启用
  Ready: '0',
  // 签到
  CheckIn: '1',
  // 签退
  CheckOut: '2',
  // 对帐文件到达
  CheckFileArrived: '3',
  // 对帐
  CheckDetail: '4',
  // 日终清理
  DayEndClean: '5',
  // 注销
  Invalid: '9',
};

// 建行收费模式类型
exports.CCBFeeModeType = {
  // 按金额扣收
  ByAmount: '1',
  // 按月扣收
  ByMonth: '2',
};

// 通讯API类型类型
exports.CommApiTypeType = {
  // 客户端
  Client: '1',
  // 服务端
  Server: '2',
  // 交易系统的UserApi
  UserApi: '3',
};

// 连接状态类型
exports.LinkStatusType = {
  // 已经连接
  Connected: '1',
  // 没有连接
  Disconnected: '2',
};

// 密码核对标志类型
exports.PwdFlagType = {
  // 不核对
  NoCheck: '0',
  // 明文核对
  BlankCheck: '1',
  // 密文核对
  EncryptCheck: '2',
};

// 期货帐号类型类型
exports.SecuAccTypeType = {
  // 资金帐号
  AccountID: '1',
  // 资金卡号
  CardID: '2',
  // 上海股东帐号
  SHStockholderID: '3',
  // 深圳股东帐号
  SZStockholderID: '4',
};

// 转账交易状态类型
exports.TransferStatusType = {
  // 正常
  Normal: '0',
  // 被冲正
  Repealed: '1',
};

// 发起方类型
exports.SponsorTypeType = {
  // 期商
  Broker: '0',
  // 银行
  Bank: '1',
};

// 请求响应类别类型
exports.ReqRspTypeType = {
  // 请求
  Request: '0',
  // 响应
  Response: '1',
};

// 银期转帐用户事件类型类型
exports.FBTUserEventTypeType = {
  // 签到
  SignIn: '0',
  // 银行转期货
  FromBankToFuture: '1',
  // 期货转银行
  FromFutureToBank: '2',
  // 开户
  OpenAccount: '3',
  // 销户
  CancelAccount: '4',
  // 变更银行账户
  ChangeAccount: '5',
  // 冲正银行转期货
  RepealFromBankToFuture: '6',
  // 冲正期货转银行
  RepealFromFutureToBank: '7',
  // 查询银行账户
  QueryBankAccount: '8',
  // 查询期货账户
  QueryFutureAccount: '9',
  // 签退
  SignOut: 'A',
  // 密钥同步
  SyncKey: 'B',
  // 预约开户
  ReserveOpenAccount: 'C',
  // 撤销预约开户
  CancelReserveOpenAccount: 'D',
  // 预约开户确认
  ReserveOpenAccountConfirm: 'E',
  // 其他
  Other: 'Z',
};

// 记录操作类型类型
exports.DBOperationType = {
  // 插入
  Insert: '0',
  // 更新
  Update: '1',
  // 删除
  Delete: '2',
};

// 同步标记类型
exports.SyncFlagType = {
  // 已同步
  Yes: '0',
  // 未同步
  No: '1',
};

// 同步类型类型
exports.SyncTypeType = {
  // 一次同步
  OneOffSync: '0',
  // 定时同步
  TimerSync: '1',
  // 定时完全同步
  TimerFullSync: '2',
};

// 换汇方向类型
exports.ExDirectionType = {
  // 结汇
  Settlement: '0',
  // 售汇
  Sale: '1',
};

// 换汇成功标志类型
exports.FBEResultFlagType = {
  // 成功
  Success: '0',
  // 账户余额不足
  InsufficientBalance: '1',
  // 交易结果未知
  UnknownTrading: '8',
  // 失败
  Fail: 'x',
};

// 换汇交易状态类型
exports.FBEExchStatusType = {
  // 正常
  Normal: '0',
  // 交易重发
  ReExchange: '1',
};

// 换汇文件标志类型
exports.FBEFileFlagType = {
  // 数据包
  DataPackage: '0',
  // 文件
  File: '1',
};

// 换汇已交易标志类型
exports.FBEAlreadyTradeType = {
  // 未交易
  NotTrade: '0',
  // 已交易
  Trade: '1',
};

// 银期换汇用户事件类型类型
exports.FBEUserEventTypeType = {
  // 签到
  SignIn: '0',
  // 换汇
  Exchange: '1',
  // 换汇重发
  ReExchange: '2',
  // 银行账户查询
  QueryBankAccount: '3',
  // 换汇明细查询
  QueryExchDetial: '4',
  // 换汇汇总查询
  QueryExchSummary: '5',
  // 换汇汇率查询
  QueryExchRate: '6',
  // 对账文件通知
  CheckBankAccount: '7',
  // 签退
  SignOut: '8',
  // 其他
  Other: 'Z',
};

// 换汇发送标志类型
exports.FBEReqFlagType = {
  // 未处理
  UnProcessed: '0',
  // 等待发送
  WaitSend: '1',
  // 发送成功
  SendSuccess: '2',
  // 发送失败
  SendFailed: '3',
  // 等待重发
  WaitReSend: '4',
};

// 风险通知类型类型
exports.NotifyClassType = {
  // 正常
  NOERROR: '0',
  // 警示
  Warn: '1',
  // 追保
  Call: '2',
  // 强平
  Force: '3',
  // 穿仓
  CHUANCANG: '4',
  // 异常
  Exception: '5',
};

// 强平单类型类型
exports.ForceCloseTypeType = {
  // 手工强平
  Manual: '0',
  // 单一投资者辅助强平
  Single: '1',
  // 批量投资者辅助强平
  Group: '2',
};

// 风险通知途径类型
exports.RiskNotifyMethodType = {
  // 系统通知
  System: '0',
  // 短信通知
  SMS: '1',
  // 邮件通知
  EMail: '2',
  // 人工通知
  Manual: '3',
};

// 风险通知状态类型
exports.RiskNotifyStatusType = {
  // 未生成
  NotGen: '0',
  // 已生成未发送
  Generated: '1',
  // 发送失败
  SendError: '2',
  // 已发送未接收
  SendOk: '3',
  // 已接收未确认
  Received: '4',
  // 已确认
  Confirmed: '5',
};

// 风控用户操作事件类型
exports.RiskUserEventType = {
  // 导出数据
  ExportData: '0',
};

// 条件单索引条件类型
exports.ConditionalOrderSortTypeType = {
  // 使用最新价升序
  LastPriceAsc: '0',
  // 使用最新价降序
  LastPriceDesc: '1',
  // 使用卖价升序
  AskPriceAsc: '2',
  // 使用卖价降序
  AskPriceDesc: '3',
  // 使用买价升序
  BidPriceAsc: '4',
  // 使用买价降序
  BidPriceDesc: '5',
};

// 报送状态类型
exports.SendTypeType = {
  // 未发送
  NoSend: '0',
  // 已发送
  Sended: '1',
  // 已生成
  Generated: '2',
  // 报送失败
  SendFail: '3',
  // 接收成功
  Success: '4',
  // 接收失败
  Fail: '5',
  // 取消报送
  Cancel: '6',
};

// 交易编码状态类型
exports.ClientIDStatusType = {
  // 未申请
  NoApply: '1',
  // 已提交申请
  Submited: '2',
  // 已发送申请
  Sended: '3',
  // 完成
  Success: '4',
  // 拒绝
  Refuse: '5',
  // 已撤销编码
  Cancel: '6',
};

// 特有信息类型类型
exports.QuestionTypeType = {
  // 单选
  Radio: '1',
  // 多选
  Option: '2',
  // 填空
  Blank: '3',
};

// 业务类型类型
exports.BusinessTypeType = {
  // 请求
  Request: '1',
  // 应答
  Response: '2',
  // 通知
  Notice: '3',
};

// 监控中心返回码类型
exports.CfmmcReturnCodeType = {
  // 成功
  Success: '0',
  // 该客户已经有流程在处理中
  Working: '1',
  // 监控中客户资料检查失败
  InfoFail: '2',
  // 监控中实名制检查失败
  IDCardFail: '3',
  // 其他错误
  OtherFail: '4',
};

// 客户类型类型
exports.ClientTypeType = {
  // 所有
  All: '0',
  // 个人
  Person: '1',
  // 单位
  Company: '2',
  // 其他
  Other: '3',
  // 特殊法人
  SpecialOrgan: '4',
  // 资管户
  Asset: '5',
};

// 交易所编号类型
exports.ExchangeIDTypeType = {
  // 上海期货交易所
  SHFE: 'S',
  // 郑州商品交易所
  CZCE: 'Z',
  // 大连商品交易所
  DCE: 'D',
  // 中国金融期货交易所
  CFFEX: 'J',
  // 上海国际能源交易中心股份有限公司
  INE: 'N',
};

// 交易编码类型类型
exports.ExClientIDTypeType = {
  // 套保
  Hedge: '1',
  // 套利
  Arbitrage: '2',
  // 投机
  Speculation: '3',
};

// 更新状态类型
exports.UpdateFlagType = {
  // 未更新
  NoUpdate: '0',
  // 更新全部信息成功
  Success: '1',
  // 更新全部信息失败
  Fail: '2',
  // 更新交易编码成功
  TCSuccess: '3',
  // 更新交易编码失败
  TCFail: '4',
  // 已丢弃
  Cancel: '5',
};

// 申请动作类型
exports.ApplyOperateIDType = {
  // 开户
  OpenInvestor: '1',
  // 修改身份信息
  ModifyIDCard: '2',
  // 修改一般信息
  ModifyNoIDCard: '3',
  // 申请交易编码
  ApplyTradingCode: '4',
  // 撤销交易编码
  CancelTradingCode: '5',
  // 销户
  CancelInvestor: '6',
  // 账户休眠
  FreezeAccount: '8',
  // 激活休眠账户
  ActiveFreezeAccount: '9',
};

// 申请状态类型
exports.ApplyStatusIDType = {
  // 未补全
  NoComplete: '1',
  // 已提交
  Submited: '2',
  // 已审核
  Checked: '3',
  // 已拒绝
  Refused: '4',
  // 已删除
  Deleted: '5',
};

// 发送方式类型
exports.SendMethodType = {
  // 文件发送
  ByAPI: '1',
  // 电子发送
  ByFile: '2',
};

// 操作方法类型
exports.EventModeType = {
  // 增加
  ADD: '1',
  // 修改
  UPDATE: '2',
  // 删除
  DELETE: '3',
  // 复核
  CHECK: '4',
  // 复制
  COPY: '5',
  // 注销
  CANCEL: '6',
  // 冲销
  Reverse: '7',
};

// 统一开户申请自动发送类型
exports.UOAAutoSendType = {
  // 自动发送并接收
  ASR: '1',
  // 自动发送，不自动接收
  ASNR: '2',
  // 不自动发送，自动接收
  NSAR: '3',
  // 不自动发送，也不自动接收
  NSR: '4',
};

// 流程ID类型
exports.FlowIDType = {
  // 投资者对应投资者组设置
  InvestorGroupFlow: '1',
  // 投资者手续费率设置
  InvestorRate: '2',
  // 投资者手续费率模板关系设置
  InvestorCommRateModel: '3',
};

// 复核级别类型
exports.CheckLevelType = {
  // 零级复核
  Zero: '0',
  // 一级复核
  One: '1',
  // 二级复核
  Two: '2',
};

// 复核级别类型
exports.CheckStatusType = {
  // 未复核
  Init: '0',
  // 复核中
  Checking: '1',
  // 已复核
  Checked: '2',
  // 拒绝
  Refuse: '3',
  // 作废
  Cancel: '4',
};

// 生效状态类型
exports.UsedStatusType = {
  // 未生效
  Unused: '0',
  // 已生效
  Used: '1',
  // 生效失败
  Fail: '2',
};

// 账户来源类型
exports.BankAcountOriginType = {
  // 手工录入
  ByAccProperty: '0',
  // 银期转账
  ByFBTransfer: '1',
};

// 结算单月报成交汇总方式类型
exports.MonthBillTradeSumType = {
  // 同日同合约
  ByInstrument: '0',
  // 同日同合约同价格
  ByDayInsPrc: '1',
  // 同合约
  ByDayIns: '2',
};

// 银期交易代码枚举类型
exports.FBTTradeCodeEnumType = {
  // 银行发起银行转期货
  BankLaunchBankToBroker: '102001',
  // 期货发起银行转期货
  BrokerLaunchBankToBroker: '202001',
  // 银行发起期货转银行
  BankLaunchBrokerToBank: '102002',
  // 期货发起期货转银行
  BrokerLaunchBrokerToBank: '202002',
};

// 动态令牌类型类型
exports.OTPTypeType = {
  // 无动态令牌
  NONE: '0',
  // 时间令牌
  TOTP: '1',
};

// 动态令牌状态类型
exports.OTPStatusType = {
  // 未使用
  Unused: '0',
  // 已使用
  Used: '1',
  // 注销
  Disuse: '2',
};

// 经济公司用户类型类型
exports.BrokerUserTypeType = {
  // 投资者
  Investor: '1',
  // 操作员
  BrokerUser: '2',
};

// 期货类型类型
exports.FutureTypeType = {
  // 商品期货
  Commodity: '1',
  // 金融期货
  Financial: '2',
};

// 资金管理操作类型类型
exports.FundEventTypeType = {
  // 转账限额
  Restriction: '0',
  // 当日转账限额
  TodayRestriction: '1',
  // 期商流水
  Transfer: '2',
  // 资金冻结
  Credit: '3',
  // 投资者可提资金比例
  InvestorWithdrawAlm: '4',
  // 单个银行帐户转账限额
  BankRestriction: '5',
  // 银期签约账户
  Accountregister: '6',
  // 交易所出入金
  ExchangeFundIO: '7',
  // 投资者出入金
  InvestorFundIO: '8',
};

// 资金账户来源类型
exports.AccountSourceTypeType = {
  // 银期同步
  FBTransfer: '0',
  // 手工录入
  ManualEntry: '1',
};

// 交易编码来源类型
exports.CodeSourceTypeType = {
  // 统一开户(已规范)
  UnifyAccount: '0',
  // 手工录入(未规范)
  ManualEntry: '1',
};

// 操作员范围类型
exports.UserRangeType = {
  // 所有
  All: '0',
  // 单一操作员
  Single: '1',
};

// 交易统计表按客户统计方式类型
exports.ByGroupType = {
  // 按投资者统计
  Investor: '2',
  // 按类统计
  Group: '1',
};

// 交易统计表按范围统计方式类型
exports.TradeSumStatModeType = {
  // 按合约统计
  Instrument: '1',
  // 按产品统计
  Product: '2',
  // 按交易所统计
  Exchange: '3',
};

// 日期表达式设置类型类型
exports.ExprSetModeType = {
  // 相对已有规则设置
  Relative: '1',
  // 典型设置
  Typical: '2',
};

// 投资者范围类型
exports.RateInvestorRangeType = {
  // 公司标准
  All: '1',
  // 模板
  Model: '2',
  // 单一投资者
  Single: '3',
};

// 主次用系统数据同步状态类型
exports.SyncDataStatusType = {
  // 未同步
  Initialize: '0',
  // 同步中
  Settlementing: '1',
  // 已同步
  Settlemented: '2',
};

// 成交来源类型
exports.TradeSourceType = {
  // 来自交易所普通回报
  NORMAL: '0',
  // 来自查询
  QUERY: '1',
};

// 产品合约统计方式类型
exports.FlexStatModeType = {
  // 产品统计
  Product: '1',
  // 交易所统计
  Exchange: '2',
  // 统计所有
  All: '3',
};

// 投资者范围统计方式类型
exports.ByInvestorRangeType = {
  // 属性统计
  Property: '1',
  // 统计所有
  All: '2',
};

// 投资者范围类型
exports.PropertyInvestorRangeType = {
  // 所有
  All: '1',
  // 投资者属性
  Property: '2',
  // 单一投资者
  Single: '3',
};

// 文件状态类型
exports.FileStatusType = {
  // 未生成
  NoCreate: '0',
  // 已生成
  Created: '1',
  // 生成失败
  Failed: '2',
};

// 文件生成方式类型
exports.FileGenStyleType = {
  // 下发
  FileTransmit: '0',
  // 生成
  FileGen: '1',
};

// 系统日志操作方法类型
exports.SysOperModeType = {
  // 增加
  Add: '1',
  // 修改
  Update: '2',
  // 删除
  Delete: '3',
  // 复制
  Copy: '4',
  // 激活
  AcTive: '5',
  // 注销
  CanCel: '6',
  // 重置
  ReSet: '7',
};

// 系统日志操作类型类型
exports.SysOperTypeType = {
  // 修改操作员密码
  UpdatePassword: '0',
  // 操作员组织架构关系
  UserDepartment: '1',
  // 角色管理
  RoleManager: '2',
  // 角色功能设置
  RoleFunction: '3',
  // 基础参数设置
  BaseParam: '4',
  // 设置操作员
  SetUserID: '5',
  // 用户角色设置
  SetUserRole: '6',
  // 用户IP限制
  UserIpRestriction: '7',
  // 组织架构管理
  DepartmentManager: '8',
  // 组织架构向查询分类复制
  DepartmentCopy: '9',
  // 交易编码管理
  Tradingcode: 'A',
  // 投资者状态维护
  InvestorStatus: 'B',
  // 投资者权限管理
  InvestorAuthority: 'C',
  // 属性设置
  PropertySet: 'D',
  // 重置投资者密码
  ReSetInvestorPasswd: 'E',
  // 投资者个性信息维护
  InvestorPersonalityInfo: 'F',
};

// 上报数据查询类型类型
exports.CSRCDataQueyTypeType = {
  // 查询当前交易日报送的数据
  Current: '0',
  // 查询历史报送的代理经纪公司的数据
  History: '1',
};

// 休眠状态类型
exports.FreezeStatusType = {
  // 活跃
  Normal: '1',
  // 休眠
  Freeze: '0',
};

// 规范状态类型
exports.StandardStatusType = {
  // 已规范
  Standard: '0',
  // 未规范
  NonStandard: '1',
};

// 配置类型类型
exports.RightParamTypeType = {
  // 休眠户
  Freeze: '1',
  // 激活休眠户
  FreezeActive: '2',
  // 开仓权限限制
  OpenLimit: '3',
  // 解除开仓权限限制
  RelieveOpenLimit: '4',
};

// 反洗钱审核表数据状态类型
exports.DataStatusType = {
  // 正常
  Normal: '0',
  // 已删除
  Deleted: '1',
};

// 审核状态类型
exports.AMLCheckStatusType = {
  // 未复核
  Init: '0',
  // 复核中
  Checking: '1',
  // 已复核
  Checked: '2',
  // 拒绝上报
  RefuseReport: '3',
};

// 日期类型类型
exports.AmlDateTypeType = {
  // 检查日期
  DrawDay: '0',
  // 发生日期
  TouchDay: '1',
};

// 审核级别类型
exports.AmlCheckLevelType = {
  // 零级审核
  CheckLevel0: '0',
  // 一级审核
  CheckLevel1: '1',
  // 二级审核
  CheckLevel2: '2',
  // 三级审核
  CheckLevel3: '3',
};

// 结算配置类型类型
exports.SettleManagerTypeType = {
  // 结算前准备
  Before: '1',
  // 结算
  Settlement: '2',
  // 结算后核对
  After: '3',
  // 结算后处理
  Settlemented: '4',
};

// 结算配置等级类型
exports.SettleManagerLevelType = {
  // 必要
  Must: '1',
  // 警告
  Alarm: '2',
  // 提示
  Prompt: '3',
  // 不检查
  Ignore: '4',
};

// 模块分组类型
exports.SettleManagerGroupType = {
  // 交易所核对
  Exhcange: '1',
  // 内部核对
  ASP: '2',
  // 上报数据核对
  CSRC: '3',
};

// 保值额度使用类型类型
exports.LimitUseTypeType = {
  // 可重复使用
  Repeatable: '1',
  // 不可重复使用
  Unrepeatable: '2',
};

// 数据来源类型
exports.DataResourceType = {
  // 本系统
  Settle: '1',
  // 交易所
  Exchange: '2',
  // 报送数据
  CSRC: '3',
};

// 保证金类型类型
exports.MarginTypeType = {
  // 交易所保证金率
  ExchMarginRate: '0',
  // 投资者保证金率
  InstrMarginRate: '1',
  // 投资者交易保证金率
  InstrMarginRateTrade: '2',
};

// 生效类型类型
exports.ActiveTypeType = {
  // 仅当日生效
  Intraday: '1',
  // 长期生效
  Long: '2',
};

// 冲突保证金率类型类型
exports.MarginRateTypeType = {
  // 交易所保证金率
  Exchange: '1',
  // 投资者保证金率
  Investor: '2',
  // 投资者交易保证金率
  InvestorTrade: '3',
};

// 备份数据状态类型
exports.BackUpStatusType = {
  // 未生成备份数据
  UnBak: '0',
  // 备份数据生成中
  BakUp: '1',
  // 已生成备份数据
  BakUped: '2',
  // 备份数据失败
  BakFail: '3',
};

// 结算初始化状态类型
exports.InitSettlementType = {
  // 结算初始化未开始
  UnInitialize: '0',
  // 结算初始化中
  Initialize: '1',
  // 结算初始化完成
  Initialized: '2',
};

// 报表数据生成状态类型
exports.ReportStatusType = {
  // 未生成报表数据
  NoCreate: '0',
  // 报表数据生成中
  Create: '1',
  // 已生成报表数据
  Created: '2',
  // 生成报表数据失败
  CreateFail: '3',
};

// 数据归档状态类型
exports.SaveStatusType = {
  // 归档未完成
  UnSaveData: '0',
  // 归档完成
  SaveDatad: '1',
};

// 结算确认数据归档状态类型
exports.SettArchiveStatusType = {
  // 未归档数据
  UnArchived: '0',
  // 数据归档中
  Archiving: '1',
  // 已归档数据
  Archived: '2',
  // 归档数据失败
  ArchiveFail: '3',
};

// CTP交易系统类型类型
exports.CTPTypeType = {
  // 未知类型
  Unkown: '0',
  // 主中心
  MainCenter: '1',
  // 备中心
  BackUp: '2',
};

// 平仓处理类型类型
exports.CloseDealTypeType = {
  // 正常
  Normal: '0',
  // 投机平仓优先
  SpecFirst: '1',
};

// 货币质押资金可用范围类型
exports.MortgageFundUseRangeType = {
  // 不能使用
  None: '0',
  // 用于保证金
  Margin: '1',
  // 用于手续费、盈亏、保证金
  All: '2',
};

// 特殊产品类型类型
exports.SpecProductTypeType = {
  // 郑商所套保产品
  CzceHedge: '1',
  // 货币质押产品
  IneForeignCurrency: '2',
  // 大连短线开平仓产品
  DceOpenClose: '3',
};

// 货币质押类型类型
exports.FundMortgageTypeType = {
  // 质押
  Mortgage: '1',
  // 解质
  Redemption: '2',
};

// 投资者账户结算参数代码类型
exports.AccountSettlementParamIDType = {
  // 基础保证金
  BaseMargin: '1',
  // 最低权益标准
  LowestInterest: '2',
};

// 货币质押方向类型
exports.FundMortDirectionType = {
  // 货币质入
  In: '1',
  // 货币质出
  Out: '2',
};

// 换汇类别类型
exports.BusinessClassType = {
  // 盈利
  Profit: '0',
  // 亏损
  Loss: '1',
  // 其他
  Other: 'Z',
};

// 换汇数据来源类型
exports.SwapSourceTypeType = {
  // 手工
  Manual: '0',
  // 自动生成
  Automatic: '1',
};

// 换汇类型类型
exports.CurrExDirectionType = {
  // 结汇
  Settlement: '0',
  // 售汇
  Sale: '1',
};

// 申请状态类型
exports.CurrencySwapStatusType = {
  // 已录入
  Entry: '1',
  // 已审核
  Approve: '2',
  // 已拒绝
  Refuse: '3',
  // 已撤销
  Revoke: '4',
  // 已发送
  Send: '5',
  // 换汇成功
  Success: '6',
  // 换汇失败
  Failure: '7',
};

// 换汇发送标志类型
exports.ReqFlagType = {
  // 未发送
  NoSend: '0',
  // 发送成功
  SendSuccess: '1',
  // 发送失败
  SendFailed: '2',
  // 等待重发
  WaitReSend: '3',
};

// 换汇返回成功标志类型
exports.ResFlagType = {
  // 成功
  Success: '0',
  // 账户余额不足
  InsuffiCient: '1',
  // 交易结果未知
  UnKnown: '8',
};

// 修改状态类型
exports.ExStatusType = {
  // 修改前
  Before: '0',
  // 修改后
  After: '1',
};

// 开户客户地域类型
exports.ClientRegionType = {
  // 国内客户
  Domestic: '1',
  // 港澳台客户
  GMT: '2',
  // 国外客户
  Foreign: '3',
};

// 是否有董事会类型
exports.HasBoardType = {
  // 没有
  No: '0',
  // 有
  Yes: '1',
};

// 启动模式类型
exports.StartModeType = {
  // 正常
  Normal: '1',
  // 应急
  Emerge: '2',
  // 恢复
  Restore: '3',
};

// 模型类型类型
exports.TemplateTypeType = {
  // 全量
  Full: '1',
  // 增量
  Increment: '2',
  // 备份
  BackUp: '3',
};

// 登录模式类型
exports.LoginModeType = {
  // 交易
  Trade: '0',
  // 转账
  Transfer: '1',
};

// 日历提示类型类型
exports.PromptTypeType = {
  // 合约上下市
  Instrument: '1',
  // 保证金分段生效
  Margin: '2',
};

// 是否有托管人类型
exports.HasTrusteeType = {
  // 有
  Yes: '1',
  // 没有
  No: '0',
};

// 机构类型类型
exports.AmTypeType = {
  // 银行
  Bank: '1',
  // 证券公司
  Securities: '2',
  // 基金公司
  Fund: '3',
  // 保险公司
  Insurance: '4',
  // 信托公司
  Trust: '5',
  // 其他
  Other: '9',
};

// 出入金类型类型
exports.CSRCFundIOTypeType = {
  // 出入金
  FundIO: '0',
  // 银期换汇
  SwapCurrency: '1',
};

// 结算账户类型类型
exports.CusAccountTypeType = {
  // 期货结算账户
  Futures: '1',
  // 纯期货资管业务下的资管结算账户
  AssetmgrFuture: '2',
  // 综合类资管业务下的期货资管托管账户
  AssetmgrTrustee: '3',
  // 综合类资管业务下的资金中转账户
  AssetmgrTransfer: '4',
};

// 通知语言类型类型
exports.LanguageTypeType = {
  // 中文
  Chinese: '1',
  // 英文
  English: '2',
};

// 资产管理客户类型类型
exports.AssetmgrClientTypeType = {
  // 个人资管客户
  Person: '1',
  // 单位资管客户
  Organ: '2',
  // 特殊单位资管客户
  SpecialOrgan: '4',
};

// 投资类型类型
exports.AssetmgrTypeType = {
  // 期货类
  Futures: '3',
  // 综合类
  SpecialOrgan: '4',
};

// 合约比较类型类型
exports.CheckInstrTypeType = {
  // 合约交易所不存在
  HasExch: '0',
  // 合约本系统不存在
  HasATP: '1',
  // 合约比较不一致
  HasDiff: '2',
};

// 交割类型类型
exports.DeliveryTypeType = {
  // 手工交割
  HandDeliv: '1',
  // 到期交割
  PersonDeliv: '2',
};

// 大额单边保证金算法类型
exports.MaxMarginSideAlgorithmType = {
  // 不使用大额单边保证金算法
  NO: '0',
  // 使用大额单边保证金算法
  YES: '1',
};

// 资产管理客户类型类型
exports.DAClientTypeType = {
  // 自然人
  Person: '0',
  // 法人
  Company: '1',
  // 其他
  Other: '2',
};

// 投资类型类型
exports.UOAAssetmgrTypeType = {
  // 期货类
  Futures: '1',
  // 综合类
  SpecialOrgan: '2',
};

// 期权类型类型
exports.OptionsTypeType = {
  // 看涨
  CallOptions: '1',
  // 看跌
  PutOptions: '2',
};

// 执行方式类型
exports.StrikeModeType = {
  // 欧式
  Continental: '0',
  // 美式
  American: '1',
  // 百慕大
  Bermuda: '2',
};

// 执行类型类型
exports.StrikeTypeType = {
  // 自身对冲
  Hedge: '0',
  // 匹配执行
  Match: '1',
};

// 中金所期权放弃执行申请类型类型
exports.ApplyTypeType = {
  // 不执行数量
  NotStrikeNum: '4',
};

// 放弃执行申请数据来源类型
exports.GiveUpDataSourceType = {
  // 系统生成
  Gen: '0',
  // 手工添加
  Hand: '1',
};

// 执行结果类型
exports.ExecResultType = {
  // 没有执行
  NoExec: 'n',
  // 已经取消
  Canceled: 'c',
  // 执行成功
  OK: '0',
  // 期权持仓不够
  NoPosition: '1',
  // 资金不够
  NoDeposit: '2',
  // 会员不存在
  NoParticipant: '3',
  // 客户不存在
  NoClient: '4',
  // 合约不存在
  NoInstrument: '6',
  // 没有执行权限
  NoRight: '7',
  // 不合理的数量
  InvalidVolume: '8',
  // 没有足够的历史成交
  NoEnoughHistoryTrade: '9',
  // 未知
  Unknown: 'a',
};

// 组合类型类型
exports.CombinationTypeType = {
  // 期货组合
  Future: '0',
  // 垂直价差BUL
  BUL: '1',
  // 垂直价差BER
  BER: '2',
  // 跨式组合
  STD: '3',
  // 宽跨式组合
  STG: '4',
  // 备兑组合
  PRT: '5',
  // 时间价差组合
  CLD: '6',
};

// 期权权利金价格类型类型
exports.OptionRoyaltyPriceTypeType = {
  // 昨结算价
  PreSettlementPrice: '1',
  // 开仓价
  OpenPrice: '4',
  // 最新价与昨结算价较大值
  MaxPreSettlementPrice: '5',
};

// 权益算法类型
exports.BalanceAlgorithmType = {
  // 不计算期权市值盈亏
  Default: '1',
  // 计算期权市值亏损
  IncludeOptValLost: '2',
};

// 执行类型类型
exports.ActionTypeType = {
  // 执行
  Exec: '1',
  // 放弃
  Abandon: '2',
};

// 询价状态类型
exports.ForQuoteStatusType = {
  // 已经提交
  Submitted: 'a',
  // 已经接受
  Accepted: 'b',
  // 已经被拒绝
  Rejected: 'c',
};

// 取值方式类型
exports.ValueMethodType = {
  // 按绝对值
  Absolute: '0',
  // 按比率
  Ratio: '1',
};

// 期权行权后是否保留期货头寸的标记类型
exports.ExecOrderPositionFlagType = {
  // 保留
  Reserve: '0',
  // 不保留
  UnReserve: '1',
};

// 期权行权后生成的头寸是否自动平仓类型
exports.ExecOrderCloseFlagType = {
  // 自动平仓
  AutoClose: '0',
  // 免于自动平仓
  NotToClose: '1',
};

// 产品类型类型
exports.ProductTypeType = {
  // 期货
  Futures: '1',
  // 期权
  Options: '2',
};

// 组合指令方向类型
exports.CombDirectionType = {
  // 申请组合
  Comb: '0',
  // 申请拆分
  UnComb: '1',
};

// 行权偏移类型类型
exports.StrikeOffsetTypeType = {
  // 实值额
  RealValue: '1',
  // 盈利额
  ProfitValue: '2',
  // 实值比例
  RealRatio: '3',
  // 盈利比例
  ProfitRatio: '4',
};

// 预约开户状态类型
exports.ReserveOpenAccStasType = {
  // 等待处理中
  Processing: '0',
  // 已撤销
  Cancelled: '1',
  // 已开户
  Opened: '2',
  // 无效请求
  Invalid: '3',
};

// 弱密码来源类型
exports.WeakPasswordSourceType = {
  // 弱密码库
  Lib: '1',
  // 手工录入
  Manual: '2',
};

// 期权行权的头寸是否自对冲类型
exports.OptSelfCloseFlagType = {
  // 自对冲期权仓位
  CloseSelfOptionPosition: '1',
  // 保留期权仓位
  ReserveOptionPosition: '2',
  // 自对冲卖方履约后的期货仓位
  SellCloseSelfFuturePosition: '3',
};

// 业务类型类型
exports.BizTypeType = {
  // 期货
  Future: '1',
  // 证券
  Stock: '2',
};
