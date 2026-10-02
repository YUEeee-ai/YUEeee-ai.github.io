/* ============================================================
   Bilingual copy (EN / ZH)
   - This file is the single source of truth for all site text.
   - Keys are referenced from index.html via:
       data-i18n="key"          -> sets textContent
       data-i18n-html="key"     -> sets innerHTML (may contain markup)
       data-i18n-attr="alt:key" -> sets an attribute (comma-separated pairs)
   - The English values are also written inline in index.html as a
     no-JS fallback; keep them in sync if you edit text.
   ============================================================ */
window.I18N = {
    en: {
        "meta.title": "DongYue Fang · Personal Website",
        "meta.description": "Personal website of DongYue Fang — Computer Science student at the University of Nottingham, exploring game theory, multi-agent learning and opponent modeling.",

        "nav.about": "About",
        "nav.research": "Research",
        "nav.publications": "Publications",
        "nav.projects": "Projects",
        "nav.news": "News",

        "hero.hi": "Hi!",
        "hero.name": "\u00a0I\u2019m DongYue Fang",
        "hero.tagline": "An undergraduate studying <span class=\"job\">artificial intelligence &amp; computer science</span>",
        "hero.line1": "I enjoy studying algorithms, quantitative investing and open source",
        "hero.btn.contact": "Contact Me",
        "hero.btn.projects": "My Projects",
        "hero.location": "Nottingham \u00b7 UK",

        "about.slogan1": "ABOUT",
        "about.slogan2": "ME",
        "about.comment1": "Understanding opponents through repeated games",
        "about.comment2": "Answering curiosity with code and experiments",
        "about.detail1": "I am a third-year Computer Science student at the University of Nottingham (Sep 2024 \u2013 Jun 2028 expected), with strong interests in game theory, machine learning, and quantitative trading strategies and factor mining. I recently completed a research project on opponent screening in the Iterated Prisoner\u2019s Dilemma, designing a trigger\u2013probe\u2013classify decision template evaluated against all 244 strategies of Axelrod 4.14.0.",
        "about.detail2": "Outside research, I enjoy Texas Hold\u2019em poker \u2014 especially the probabilistic and game-theoretic side of decision-making under uncertainty \u2014 and follow financial markets and quantitative investing. I also enjoy the challenges of competitive programming.",
        "about.group.edu.name": "Education",
        "about.group.edu.value": "BSc Computer Science, University of Nottingham",
        "about.group.focus.name": "Research Focus",
        "about.group.focus.value": "Game theory \u00b7 Multi-agent learning \u00b7 Opponent modeling",
        "about.group.skills.name": "Tech Stack",
        "about.group.skills.value": "Python (PyTorch), C++, Java, LaTeX",
        "about.group.interests.name": "Interests",
        "about.group.interests.value": "Texas Hold\u2019em \u00b7 Quant investing \u00b7 Competitive programming",

        "research.title": "Research",
        "research.subtitle": "WHAT I WORK ON",
        "research.project.title": "Opponent Screening in the Iterated Prisoner\u2019s Dilemma",
        "research.desc1": "In repeated games, an agent must quickly identify the behaviour of an unknown opponent and adapt accordingly. In this project I designed a lightweight trigger\u2013probe\u2013classify decision template: the agent reveals the opponent\u2019s type through probes, classifies it online with statistical tests, and switches to a suitable response policy as the match unfolds.",
        "research.desc2": "Evaluated against all 244 strategies of Axelrod 4.14.0 (200 turns \u00d7 3 matches per opponent), the template reached a full-library mean score of 2.845; with sequential-test upgrades it improved to 2.913 while keeping its retaliatory strength. The work is documented in a paper (in preparation).",
        "research.stat1.value": "Trigger\u2013Probe\u2013Classify",
        "research.stat1.label": "Decision Template",
        "research.stat2.value": "244 \u00d7 200 \u00d7 3",
        "research.stat2.label": "Strategies \u00d7 Turns \u00d7 Matches",
        "research.stat3.value": "2.845 \u2192 2.913",
        "research.stat3.label": "Full-library Mean Score",
        "research.pill1": "Game Theory",
        "research.pill2": "Opponent Modeling",
        "research.pill3": "Multi-Agent",
        "research.pill4": "Deep Learning",
        "research.figcaption": "Average-payoff matrix from the full-library evaluation (project output, click to enlarge)",

        "publications.title": "Publications",
        "publications.subtitle": "SELECTED WRITING",
        "pub.badge": "Manuscript in preparation \u00b7 2026",
        "pub.desc": "Proposes a lightweight trigger\u2013probe\u2013classify decision template for online opponent screening in the Iterated Prisoner\u2019s Dilemma, with a systematic evaluation against all 244 strategies of Axelrod 4.14.0. Full text available upon request.",
        "pub.request": "Request full text \u2192",

        "projects.title": "Projects",
        "projects.subtitle": "WHAT I BUILD",
        "proj1.subtitle": "Research code and evaluation suite for opponent screening in the IPD",
        "proj1.btn": "View Project",
        "proj.ft": "More on GitHub",

        "news.title": "News",
        "news.subtitle": "RECENT UPDATES",
        "news.1.text": "Launched my personal website.",
        "news.2.text": "Won Gold in the WorldQuant BRAIN factor-mining competition.",
        "news.3.text": "Completed the opponent-screening research project; manuscript in preparation.",
        "news.4.text": "Summer internship at Founder Securities, working on industry research and market analysis.",

        "watermark": "DONGYUE FANG",

        "footer.copy": "Copyright \u00a9 2026 DongYue Fang",

        "img.avatar.alt": "Portrait illustration of DongYue Fang",
        "img.about.alt": "Illustration of DongYue Fang\u2019s research workspace",
        "img.fig.alt": "Heatmap of average payoffs from the 244-strategy evaluation",
        "img.cover1.alt": "Preview of the ipd-handagent code and evaluation interface",
        "aria.gotop": "Back to top"
    },

    zh: {
        "meta.title": "方董樾 · 个人网站",
        "meta.description": "方董樾的个人网站——诺丁汉大学计算机科学学生，探索博弈论、多智能体学习与对手建模。",

        "nav.about": "关于",
        "nav.research": "研究",
        "nav.publications": "论文",
        "nav.projects": "项目",
        "nav.news": "动态",

        "hero.hi": "嗨！",
        "hero.name": "我是方董樾",
        "hero.tagline": "一名正在学习<span class=\"job\">人工智能和计算机</span>的本科生",
        "hero.line1": "喜欢研究算法、量化投资与开源分享",
        "hero.btn.contact": "联系我",
        "hero.btn.projects": "我的项目",
        "hero.location": "英国 · 诺丁汉",

        "about.slogan1": "关于",
        "about.slogan2": "我",
        "about.comment1": "在重复博弈中读懂对手",
        "about.comment2": "用代码和实验回答好奇",
        "about.detail1": "我是诺丁汉大学计算机科学专业大三学生（2024年9月入学，预计2028年6月毕业），对博弈论、机器学习、量化交易策略与因子挖掘有浓厚兴趣。近期完成了一项关于迭代囚徒困境中对手筛选的研究项目，设计了一个\u201c触发\u2013试探\u2013分类\u201d决策模板，并在 Axelrod 4.14.0 的全部 244 个策略上完成了系统评测。",
        "about.detail2": "研究之外，我喜欢德州扑克，着迷于不确定性下决策的概率与博弈论层面；平时关注金融市场与量化投资，也享受编程竞赛带来的挑战。",
        "about.group.edu.name": "教育背景",
        "about.group.edu.value": "诺丁汉大学 计算机科学本科",
        "about.group.focus.name": "研究方向",
        "about.group.focus.value": "博弈论 · 多智能体学习 · 对手建模",
        "about.group.skills.name": "技术栈",
        "about.group.skills.value": "Python (PyTorch), C++, Java, LaTeX",
        "about.group.interests.name": "兴趣爱好",
        "about.group.interests.value": "德州扑克 · 量化投资 · 算法竞赛",

        "research.title": "研究",
        "research.subtitle": "研究方向",
        "research.project.title": "迭代囚徒困境中的对手筛选",
        "research.desc1": "在重复博弈中，智能体需要快速识别未知对手的行为模式并相应调整策略。本项目设计了一个轻量的\u201c触发\u2013试探\u2013分类\u201d决策模板：先通过试探揭示对手类型，再基于统计检验在线分类，并随着对局展开自适应切换到相应的应对策略。",
        "research.desc2": "在 Axelrod 4.14.0 全部 244 个策略上的评测（每个对手 200 回合 × 3 场）中，模板的全库平均分为 2.845；引入序贯检验升级后提升至 2.913，同时保持了对恶意策略的报复能力。相关工作已整理为论文（撰写中）。",
        "research.stat1.value": "触发–试探–分类",
        "research.stat1.label": "决策模板",
        "research.stat2.value": "244 × 200 × 3",
        "research.stat2.label": "策略 × 回合 × 对局",
        "research.stat3.value": "2.845 → 2.913",
        "research.stat3.label": "全库平均得分",
        "research.pill1": "博弈论",
        "research.pill2": "对手建模",
        "research.pill3": "多智能体",
        "research.pill4": "深度学习",
        "research.figcaption": "全库评测的平均收益矩阵（项目输出，点击可放大）",

        "publications.title": "论文",
        "publications.subtitle": "学术写作",
        "pub.badge": "论文手稿撰写中 · 2026",
        "pub.desc": "提出面向迭代囚徒困境的轻量级\u201c触发\u2013试探\u2013分类\u201d决策模板，支持在线对手筛选，并在 Axelrod 4.14.0 全部 244 个策略上完成系统评测。全文可来信索取。",
        "pub.request": "来信索取全文 →",

        "projects.title": "项目",
        "projects.subtitle": "项目作品",
        "proj1.subtitle": "迭代囚徒困境对手筛选的研究代码与全库评测套件",
        "proj1.btn": "查看项目",
        "proj.ft": "在 GitHub 上查看更多",

        "news.title": "动态",
        "news.subtitle": "最新动态",
        "news.1.text": "我的个人网站正式上线。",
        "news.2.text": "获得 WorldQuant BRAIN 因子挖掘竞赛金牌。",
        "news.3.text": "完成迭代囚徒困境对手筛选研究项目，论文手稿撰写中。",
        "news.4.text": "在方正证券完成暑期实习，参与行业研究与市场分析。",

        "watermark": "方董樾",

        "footer.copy": "Copyright © 2026 方董樾",

        "img.avatar.alt": "方董樾的插画头像",
        "img.about.alt": "方董樾的研究工作台插画",
        "img.fig.alt": "244 个策略全库评测的平均收益热力图",
        "img.cover1.alt": "ipd-handagent 代码与评测界面预览",
        "aria.gotop": "回到顶部"
    }
};
