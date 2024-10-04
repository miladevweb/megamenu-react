import { BiBox, BiAdjust, BiLogoInstagram, BiLogoTypescript, BiTag, BiLogoFacebook, BiHappy, BiBasketball, BiPlanet, BiPaperPlane } from 'react-icons/bi'
import { DiApple, DiAndroid, DiReact, DiAngularSimple, DiGoogleAnalytics } from 'react-icons/di'
import { RxNotionLogo, RxAllSides, RxReader, RxVercelLogo, RxGithubLogo, RxGear, RxAngle, RxCardStack, RxAccessibility, RxArrowDown, RxCaretUp } from 'react-icons/rx'

export const menu = [
  {
    Products: {
      'Global Payments': [
        {
          Label: 'Payments',
          Logo: <BiBox />,
          Description: 'Online payments',
        },
        {
          Label: 'Terminal',
          Logo: <BiAdjust />,
          Description: 'In-pero payements',
        },
        {
          Label: 'Radar',
          Logo: <BiLogoFacebook />,
          Description: 'Fraud prevention',
        },
        {
          Label: 'Autorization',
          Logo: <BiLogoTypescript />,
          Description: 'Acceptance optimisations',
        },
      ],

      'Embedded Payments and Finance': [
        {
          Label: 'Connect',
          Logo: <BiLogoInstagram />,
          Description: 'Payments for platforms',
        },
        {
          Label: 'Issuing',
          Logo: <BiTag />,
          Description: 'Physical and virtual cards',
        },
      ],

      'Revenue and Finance Automotion': [
        {
          Label: 'Billing',
          Logo: <DiApple />,
          Description: 'Subscription management',
        },
        {
          Label: 'Revenue Cognition',
          Logo: <DiAndroid />,
          Description: 'Accounting automation',
        },
        {
          Label: 'Tax',
          Logo: <DiReact />,
          Description: 'Sales tax & VAT automation',
        },
        {
          Label: 'Invoicing',
          Logo: <DiAngularSimple />,
          Description: 'Online invoices',
        },
        {
          Label: 'Sigma',
          Logo: <DiGoogleAnalytics />,
          Description: 'Custom reports',
        },
        {
          Label: 'Data Pipeline',
          Logo: <RxNotionLogo />,
          Description: 'Data warehouse sync',
        },
      ],

      More: ['Payments methods', 'Links', 'Finantial Connections', 'Identity', 'Atlas'],
    },
  },

  {
    Solutions: {
      'By Stage': [
        {
          Logo: <RxGear />,
          Label: 'Enterprises',
        },
        {
          Logo: <RxAngle />,
          Label: 'Start-ups',
        },
      ],
      'By Business Model': [
        {
          Logo: <RxCardStack />,
          Label: 'E-Commerce',
        },
        {
          Logo: <RxGithubLogo />,
          Label: 'SaaS',
        },
        {
          Logo: <BiHappy />,
          Label: 'Platform',
        },
        {
          Logo: <BiPaperPlane />,
          Label: 'Marketplaces',
        },
      ],
      'By Use Case': [
        {
          Logo: <BiBasketball />,
          Label: 'Finance automation',
        },
        {
          Logo: <RxCaretUp />,
          Label: 'Embedded finance',
        },
        {
          Logo: <RxArrowDown />,
          Label: 'Global Businesses',
        },
        {
          Logo: <RxAccessibility />,
          Label: 'Crypto',
        },
        {
          Logo: <BiPlanet />,
          Label: 'Creator economy',
        },
      ],
      Ecosystem: [
        {
          Logo: <RxVercelLogo />,
          Label: 'Stripe App Marketplace',
        },
        {
          Logo: <RxReader />,
          Label: 'Partners',
        },
        {
          Logo: <RxAllSides />,
          Label: 'Professional Services',
        },
      ],
    },
  },
]

export type SubItems = {
  Label: string
  Logo: string
  Description: string
}
