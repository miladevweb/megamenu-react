import styles from './App.module.css'
import { SubItems, menu } from './assets/labels'
import { CSSProperties, Fragment, useRef, useState } from 'react'

interface CustomCSS extends CSSProperties {
  [key: string]: unknown
}

export default function HomePage() {
  const [left, setLeft] = useState(20)
  const refMainLabels = useRef<HTMLHeadingElement[]>([])

  const handleLeft = (index: number) => {
    const { left: leftRef } = refMainLabels.current[index].getBoundingClientRect()
    setLeft(leftRef)
  }
  return (
    <header>
      <nav>
        {menu.map((mainElement, index) => {
          const [labels] = Object.entries(mainElement)
          const mainLabel = labels[0]
          const subElements = Object.entries(labels[1])
          return (
            <div
              key={index}
              className={styles.container}
            >
              <h1
                onMouseEnter={() => handleLeft(index)}
                ref={(node) => (node ? (refMainLabels.current[index] = node) : null)}
              >
                {mainLabel}
              </h1>

              <div style={{ '--left': `${left}px` } as CustomCSS}>
                {subElements.map((subElement, index) => {
                  const subItems = subElement[1] as SubItems[]
                  return (
                    <section key={index}>
                      <h2>{subElement[0]}</h2>
                      <div>
                        {subItems.map((subItem, i) => (
                          <Fragment key={i}>
                            <a href="#">
                              {typeof subItem !== 'string' ? (
                                <div className={styles.subItemGroup}>
                                  <div>{subItem.Logo}</div>

                                  <div>
                                    <h3>{subItem.Label}</h3>
                                    <small>{subItem.Description}</small>
                                  </div>
                                </div>
                              ) : (
                                <small>{subItem}</small>
                              )}
                            </a>
                          </Fragment>
                        ))}
                      </div>

                      <br />
                      {index !== subElements.length - 1 ? <hr /> : null}
                    </section>
                  )
                })}
              </div>
            </div>
          )
        })}
      </nav>
    </header>
  )
}
