interface Emoji {
  readonly emoji: any;
  readonly code: any;
  readonly description: any;
  readonly description_zh_cn: any;
}
let Gitmoji: Array<Emoji> = [
  {
    emoji: "🎨",
    code: ":art:",
    description: "Improve structure / format of the code",
    description_zh_cn: "改进项目结构/代码格式",
  },
  {
    emoji: "⚡️",
    code: ":zap:",
    description: "Improve performance",
    description_zh_cn: "提高性能",
  },
  {
    emoji: "🔥",
    code: ":fire:",
    description: "Remove code or files",
    description_zh_cn: "删除代码或文件",
  },
  {
    emoji: "🐛",
    code: ":bug:",
    description: "Fix a bug",
    description_zh_cn: "修复一个 BUG",
  },
  {
    emoji: "🚑",
    code: ":ambulance:",
    description: "Critical hotfix",
    description_zh_cn: "紧急热修复",
  },
  {
    emoji: "✨",
    code: ":sparkles:",
    description: "Introduce new features",
    description_zh_cn: "引入新特性",
  },
  {
    emoji: "📝",
    code: ":pencil:",
    description: "Write docs",
    description_zh_cn: "书写文档",
  },
  {
    emoji: "🚀",
    code: ":rocket:",
    description: "Deploy stuff",
    description_zh_cn: "部署项目",
  },
  {
    emoji: "💄",
    code: ":lipstick:",
    description: "Add or update the UI and style files",
    description_zh_cn: "新增或更新 UI 和样式文件",
  },
  {
    emoji: "🎉",
    code: ":tada:",
    description: "Initial commit",
    description_zh_cn: "初次提交",
  },
  {
    emoji: "✅",
    code: ":white_check_mark:",
    description: "Add or update tests",
    description_zh_cn: "新增或更新测试",
  },
  {
    emoji: "🔒",
    code: ":lock:",
    description: "Fix security issues",
    description_zh_cn: "修复安全问题",
  },
  {
    emoji: "🍎",
    code: ":apple:",
    description: "Fix something on macOS",
    description_zh_cn: "修复 macOS 平台的问题",
  },
  {
    emoji: "🐧",
    code: ":penguin:",
    description: "Fix something on Linux",
    description_zh_cn: "修复 Linux 平台的问题",
  },
  {
    emoji: "🏁",
    code: ":checkered_flag:",
    description: "Fix something on Windows",
    description_zh_cn: "修复 Windows 平台的问题",
  },
  {
    emoji: "🤖",
    code: ":robot:",
    description: "Fix something on Android",
    description_zh_cn: "修复 Android 平台的问题",
  },
  {
    emoji: "🍏",
    code: ":green_apple:",
    description: "Fix something on iOS",
    description_zh_cn: "修复 iOS 平台的问题",
  },
  {
    emoji: "🔖",
    code: ":bookmark:",
    description: "Release / Version tags",
    description_zh_cn: "Release / Version 标签",
  },
  {
    emoji: "🚨",
    code: ":rotating_light:",
    description: "Remove linter warnings",
    description_zh_cn: "移除 linter 报警",
  },
  {
    emoji: "🚧",
    code: ":construction:",
    description: "Work in progress",
    description_zh_cn: "进行中的工作",
  },
  {
    emoji: "💚",
    code: ":green_heart:",
    description: "Fix CI Build",
    description_zh_cn: "修复 CI 构建",
  },
  {
    emoji: "⬇️",
    code: ":arrow_down:",
    description: "Downgrade dependencies",
    description_zh_cn: "降级依赖版本",
  },
  {
    emoji: "⬆️",
    code: ":arrow_up:",
    description: "Upgrade dependencies",
    description_zh_cn: "升级依赖版本",
  },
  {
    emoji: "📌",
    code: ":pushpin:",
    description: "Pin dependencies to specific versions",
    description_zh_cn: "将依赖设定为指定版本",
  },
  {
    emoji: "👷",
    code: ":construction_worker:",
    description: "Add or update CI build system",
    description_zh_cn: "新增或更新 CI 构建系统",
  },
  {
    emoji: "📈",
    code: ":chart_with_upwards_trend:",
    description: "Add or update analytics or track code.",
    description_zh_cn: "新增或更新分析或跟踪代码",
  },
  {
    emoji: "♻️",
    code: ":recycle:",
    description: "Refactor code",
    description_zh_cn: "重构代码",
  },
  {
    emoji: "🐳",
    code: ":whale:",
    description: "Work about Docker",
    description_zh_cn: "处理 Docker 相关的工作",
  },
  {
    emoji: "➕",
    code: ":heavy_plus_sign:",
    description: "Add or update a dependency",
    description_zh_cn: "新增或更新一个依赖",
  },
  {
    emoji: "➖",
    code: ":heavy_minus_sign:",
    description: "Remove a dependency",
    description_zh_cn: "移除一个依赖",
  },
  {
    emoji: "🔧",
    code: ":wrench:",
    description: "Add or update configuration files",
    description_zh_cn: "新增或更新配置文件",
  },
  {
    emoji: "🔨",
    code: ":hammer:",
    description: "Add or update build scripts",
    description_zh_cn: "新增或更新构建脚本",
  },
  {
    emoji: "🌐",
    code: ":globe_with_meridians:",
    description: "Internationalization and localization",
    description_zh_cn: "国际化和本地化 i18n",
  },
  {
    emoji: "✏️",
    code: ":pencil2:",
    description: "Fix typos",
    description_zh_cn: "修复拼写错误",
  },
  {
    emoji: "💩",
    code: ":poop:",
    description: "Write bad code that needs to be improved",
    description_zh_cn: "这段代码临时瞎写的，写得跟屎一样，后期要改进",
  },
  {
    emoji: "⏪",
    code: ":rewind:",
    description: "Revert changes",
    description_zh_cn: "还原修改",
  },
  {
    emoji: "🔀",
    code: ":twisted_rightwards_arrows:",
    description: "Merge branches",
    description_zh_cn: "合并分支",
  },
  {
    emoji: "📦",
    code: ":package:",
    description: "Add or update compiled files or packages",
    description_zh_cn: "新增或更新已编译的文件或包",
  },
  {
    emoji: "👽",
    code: ":alien:",
    description: "Update code due to external API changes",
    description_zh_cn: "由于外部 API 更改而更新代码",
  },
  {
    emoji: "🚚",
    code: ":truck:",
    description: "Move or rename files",
    description_zh_cn: "移动或重命名文件",
  },
  {
    emoji: "📄",
    code: ":page_facing_up:",
    description: "Add or update license",
    description_zh_cn: "新增或更新 License",
  },
  {
    emoji: "💥",
    code: ":boom:",
    description: "Introduce breaking changes",
    description_zh_cn: "引入重大改变",
  },
  {
    emoji: "🍱",
    code: ":bento:",
    description: "Add or update assets",
    description_zh_cn: "新增或更新资源",
  },
  {
    emoji: "👌",
    code: ":ok_hand:",
    description: "Update code due to code review changes",
    description_zh_cn: "由于代码评审更改而更新代码",
  },
  {
    emoji: "♿️",
    code: ":wheelchair:",
    description: "Improve accessibility",
    description_zh_cn: "提高可访问性",
  },
  {
    emoji: "💡",
    code: ":bulb:",
    description: "Add or update comments in source code",
    description_zh_cn: "在源代码中添加或更新注释",
  },
  {
    emoji: "🍻",
    code: ":beers:",
    description: "Write code drunkenly",
    description_zh_cn: "这段代码有问题，仿佛是醉酒后写的",
  },
  {
    emoji: "💬",
    code: ":speech_balloon:",
    description: "Add or update text and literals",
    description_zh_cn: "新增或更新文本和文字",
  },
  {
    emoji: "🗃",
    code: ":card_file_box:",
    description: "Perform database related changes",
    description_zh_cn: "执行与数据库相关的更改",
  },
  {
    emoji: "🔊",
    code: ":loud_sound:",
    description: "Add or update logs",
    description_zh_cn: "新增或更新日志",
  },
  {
    emoji: "🔇",
    code: ":mute:",
    description: "Remove logs",
    description_zh_cn: "删除日志",
  },
  {
    emoji: "👥",
    code: ":busts_in_silhouette:",
    description: "Add or update contributor(s)",
    description_zh_cn: "新增或更新贡献者",
  },
  {
    emoji: "🚸",
    code: ":children_crossing:",
    description: "Improve user experience / usability",
    description_zh_cn: "提高用户体验/可用性",
  },
  {
    emoji: "🏗",
    code: ":building_construction:",
    description: "Make architectural changes",
    description_zh_cn: "进行架构更改",
  },
  {
    emoji: "📱",
    code: ":iphone:",
    description: "Work on responsive design",
    description_zh_cn: "正在处理响应式设计",
  },
  {
    emoji: "🤡",
    code: ":clown_face:",
    description: "Mock things",
    description_zh_cn: "进行 mock 测试",
  },
  {
    emoji: "🥚",
    code: ":egg:",
    description: "Add or update an easter egg",
    description_zh_cn: "新增或更新一个彩蛋",
  },
  {
    emoji: "🙈",
    code: ":see_no_evil:",
    description: "Add or update a .gitignore file",
    description_zh_cn: "新增或更新 .gitignore 文件",
  },
  {
    emoji: "📸",
    code: ":camera_flash:",
    description: "Add or update snapshots",
    description_zh_cn: "新增或更新快照",
  },
  {
    emoji: "⚗",
    code: ":alembic:",
    description: "Experiment new things",
    description_zh_cn: "试验新功能",
  },
  {
    emoji: "🔍",
    code: ":mag:",
    description: "Improve SEO",
    description_zh_cn: "改善 SEO",
  },
  {
    emoji: "☸️",
    code: ":wheel_of_dharma:",
    description: "Work about Kubernetes",
    description_zh_cn: "处理 Kubernetes 相关的工作 K8S",
  },
  {
    emoji: "🏷️",
    code: ":label:",
    description: "Add or update types (Flow, TypeScript)",
    description_zh_cn: "新增或更新类型（Flow、TypeScript）",
  },
  {
    emoji: "🌱",
    code: ":seedling:",
    description: "Add or update seed files",
    description_zh_cn: "新增或更新 SEED 文件",
  },
  {
    emoji: "🚩",
    code: ":triangular_flag_on_post:",
    description: "Add, update, or remove feature flags",
    description_zh_cn: "添加、更新或删除特性标志",
  },
  {
    emoji: "💫",
    code: ":dizzy:",
    description: "Add or update animations and transitions",
    description_zh_cn: "新增或更新动画和过场",
  },
  {
    emoji: "🥅",
    code: ":goal_net:",
    description: "Catch errors",
    description_zh_cn: "捕获异常",
  },
  {
    emoji: "🗑",
    code: ":wastebasket:",
    description: "Deprecated code that needs to be cleaned up",
    description_zh_cn: "需要清理的弃用代码",
  },
];
export default Gitmoji;
