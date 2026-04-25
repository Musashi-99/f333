import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import coreVideo from './assets/videos/orcestra-core.mp4'
import { IntelligenceCoreVideo } from './components/IntelligenceCoreVideo'

const imgGradworld1 = new URL('./assets/figma/8ea1ae519a3a76f7436d84ae889edebdbfe82c01.png', import.meta.url).href;
const imgLine34 = new URL('./assets/figma/6e1a0149b60c2eae697b257bcf574c9f3aa7bdbf.png', import.meta.url).href;
const imgFaqIcon = new URL('./assets/figma/562000d92afdb1ea072ecd704f4a05e57f11f8d4.svg', import.meta.url).href;
const imgFaqIconActive = new URL('./assets/figma/3f7be87b1ea1b30c3b59f9dfab5fc9e79be6c251.svg', import.meta.url).href;
const imgPlatform02Icon = new URL('./assets/figma/platform-02-icon.svg', import.meta.url).href;
const imgPlatform03Icon = new URL('./assets/figma/platform-03-icon.svg', import.meta.url).href;
const imgPlatform04Icon = new URL('./assets/figma/platform-04-icon.svg', import.meta.url).href;
const imgSunset1 = new URL('./assets/figma/09970d85eeff340e1424b29e8c3fcba540843cbd.png', import.meta.url).href;
const imgSun1 = new URL('./assets/figma/6a2b0408ef32c3bfa23b90a220df1bb88d723032.png', import.meta.url).href;
const img01MerchantIntelligence1 = new URL('./assets/figma/4364a79f5a3cd52d3cb329654472eb5a0913e33d.png', import.meta.url).href;
const img02TransactionAgent1 = new URL('./assets/figma/5ea6bddb84a9a141b700e13fcd138141050f91de.png', import.meta.url).href;
const img03PaymentOptAgent1 = new URL('./assets/figma/548cb3ba1dc9a07799879a2c2120f3a1976b6d46.png', import.meta.url).href;
const img04DisputeIntelligenceAgentCopy1 = new URL('./assets/figma/fc89b99d60c6795631afc6d81dd7b656dcf044e4.png', import.meta.url).href;
const img05ComplianceAgentCopy1 = new URL('./assets/figma/f521fc196cbb6cba59896bbfde4768074b196835.png', import.meta.url).href;
const imgShine = new URL('./assets/figma/0caaf3cbd9189f3e7bcf6f373f8828a5da1795cc.svg', import.meta.url).href;
const imgVector = new URL('./assets/figma/0256d56fb92c739dec69b67c6a534d3c0287b70c.svg', import.meta.url).href;
const imgVector1 = new URL('./assets/figma/9bf3f3354b9cf11afda68aae39f043d16f8fc79c.svg', import.meta.url).href;
const imgArrowForward = new URL('./assets/figma/14bd6229ff63b23cafe5a42d1a40ede1d8d16e88.svg', import.meta.url).href;
const imgVector2 = new URL('./assets/figma/0db55007fb514d092f074422709059c10a34661e.svg', import.meta.url).href;
const imgLayer1 = new URL('./assets/figma/256b071fdfebec718d39744a62ebec54394b87ae.svg', import.meta.url).href;
const imgPlanGraphics = new URL('./assets/figma/e7fd32393b49bbe4e865b4ca09d3a585523f04e2.svg', import.meta.url).href;
const imgLine29 = new URL('./assets/figma/26ae64638a6039e63910d6110cac8fe0236b58b3.svg', import.meta.url).href;
const imgLine30 = new URL('./assets/figma/68f1fd563894a22d4dc68d78da1b2292323f8285.svg', import.meta.url).href;
const imgIcon = new URL('./assets/figma/39996800eb32397d032185734144c8ab0f8ff04b.svg', import.meta.url).href;
const imgGroup1376 = new URL('./assets/figma/c5e3858eea66581fc969ad49ef2b791170951efa.svg', import.meta.url).href;
const imgIcon1 = new URL('./assets/figma/45e8a3d5864c9ad2209082c5dbcfa893f92f93b8.svg', import.meta.url).href;
const imgIcon2 = new URL('./assets/figma/b7b2d2d18830ae647d89561d9087406a9efc96a6.svg', import.meta.url).href;
const imgIcon3 = new URL('./assets/figma/d0daa1640955cba6003345ac45a2b4770fe1a99c.svg', import.meta.url).href;
const imgGroup1426 = new URL('./assets/figma/6d9b92c2f51aebc9af76d4eaa5983569378e06ed.svg', import.meta.url).href;
const imgGlassGlowingMagicBallEnergyInside1 = new URL('./assets/figma/76e61aeffbbc4c57ff266f37ff4ce84c3eafa7af.svg', import.meta.url).href;
const imgLayer2 = new URL('./assets/figma/beb4f718d1e3d95ba476bb22a2b1c7b01677f844.svg', import.meta.url).href;
const imgGroup1427 = new URL('./assets/figma/6f12aab37aa6de6cfb38fb9a31a7e49cf1476fec.svg', import.meta.url).href;
const imgGroup1428 = new URL('./assets/figma/c7b2d8bac1763677f2881a7264923ee22d1c6ce8.svg', import.meta.url).href;
const imgShine1 = new URL('./assets/figma/00fe9e7f5269787cae7d3a0bf2a1b3de4fd1b0de.svg', import.meta.url).href;
const imgLayer3 = new URL('./assets/figma/47c82615c46cd84ff33b44341e6e38c620503e15.svg', import.meta.url).href;
const imgDivider = new URL('./assets/figma/648495a9f9556ada43acb5c59fe5a163303099b1.svg', import.meta.url).href;
const imgGroup = new URL('./assets/figma/d2f5c0c351b3883ebc3d4dc08b449c54a6427474.svg', import.meta.url).href;
const imgRiLinkedinFill = new URL('./assets/figma/90994ae62441460ec08a30185ca23cc2d03cf442.svg', import.meta.url).href;
const imgIcon4 = new URL('./assets/figma/57fd95d5391bdac9a13806a68253c927e5da95b1.svg', import.meta.url).href;
const imgIcon5 = new URL('./assets/figma/302aa9ff00c5f023b30f254f42bd4776b206c2b4.svg', import.meta.url).href;
const imgIcon6 = new URL('./assets/figma/e896c05058465bb5d2bbd5fcd2bb1d53e005a294.svg', import.meta.url).href;
const imgIcon7 = new URL('./assets/figma/1dfa01c12d92b1fbcf2c9bde6238d626e9bca53a.svg', import.meta.url).href;
const imgIcon8 = new URL('./assets/figma/5adfdd0c1e171fe62ca104e31ee552ccfd31665f.svg', import.meta.url).href;
const imgPolygon1 = new URL('./assets/figma/faf5398275bb9f72d60695263ecb10eda8471852.svg', import.meta.url).href;
const imgLine31 = new URL('./assets/figma/688037d4860dcb5763ff671a311076db0a6969c3.svg', import.meta.url).href;
const imgIcon9 = new URL('./assets/figma/b563dabf7245f658ee1df54ad1ba7b9dcd1531fa.svg', import.meta.url).href;
const imgFi2889731 = new URL('./assets/figma/2312130b6101f05d50d352c0cea29951a63b2efd.svg', import.meta.url).href;
const imgGroup1437 = new URL('./assets/figma/d978ab67a31b0ebc39b6868296d2fe79969dda72.svg', import.meta.url).href;
const imgLine42 = new URL('./assets/figma/30fd22d106fdce0fa9ae03bbe951eb1ee21fc1f7.svg', import.meta.url).href;
const imgLine43 = new URL('./assets/figma/b24104c17712ace1be8fd07d072beb87ed4d8817.svg', import.meta.url).href;

const ARTBOARD_W = 1681;
const ARTBOARD_H = 12992;

type ComplianceBadge = {
  label: string
  bg: string
  fg: string
  width: number
  uppercase?: boolean
}

type ComplianceCardData = {
  key: string
  width: number
  height: number
  title: string
  description: string
  badge: ComplianceBadge
  iconSrc: string
  iconInset: string
  iconInnerInset?: string
  extra?: React.ReactNode
}

function ComplianceCardsRow(props: { left: number; top: number }) {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null)
  const cardRefs = React.useRef<Array<HTMLDivElement | null>>([])
  const [activeIdx, setActiveIdx] = React.useState(0)
  const [visible, setVisible] = React.useState<Record<string, boolean>>({})

  const cards = React.useMemo<ComplianceCardData[]>(
    () => [
      {
        key: 'pci',
        width: 329,
        height: 345,
        title: 'PCI DSS Level 1',
        description: 'Compliant architecture across all transaction handling and data storage systems.',
        badge: { label: 'ACTIVE', bg: 'rgba(178,252,227,0.2)', fg: '#30ffb9', width: 72, uppercase: true },
        iconSrc: imgIcon4,
        iconInset: 'calc(29.86% - 0.4px) calc(68.79% + 0.38px) 49.96% calc(8.92% - 0.82px)',
        iconInnerInset: '-1.44% -1.36%',
      },
      {
        key: 'aml',
        width: 327,
        height: 345,
        title: 'Integrated AML + KYC/KYB',
        description: 'Multi provider orchestration for sanctions, identity, and ownership verification.',
        badge: { label: 'ACTIVE', bg: 'rgba(178,252,227,0.2)', fg: '#30ffb9', width: 72, uppercase: true },
        iconSrc: imgIcon5,
        iconInset: 'calc(30.72% - 0.39px) calc(66.97% + 0.34px) calc(51.01% + 0.02px) calc(8.87% - 0.82px)',
        iconInnerInset: '-1.59% -1.27%',
      },
      {
        key: 'onboarding',
        width: 329,
        height: 345,
        title: 'Merchant & Agent Onboarding',
        description: 'Under automated audit trail for full lifecycle compliance documentation.',
        badge: { label: 'ACTIVE', bg: 'rgba(178,252,227,0.2)', fg: '#30ffb9', width: 72, uppercase: true },
        iconSrc: imgIcon6,
        iconInset: 'calc(29.57% - 0.41px) calc(67.48% + 0.35px) 49.86% calc(9.42% - 0.81px)',
        iconInnerInset: '-1.41% -1.32%',
      },
      {
        key: 'soc2',
        width: 327,
        height: 345,
        title: 'SOC 2 Type II',
        description: 'Certification in progress for enterprise grade security and operational controls.',
        badge: { label: 'IN PROGRESS', bg: 'rgba(37,137,170,0.2)', fg: '#46c7ff', width: 118, uppercase: true },
        iconSrc: imgIcon7,
        iconInset: '28.99% 68.2% 49.86% 9.48%',
        iconInnerInset: '-1.37% -1.37%',
        extra: (
          <p className="complianceCardNumber" aria-hidden="true">
            2
          </p>
        ),
      },
      {
        key: 'iso',
        width: 327,
        height: 345,
        title: 'ISO 27001',
        description: 'Targeted for Q3 2026 to meet international information security management standards.',
        badge: { label: 'ROADMAP', bg: 'rgba(182,185,184,0.2)', fg: '#ffffff', width: 82, uppercase: true },
        iconSrc: imgIcon8,
        iconInset: 'calc(29.86% - 0.4px) calc(68.81% + 0.38px) calc(51.88% + 0.04px) calc(9.48% - 0.81px)',
        iconInnerInset: '-1.59% -1.41%',
      },
    ],
    [],
  )

  React.useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    let raf = 0
    const updateActive = () => {
      raf = 0
      const scroller = scrollerRef.current
      if (!scroller) return
      const center = scroller.scrollLeft + scroller.clientWidth / 2
      let bestIdx = 0
      let bestDist = Number.POSITIVE_INFINITY
      for (let i = 0; i < cards.length; i++) {
        const cardEl = cardRefs.current[i]
        if (!cardEl) continue
        const cardCenter = cardEl.offsetLeft + cardEl.clientWidth / 2
        const d = Math.abs(cardCenter - center)
        if (d < bestDist) {
          bestDist = d
          bestIdx = i
        }
      }
      setActiveIdx(bestIdx)
    }

    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(updateActive)
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    updateActive()
    return () => {
      el.removeEventListener('scroll', onScroll)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [cards.length])

  React.useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const cardsEls = cardRefs.current.filter(Boolean) as HTMLDivElement[]
    const io = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          let changed = false
          const next = { ...prev }
          for (const e of entries) {
            const key = (e.target as HTMLElement).dataset.cardKey
            if (!key) continue
            const v = e.isIntersecting
            if (next[key] !== v) {
              next[key] = v
              changed = true
            }
          }
          return changed ? next : prev
        })
      },
      { root: scroller, threshold: 0.35 },
    )

    for (const c of cardsEls) io.observe(c)
    return () => io.disconnect()
  }, [])

  React.useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    let isPointerDown = false
    let startX = 0
    let startScrollLeft = 0

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return
      isPointerDown = true
      startX = e.clientX
      startScrollLeft = el.scrollLeft
      el.setPointerCapture(e.pointerId)
      el.classList.add('isDragging')
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!isPointerDown) return
      const dx = e.clientX - startX
      el.scrollLeft = startScrollLeft - dx
    }

    const onPointerUp = (e: PointerEvent) => {
      if (!isPointerDown) return
      isPointerDown = false
      try {
        el.releasePointerCapture(e.pointerId)
      } catch {
        // ignore
      }
      el.classList.remove('isDragging')
    }

    const onWheel = (e: WheelEvent) => {
      // only redirect wheel while user is over the row
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return
      const maxScroll = el.scrollWidth - el.clientWidth
      if (maxScroll <= 0) return
      const atStart = el.scrollLeft <= 0
      const atEnd = el.scrollLeft >= maxScroll - 1
      const goingLeft = e.deltaY < 0
      const goingRight = e.deltaY > 0
      if ((atStart && goingLeft) || (atEnd && goingRight)) return
      e.preventDefault()
      el.scrollLeft += e.deltaY
    }

    el.addEventListener('pointerdown', onPointerDown)
    el.addEventListener('pointermove', onPointerMove)
    el.addEventListener('pointerup', onPointerUp)
    el.addEventListener('pointercancel', onPointerUp)
    el.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      el.removeEventListener('pointerdown', onPointerDown)
      el.removeEventListener('pointermove', onPointerMove)
      el.removeEventListener('pointerup', onPointerUp)
      el.removeEventListener('pointercancel', onPointerUp)
      el.removeEventListener('wheel', onWheel)
    }
  }, [])

  return (
    <div
      className="complianceRowWrap"
      style={{
        position: 'absolute',
        left: props.left,
        top: props.top,
        width: ARTBOARD_W - props.left,
        height: 345,
      }}
    >
      <div className="complianceRow" ref={scrollerRef}>
        <div className="complianceRowGutter" aria-hidden="true" />
        {cards.map((card, idx) => {
          const isActive = idx === activeIdx
          const isVisible = !!visible[card.key]
          return (
            <div
              key={card.key}
              className={[
                'complianceCard',
                isActive ? 'isActive' : 'isSide',
                isVisible ? 'isVisible' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              data-card-key={card.key}
              ref={(el) => {
                cardRefs.current[idx] = el
              }}
              style={{ width: card.width, height: card.height }}
            >
              <div
                className="complianceCardBadge"
                style={{ width: card.badge.width, background: card.badge.bg, color: card.badge.fg }}
              >
                {card.badge.uppercase ? card.badge.label.toUpperCase() : card.badge.label}
              </div>

              <div className="complianceCardIcon" style={{ inset: card.iconInset }}>
                <div className="complianceCardIconInner" style={{ inset: card.iconInnerInset ?? '0' }}>
                  <img alt="" className="complianceCardIconImg" src={card.iconSrc} />
                </div>
                {card.extra}
              </div>

              <div className="complianceCardContent">
                <div className="complianceCardTitle">{card.title}</div>
                <div className="complianceCardDesc">{card.description}</div>
              </div>
            </div>
          )
        })}
        <div className="complianceRowGutter" aria-hidden="true" />
      </div>
    </div>
  )
}

type ProcessStepData = {
  key: string
  number: string
  title: string
  description: string
}

function ProcessHorizontalScroll(props: { left: number; top: number }) {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null)
  const stepRefs = React.useRef<Array<HTMLDivElement | null>>([])
  const [activeIdx, setActiveIdx] = React.useState(0)
  const [visible, setVisible] = React.useState<Record<string, boolean>>({})

  const steps = React.useMemo<ProcessStepData[]>(
    () => [
      {
        key: '01',
        number: '01',
        title: 'Initial Screening',
        description: 'Transaction submitted via API with pixel transparency. Downstream insights improved by data integrity.',
      },
      {
        key: '02',
        number: '02',
        title: 'Compliance Layer',
        description: 'Tokenization and encryption via custom checkout SDK. Fast, secure, and compliant entry layer.',
      },
      {
        key: '03',
        number: '03',
        title: 'Risk Management',
        description: 'AI fraud models integrated with mitigation tools. Regulatory and card brand compliance enforced agentically.',
      },
      {
        key: '04',
        number: '04',
        title: 'Routing & Optimization',
        description: 'Configurable multi acquirer logic with smart decline salvage. Real time authorization optimization.',
      },
      {
        key: '05',
        number: '05',
        title: 'Settlement & Funding',
        description: 'Full acquirer funding and expense reconciliation. Transparent, accurate settlement ensures trust.',
      },
    ],
    [],
  )

  React.useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    let raf = 0
    const updateActive = () => {
      raf = 0
      const scroller = scrollerRef.current
      if (!scroller) return
      const center = scroller.scrollLeft + scroller.clientWidth / 2
      let bestIdx = 0
      let bestDist = Number.POSITIVE_INFINITY
      for (let i = 0; i < steps.length; i++) {
        const stepEl = stepRefs.current[i]
        if (!stepEl) continue
        const stepCenter = stepEl.offsetLeft + stepEl.clientWidth / 2
        const d = Math.abs(stepCenter - center)
        if (d < bestDist) {
          bestDist = d
          bestIdx = i
        }
      }
      setActiveIdx(bestIdx)
    }

    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(updateActive)
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    updateActive()
    return () => {
      el.removeEventListener('scroll', onScroll)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [steps.length])

  React.useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const stepEls = stepRefs.current.filter(Boolean) as HTMLDivElement[]
    const io = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          let changed = false
          const next = { ...prev }
          for (const e of entries) {
            const key = (e.target as HTMLElement).dataset.stepKey
            if (!key) continue
            const v = e.isIntersecting
            if (next[key] !== v) {
              next[key] = v
              changed = true
            }
          }
          return changed ? next : prev
        })
      },
      { root: scroller, threshold: 0.35 },
    )

    for (const s of stepEls) io.observe(s)
    return () => io.disconnect()
  }, [])

  React.useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    let isPointerDown = false
    let startX = 0
    let startScrollLeft = 0

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return
      isPointerDown = true
      startX = e.clientX
      startScrollLeft = el.scrollLeft
      el.setPointerCapture(e.pointerId)
      el.classList.add('isDragging')
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!isPointerDown) return
      const dx = e.clientX - startX
      el.scrollLeft = startScrollLeft - dx
    }

    const onPointerUp = (e: PointerEvent) => {
      if (!isPointerDown) return
      isPointerDown = false
      try {
        el.releasePointerCapture(e.pointerId)
      } catch {
        // ignore
      }
      el.classList.remove('isDragging')
    }

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return
      const maxScroll = el.scrollWidth - el.clientWidth
      if (maxScroll <= 0) return
      const atStart = el.scrollLeft <= 0
      const atEnd = el.scrollLeft >= maxScroll - 1
      const goingLeft = e.deltaY < 0
      const goingRight = e.deltaY > 0
      if ((atStart && goingLeft) || (atEnd && goingRight)) return
      e.preventDefault()
      el.scrollLeft += e.deltaY
    }

    el.addEventListener('pointerdown', onPointerDown)
    el.addEventListener('pointermove', onPointerMove)
    el.addEventListener('pointerup', onPointerUp)
    el.addEventListener('pointercancel', onPointerUp)
    el.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      el.removeEventListener('pointerdown', onPointerDown)
      el.removeEventListener('pointermove', onPointerMove)
      el.removeEventListener('pointerup', onPointerUp)
      el.removeEventListener('pointercancel', onPointerUp)
      el.removeEventListener('wheel', onWheel)
    }
  }, [])

  return (
    <div
      className="processRowWrap"
      style={{
        position: 'absolute',
        left: props.left,
        top: props.top,
        width: ARTBOARD_W - props.left,
        height: 260,
      }}
    >
      <div className="processRow" ref={scrollerRef}>
        <div className="processRowGutter" aria-hidden="true" />
        {steps.map((s, idx) => {
          const isActive = idx === activeIdx
          const isVisible = !!visible[s.key]
          const showArrow = idx !== steps.length - 1

          return (
            <div key={s.key} className="processStepWrap">
              <div
                className={[
                  'processStep',
                  isActive ? 'isActive' : 'isSide',
                  isVisible ? 'isVisible' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                data-step-key={s.key}
                ref={(el) => {
                  stepRefs.current[idx] = el
                }}
              >
                <div className="processDigit" aria-hidden="true" data-number={s.number}>
                  <span className="processDigitBlur">{s.number}</span>
                  <span className="processDigitStroke">{s.number}</span>
                  <span className="processDigitHighlight">{s.number}</span>
                </div>

                <div className="processInfo">
                  <p className="processTitle">{s.title}</p>
                  <p className="processDesc">{s.description}</p>
                </div>
              </div>
              {showArrow ? (
                <div className="processArrow" aria-hidden="true">
                  <img alt="" className="processArrowImg" src={imgPolygon1} />
                </div>
              ) : null}
            </div>
          )
        })}
        <div className="processRowGutter" aria-hidden="true" />
      </div>
    </div>
  )
}

export default function OrcestraLanding() {
  const [scale, setScale] = React.useState(1);
  const [platformActive, setPlatformActive] = React.useState<'01' | '02' | '03' | '04'>('01');
  const [serveTab, setServeTab] = React.useState<'merchants' | 'isvs' | 'psps' | 'sponsorBanks'>('isvs');

  const serveTabs = React.useMemo(() => ([
    {
      id: 'merchants' as const,
      label: 'Merchants',
      number: '01',
      subtitle: 'Margin Protection + Approval Lift',
      bullets: [
        'Real time approval optimization',
        'Smarter routing + retries',
        'Lower false positives on fraud',
        'Cleaner dispute outcomes',
        'Transparent processor performance',
      ],
      footer: 'Higher approvals. Lower cost-to-serve.',
    },
    {
      id: 'isvs' as const,
      label: 'ISVs / Platforms',
      number: '02',
      subtitle: 'Portfolio Control + Revenue Expansion',
      bullets: [
        'Real time portfolio intelligence',
        'Faster, standardized onboarding',
        'Structured compliance oversight',
        'Diversified revenue streams',
        'White label institutional tooling',
      ],
      footer: 'Fewer surprises. Higher lifetime value.',
    },
    {
      id: 'psps' as const,
      label: 'PSPs',
      number: '03',
      subtitle: 'Routing Intelligence + Risk Alignment',
      bullets: [
        'Cleaner merchant intake signals',
        'Fraud + compliance feedback loops',
        'Decline recovery optimization',
        'Cross-border routing intelligence',
        'Dispute prevention signals',
      ],
      footer: 'Better outcomes. Fewer escalations.',
    },
    {
      id: 'sponsorBanks' as const,
      label: 'Sponsor Banks',
      number: '04',
      subtitle: 'Compliance Oversight + Portfolio Safety',
      bullets: [
        'Continuous compliance monitoring',
        'Risk scoring across portfolios',
        'Early warning anomaly detection',
        'Policy enforcement with audit trails',
        'Faster issue resolution workflows',
      ],
      footer: 'Lower exposure. Higher confidence.',
    },
  ]), []);

  const serveActive = React.useMemo(() => serveTabs.find(t => t.id === serveTab)!, [serveTabs, serveTab]);
  const serveTabIndex = React.useMemo(() => Math.max(0, serveTabs.findIndex(t => t.id === serveTab)), [serveTabs, serveTab]);

  React.useEffect(() => {
    const update = () => {
      const vw = window.innerWidth || ARTBOARD_W;
      // keep a little gutter so we never trigger horizontal scrollbars
      const gutter = vw < 640 ? 16 : 24;
      const next = Math.min(1, Math.max(0.1, (vw - gutter) / ARTBOARD_W));
      setScale(next);
    };

    update();
    window.addEventListener('resize', update, { passive: true });
    return () => window.removeEventListener('resize', update);
  }, []);

  const servePanelVariants = React.useMemo(() => ({
    initial: { opacity: 0, y: 14, filter: 'blur(8px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, y: -14, filter: 'blur(8px)' },
  }), []);

  return (
    <div className="bg-black min-h-screen w-full overflow-x-hidden">
      <div
        className="mx-auto overflow-hidden"
        style={{
          width: ARTBOARD_W * scale,
          height: ARTBOARD_H * scale,
        }}
      >
        <div
          style={{
            width: ARTBOARD_W,
            height: ARTBOARD_H,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          <div className="bg-black relative size-full" data-node-id="13246:1546" data-name="Orcestra/26 Landing">
      <div className="absolute flex h-[727px] items-center justify-center left-0 top-[-3px] w-[1681px]">
        <div className="flex-none rotate-180">
          <div className="h-[727px] overflow-clip relative w-[1681px]" data-node-id="13246:1548" data-name="Footer">
            <div className="-translate-x-1/2 absolute flex h-[747.692px] items-center justify-center left-[calc(50%+1px)] top-[63.31px] w-[1994.188px]">
              <div className="-scale-y-100 flex-none">
                <div className="h-[747.692px] relative w-[1994.188px]" data-node-id="13246:1549" data-name="shine">
                  <div className="absolute inset-[-25.9%_-15.19%_-40.52%_-15.19%]">
                    <img alt="" className="block max-w-none size-full" src={imgShine} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[393px] left-0 top-[594px] w-[1681px]" data-node-id="13246:1763" data-name="Gradworld 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGradworld1} />
      </div>
      <div className="absolute inset-[61.24%_49.69%_36.78%_35.95%]" data-node-id="13252:25719" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
      </div>
      <div className="absolute inset-[61.24%_49.69%_36.78%_35.95%]" data-node-id="13252:25720" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
      </div>
      <div className="-translate-x-1/2 absolute backdrop-blur-[2.5px] bg-[rgba(28,27,36,0.15)] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex gap-[12px] items-center left-[calc(50%+1px)] pl-[16px] pr-[12px] py-[8px] rounded-[69px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)] top-[198px]" data-node-id="13246:1575" data-name="Announcement container">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="13246:1576" data-name="Announcement text container">
          <div className="relative shrink-0 size-[24px]" data-node-id="13246:1577" data-name="Announcement icon container">
            <div className="absolute bg-black border-[#b2fce3] border-[0.75px] border-solid content-stretch flex items-start left-0 p-[4.5px] rounded-[6px] shadow-[0px_1.5px_2.25px_0px_rgba(0,0,0,0.05)] top-0" data-node-id="13246:1578" data-name="Announcement icon container">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start shrink-0" data-node-id="13246:1579" data-name="translate" />
            </div>
            <div className="absolute blur-[5.625px] border-[#b2fce3] border-[0.75px] border-solid left-0 rounded-[6px] size-[24px] top-0" data-node-id="13246:1581" data-name="Announcement icon background" />
            <div className="absolute blur-[5.625px] border-[0.75px] border-[var(--color,#b2fce3)] border-solid h-[28px] left-[0.5px] rounded-[6px] top-[-4px] w-[24px]" data-node-id="13246:1582" data-name="Announcement icon background" />
            <div className="absolute bottom-[24.99%] left-[18.75%] right-[18.75%] top-1/4" data-node-id="13246:1583" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
            </div>
          </div>
          <p className="capitalize font-['Aeonik:Regular',sans-serif] leading-[1.5] not-italic opacity-60 relative shrink-0 text-[#eaedfa] text-[14px] tracking-[-0.14px] whitespace-nowrap" data-node-id="13246:1584">
            Agentic Commerce Intelligence Infrastructure
          </p>
        </div>
        <div className="bg-[#d9d9d9] rounded-[99px] shrink-0 size-[4px]" data-node-id="13246:1585" data-name="Announcement separator" />
        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="13246:1586" data-name="Early access container">
          <p className="capitalize font-['Aeonik:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#eaedfa] text-[14px] tracking-[-0.14px] whitespace-nowrap" data-node-id="13246:1587">
            get early access
          </p>
          <div className="relative shrink-0 size-[20px]" data-node-id="13246:1588" data-name="arrow_forward">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForward} />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-[calc(8.33%+146px)] not-italic text-center top-[254px] w-[1111px]" data-node-id="13246:1591" data-name="Header text container">
        <p className="font-['Aeonik:Medium',sans-serif] leading-[1.1] relative shrink-0 text-[72px] text-white tracking-[-0.72px] w-[1013px]" data-node-id="13246:1592">
          The unified intelligence layer for payments, risk
          <br aria-hidden="true" />
          and revenue optimization
        </p>
        <p className="font-['Aeonik:Regular',sans-serif] leading-[1.6] relative shrink-0 text-[18px] text-[color:var(--borders-dark-backgrounds,white)] tracking-[0.18px] w-[717px]" data-node-id="13246:1593">
          Orcestra replaces fragmented payment infrastructure with a continuously learning intelligence system that unifies underwriting, fraud, routing, and dispute management, optimizing every transaction for approval, compliance, and revenue.
        </p>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex gap-[16px] items-start left-[calc(50%+1px)] top-[642px]" data-node-id="13246:1594" data-name="Header Buttons Container">
        <div className="border border-solid border-white content-stretch flex gap-[var(--spacing-none,0px)] h-[48px] items-center justify-center overflow-clip px-[var(--spacing-2lg,14px)] py-[var(--spacing-lg,12px)] relative rounded-[var(--radius-5xl,24px)] shrink-0 w-[157px]" data-node-id="13246:1595" data-name="Buttons">
          <div className="content-stretch flex items-center justify-center px-[var(--spacing-md,8px)] relative shrink-0" data-node-id="I13246:1595;2430:1462" data-name="wrap text">
            <p className="font-['Aeonik:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="I13246:1595;2430:1463">
              See How it Works
            </p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[var(--spacing-none,0px)] h-[48px] items-center justify-center overflow-clip px-[var(--spacing-2lg,14px)] py-[var(--spacing-lg,12px)] relative rounded-[var(--radius-5xl,24px)] shrink-0" data-node-id="13246:1596" data-name="Buttons">
          <div className="content-stretch flex items-center justify-center px-[var(--spacing-md,8px)] relative shrink-0" data-node-id="I13246:1596;2430:1382" data-name="wrap text">
            <p className="font-['Aeonik:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap" data-node-id="I13246:1596;2430:1383">
              Request a Demo
            </p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I13246:1596;2430:2803" data-name="Icon">
            <div className="absolute inset-[18.75%_12.5%]" data-node-id="I13246:1596;2430:2803;2308:6878" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[calc(16.67%+108px)] top-[24px]" data-node-id="13246:1597">
        <div className="-translate-x-1/2 absolute bg-[rgba(25,28,28,0.5)] border border-[rgba(255,255,255,0.08)] border-solid h-[66px] left-[calc(50%+1px)] rounded-[100px] top-[24px] w-[906px]" data-node-id="13246:1598" data-name="Navigation Container">
          <div className="-translate-x-1/2 absolute h-[42px] left-1/2 top-[11px] w-[462px]" data-node-id="13246:1599" data-name="Link Container">
            <div className="absolute h-[42px] left-0 top-0 w-[92px]" data-node-id="13246:1600" data-name="Nav Link">
              <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[1.6] left-[16px] not-italic text-[#fafafa] text-[16px] top-[8px] whitespace-nowrap" data-node-id="13246:1601">
                Problem
              </p>
            </div>
            <div className="absolute h-[42px] left-[88px] top-0 w-[91px]" data-node-id="13246:1602" data-name="Nav Link">
              <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[1.6] left-[16px] not-italic text-[#fafafa] text-[16px] top-[8px] whitespace-nowrap" data-node-id="13246:1603">
                Solution
              </p>
            </div>
            <div className="absolute h-[42px] left-[175px] top-0 w-[93px]" data-node-id="13246:1604" data-name="Nav Link">
              <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[1.6] left-[16px] not-italic text-[#fafafa] text-[16px] top-[8px] whitespace-nowrap" data-node-id="13246:1605">
                Platform
              </p>
            </div>
            <div className="absolute h-[42px] left-[264px] top-0 w-[117px]" data-node-id="13246:1606" data-name="Nav Link">
              <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[1.6] left-[16px] not-italic text-[#fafafa] text-[16px] top-[8px] whitespace-nowrap" data-node-id="13246:1607">
                Eco System
              </p>
            </div>
            <div className="absolute h-[42px] left-[377px] top-0 w-[69px]" data-node-id="13246:1608" data-name="Nav Link">
              <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[1.6] left-[16px] not-italic text-[#fafafa] text-[16px] top-[8px] whitespace-nowrap" data-node-id="13246:1609">
                Trust
              </p>
            </div>
          </div>
          <div className="absolute border border-[#e4e4e7] border-solid content-stretch flex gap-[8px] items-center left-[739px] px-[15px] py-[8px] rounded-[52px] top-[11px]" data-node-id="13246:1610" data-name="Button">
            <p className="font-['Aeonik:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#eaedfa] text-[16px] text-center whitespace-nowrap" data-node-id="13246:1612">
              Request a Demo
            </p>
          </div>
        </div>
        <div className="absolute h-[23px] left-[calc(16.67%+132px)] top-[44px] w-[130px]" data-node-id="13246:1614" data-name="Layer_1">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer1} />
        </div>
      </div>
      <div className="absolute contents left-0 top-[5477px]" data-node-id="13284:621">
        <div className="absolute left-0 pointer-events-none top-[6074px] w-full" style={{ height: '819.251px' }} data-node-id="13274:2880">
          <div className="absolute inset-0" data-node-id="13271:2879">
            <div className="contents relative size-full">
              <div className="absolute flex h-[819.251px] items-center justify-center left-[47px] top-0 w-[1209.928px]">
                <div className="flex-none rotate-30">
                  <div className="h-[209.056px] relative w-[1276.406px]" data-node-id="13271:2871" data-name="Line 34">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-full left-[0.1%] max-w-none top-0 w-[100.03%]" src={imgLine34} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex h-[819.251px] items-center justify-center left-[calc(16.67%+143.68px)] top-0 w-[1209.928px]">
                <div className="-scale-y-100 flex-none rotate-150">
                  <div className="h-[209.056px] relative w-[1276.406px]" data-node-id="13271:2873" data-name="Line 35">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-full left-[0.1%] max-w-none top-0 w-[100.03%]" src={imgLine34} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex h-[507.779px] items-center justify-center left-[calc(16.67%+68.61px)] top-[527px] w-[749.925px]">
                <div className="-rotate-30 -scale-y-100 flex-none">
                  <div className="h-[129.575px] relative w-[791.128px]" data-node-id="13271:2875" data-name="Line 36">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-full left-[0.1%] max-w-none top-0 w-[100.03%]" src={imgLine34} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex h-[507.779px] items-center justify-center left-[calc(25%+162.08px)] top-[527px] w-[749.925px]">
                <div className="-rotate-150 flex-none">
                  <div className="h-[129.575px] relative w-[791.128px]" data-node-id="13271:2876" data-name="Line 37">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-full left-[0.1%] max-w-none top-0 w-[100.03%]" src={imgLine34} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="absolute font-['Aeonik:Medium',sans-serif] leading-[1.1] left-[141px] not-italic text-[50px] text-white top-[5535px] w-[775px]" data-node-id="13246:1687">
          Orchestrated agents powering the full commerce lifecycle
        </p>
        <p className="absolute font-['Aeonik:Medium',sans-serif] h-[53px] leading-[60px] left-[calc(8.33%+1px)] not-italic text-[13px] text-[color:var(--color,#b2fce3)] top-[calc(50%-1019px)] tracking-[1.95px] uppercase w-[220px]" data-node-id="13246:1688">
          The Orcestra Platform
        </p>

        {(() => {
          const rows = [
            {
              id: '01' as const,
              title: 'Underwriting & Onboarding Orchestration',
              layer: 'Merchant Intelligence Layer',
              desc: 'Orcestra unifies and automates the full merchant onboarding and approval workflow across multiple data sources and compliance systems.',
              capabilities: [
                'KYC/KYB verification',
                'Beneficial ownership validation',
                'Sanctions & AML screening',
                'MATCH & negative file checks',
                'Website compliance scanning',
                'MCC & vertical risk classification',
                'Bank account verification',
                'Corporate document analysis',
                'Risk based approval scoring',
              ],
              outcomes: [
                'Faster onboarding with higher conversion',
                'Reduced early life fraud',
                'Stronger compliance posture (VAMP/VFMP/AML)',
                'Portfolio quality improves at the point of entry',
                'Institutional grade underwriting without institutional headcount',
              ],
              iconSrc: imgIcon,
              closedIconSrc: imgFaqIcon,
              closedIconClassName: '',
              // expanded heights are the Figma card height, used for premium morph behavior
              expandedH: 553,
              capDividerH: 288,
              outDividerH: 255,
              outcomesWrap: 417,
              descW: 701,
            },
            {
              id: '02' as const,
              title: 'Risk & Compliance Orchestration',
              layer: 'Transaction Intelligence Layer',
              desc: 'Orcestra evaluates every transaction in real time using layered behavioral, device, and financial risk signals.',
              capabilities: [
                'Device fingerprinting & identity linking',
                'IP reputation & geolocation validation',
                'Velocity & behavioral pattern detection',
                'BIN intelligence & card metadata analysis',
                'Friendly fraud modeling',
                'AI powered risk scoring',
                'Adaptive rule engine',
                'Dynamic risk based routing',
              ],
              outcomes: [
                'Reduced fraud & chargeback ratios',
                'Higher approval rates with smarter risk segmentation',
                'Dynamic routing away from risk concentration',
                'Fewer false positives',
                'Portfolio level fraud containment',
              ],
              iconSrc: imgPlatform02Icon,
              closedIconSrc: imgPlatform02Icon,
              closedIconClassName: 'rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden',
              expandedH: 553,
              capDividerH: 255,
              outDividerH: 223,
              outcomesWrap: 410,
              descW: 701,
            },
            {
              id: '03' as const,
              title: 'Payment & Vaulting Orchestration',
              layer: 'Compliance & Partner Optimization Layer',
              desc: 'Orcestra intelligently routes transactions across multiple processors and acquirers to maximize authorization rates and partner alignment.',
              capabilities: [
                'Multi PSP integration',
                'Smart cascading authorization',
                'Intelligent retry sequencing',
                'Decline recovery optimization',
                'Cross border routing',
                'Product & risk alignment with PSPs',
                'Token vault & lifecycle management',
                'Subscription & recurring billing logic',
                'Alternative payment method orchestration',
              ],
              outcomes: [
                '5 to 15% approval rate lift (critical revenue delta)',
                'Decline recovery automation',
                'Improved cross border performance',
                'Reduced dependency on single acquirer',
                'Real time visibility into processor performance',
              ],
              iconSrc: imgPlatform03Icon,
              closedIconSrc: imgPlatform03Icon,
              closedIconClassName: 'rounded-full bg-[rgba(255,255,255,0.02)] overflow-hidden',
              expandedH: 553,
              capDividerH: 287,
              outDividerH: 223,
              outcomesWrap: 386,
              descW: 701,
            },
            {
              id: '04' as const,
              title: 'Dispute & Fraud Orchestration',
              layer: 'Compliance Defense Layer',
              desc: 'Orcestra automates the entire dispute lifecycle from ingestion and mitigation to representment and recovery.',
              capabilities: [
                'Verifi RDR automation',
                'Ethoca alert ingestion',
                'Early warning monitoring',
                'CE 3.0 compelling evidence assembly',
                'Representment automation',
                'Refund automation rules',
                'Dispute & VAMP analytics dashboard',
                'Threshold breach monitoring',
              ],
              outcomes: [
                'Lower chargeback ratios',
                'Higher win rates on representment',
                'Reduced network monitoring program risk',
                'Early intervention before thresholds are breached',
                'Full visibility across all MIDs & processors',
              ],
              iconSrc: imgPlatform04Icon,
              closedIconSrc: imgPlatform04Icon,
              closedIconClassName: 'rounded-[14px] bg-[rgba(255,255,255,0.02)] overflow-hidden',
              expandedH: 553,
              capDividerH: 255,
              outDividerH: 191,
              outcomesWrap: 446,
              descW: 558,
            },
          ] as const;

          const startTop = 5713;
          const left = 141;
          const width = 1399;
          const gap = 16;
          const collapsedH = 96;
          const activeIndex = Math.max(0, rows.findIndex((r) => r.id === platformActive));
          const expandedH = rows[activeIndex]?.expandedH ?? 553;
          const growBy = expandedH - collapsedH;
          const transition = { duration: 0.58, ease: 'easeInOut' as const };

          const listItemVariants = {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
          } as const;

          return (
            <>
              {rows.map((r, i) => {
                const isActive = r.id === platformActive;
                const top =
                  startTop +
                  i * (collapsedH + gap) +
                  (i > activeIndex ? growBy : 0);

                return (
                  <motion.button
                    key={r.id}
                    type="button"
                    onClick={() => setPlatformActive(r.id)}
                    className="absolute text-left"
                    style={{ left, width }}
                    animate={{ top }}
                    transition={transition}
                    initial={false}
                  >
                    <motion.div
                      className="relative overflow-hidden border border-[rgba(255,255,255,0.1)]"
                      layout
                      initial={false}
                      animate={{
                        height: isActive ? r.expandedH : collapsedH,
                        borderRadius: isActive ? 16 : 16,
                        backgroundColor: isActive ? 'rgba(0,12,15,1)' : 'rgba(0,12,15,0.2)',
                        boxShadow: isActive
                          ? '0px 0px 0px rgba(0,0,0,0), 0px 0px 64px rgba(178,252,227,0.12)'
                          : '0px 0px 0px rgba(0,0,0,0), 0px 0px 28px rgba(178,252,227,0.06)',
                      }}
                      transition={transition}
                    >
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={transition}
                      >
                        <div className="absolute h-[425.429px] left-[452.65px] top-[-114.21px] w-[1210.52px]">
                          <div className="absolute inset-[-144.93%_-50.93%]">
                            <img alt="" className="block max-w-none size-full" src={imgPlanGraphics} />
                          </div>
                        </div>
                      </motion.div>

                      <div className="absolute font-['Aeonik:Regular',sans-serif] h-[29px] left-[23px] not-italic top-[32.5px] w-[1351px]">
                        <p className="absolute leading-[0] left-0 text-[24px] top-0 whitespace-pre" style={{ color: isActive ? '#eaedfa' : '#9997a0' }}>
                          <span className="leading-[1.2]">{r.id}</span>
                          <span className="leading-[1.2]">{`  ➔  `}</span>
                          <span className="leading-[1.2]">{r.title}</span>
                        </p>
                        <p className="absolute leading-[1.2] right-[77px] text-[18px] text-right top-[3.5px] tracking-[1.08px] uppercase whitespace-nowrap" style={{ color: isActive ? '#eaedfa' : '#3c86a0' }}>
                          {r.layer}
                        </p>
                      </div>

                      <AnimatePresence mode="wait" initial={false}>
                        {isActive ? (
                          <motion.div
                            key={`${r.id}-icon-open`}
                            className="absolute bg-[rgba(255,255,255,0.13)] overflow-hidden rounded-[71px] size-[48px] right-[25px] top-[24px]"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{
                              opacity: 1,
                              scale: 1.02,
                              boxShadow: '0px 0px 24px rgba(178,252,227,0.18)',
                            }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={transition}
                          >
                            <div className="absolute left-[12px] top-[12px] size-[24px]">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFaqIconActive} />
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key={`${r.id}-icon-closed`}
                            className={`absolute right-[25px] top-[24px] size-[48px] ${r.closedIconClassName ?? ''}`}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                              boxShadow: '0px 0px 12px rgba(178,252,227,0.08)',
                            }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={transition}
                          >
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={r.closedIconSrc} />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <AnimatePresence mode="wait" initial={false}>
                        {isActive ? (
                          <motion.div
                            key={`${r.id}-content`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={transition}
                          >
                            <p
                              className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.49] left-[25px] not-italic text-[#b7b7b7] text-[19px] top-[77px]"
                              style={{ width: r.descW }}
                            >
                              {r.desc}
                            </p>

                            <p className="absolute font-['Aeonik:Bold',sans-serif] leading-none left-[23px] not-italic text-[#c8c8c8] text-[20px] top-[176px] tracking-[1.6px] uppercase w-[204px]">
                              Capabilities
                            </p>
                            <p className="absolute font-['Aeonik:Bold',sans-serif] leading-none left-[464px] not-italic text-[#c8c8c8] text-[20px] top-[176px] tracking-[1.6px] uppercase w-[204px]">
                              Outcomes
                            </p>

                            <div className="absolute flex items-center justify-center left-[25px] top-[217px] w-0" style={{ height: r.capDividerH, "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
                              <div className="flex-none rotate-90">
                                <div className="h-0 relative" style={{ width: r.capDividerH }}>
                                  <div className="absolute inset-[-1px_0_0_0]">
                                    <img alt="" className="block max-w-none size-full" src={imgLine29} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute flex items-center justify-center left-[466px] top-[217px] w-0" style={{ height: r.outDividerH, "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
                              <div className="flex-none rotate-90">
                                <div className="h-0 relative" style={{ width: r.outDividerH }}>
                                  <div className="absolute inset-[-1px_0_0_0]">
                                    <img alt="" className="block max-w-none size-full" src={imgLine30} />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <motion.ul
                              className="absolute block font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[37px] list-disc not-italic text-[#c8c8c8] text-[18px] top-[216px] w-[416px]"
                              initial="initial"
                              animate="animate"
                              variants={{ animate: { transition: { staggerChildren: 0.03, delayChildren: 0.08 } } }}
                            >
                              {r.capabilities.map((c) => (
                                <motion.li key={c} className="mb-0 ms-[27px] last:mb-0" variants={listItemVariants}>
                                  <span className="leading-[1.78]">{c}</span>
                                </motion.li>
                              ))}
                            </motion.ul>

                            <motion.ul
                              className="absolute block font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[475px] list-disc not-italic text-[#c8c8c8] text-[18px] top-[216px]"
                              style={{ width: r.outcomesWrap }}
                              initial="initial"
                              animate="animate"
                              variants={{ animate: { transition: { staggerChildren: 0.03, delayChildren: 0.1 } } }}
                            >
                              {r.outcomes.map((o) => (
                                <motion.li key={o} className="mb-0 ms-[27px] last:mb-0 whitespace-pre-wrap" variants={listItemVariants}>
                                  <span className="leading-[1.78]">{o}</span>
                                </motion.li>
                              ))}
                            </motion.ul>

                            <motion.div
                              className="absolute pointer-events-none"
                              initial={false}
                              animate={{ opacity: 1, y: 0 }}
                              transition={transition}
                              style={{ inset: 'calc(29.66% - 0.41px) calc(3.79% - 0.92px) calc(-0.72% - 1.01px) calc(67.83% + 0.36px)' }}
                            >
                              <div className="absolute inset-[-0.25%]">
                                <img alt="" className="block max-w-none size-full" src={r.iconSrc} />
                              </div>
                            </motion.div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </motion.div>
                  </motion.button>
                );
              })}
            </>
          );
        })()}
      </div>
      <div className="absolute contents left-[202px] top-[4850px]" data-node-id="13284:620">
        <div className="absolute h-[210px] left-[202px] top-[4883px] w-[1278px]" data-node-id="13284:618">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full left-[-0.02%] max-w-none top-0 w-[100.04%]" src={imgLine34} />
          </div>
        </div>
        <div className="absolute contents left-[calc(16.67%+115px)] not-italic text-center top-[4850px]" data-node-id="13246:1690">
          <p className="-translate-x-1/2 absolute font-['Aeonik:Medium',sans-serif] leading-[1.1] left-[calc(25%+418.5px)] text-[30px] text-white top-[4850px] w-[685px] whitespace-pre-wrap" data-node-id="13246:1691">
            {`Approval rate lift across `}
            <br aria-hidden="true" />
            the transaction lifecycle
          </p>
          <p className="-translate-x-1/2 absolute font-['Aeonik:Regular',sans-serif] leading-[1.6] left-[calc(50%-1.5px)] text-[#9997a0] text-[18px] top-[5264px] tracking-[0.36px] w-[543px]" data-node-id="13246:1692">
            The measurable impact of unified intelligence on net realized revenue, versus fragmented legacy payment stacks.
          </p>
          <p className="-translate-x-1/2 absolute font-['Aeonik:Medium',sans-serif] h-[53px] leading-[60px] left-[calc(50%-1px)] text-[18px] text-[color:var(--color,#b2fce3)] top-[calc(50%-1290px)] tracking-[2.7px] uppercase w-[618px]" data-node-id="13246:1693">
            Critical revenue delta
          </p>
          <p className="-translate-x-1/2 absolute bg-clip-text font-['Aeonik:Medium',sans-serif] leading-[248px] left-[calc(50%-2px)] text-[240px] text-[transparent] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[4947px] tracking-[-4.8px] whitespace-nowrap" data-node-id="13246:1694" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 886 248\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(1.5292e-14 32.95 -74.414 0.0000022175 443 0.0000064386)\\'><stop stop-color=\\'rgba(178,252,227,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(136,218,210,1)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(94,184,194,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(52,149,177,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(31,132,168,1)\\' offset=\\'0.875\\'/><stop stop-color=\\'rgba(10,115,160,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}>
            5 to 15%
          </p>
        </div>
      </div>
      <div className="absolute contents left-px top-[987px]" data-node-id="13276:2901">
        <div className="absolute h-[1106px] left-px top-[987px] w-[1680px]" data-node-id="13246:1547" data-name="Sunset 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[60.73%] left-[-0.48%] max-w-none top-[19.84%] w-[100.95%]" src={imgSunset1} />
          </div>
        </div>
        <div className="absolute contents left-[140px] top-[1008px]" data-node-id="13246:1734">
          <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[125px] items-center left-[calc(50%+1.5px)] top-[1068px] w-[1111px]" data-node-id="13246:1735" data-name="Announcement Section">
            <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-center w-full" data-node-id="13246:1736" data-name="Header text container">
              <p className="font-['Aeonik:Medium',sans-serif] leading-[1.1] relative shrink-0 text-[50px] text-white w-[997px]" data-node-id="13246:1737">
                Fragmented systems sacrifice revenue, compliance and performance
              </p>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[1.6] relative shrink-0 text-[#9997a0] text-[18px] tracking-[0.36px] w-[747px]" data-node-id="13246:1738">
                Legacy payment stacks operate as disconnected systems. Fraud, compliance, routing, and disputes all run independently. This creates blind spots, inefficient decisioning, and unnecessary revenue loss across the entire transaction lifecycle.
              </p>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute contents left-[calc(50%+1.5px)] top-[1374px]" data-node-id="13246:1739">
            <div className="-translate-x-1/2 absolute font-['Aeonik:Medium',sans-serif] leading-[0] left-[calc(50%+1px)] not-italic text-[17px] text-center text-white top-[1851px] tracking-[4.25px] uppercase whitespace-nowrap" data-node-id="13246:1740">
              <p className="leading-[28px] mb-0 whitespace-pre">{`broken compliance, low authorization rates, `}</p>
              <p className="leading-[28px] whitespace-pre">and fractured data intelligence</p>
            </div>
            <div className="absolute h-[117px] left-[calc(8.33%+164px)] top-[1705px] w-[1075px]" data-node-id="13246:1741">
              <div className="absolute inset-[0_0_-2.28%_0]">
                <img alt="" className="block max-w-none size-full" src={imgGroup1376} />
              </div>
            </div>
            <div className="absolute backdrop-blur-[40px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.09)] border-solid h-[331px] left-[140px] rounded-[16px] top-[1374px] w-[328px]" data-node-id="13246:1746" data-name="Product">
              <div className="absolute content-stretch flex flex-col gap-[var(--spacing\/xs,0px)] h-[93px] items-start left-[30px] top-[220px] w-[241px]" data-node-id="13246:1747">
                <p className="font-['Aeonik:Regular',sans-serif] font-[var(--font-weight\/regular,normal)] leading-[25px] relative shrink-0 text-[19px] text-[color:var(--white,white)] tracking-[0.38px] w-full" data-node-id="13246:1748">
                  Merchants and PSPs rely on outdated systems built around outdated logic.
                </p>
              </div>
              <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[var(--line-height\/xxl,40px)] left-[30px] not-italic text-[70px] text-[color:var(--white,white)] top-[31px] w-[241px]" data-node-id="13246:1749">
                01
              </p>
            </div>
            <div className="absolute backdrop-blur-[40px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.09)] border-solid h-[331px] left-[calc(25%+77px)] rounded-[16px] top-[1374px] w-[328px]" data-node-id="13246:1750" data-name="Product">
              <div className="absolute content-stretch flex flex-col gap-[var(--spacing\/xs,0px)] h-[93px] items-start left-[30px] top-[220px] w-[241px]" data-node-id="13246:1751">
                <p className="font-['Aeonik:Regular',sans-serif] font-[var(--font-weight\/regular,normal)] leading-[25px] relative shrink-0 text-[19px] text-[color:var(--white,white)] tracking-[0.38px] w-full" data-node-id="13246:1752">
                  Compliance and chargeback data are siloed across multiple providers.
                </p>
              </div>
              <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[var(--line-height\/xxl,40px)] left-[30px] not-italic text-[70px] text-[color:var(--white,white)] top-[31px] w-[241px]" data-node-id="13246:1753">
                02
              </p>
            </div>
            <div className="absolute backdrop-blur-[40px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.09)] border-solid h-[331px] left-[calc(50%+16px)] rounded-[16px] top-[1374px] w-[328px]" data-node-id="13246:1754" data-name="Product">
              <div className="absolute content-stretch flex flex-col gap-[var(--spacing\/xs,0px)] h-[93px] items-start left-[30px] top-[220px] w-[241px]" data-node-id="13246:1755">
                <p className="font-['Aeonik:Regular',sans-serif] font-[var(--font-weight\/regular,normal)] leading-[25px] relative shrink-0 text-[19px] text-[color:var(--white,white)] tracking-[0.38px] w-full" data-node-id="13246:1756">
                  Decline recycling, fraud prevention, and KYC tools are disjointed.
                </p>
              </div>
              <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[var(--line-height\/xxl,40px)] left-[30px] not-italic text-[70px] text-[color:var(--white,white)] top-[31px] w-[241px]" data-node-id="13246:1757">
                03
              </p>
            </div>
            <div className="absolute backdrop-blur-[40px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.09)] border-solid h-[331px] left-[calc(75%-45px)] rounded-[16px] top-[1374px] w-[328px]" data-node-id="13246:1758" data-name="Product">
              <div className="absolute content-stretch flex flex-col gap-[var(--spacing\/xs,0px)] h-[93px] items-start left-[30px] top-[220px] w-[268px]" data-node-id="13246:1759">
                <p className="font-['Aeonik:Regular',sans-serif] font-[var(--font-weight\/regular,normal)] leading-[25px] relative shrink-0 text-[19px] text-[color:var(--white,white)] tracking-[0.38px] w-full" data-node-id="13246:1760">
                  Processors lose margin and trust due to inefficiency and poor visibility.
                </p>
              </div>
              <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[var(--line-height\/xxl,40px)] left-[30px] not-italic text-[70px] text-[color:var(--white,white)] top-[31px] w-[241px]" data-node-id="13246:1761">
                04
              </p>
            </div>
          </div>
          <p className="-translate-x-1/2 absolute font-['Aeonik:Medium',sans-serif] h-[60px] leading-[60px] left-[calc(50%+2px)] not-italic text-[13px] text-[color:var(--color,#b2fce3)] text-center top-[calc(50%-5488px)] tracking-[1.95px] uppercase w-[308px]" data-node-id="13246:1762">
            Legacy payments break at scale
          </p>
        </div>
      </div>
      <div className="absolute contents left-0 top-[2145px]" data-node-id="13246:1860">
        <div className="absolute flex h-[551px] items-center justify-center left-0 top-[2485px] w-[1681px]">
          <div className="flex-none rotate-180">
            <div className="h-[551px] relative w-[1681px]" data-node-id="13246:1861" data-name="Gradworld 1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[100.12%] left-[-20.17%] max-w-none top-[-0.06%] w-[140.33%]" src={imgGradworld1} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[calc(8.33%+179px)] not-italic text-center top-[2202px]" data-node-id="13246:1862">
          <p className="-translate-x-1/2 absolute font-['Aeonik:Medium',sans-serif] leading-[1.1] left-[calc(8.33%+677.5px)] text-[50px] text-white top-[2202px] w-[997px]" data-node-id="13246:1863">
            One system that optimizes every transaction, from onboarding to settlement
          </p>
          <p className="-translate-x-1/2 absolute font-['Aeonik:Regular',sans-serif] leading-[1.6] left-[calc(16.67%+537.5px)] text-[#9997a0] text-[18px] top-[2336px] tracking-[0.36px] w-[747px]" data-node-id="13246:1864">
            Orcestra replaces fragmented tasks with a unified intelligence layer that continuously evaluates merchants, transactions, and processor performance, making real time decisions that improve approvals, reduce risk, and increase revenue.
          </p>
        </div>
        <div className="absolute backdrop-blur-[40px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.09)] border-solid h-[502px] left-[141px] rounded-[16px] top-[2487px] w-[447px]" data-node-id="13246:1865" data-name="Product">
          <div className="absolute content-stretch flex flex-col gap-[var(--spacing\/xs,0px)] h-[93px] items-start left-[30px] top-[376px] w-[298px]" data-node-id="13246:1866">
            <p className="font-['Aeonik:Regular',sans-serif] font-[var(--font-weight\/regular,normal)] leading-[25px] relative shrink-0 text-[18px] text-[color:var(--white,white)] tracking-[0.36px] w-full" data-node-id="13246:1867">
              One system across underwriting, fraud, routing, and dispute management.
            </p>
          </div>
          <div className="absolute font-['Aeonik:Medium',sans-serif] font-[var(--font-weight\/medium,normal)] leading-[0] left-[30px] text-[35px] text-[color:var(--white,white)] top-[276px] w-[336px] whitespace-pre-wrap" data-node-id="13246:1868">
            <p className="leading-[38px] mb-0">{`Unified `}</p>
            <p className="leading-[38px]">Architecture</p>
          </div>
          <div className="absolute inset-[calc(7.57%-0.85px)_calc(73.15%+0.46px)_calc(74.7%+0.49px)_calc(6.94%-0.86px)]" data-node-id="13246:1869" data-name="Icon">
            <div className="absolute inset-[-1.12%]">
              <img alt="" className="block max-w-none size-full" src={imgIcon1} />
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-[40px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.09)] border-solid h-[502px] left-[calc(33.33%+57px)] rounded-[16px] top-[2487px] w-[447px]" data-node-id="13246:1870" data-name="Product">
          <div className="absolute content-stretch flex flex-col gap-[var(--spacing\/xs,0px)] h-[93px] items-start left-[30px] top-[376px] w-[298px]" data-node-id="13246:1871">
            <div className="font-['Aeonik:Regular',sans-serif] font-[var(--font-weight\/regular,normal)] leading-[0] relative shrink-0 text-[18px] text-[color:var(--white,white)] tracking-[0.36px] w-full whitespace-pre-wrap" data-node-id="13246:1872">
              <p className="leading-[25px] mb-0">{`Every decision improves `}</p>
              <p className="leading-[25px] mb-0">{`future outcomes across `}</p>
              <p className="leading-[25px]">the entire network.</p>
            </div>
          </div>
          <p className="absolute font-['Aeonik:Medium',sans-serif] font-[var(--font-weight\/medium,normal)] leading-[38px] left-[30px] text-[35px] text-[color:var(--white,white)] top-[276px] w-[336px]" data-node-id="13246:1873">
            Real Time Intelligence
          </p>
          <div className="absolute inset-[calc(6.77%-0.86px)_calc(73.94%+0.48px)_calc(74.58%+0.49px)_calc(6.94%-0.86px)]" data-node-id="13246:1874" data-name="Icon">
            <div className="absolute inset-[-1.07%_-1.17%]">
              <img alt="" className="block max-w-none size-full" src={imgIcon2} />
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-[40px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.09)] border-solid h-[502px] left-[calc(66.67%-26px)] rounded-[16px] top-[2487px] w-[447px]" data-node-id="13246:1875" data-name="Product">
          <div className="absolute content-stretch flex flex-col gap-[var(--spacing\/xs,0px)] h-[93px] items-start left-[30px] top-[376px] w-[298px]" data-node-id="13246:1876">
            <div className="font-['Aeonik:Regular',sans-serif] font-[var(--font-weight\/regular,normal)] leading-[0] relative shrink-0 text-[18px] text-[color:var(--white,white)] tracking-[0.36px] w-[267px] whitespace-pre-wrap" data-node-id="13246:1877">
              <p className="leading-[25px] mb-0">{`AI powered transaction intelligence that improves `}</p>
              <p className="leading-[25px]">with every decision.</p>
            </div>
          </div>
          <p className="absolute font-['Aeonik:Medium',sans-serif] font-[var(--font-weight\/medium,normal)] leading-[38px] left-[30px] text-[35px] text-[color:var(--white,white)] top-[276px] w-[336px]" data-node-id="13246:1878">
            Continuous Optimization
          </p>
        </div>
        <div className="absolute inset-[19.42%_27.74%_79.9%_66.96%]" data-node-id="13246:1879" data-name="Icon">
          <div className="absolute inset-[-1.12%]">
            <img alt="" className="block max-w-none size-full" src={imgIcon3} />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Aeonik:Medium',sans-serif] h-[60px] leading-[60px] left-[calc(50%-10px)] not-italic text-[13px] text-[color:var(--color,#b2fce3)] text-center top-[calc(50%-4351px)] tracking-[1.95px] uppercase w-[308px]" data-node-id="13246:1880">
          The Orcestra Approach
        </p>
      </div>
      <div className="absolute contents left-[calc(8.33%+152px)] top-[6969px]" data-node-id="13274:2882">
        <div className="-translate-x-1/2 absolute contents left-[calc(50%+0.5px)] not-italic text-center top-[6969px]" data-node-id="13247:1974">
          <p className="-translate-x-1/2 absolute font-['Aeonik:Medium',sans-serif] leading-[1.1] left-[calc(25%+420.5px)] text-[50px] text-white top-[7026px] w-[685px]" data-node-id="13247:1958">
            Shared Intelligence Engine
          </p>
          <p className="-translate-x-1/2 absolute font-['Aeonik:Regular',sans-serif] leading-[1.6] left-[calc(50%+0.5px)] text-[#9997a0] text-[18px] top-[7107px] tracking-[0.36px] w-[593px]" data-node-id="13247:1959">
            A continuously learning intelligence layer that connects every agent across the merchant and transaction lifecycle. Signals generated by one agent improve decision making across the entire network.
          </p>
          <p className="-translate-x-1/2 absolute font-['Aeonik:Medium',sans-serif] h-[53px] leading-[60px] left-[calc(50%+1px)] text-[13px] text-[color:var(--color,#b2fce3)] top-[calc(50%+473px)] tracking-[1.95px] uppercase w-[220px]" data-node-id="13247:1960">
            The Connective Layer
          </p>
        </div>
        <div className="absolute contents left-[calc(8.33%+152px)] top-[7177px]" data-node-id="13274:2881">
          <div className="absolute inset-[55.78%_37.15%_40.82%_36.55%]" data-node-id="13263:2080">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1426} />
          </div>
          <div
            className="absolute flex h-[496px] items-center justify-center left-[calc(33.33%+34px)] top-[7177px] w-[583px]"
            style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}
          >
            <div
              className="relative h-[496px] w-[583px] rotate-90"
              data-node-id="13268:2811"
              data-name="Sun 1"
              style={{ aspectRatio: '67 / 57' }}
            >
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSun1} />
            </div>
          </div>
          <div
            className="absolute flex h-[583px] items-center justify-center left-[calc(33.33%+34px)] top-[7177px] w-[496px] pointer-events-none"
            data-node-id="13263:2757"
            data-name="Mask group"
          >
            <div className="relative" data-node-id="13263:2759" data-name="glass-glowing-magic-ball-energy-inside 1">
              <IntelligenceCoreVideo
                src={coreVideo}
                size="clamp(220px, 18vw, 300px)"
                glow
                maskSrc={imgGlassGlowingMagicBallEnergyInside1}
                posterSrc={imgGlassGlowingMagicBallEnergyInside1}
                mediaWidth={564.411}
                mediaHeight={317.481}
                mediaAspectRatio="16/9"
              />
              <div className="absolute inset-0 flex items-center justify-center" data-node-id="13268:2813" data-name="Layer_1">
                <img
                  alt=""
                  src={imgLayer2}
                  className="block object-contain"
                  style={{ width: '155.416px', height: '27.151px' }}
                />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[calc(58.33%+76px)] top-[7386px]" data-node-id="13268:2848">
            <p className="absolute font-['Aeonik:Medium',sans-serif] h-[53px] leading-[60px] left-[calc(79.17%-169px)] not-italic text-[15px] text-white top-[calc(50%+890px)] tracking-[5.7px] uppercase w-[161px]" data-node-id="13268:2766">
              03/ PAYMENT
            </p>
            <p className="absolute font-['Aeonik:Medium',sans-serif] h-[53px] leading-[60px] left-[calc(79.17%-169px)] not-italic text-[15px] text-white top-[calc(50%+993px)] tracking-[5.7px] uppercase w-[161px]" data-node-id="13268:2767">
              04/ DISPUTE
            </p>
            <div className="absolute h-[108px] left-[calc(58.33%+76px)] top-[7413px] w-[89px]" data-node-id="13268:2827">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1427} />
            </div>
          </div>
          <div className="absolute contents left-[calc(8.33%+152px)] top-[7386px]" data-node-id="13268:2849">
            <p className="-translate-x-full absolute font-['Aeonik:Medium',sans-serif] h-[53px] leading-[60px] left-[calc(20.83%+162px)] not-italic text-[15px] text-right text-white top-[calc(50%+890px)] tracking-[5.7px] uppercase w-[220px]" data-node-id="13268:2763">
              01/ UNDERWRITING
            </p>
            <p className="-translate-x-full absolute font-['Aeonik:Medium',sans-serif] h-[53px] leading-[60px] left-[calc(20.83%+162px)] not-italic text-[15px] text-right text-white top-[calc(50%+993px)] tracking-[5.7px] uppercase w-[220px]" data-node-id="13268:2765">
              02/ RISK
            </p>
            <div className="absolute flex h-[108px] items-center justify-center left-[calc(25%+106px)] top-[7413px] w-[89px]">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[108px] relative w-[89px]" data-node-id="13268:2836">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1428} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-0 top-[12336px]" data-node-id="13246:1695">
        <div className="absolute h-[656px] left-0 overflow-clip top-[12336px] w-[1681px]" data-node-id="13246:1696" data-name="Footer">
          <div className="-translate-x-1/2 absolute flex h-[1065px] items-center justify-center left-[calc(50%+1px)] top-[-254px] w-[1994.188px]">
            <div className="-scale-y-100 flex-none">
              <div className="h-[1065px] relative w-[1994.188px]" data-node-id="13246:1697" data-name="shine">
                <div className="absolute inset-[-15.29%_-15.19%_-28.45%_-15.19%]">
                  <img alt="" className="block max-w-none size-full" src={imgShine1} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[242px] left-[139px] top-[6px] w-[1401px]" data-node-id="13246:1703" data-name="Layer_1">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer3} />
          </div>
          <div className="absolute content-stretch flex font-['Aeonik:Regular',sans-serif] items-center justify-between leading-[1.6] left-[140px] not-italic text-[16px] text-[rgba(255,255,255,0.88)] top-[309px] w-[1400px] whitespace-nowrap" data-node-id="13246:1712" data-name="Footer Links">
            <div className="content-stretch flex gap-[28px] items-start relative shrink-0" data-node-id="13246:1713" data-name="Footer Links Group">
              <p className="relative shrink-0" data-node-id="13246:1714">
                Problem
              </p>
              <p className="relative shrink-0" data-node-id="13246:1715">
                Solution
              </p>
              <p className="relative shrink-0" data-node-id="13246:1716">
                Platform
              </p>
              <p className="relative shrink-0" data-node-id="13246:1717">
                Eco System
              </p>
              <p className="relative shrink-0" data-node-id="13246:1718">
                Trust
              </p>
            </div>
            <div className="content-stretch flex gap-[28px] items-start relative shrink-0" data-node-id="13246:1719" data-name="Footer Links Group">
              <p className="relative shrink-0" data-node-id="13246:1720">
                Privacy Policy
              </p>
              <p className="relative shrink-0" data-node-id="13246:1721">
                Terms and Conditions
              </p>
            </div>
          </div>
          <div className="absolute h-0 left-[140px] top-[381px] w-[1400px]" data-node-id="13246:1722" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgDivider} />
            </div>
          </div>
          <div className="absolute content-stretch flex items-center justify-between left-[140px] top-[390px] w-[1400px]" data-node-id="13246:1723" data-name="Social Links">
            <p className="font-['Aeonik:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] tracking-[0.28px] whitespace-nowrap" data-node-id="13246:1724">
              © 2026 Orcestra — All Rights Reserved.
            </p>
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-node-id="13246:1725" data-name="Social Links">
              <div className="bg-[rgba(255,255,255,0.12)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex items-start p-[10px] relative rounded-[1000px] shrink-0" data-node-id="13246:1726" data-name="Social Link">
                <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="13246:1727" data-name="iconoir:x">
                  <div className="absolute inset-[12.5%_15.11%_12.5%_15.12%]" data-node-id="13246:1728" data-name="Group">
                    <div className="absolute inset-[-4.17%_-4.48%]">
                      <img alt="" className="block max-w-none size-full" src={imgGroup} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(255,255,255,0.12)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex items-start p-[10px] relative rounded-[1000px] shrink-0" data-node-id="13246:1731" data-name="Social Link">
                <div className="relative shrink-0 size-[20px]" data-node-id="13246:1732" data-name="ri:linkedin-fill">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRiLinkedinFill} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[141px] top-[10781px]" data-node-id="13246:1765">
        <div className="absolute contents left-[141px] top-[11004px]" data-node-id="13246:1766">
          <div className="absolute border border-[#26272b] border-solid content-stretch flex h-[408px] items-start left-[141px] overflow-clip rounded-[12px] top-[11004px] w-[1400px]" data-node-id="13246:1767" data-name="Hero Pricing">
            <div className="border-[#3f3f46] border-r border-solid content-stretch flex flex-col h-full items-center relative shrink-0 w-[327px]" data-node-id="13246:1768" data-name="Title">
              <div className="border-[#3f3f46] border-b-[0.711px] border-solid content-stretch flex flex-col h-[66px] items-start justify-center p-[16px] relative shrink-0 w-full" data-node-id="13246:1769" data-name="div">
                <div className="flex flex-col font-['Aeonik:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eaedfa] text-[18px] whitespace-nowrap" data-node-id="13246:1770">
                  <p className="leading-[1.2]">Capability</p>
                </div>
              </div>
              <div className="border-[#3f3f46] border-b-[0.711px] border-solid content-stretch flex h-[57px] items-center p-[16px] relative shrink-0 w-full" data-node-id="13246:1771" data-name="div">
                <div className="flex flex-col font-['Aeonik:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eaedfa] text-[16px] whitespace-nowrap" data-node-id="13246:1772">
                  <p className="leading-[1.6]">Merchant Onboarding</p>
                </div>
              </div>
              <div className="bg-[#090e0c] border-[#3f3f46] border-b-[0.711px] border-r-[0.711px] border-solid content-stretch flex h-[57px] items-center p-[16px] relative shrink-0 w-full" data-node-id="13246:1773" data-name="div">
                <div className="flex flex-col font-['Aeonik:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eaedfa] text-[16px] whitespace-nowrap" data-node-id="13246:1774">
                  <p className="leading-[1.6]">Fraud Management</p>
                </div>
              </div>
              <div className="border-[#3f3f46] border-b-[0.711px] border-solid content-stretch flex h-[57px] items-center p-[16px] relative shrink-0 w-full" data-node-id="13246:1775" data-name="div">
                <div className="flex flex-col font-['Aeonik:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eaedfa] text-[16px] whitespace-nowrap" data-node-id="13246:1776">
                  <p className="leading-[1.6]">Chargeback Handling</p>
                </div>
              </div>
              <div className="bg-[#090e0c] border-[#3f3f46] border-b-[0.711px] border-r-[0.711px] border-solid content-stretch flex h-[57px] items-center p-[16px] relative shrink-0 w-full" data-node-id="13246:1777" data-name="div">
                <div className="flex flex-col font-['Aeonik:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eaedfa] text-[16px] whitespace-nowrap" data-node-id="13246:1778">
                  <p className="leading-[1.6]">CRM Visibility</p>
                </div>
              </div>
              <div className="border-[#3f3f46] border-b-[0.711px] border-solid content-stretch flex h-[57px] items-center p-[16px] relative shrink-0 w-full" data-node-id="13246:1779" data-name="div">
                <div className="flex flex-col font-['Aeonik:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eaedfa] text-[16px] whitespace-nowrap" data-node-id="13246:1780">
                  <p className="leading-[1.6]">Reporting</p>
                </div>
              </div>
              <div className="bg-[#090e0c] border-[#3f3f46] border-b-[0.711px] border-r-[0.711px] border-solid content-stretch flex h-[57px] items-center p-[16px] relative shrink-0 w-full" data-node-id="13246:1781" data-name="div">
                <div className="flex flex-col font-['Aeonik:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eaedfa] text-[16px] whitespace-nowrap" data-node-id="13246:1782">
                  <p className="leading-[1.6]">Branding</p>
                </div>
              </div>
            </div>
            <div className="border-[#3f3f46] border-r border-solid content-stretch flex flex-col h-full items-center relative shrink-0 w-[356px]" data-node-id="13246:1783" data-name="Price 01">
              <div className="border-[#3f3f46] border-b-[0.711px] border-solid content-stretch flex flex-col h-[66px] items-center justify-center p-[16px] relative shrink-0 w-full" data-node-id="13246:1784" data-name="01">
                <div className="content-stretch flex gap-[5.689px] h-[22px] items-start relative shrink-0" data-node-id="13246:1785" data-name="Free Plan Container">
                  <div className="flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7d7d7d] text-[18px] whitespace-nowrap" data-node-id="13246:1786">
                    <p className="leading-[1.2]">Legacy Processors</p>
                  </div>
                </div>
              </div>
              <div className="border-[#3f3f46] border-b-[0.711px] border-solid content-stretch flex flex-col h-[57px] items-center justify-center p-[16px] relative shrink-0 w-full" data-node-id="13246:1788" data-name="02">
                <div className="flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap" data-node-id="13246:1789">
                  <p className="leading-[1.47]">Manual, multi system</p>
                </div>
              </div>
              <div className="bg-[#090e0c] border-[#3f3f46] border-b-[0.711px] border-r-[0.711px] border-solid content-stretch flex flex-col h-[57px] items-center justify-center p-[16px] relative shrink-0 w-full" data-node-id="13246:1790" data-name="03">
                <div className="flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap" data-node-id="13246:1791">
                  <p className="leading-[1.47]">None</p>
                </div>
              </div>
              <div className="border-[#3f3f46] border-b-[0.711px] border-solid content-stretch flex flex-col h-[57px] items-center justify-center p-[16px] relative shrink-0 w-full" data-node-id="13246:1792" data-name="4">
                <div className="flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap" data-node-id="13246:1793">
                  <p className="leading-[1.47]">Reactive</p>
                </div>
              </div>
              <div className="bg-[#090e0c] border-[#3f3f46] border-b-[0.711px] border-r-[0.711px] border-solid content-stretch flex flex-col h-[57px] items-center justify-center p-[16px] relative shrink-0 w-full" data-node-id="13246:1794" data-name="5">
                <div className="flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap" data-node-id="13246:1795">
                  <p className="leading-[1.47]">None</p>
                </div>
              </div>
              <div className="border-[#3f3f46] border-b-[0.711px] border-solid content-stretch flex flex-col h-[57px] items-center justify-center p-[16px] relative shrink-0 w-full" data-node-id="13246:1796" data-name="6">
                <div className="flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap" data-node-id="13246:1797">
                  <p className="leading-[1.47]">Batch, processor centric</p>
                </div>
              </div>
              <div className="bg-[#090e0c] border-[#3f3f46] border-b-[0.711px] border-r-[0.711px] border-solid content-stretch flex flex-col h-[57px] items-center justify-center p-[16px] relative shrink-0 w-full" data-node-id="13246:1798" data-name="7">
                <div className="flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap" data-node-id="13246:1799">
                  <p className="leading-[1.47]">Off brand</p>
                </div>
              </div>
            </div>
            <div className="border-[#3f3f46] border-r border-solid content-stretch flex flex-col h-[408px] items-center relative shrink-0 w-[777px]" data-node-id="13246:1800" data-name="Price 4">
              <div className="border-[#3f3f46] border-b-[0.711px] border-solid content-stretch flex flex-col h-[66px] items-center justify-center p-[16px] relative shrink-0 w-full" data-node-id="13246:1801" data-name="01">
                <div className="content-stretch flex flex-col h-[24px] items-center relative shrink-0 w-[150px]" data-node-id="13246:1802" data-name="Enterprise Plan Container">
                  <div className="flex flex-col font-['Aeonik:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b2fce3] text-[20px] text-center w-full" data-node-id="13246:1803">
                    <p className="leading-[1.2]">Orcestra</p>
                  </div>
                </div>
              </div>
              <div className="border-[#3f3f46] border-b-[0.711px] border-solid content-stretch flex flex-col h-[57px] items-center justify-center py-[14.222px] relative shrink-0 w-full" data-node-id="13246:1804" data-name="02">
                <div className="flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eaedfa] text-[16px] whitespace-nowrap" data-node-id="13246:1805">
                  <p className="leading-[1.47] whitespace-pre">{`✅  Automated KYC/KYB API stack`}</p>
                </div>
              </div>
              <div className="bg-[#090e0c] border-[#3f3f46] border-b-[0.711px] border-r-[0.711px] border-solid content-stretch flex flex-col h-[57px] items-center justify-center py-[14.222px] relative shrink-0 w-full" data-node-id="13246:1806" data-name="03">
                <div className="flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eaedfa] text-[16px] whitespace-nowrap" data-node-id="13246:1807">
                  <p className="leading-[1.47] whitespace-pre">{`✅  Embedded fraud prevention orchestration`}</p>
                </div>
              </div>
              <div className="border-[#3f3f46] border-b-[0.711px] border-solid content-stretch flex flex-col h-[57px] items-center justify-center py-[14.222px] relative shrink-0 w-full" data-node-id="13246:1808" data-name="4">
                <div className="flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eaedfa] text-[16px] whitespace-nowrap" data-node-id="13246:1809">
                  <p className="leading-[1.47] whitespace-pre">{`✅  Proactive (Ethoca, RDR, CDRN integrated)`}</p>
                </div>
              </div>
              <div className="bg-[#090e0c] border-[#3f3f46] border-b-[0.711px] border-r-[0.711px] border-solid content-stretch flex flex-col h-[57px] items-center justify-center py-[14.222px] relative shrink-0 w-full" data-node-id="13246:1810" data-name="5">
                <div className="flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eaedfa] text-[16px] whitespace-nowrap" data-node-id="13246:1811">
                  <p className="leading-[1.47] whitespace-pre">{`✅  Native hierarchical CRM`}</p>
                </div>
              </div>
              <div className="border-[#3f3f46] border-b-[0.711px] border-solid content-stretch flex flex-col h-[57px] items-center justify-center py-[14.222px] relative shrink-0 w-full" data-node-id="13246:1812" data-name="6">
                <div className="flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eaedfa] text-[16px] whitespace-nowrap" data-node-id="13246:1813">
                  <p className="leading-[1.47] whitespace-pre">{`✅  Real time unified dashboard`}</p>
                </div>
              </div>
              <div className="bg-[#090e0c] border-[#3f3f46] border-b-[0.711px] border-solid content-stretch flex flex-col h-[57px] items-center justify-center py-[14.222px] relative shrink-0 w-full" data-node-id="13246:1814" data-name="7">
                <div className="flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eaedfa] text-[16px] whitespace-nowrap" data-node-id="13246:1815">
                  <p className="leading-[1.47] whitespace-pre">{`✅  White label + fully integrated features`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents font-['Aeonik:Medium',sans-serif] left-[141px] not-italic top-[10781px]" data-node-id="13246:1816">
          <p className="absolute leading-[1.1] left-[141px] text-[50px] text-white top-[10839px] w-[891px]" data-node-id="13246:1817">
            Unmatched transparency and compliance for processing partners
          </p>
          <p className="absolute h-[53px] leading-[60px] left-[calc(16.67%-139px)] text-[13px] text-[color:var(--color,#b2fce3)] top-[calc(50%+4285px)] tracking-[1.95px] uppercase w-[447px]" data-node-id="13246:1818">
            Legacy vs. Orcestra
          </p>
        </div>
      </div>
      <div className="absolute contents left-[122px] top-[9697px]" data-node-id="13284:616">
        <div className="absolute flex h-[867.177px] items-center justify-center left-[calc(25%+160px)] top-[9697px] w-[881.638px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="-scale-y-100 flex-none rotate-[-135.66deg]">
            <div className="h-[174.044px] relative w-[1062.637px]" data-node-id="13277:3017">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-full left-[0.1%] max-w-none top-0 w-[100.03%]" src={imgLine34} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[174.044px] items-center justify-center left-[122px] top-[10278px] w-[1062.637px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[174.044px] relative w-[1062.637px]" data-node-id="13284:614">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-full left-[0.1%] max-w-none top-0 w-[100.03%]" src={imgLine34} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[calc(50%+36.51px)] size-[793.159px] top-[10033.04px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="-scale-y-100 flex-none rotate-135">
            <div className="h-[157.862px] relative w-[963.834px]" data-node-id="13277:3021">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-full left-[0.1%] max-w-none top-0 w-[100.03%]" src={imgLine34} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[141px] top-[10031px]" data-node-id="13246:1819">
          <p className="absolute font-['Aeonik:Medium',sans-serif] leading-[1.1] left-[141px] not-italic text-[50px] text-white top-[10089px] w-[775px]" data-node-id="13246:1821">
            High compliance, by design
          </p>
          <p className="absolute font-['Aeonik:Medium',sans-serif] h-[53px] leading-[60px] left-[calc(16.67%-139px)] not-italic text-[13px] text-[color:var(--color,#b2fce3)] top-[calc(50%+3535px)] tracking-[1.95px] uppercase w-[447px]" data-node-id="13246:1822">
            The Orcestra Compliance Framework
          </p>
          <ComplianceCardsRow left={141} top={10221} />
        </div>
      </div>
      <div className="absolute contents left-px top-[7909px]" data-node-id="13284:617">
        <div className="absolute h-[409px] left-px top-[8099px] w-[1680px]" data-node-id="13246:1882">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full left-[-24.34%] max-w-none top-0 w-[148.68%]" src={imgLine34} />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Aeonik:Medium',sans-serif] h-[53px] leading-[60px] left-[calc(50%+3px)] not-italic text-[13px] text-center text-white top-[calc(50%+1413px)] tracking-[1.95px] uppercase w-[220px]" data-node-id="13246:1884">
          The Orcestra Difference
        </p>
        <div className="absolute contents left-[calc(8.33%+202px)] not-italic text-center top-[7968px]" data-node-id="13246:1891">
          <p className="-translate-x-1/2 absolute bg-clip-text font-['Aeonik:Medium',sans-serif] leading-none left-[calc(8.33%+700.5px)] text-[75px] text-[transparent] top-[7968px] tracking-[-0.75px] w-[997px]" data-node-id="13246:1892" style={{ backgroundImage: "linear-gradient(255.36453830192602deg, var(--color,rgb(178, 252, 227)) 7.1417%, rgb(57, 165, 210) 97.489%)" }}>
            Optimized transactioning coordinated agentically
          </p>
          <p className="-translate-x-1/2 absolute font-['Aeonik:Regular',sans-serif] leading-[1.6] left-[calc(16.67%+560.5px)] text-[#9997a0] text-[18px] top-[8151px] tracking-[0.36px] w-[747px]" data-node-id="13246:1893">
            Orcestra replaces fragmented tasks with a unified intelligence layer that continuously evaluates merchants, transactions, and processor performance, making real time decisions that improve approvals, reduce risk, and increase revenue.
          </p>
        </div>
        <ProcessHorizontalScroll left={102} top={8422} />
      </div>
      <div className="absolute contents left-[calc(8.33%+120px)] top-[8882px]" data-node-id="13246:1895">
        <div className="absolute flex h-[366px] items-center justify-center left-[calc(75%-30px)] top-[9348px] w-[311px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-[311px] relative w-[366px]" data-node-id="13246:1896" data-name="Sun 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSun1} />
            </div>
          </div>
        </div>
        <div className="absolute contents left-[calc(8.33%+120px)] top-[8882px]" data-node-id="13246:1897">
          <AnimatePresence mode="wait">
            <motion.div
              key={serveActive.id}
              className="absolute backdrop-blur-[40px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.09)] border-solid h-[425px] left-[calc(50%-14px)] rounded-[16px] top-[9331px] w-[596px]"
              variants={servePanelVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              data-node-id="13246:1898"
              data-name="Product"
            >
              <div className="absolute content-stretch flex flex-col gap-[var(--spacing\/xs,0px)] h-[153px] items-start left-[35px] top-[155px] w-[430px]">
                <ul className="block font-['Aeonik:Regular',sans-serif] font-[var(--font-weight\/regular,normal)] leading-[0] list-disc relative shrink-0 text-[#b7b7b7] text-[19px] tracking-[0.38px] w-full">
                  {serveActive.bullets.map((b) => (
                    <li key={b} className="mb-0 ms-[28.5px] last:mb-0">
                      <span className="leading-[25px]">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="absolute font-['Aeonik:Medium',sans-serif] font-[var(--font-weight\/medium,normal)] leading-[38px] left-[35px] text-[40px] text-[color:var(--white,white)] top-[41px] w-[520px]">
                {serveActive.label}
              </p>
              <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[38px] left-[35px] not-italic text-[23px] text-[color:var(--color,#b2fce3)] top-[86px] w-[520px]">
                {serveActive.subtitle}
              </p>
              <p className="absolute font-['Aeonik:Regular',sans-serif] font-[var(--font-weight\/regular,normal)] h-[48px] leading-[25px] left-[79px] text-[23px] text-white top-[352px] w-[517px]">
                {serveActive.footer}
              </p>
              <div className="absolute h-0 left-[35px] top-[319px] w-[528px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine31} />
                </div>
              </div>
              <div className="absolute inset-[calc(82.82%+0.66px)_calc(89.43%+0.79px)_calc(10.82%-0.78px)_calc(6.04%-0.88px)]">
                <div className="absolute inset-[-3.7%]">
                  <img alt="" className="block max-w-none size-full" src={imgIcon9} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute contents left-[calc(25%+63px)] not-italic text-center top-[8939px]" data-node-id="13246:1905">
            <p className="-translate-x-1/2 absolute font-['Aeonik:Medium',sans-serif] leading-[1.1] left-[calc(25%+405.5px)] text-[50px] text-white top-[8939px] w-[685px] whitespace-pre-wrap" data-node-id="13246:1906">
              {`Payment intelligence `}
              <br aria-hidden="true" />
              for the entire ecosystem
            </p>
            <p className="-translate-x-1/2 absolute font-['Aeonik:Regular',sans-serif] leading-[1.6] left-[calc(50%-14.5px)] text-[#9997a0] text-[18px] top-[9073px] tracking-[0.36px] w-[543px]" data-node-id="13246:1907">
              Orcestra replaces fragmented tasks with a unified intelligence layer that continuously evaluates merchants, transactions, and processor performance, making real time decisions that improve approvals, reduce risk, and increase revenue.
            </p>
          </div>
          <p className="-translate-x-1/2 absolute font-['Aeonik:Medium',sans-serif] h-[53px] leading-[60px] left-[calc(50%-14px)] not-italic text-[13px] text-[color:var(--color,#b2fce3)] text-center top-[calc(50%+2386px)] tracking-[1.95px] uppercase w-[220px]" data-node-id="13246:1908">
            Who Orcestra Serves
          </p>
          {(() => {
            const numberTops = [9364, 9426, 9492, 9559] as const;
            const labelTops = [9348, 9410, 9477, 9544] as const;
            const activeNumberTop = numberTops[serveTabIndex] ?? numberTops[0];
            const activeIconTop = activeNumberTop - 8;

            return (
              <>
                <motion.div
                  className="absolute left-[calc(8.33%+167px)] size-[42px] pointer-events-none"
                  initial={false}
                  animate={{ top: activeIconTop }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  data-name="serve-tab-indicator"
                >
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFi2889731} />
                </motion.div>

                {serveTabs.map((t, i) => {
                  const isActive = t.id === serveTab;
                  const numberTop = numberTops[i] ?? numberTops[0];
                  const labelTop = labelTops[i] ?? labelTops[0];

                  return (
                    <React.Fragment key={t.id}>
                      <button
                        type="button"
                        onClick={() => setServeTab(t.id)}
                        className={[
                          "absolute font-['Aeonik:Medium',sans-serif] leading-[1.3] left-[calc(8.33%+120px)] not-italic text-[20px] whitespace-nowrap transition-opacity duration-300",
                          isActive ? 'text-[color:var(--color,#b2fce3)] opacity-100' : 'text-[#686868] opacity-60 hover:opacity-85',
                        ].join(' ')}
                        style={{ top: numberTop }}
                      >
                        {t.number}
                      </button>

                      <motion.button
                        type="button"
                        onClick={() => setServeTab(t.id)}
                        className={[
                          "absolute font-['Aeonik:Medium',sans-serif] leading-[1.1] left-[calc(8.33%+162px)] not-italic text-[48px] whitespace-nowrap transition-opacity duration-300",
                          isActive ? 'text-white opacity-100' : 'text-[#686868] opacity-60 hover:opacity-85',
                        ].join(' ')}
                        style={{ top: labelTop }}
                        animate={{ x: isActive ? 68 : 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                      >
                        {t.label}
                      </motion.button>
                    </React.Fragment>
                  );
                })}
              </>
            );
          })()}
          <p className="absolute bg-clip-text font-['Aeonik:Regular',sans-serif] leading-[1.6] left-[calc(29.17%-230px)] not-italic text-[18px] text-[transparent] top-[9655px] tracking-[0.36px] w-[543px]" data-node-id="13246:1919" style={{ backgroundImage: "linear-gradient(112.017deg, rgb(178, 252, 227) 0.73435%, rgb(23, 196, 255) 96.061%)" }}>
            Orcestra reduces systemic friction across all four layers simultaneously: operational risk, regulatory risk, revenue volatility, and information asymmetry.
          </p>
        </div>
      </div>
      <div className="absolute contents left-px top-[11492px]" data-node-id="13246:1921">
        <div className="absolute h-[569px] left-px top-[11492px] w-[1680px]" data-node-id="13246:1922" data-name="Gradworld 2">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[102.46%] left-[-24.35%] max-w-none top-[-1.23%] w-[148.39%]" src={imgGradworld1} />
          </div>
        </div>
        <div className="absolute backdrop-blur-[40px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.09)] border-solid font-['Aeonik:Medium',sans-serif] h-[524px] left-[141px] not-italic rounded-[16px] text-center top-[11628px] w-[1400px]" data-node-id="13246:1923" data-name="Product">
          <p className="-translate-x-1/2 absolute leading-[64px] left-[699px] text-[65px] text-[color:var(--white,white)] top-[131px] tracking-[-1.3px] w-[1036px]" data-node-id="13246:1924">
            The future of commerce is agentic. Orcestra is building the intelligence layer that runs it.
          </p>
          <p className="-translate-x-1/2 absolute h-[53px] leading-[60px] left-[calc(50%+0.5px)] text-[13px] text-[color:var(--color,#b2fce3)] top-[calc(50%-199px)] tracking-[1.95px] uppercase w-[447px]" data-node-id="13246:1925">
            Get Started
          </p>
        </div>
        <div className="-translate-x-1/2 absolute content-stretch flex gap-[16px] items-start left-[calc(50%+1px)] top-[12013px]" data-node-id="13246:1926" data-name="Header Buttons Container">
          <div className="border border-solid border-white content-stretch flex gap-[var(--spacing-none,0px)] h-[48px] items-center justify-center overflow-clip px-[var(--spacing-2lg,14px)] py-[var(--spacing-lg,12px)] relative rounded-[var(--radius-5xl,24px)] shrink-0 w-[157px]" data-node-id="13246:1927" data-name="Buttons">
            <div className="content-stretch flex items-center justify-center px-[var(--spacing-md,8px)] relative shrink-0" data-node-id="I13246:1927;2430:1462" data-name="wrap text">
              <p className="font-['Aeonik:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="I13246:1927;2430:1463">
                See How it Works
              </p>
            </div>
          </div>
          <div className="bg-white content-stretch flex gap-[var(--spacing-none,0px)] h-[48px] items-center justify-center overflow-clip px-[var(--spacing-2lg,14px)] py-[var(--spacing-lg,12px)] relative rounded-[var(--radius-5xl,24px)] shrink-0" data-node-id="13246:1928" data-name="Buttons">
            <div className="content-stretch flex items-center justify-center px-[var(--spacing-md,8px)] relative shrink-0" data-node-id="I13246:1928;2430:1382" data-name="wrap text">
              <p className="font-['Aeonik:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap" data-node-id="I13246:1928;2430:1383">
                Request a Demo
              </p>
            </div>
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I13246:1928;2430:2803" data-name="Icon">
              <div className="absolute inset-[18.75%_12.5%]" data-node-id="I13246:1928;2430:2803;2308:6878" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[141px] top-[3181px]" data-node-id="13276:2902">
        <div className="absolute bg-[#c8d57e] content-stretch flex items-center left-[calc(8.33%+151px)] px-[var(--spacing\/xs,10px)] py-[var(--spacing\/3xs,4px)] rounded-[var(--border-radius\/border-radius-mid,8px)] top-[4087px]" data-node-id="13246:1560" data-name="Experts">
          <p className="font-[family-name:var(--font-family\/primary,'Inter:Semi_Bold',sans-serif)] font-[var(--font-weight\/semi-bold,normal)] font-semibold leading-[var(--line-height\/md,28px)] relative shrink-0 text-[19px] text-[color:var(--heading\/color-2,#02000e)] uppercase whitespace-nowrap" data-node-id="13246:1561">
            03 — Payment Optimization Agent
          </p>
        </div>
        <div className="absolute bg-[#a0f18c] content-stretch flex items-center left-[calc(8.33%+151px)] px-[var(--spacing\/xs,10px)] py-[var(--spacing\/3xs,4px)] rounded-[var(--border-radius\/border-radius-mid,8px)] top-[4521px]" data-node-id="13246:1562" data-name="Knowledge">
          <p className="font-[family-name:var(--font-family\/primary,'Inter:Semi_Bold',sans-serif)] font-[var(--font-weight\/semi-bold,normal)] font-semibold leading-[var(--line-height\/md,28px)] relative shrink-0 text-[18px] text-[color:var(--heading\/color-2,#02000e)] uppercase whitespace-nowrap" data-node-id="13246:1563">
            05 — Compliance Agent
          </p>
        </div>
        <p className="absolute font-[family-name:var(--font-family\/primary,'Inter:Regular',sans-serif)] font-[var(--font-weight\/regular,normal)] font-normal leading-[25px] left-[calc(8.33%+151px)] text-[#b7b7b7] text-[17px] top-[4569px] w-[342px]" data-node-id="13246:1564">
          Continuously monitors regulatory exposure and network risk.
        </p>
        <p className="absolute font-[family-name:var(--font-family\/primary,'Inter:Regular',sans-serif)] font-[var(--font-weight\/regular,normal)] font-normal leading-[25px] left-[calc(8.33%+151px)] text-[#b7b7b7] text-[17px] top-[4135px] w-[342px]" data-node-id="13246:1565">
          Routes transactions across processors to maximize approvals and revenue.
        </p>
        <div className="absolute bg-[#79cff4] content-stretch flex items-center left-[calc(8.33%+151px)] px-[var(--spacing\/xs,10px)] py-[var(--spacing\/3xs,4px)] rounded-[var(--border-radius\/border-radius-mid,8px)] top-[3871px]" data-node-id="13246:1566" data-name="Knowledge">
          <p className="font-[family-name:var(--font-family\/primary,'Inter:Semi_Bold',sans-serif)] font-[var(--font-weight\/semi-bold,normal)] font-semibold leading-[var(--line-height\/md,28px)] relative shrink-0 text-[18px] text-[color:var(--heading\/color-2,#02000e)] uppercase whitespace-nowrap" data-node-id="13246:1567">
            02 — Transaction Intelligence Agent
          </p>
        </div>
        <div className="absolute bg-[var(--color,#b2fce3)] content-stretch flex items-center left-[calc(8.33%+151px)] px-[var(--spacing\/xs,10px)] py-[var(--spacing\/3xs,4px)] rounded-[var(--border-radius\/border-radius-mid,8px)] top-[3653px]" data-node-id="13246:1568" data-name="Knowledge">
          <p className="font-[family-name:var(--font-family\/primary,'Inter:Semi_Bold',sans-serif)] font-[var(--font-weight\/semi-bold,normal)] font-semibold leading-[var(--line-height\/md,28px)] relative shrink-0 text-[18px] text-[color:var(--heading\/color-2,#02000e)] uppercase whitespace-nowrap" data-node-id="13246:1569">
            01 — Merchant Intelligence
          </p>
        </div>
        <p className="absolute font-[family-name:var(--font-family\/primary,'Inter:Regular',sans-serif)] font-[var(--font-weight\/regular,normal)] font-normal leading-[25px] left-[calc(8.33%+151px)] text-[#b7b7b7] text-[17px] top-[3919px] w-[342px]" data-node-id="13246:1570">
          Analyzes device identity, behavioral signals, and fraud patterns.
        </p>
        <p className="absolute font-[family-name:var(--font-family\/primary,'Inter:Regular',sans-serif)] font-[var(--font-weight\/regular,normal)] font-normal leading-[25px] left-[calc(8.33%+151px)] text-[#b7b7b7] text-[17px] top-[3701px] w-[342px]" data-node-id="13246:1571">
          Evaluates merchants, ownership structures, websites, and financial signals.
        </p>
        <div className="absolute bg-[#d09595] content-stretch flex items-center left-[calc(8.33%+151px)] px-[var(--spacing\/xs,10px)] py-[var(--spacing\/3xs,4px)] rounded-[var(--border-radius\/border-radius-mid,8px)] top-[4303px]" data-node-id="13246:1572" data-name="Agents">
          <p className="font-[family-name:var(--font-family\/primary,'Inter:Semi_Bold',sans-serif)] font-[var(--font-weight\/semi-bold,normal)] font-semibold leading-[var(--line-height\/md,28px)] relative shrink-0 text-[18px] text-[color:var(--color-2,#000c0f)] uppercase whitespace-nowrap" data-node-id="13246:1573">
            04 — Dispute Intelligence Agent
          </p>
        </div>
        <p className="absolute font-[family-name:var(--font-family\/primary,'Inter:Regular',sans-serif)] font-[var(--font-weight\/regular,normal)] font-normal leading-[25px] left-[calc(8.33%+151px)] text-[#b7b7b7] text-[17px] top-[4351px] w-[325px]" data-node-id="13246:1574">
          Detects early dispute signals and automates chargeback mitigation.
        </p>
        <p className="absolute font-['Aeonik:Medium',sans-serif] leading-[1.1] left-[141px] not-italic text-[50px] text-white top-[3238px] w-[997px] whitespace-pre-wrap" data-node-id="13246:1623">
          {`Five intelligence systems. `}
          <br aria-hidden="true" />
          One continuously learning decision engine
        </p>
        <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[1.6] left-[141px] not-italic text-[#9997a0] text-[18px] top-[3372px] tracking-[0.36px] w-[834px]" data-node-id="13246:1624">
          Orcestra coordinates specialized AI agents that continuously analyze merchants, transactions, processors, and disputes across the entire commerce lifecycle. Instead of static rules and disconnected tools, Orcestra operates as a real time decision engine for global commerce.
        </p>
        <p className="absolute font-['Aeonik:Medium',sans-serif] h-[53px] leading-[60px] left-[calc(16.67%-137px)] not-italic text-[13px] text-[color:var(--color,#b2fce3)] top-[calc(50%-3315px)] tracking-[1.95px] uppercase w-[463px]" data-node-id="13246:1689">
          How Orcestra Works
        </p>
        <div className="absolute h-[314px] left-[calc(41.67%+88px)] top-[3515px] w-[497px]" data-node-id="13274:2883" data-name="01 Merchant Intelligence 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img01MerchantIntelligence1} />
        </div>
        <div className="absolute h-[312px] left-[calc(41.67%+89px)] top-[3734px] w-[495px]" data-node-id="13276:2888" data-name="02 Transaction Agent 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img02TransactionAgent1} />
        </div>
        <div className="absolute h-[312px] left-[calc(41.67%+87px)] top-[3951px] w-[497px]" data-node-id="13276:2894" data-name="03 Payment Opt Agent 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img03PaymentOptAgent1} />
        </div>
        <div className="absolute h-[314px] left-[calc(41.67%+89px)] top-[4165px] w-[496px]" data-node-id="13276:2896" data-name="04 Dispute Intelligence Agent copy 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img04DisputeIntelligenceAgentCopy1} />
        </div>
        <div className="absolute h-[310px] left-[calc(41.67%+91px)] top-[4385px] w-[494px]" data-node-id="13276:2898" data-name="05 Compliance Agent copy 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img05ComplianceAgentCopy1} />
        </div>
      </div>
      <div className="absolute contents left-[140px] top-[2006px]" data-node-id="13277:2954">
        <div className="absolute contents left-[calc(41.67%+114.23px)] top-[2006px]" data-node-id="13276:2950">
          <div className="absolute bg-black border-[#b2fce3] border-[0.75px] border-solid left-[calc(41.67%+114.23px)] rounded-[6px] shadow-[0px_1.5px_2.25px_0px_rgba(0,0,0,0.05)] size-[50px] top-[2006px]" data-node-id="13276:2914" data-name="Announcement icon container">
            <div className="absolute contents left-[17.02px] top-[16.75px]" data-node-id="13276:2948">
              <div className="absolute contents left-[17.77px] top-[17.5px]" data-node-id="13276:2941" data-name="translate" />
            </div>
          </div>
          <div className="absolute h-[50px] left-[calc(41.67%+114.23px)] top-[2006px] w-[51.042px]" data-node-id="13276:2949">
            <div className="absolute inset-[-22.5%_-22.04%]">
              <img alt="" className="block max-w-none size-full" src={imgGroup1437} />
            </div>
          </div>
        </div>
        <div className="absolute h-0 left-[calc(50%+37px)] top-[2032px] w-[663px]" data-node-id="13276:2951">
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine42} />
          </div>
        </div>
        <div className="absolute flex h-0 items-center justify-center left-[140px] top-[2032.01px] w-[663px]">
          <div className="flex-none rotate-180">
            <div className="h-0 relative w-[663px]" data-node-id="13277:2952">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine43} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}