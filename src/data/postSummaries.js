export const postSummaries = {
  'daily-ic-review-2026-06-30': {
    type: 'Daily IC',
    regime: 'Neutral / repair attempt',
    stance: 'Light book; no broad re-risk yet',
    mainAction: 'Hold current positions and wait for QQQ to confirm above 732-733 before adding risk.',
    keyHoldingAction: 'Keep LLY and GE as runners, hold XLE as hedge, and manage JPM/SMH with strict reclaim and stop levels.',
    keyRisk: 'QQQ has repaired into 720-724 but has not confirmed above 732-733.',
    pnlImpact: 'Active plus realized P&L about +4,784 before fees/slippage.',
    correctionStatus: 'Original publication',
  },
  'daily-ic-review-2026-06-17': {
    type: 'Daily IC',
    regime: 'Neutral / selective rotation',
    stance: 'Hold current book; no new risk',
    mainAction: 'Do not add fresh exposure while QQQ and event risk remain unresolved.',
    keyHoldingAction: 'Hold GE/JPM leadership and keep NVDA/SMH under tighter review.',
    keyRisk: 'FOMC and QQQ below confirmation keep broad risk blocked.',
    pnlImpact: 'Not material / no realized change',
    correctionStatus: 'Original publication',
  },
  'daily-ic-review-2026-06-18': {
    type: 'Daily IC',
    regime: 'Neutral / post-FOMC risk-off',
    stance: 'Hold current book; avoid fresh long exposure',
    mainAction: 'Wait for cleaner market confirmation before adding risk.',
    keyHoldingAction: 'Keep GE/JPM as leadership longs and XLE as the active short hedge.',
    keyRisk: 'FOMC cleared without a clean risk-on response.',
    pnlImpact: 'Not material / no realized change',
    correctionStatus: 'Original publication',
  },
  'daily-ic-review-2026-06-19': {
    type: 'Daily IC',
    regime: 'Neutral / improving but unconfirmed',
    stance: 'Protect gains; no broad risk add',
    mainAction: 'Apply take-profit discipline while waiting for QQQ confirmation.',
    keyHoldingAction: 'GE nears TP; JPM touched and rejected the TP zone.',
    keyRisk: 'QQQ improvement did not yet confirm with a clean close above risk-on levels.',
    pnlImpact: 'Not material / no realized change',
    correctionStatus: 'Original publication',
  },
  'weekly-ic-review-2026-06-21': {
    type: 'Weekly IC',
    regime: 'Neutral / selective rotation',
    stance: 'Hold current book; protect gains',
    mainAction: 'Do not add broad risk; enforce the 75% take-profit rule at original targets.',
    keyHoldingAction: 'GE/JPM/SMH remain holds, with GE and JPM on TP discipline.',
    keyRisk: 'Portfolio drift from working winners into overconfidence before QQQ confirmation.',
    pnlImpact: 'Not material / no realized change',
    correctionStatus: 'Original publication',
  },
  'daily-ic-review-2026-06-23': {
    type: 'Daily IC',
    regime: 'Neutral / failed QQQ confirmation',
    stance: 'Hold and protect gains',
    mainAction: 'Do not add broad risk after QQQ failed to confirm above 740.',
    keyHoldingAction: 'Keep TP discipline on winners and avoid chasing watchlist names.',
    keyRisk: 'QQQ back below confirmation with yields still pressuring growth.',
    pnlImpact: 'Not material / no realized change',
    correctionStatus: 'Original publication',
  },
  'daily-ic-review-2026-06-24': {
    type: 'Daily IC',
    regime: 'Neutral / hedge mismatch',
    stance: 'Keep core book, improve risk offset',
    mainAction: 'Refine hedging so portfolio protection matches the real factor risk.',
    keyHoldingAction: 'Keep GE/JPM/NVDA backbone while reviewing AI and semiconductor beta.',
    keyRisk: 'Current hedge does not fully match the portfolio’s growth/AI exposure.',
    pnlImpact: 'Not material / no realized change',
    correctionStatus: 'Original publication',
  },
  'daily-ic-review-2026-06-25': {
    type: 'Daily IC',
    regime: 'Neutral / defensive redeployment',
    stance: 'Redeploy selectively, not aggressively',
    mainAction: 'Use GE take-profit proceeds for a paired LLY long and TSLA short hedge.',
    keyHoldingAction: 'Buy LLY only at 1,120 or better; keep TSLA short conditional.',
    keyRisk: 'QQQ remains below repair and SPY is close to the 730 de-risk line.',
    pnlImpact: 'GE 75% take-profit completed; redeployment planned.',
    correctionStatus: 'Original publication',
  },
  'daily-ic-review-2026-06-26': {
    type: 'Daily IC',
    regime: 'Neutral / risk-off warning',
    stance: 'Defensive and light',
    mainAction: 'Clean up weakest risk, protect winners, and keep hedges only while valid.',
    keyHoldingAction: 'NVDA reduction plan; GE/JPM runners protected; LLY held only above risk levels.',
    keyRisk: 'QQQ below repair and VIX above no-add threshold keep broad longs blocked.',
    pnlImpact: 'Not material / no realized change',
    correctionStatus: 'Original publication',
  },
  'weekly-ic-review-2026-06-27': {
    type: 'Weekly IC',
    regime: 'Neutral / risk-off warning',
    stance: 'Defensive; low gross and low net exposure',
    mainAction: 'Stay light until QQQ repairs; do not rebuild AI beta early.',
    keyHoldingAction: 'Let LLY, GE runner, and XLE short hedge work while enforcing stops.',
    keyRisk: 'QQQ remains below 720-724 repair and 732-733 confirmation.',
    pnlImpact: 'Active plus known realized P&L about +4,260 before fees/slippage.',
    correctionStatus: 'Original publication',
  },
};

export function getPostSummary(slug) {
  return postSummaries[slug] ?? null;
}

export function getPostType(slug) {
  if (slug.startsWith('daily-ic-review')) return 'Daily IC';
  if (slug.startsWith('weekly-ic-review')) return 'Weekly IC';
  return 'Other';
}
