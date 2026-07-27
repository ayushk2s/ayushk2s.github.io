// Single source of truth for all portfolio content.
// Edit this file to update About/Skills/Projects/Research/Contact — no HTML editing required.

export const PROFILE = {
  name: 'Ayush Pandey',
  role: 'AI · Robotics · Defence-Tech Developer',
  tagline: 'Building intelligent systems at the edge of AI, robotics and quantitative research.',
  bio: 'Independent researcher and builder working across AI, robotics, embedded systems and quantitative trading. First recognized as an 18-year-old innovator in 2025 — now 19, developing autonomous hardware, publishing peer-reviewable research on leveraged trading algorithms, and shipping production apps end to end. Entrepreneur at heart — driven to launch impactful companies and build technology that expands what one person can do.',
  email: 'ayushpandey85986@gmail.com',
  stats: [
    { value: '4+', label: 'Years Building' },
    { value: '15+', label: 'Projects Shipped' },
    { value: '2', label: 'Research Papers' },
    { value: '2', label: 'Startups Built' },
  ],
};

export const SKILLS = [
  { name: 'Python', icon: 'code', level: 95 },
  { name: 'Flutter / Dart', icon: 'mobile', level: 98 },
  { name: 'Quant Trading', icon: 'trending', level: 72 },
  { name: 'TensorFlow', icon: 'chart', level: 60 },
  { name: 'C++', icon: 'cpu', level: 58 },
  { name: 'Linux', icon: 'terminal', level: 43 },
  { name: '3D Modeling', icon: 'cube', level: 32 },
  { name: 'Robotis', icon: 'robot', level: 26 },
  { name: 'Rust', icon: 'wrench', level: 25 },
  { name: 'ROS', icon: 'settings', level: 22 },
];

export const PROJECTS = [
  {
    title: 'MSR-Algorithm',
    desc: 'A Dart-based algorithmic crypto futures trading bot combining SFI trend-following and Support/Resistance zone breakout strategies across Asterdex and MEXC exchanges.',
    link: 'https://github.com/ayushk2s/My-MSR-related-stratagies',
    tags: ['Dart', 'Trading', 'Crypto'],
  },
  {
    title: 'G-Algorithm',
    desc: 'A 24/7 automated crypto futures bot that buys/sells based on RSI + SuperTrend Fibonacci signals, takes partial profits at targets, and cuts losses at -1% — deployed live on MEXC across 21 pairs.',
    link: 'https://github.com/ayushk2s/g_trading_algorithm',
    tags: ['Automation', 'Trading', 'Crypto'],
  },
  {
    title: 'FarmYara',
    desc: 'A smart agriculture platform built with Flutter, Dart & Firebase — empowering farmers with crop insights, resource optimization & integrated Google Maps support.',
    link: 'https://play.google.com/store/apps/details?id=com.global.farmyara&hl=en_IN',
    tags: ['Flutter', 'Firebase', 'AgriTech'],
  },
  {
    title: 'DCA-Leverage Algorithm Simulator',
    desc: 'A dynamic averaging & leverage optimization algorithm designed to reduce liquidation risk and improve overall position safety in volatile crypto markets. Basis for two published research papers.',
    link: 'https://github.com/ayushk2s/Best-Averaging-And-Leveraging',
    tags: ['Python', 'Quant Research'],
  },
  {
    title: 'RoDo',
    desc: 'An autonomous human-detection robot capable of real-time distance measurement — geared towards surveillance, robotics research & safety automation.',
    link: 'https://github.com/ayushk2s/RoDo',
    tags: ['Robotics', 'Computer Vision'],
  },
  {
    title: 'VryptDex',
    desc: 'A next-gen cryptocurrency exchange concept focused on ultra-low-latency order execution, institutional-grade security & high-frequency trading support.',
    link: null,
    tags: ['In Development', 'Exchange'],
  },
  {
    title: 'MoviePaglu',
    desc: 'A fast & user-friendly movie discovery platform — enabling advanced search and direct downloads across multiple genres and languages.',
    link: 'https://github.com/ayushk2s/moviepaglu',
    tags: ['Web App'],
  },
  {
    title: 'XRP Arbitrage Bot',
    desc: 'A fully automated arbitrage system for XRP, capturing real-time inefficiencies between spot-to-spot and futures-to-futures markets.',
    link: 'https://github.com/ayushk2s/spot_trade_xrp',
    tags: ['Arbitrage', 'Trading'],
  },
  {
    title: 'MEXC · Deribit · HitBTC API Suite',
    desc: 'A secure & efficient multi-exchange API toolkit providing order execution, account automation & market data access.',
    link: 'https://github.com/ayushk2s/MEXC-Deribit-HitBTC-',
    tags: ['API', 'Trading Infra'],
  },
  {
    title: 'Bollinger Bands Trading Strategy',
    desc: 'A precision-based automated trading bot leveraging Bollinger Bands for optimal long/short entry decisions with risk-managed exits.',
    link: 'https://github.com/ayushk2s/Bollinger-Band-Trading-Stratagy',
    tags: ['Python', 'Technical Analysis'],
  },
  {
    title: 'Python Trading Strategy Suite',
    desc: 'A collection of Python-based algorithmic strategies using technical indicators for high-accuracy execution & backtesting.',
    link: 'https://github.com/ayushk2s/Python-trading-strategy',
    tags: ['Python', 'Backtesting'],
  },
  {
    title: 'Wisdom Capital API + Algo Strategies',
    desc: 'Robust API utilities and semi-automated algorithmic strategies developed for the Wisdom Capital brokerage ecosystem.',
    link: 'https://github.com/ayushk2s/Wisdom-Capital-',
    tags: ['API', 'Brokerage'],
  },
];

export const RESEARCH = [
  {
    title: 'Optimal Leverage Sequencing in Leveraged Dollar Cost Averaging: Theory and Multi-Asset Evidence',
    authors: 'Ayush Pandey — Independent Researcher',
    date: 'June 28, 2026',
    venue: 'SSRN Working Paper',
    abstract: `Proves that among all leverage sequences with fixed total leverage applied to a DCA entry
schedule, the non-decreasing (increasing) sequence uniquely minimises the weighted average entry
price whenever entry prices are non-increasing — via the rearrangement inequality. Formalises a
parametric DCA framework, and empirically validates the result on 9.5 million one-minute bars across
five markets (XAUUSD, BTC, ETH, SPY, QQQ): the increasing leverage sequence achieves the highest
Sharpe ratio and fewest liquidation events in every market, with an approximate replication-based
p-value of 0.004. On QQQ it records zero liquidations over five years versus 14 for the decreasing
sequence.`,
    keywords: ['Dollar Cost Averaging', 'Leverage Allocation', 'Rearrangement Inequality', 'Liquidation Risk', 'Derivatives Trading', 'Risk Management'],
    links: [
      { label: 'Read on SSRN', href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7013138' },
      { label: 'Code & Data', href: 'https://github.com/ayushk2s/Best-Averaging-And-Leveraging' },
    ],
  },
  {
    title: 'A Dynamic DCA-Leverage Algorithm for Optimized Average Positioning and Reduced Liquidation Risk',
    authors: 'Ayush Pandey',
    date: 'SSRN Working Paper',
    venue: 'SSRN Working Paper',
    abstract: `Presents a dynamic Dollar Cost Averaging algorithm combined with an increasing leverage
allocation sequence to optimize average entry pricing and reduce liquidation risk in volatile markets.
DCA points are defined by a controlled drawdown function; combined with an increasing leverage
sequence (2x, 4x, 6x, 7x, 10x), larger positions are taken at lower prices — improving average entry
and the overall liquidation buffer. Comparative analysis shows decreasing or uniform leverage
sequences result in higher average entry prices and higher liquidation risk, establishing the
foundation later formalized and empirically validated in the follow-up paper.`,
    keywords: ['DCA', 'Leverage', 'Liquidation Risk', 'Crypto Futures', 'Risk Management'],
    links: [
      { label: 'Read on SSRN', href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5662110' },
      { label: 'Code & Data', href: 'https://github.com/ayushk2s/Best-Averaging-And-Leveraging' },
    ],
  },
];

export const SOCIALS = [
  { label: 'Email', icon: 'mail', href: 'mailto:ayushpandey85986@gmail.com' },
  { label: 'GitHub', icon: 'github', href: 'https://github.com/ayushk2s' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/in/ayushk2s' },
  { label: 'X (Twitter)', icon: 'x', href: 'https://x.com/ayushk2s' },
  { label: 'Instagram', icon: 'instagram', href: 'https://instagram.com/ayushk2s' },
  { label: 'Threads', icon: 'threads', href: 'https://threads.net/@ayushk2s' },
  { label: 'Snapchat', icon: 'snapchat', href: 'https://www.snapchat.com/@ayushk2s' },
];

export const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
];
