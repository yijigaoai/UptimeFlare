// UptimeFlare 配置（第 1 轮第 8 项，2026-10-28 备妥，待部署时覆盖 fork 仓库的 uptime.config.ts）
// 来源：lyc8503/UptimeFlare 官方模板（2026-10-28 克隆核实），只改标题/链接/监控目标，通知留空（不把任何密钥写进公开仓库）。

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: '一人编辑部 · 站点状态',
  links: [
    { link: 'https://robo.dpdns.org', label: '一人编辑部', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'blog_main',
      name: '一人编辑部 · 主站',
      method: 'GET',
      target: 'https://robo.dpdns.org',
      tooltip: '主站（Cloudflare Worker 反代 dpaste 双源）',
      statusPageLink: 'https://robo.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      responseKeyword: '一人编辑部',
    },
    {
      id: 'blog_mirror_yi',
      name: '一人编辑部 · 国内镜像 yi.rf.gd',
      method: 'GET',
      target: 'https://yi.rf.gd',
      tooltip: 'InfinityFree 镜像（国内直连）',
      statusPageLink: 'https://yi.rf.gd',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'blog_mirror_sqrt',
      name: '一人编辑部 · 国内镜像 sqrt.de5.net',
      method: 'GET',
      target: 'https://sqrt.de5.net',
      tooltip: 'InfinityFree 镜像（国内直连）',
      statusPageLink: 'https://sqrt.de5.net',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'blog_placeholder_phi',
      name: '一人编辑部 · 占位 phi.rf.gd',
      method: 'GET',
      target: 'https://phi.rf.gd',
      tooltip: '占位站，监控其可达性即可',
      statusPageLink: 'https://phi.rf.gd',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'blog_source_primary',
      name: '博客主源 dpaste 5eVbp',
      method: 'GET',
      target: 'https://dpaste.org/5eVbp/raw',
      tooltip: '主站 Worker 的主源',
      statusPageLink: 'https://robo.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'blog_source_backup',
      name: '博客备源 dpaste ogYyC',
      method: 'GET',
      target: 'https://dpaste.org/ogYyC/raw',
      tooltip: '主站 Worker 的备源',
      statusPageLink: 'https://robo.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
    },
  ],
}

const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
